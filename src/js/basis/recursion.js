function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci(n, ret1, ret2) {
    if (n == 0) {
        return ret1;
    }
    return fibonacci2(n - 1, ret2, ret1 + ret2);
}
