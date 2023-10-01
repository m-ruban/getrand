// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CancelableFunction<T extends (...args: any) => any> {
    (this: unknown, ...args: Parameters<T>): void;
}

interface RateLimitedAction {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends (...args: any[]) => any>(func: T, waitMS: number): CancelableFunction<T>;
}

const throttle: RateLimitedAction = (func, waitMS) => {
    let timeout: null | ReturnType<typeof setTimeout>;
    let savedArgs: null | Parameters<typeof func>;
    let self: unknown;

    const throttled = function throttled(this: unknown, ...args: Parameters<typeof func>) {
        if (timeout) {
            savedArgs = args;
            self = this;
            return;
        }

        func.apply(this, args);

        timeout = setTimeout(() => {
            timeout = null;
            if (savedArgs) {
                throttled.apply(self, savedArgs);
                savedArgs = null;
            }
        }, waitMS);
    };

    return throttled;
};

export default throttle;
