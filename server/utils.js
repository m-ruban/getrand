import fetcher from 'server/fetcher';

export const isTransient = (error) => {
    if (['ECONNABORTED', 'ECONNRESET', 'ETIMEDOUT'].includes(String(error.code))) {
        return true;
    }
    const status = error.response && error.response.status;
    return status === 429 || status >= 500;
};

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getWithRetry(url, retries = 3, baseMs = 300, onError = () => {}) {
    for (let attempt = 1; ; attempt++) {
        try {
            return await fetcher.get(url);
        } catch (error) {
            if (!isTransient(error) || attempt > retries) {
                onError();
                throw error;
            }
            await delay(baseMs * 2 ** (attempt - 1));
        }
    }
}
