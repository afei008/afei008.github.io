// 原生实现 Promise

// Promise 的基础用法如下
let promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('success');
    } else {
        reject('error');
    }
});

// 其中有 resolve 和 reject 这两个回调函数，因此需满足这个基本条件
function CustomPromise(config) {
    // 初始状态
    this.status = 'pending';
    this.res = '';
    let resolve = data => {
        this.status = 'fulfilled';
        this.res = data;
    };
    let rejetc = data => {
        this.status = 'rejected';
        this.res = data;
    };
    config(resolve, rejetc);
}

// then 和 cache 方法的实现，主要实现链式调用
CustomPromise.prototype.then = function (config) {
    let res = '';
    if (this.status === 'fulfilled') {
        res = config(this.res);
    }
    // 判断 then 方法下是否返回了一个新的 Promise 对象
    // 如果是则返回新的 Promise，否则返回 this
    return res || this;
};
CustomPromise.prototype.catch = function (config) {
    let res = '';
    if (this.status === 'rejected') {
        res = config(this.res);
    }
    return res || this;
};

let p1 = new CustomPromise((resolve, reject) => {
    resolve(1);
});
p1.then(res => {
    console.log(res);
    return Promise.resolve(2);
}).then(res => {
    console.log(res);
});

// 解决异步问题
// 在 then 方法中，如果当前状态为 pending，则把当前的回调函数保存下来
// 因为可能是多个 then，因此采用数组保存，在定时器结束后使用
// 当前 Promise 状态改变的时候就是定时器结束的时候
// 修改代码如下
function CustomPromise(config) {
    this.status = 'pending';
    this.res = '';
    this.saveResolve = [];
    this.saveReject = [];
    let resolve = data => {
        if (this.status == 'pending') {
            this.status = 'fulfilled';
            this.res = data;
            // 执行保存起来的回调函数
            this.saveResolve.forEach(val => {
                val(this.res);
            });
        }
    };
    let reject = data => {
        if (this.status == 'pending') {
            this.status = 'rejected';
            this.res = data;
            this.saveReject.forEach(val => {
                val(this.res);
            });
        }
    };
    config(resolve, reject);
}
CustomPromise.prototype.then = function (config) {
    let res = '';
    if (this.status == 'pending') {
        this.saveResolve.push(config);
    }
    if (this.status == 'fulfilled') {
        res = config(this.res);
    }
    return res || this;
};
CustomPromise.prototype.catch = function (config) {
    let res = '';
    if (this.status == 'pending') {
        this.saveReject.push(config);
    }
    if (this.status == 'rejected') {
        res = config(this.res);
    }
    return res || this;
};
let p2 = new CustomPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 resolve');
    }, 1000);
});
p2.then(res => {
    console.log(res);
}).then(res => {
    setTimeout(() => {
        console.log(3);
    }, 1000);
});

// all 和 race 方法
// 此处仅考虑参数数组里面的都是 promise 对象
CustomPromise.all = function (arr) {
    let result = [];
    // 计算 then 方法的调用次数
    let count = 0;
    let promise = new CustomPromise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i]
                .then(res => {
                    result.push(res);
                    count++;
                    // 当计数器等于数组长度时，说明所有 promise 全部 fulfilled
                    if (count === arr.length) {
                        resolve(result);
                    }
                })
                .catch(err => reject(err));
        }
    });
    return promise;
};
CustomPromise.race = function (arr) {
    let promise = new CustomPromise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(res => resolve(res)).catch(err => reject(err));
        }
    });
};
