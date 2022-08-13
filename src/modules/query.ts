export const param2str = (key: string, value: undefined | string | string[]): string => {
    if (Array.isArray(value)) {
        return value.map((item) => `${key}[]=${item}`).join('&');
    }
    if (typeof value === 'string') {
        return `${key}[]=${value}`;
    }
    return '';
};
