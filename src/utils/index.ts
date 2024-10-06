export function debouncedSearch<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timer: NodeJS.Timeout | null = null;

    return function (this: any, ...args: Parameters<T>) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}
