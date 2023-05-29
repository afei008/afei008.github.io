const throttle = (func, wait) => {
    let timer;
    return () => {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            func();
            timer = null;
        }, wait);
    };
};

const debounce = (func, wait) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    };
};
