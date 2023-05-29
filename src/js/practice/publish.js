// 简单版
var publishObj = {
    clientList: [],
    listen(key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger() {
        let key = Array.prototype.shift.call(arguments);
        let fns = this.clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (let i = 0; i < fns.length; i++) {
            let fn = fns[i];
            fn.apply(this, arguments);
        }
    },
};
publishObj.listen('aaa', data => {
    console.log(data);
});
publishObj.listen('bbb', data => {
    console.log(data);
});
publishObj.trigger('aaa', 'this is aaa');
publishObj.trigger('bbb', 'this is bbb');

// 通用版
class Publish {
    constructor() {
        this.clientList = [];
    }
    listen(key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    }
    trigger() {
        let key = Array.prototype.shift.call(arguments);
        let fns = this.clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (let i = 0, fn = fns[i]; i < fns.length; i++) {
            fn.apply(this, arguments);
        }
    }
    remove(key, fn) {
        let fns = this.clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            this.clientList[key] = [];
        } else {
            for (let i = fns.length - 1; i >= 0; i--) {
                let _fn = fns[i];
                if (_fn === fn) {
                    fns.splice(i, 1);
                }
            }
        }
    }
}
var publishObj = new Publish();
let fn1;
publishObj.listen(
    'aaa',
    (fn1 = data => {
        console.log(data);
    })
);
let fn2;
publishObj.listen(
    'bbb',
    (fn2 = data => {
        console.log(data);
    })
);
publishObj.trigger('aaa', 'this is aaa 2');
publishObj.trigger('bbb', 'this is bbb 2');
publishObj.remove('aaa', fn1);
publishObj.trigger('aaa', 'this is aaa 3');
publishObj.trigger('bbb', 'this is bbb 3');

// 带命名空间版
class PublishNamespace {
    constructor() {
        this.default = 'default';
        this.namespaceCache = {};
    }
    create(namespace = this.default) {
        let cache = {};
        let offlineStack = [];
        let ret = {
            listen: (key, fn, last) => {
                this._listen(key, fn, cache);
                if (offlineStack === null) {
                    return;
                }
                if (last === 'last') {
                    offlineStack.length && offlineStack.pop()();
                } else {
                    this.each(offlineStack, function () {
                        this();
                    });
                }
                offlineStack = null;
            },
            one: (key, fn, last) => {
                this._remove(key, cache);
                this.listen(key, fn, last);
            },
            remove: (key, fn) => {
                this._remove(key, cache, fn);
            },
            trigger: (...rest) => {
                let fn, args;
                Array.prototype.unshift.call(rest, cache);
                args = rest;
                fn = () => {
                    return this._trigger.apply(this, args);
                };
                if (offlineStack) {
                    return offlineStack.push(fn);
                }
                return fn();
            },
        };
        if (namespace) {
            if (this.namespaceCache[namespace]) {
                return this.namespaceCache[namespace];
            } else {
                return (this.namespaceCache[namespace] = ret);
            }
        } else {
            return ret;
        }
    }
    one(key, fn, last) {
        let event = this.create();
        event.one(key, fn, last);
    }
    remove(key, fn) {
        let event = this.create();
        event.remove(key, fn);
    }
    listen(key, fn, last) {
        let event = this.create();
        event.listen(key, fn, last);
    }
    trigger() {
        let event = this.create();
        event.trigger.apply(this, arguments);
    }
    each(ary, fn) {
        let ret;
        for (let i = 0; i < ary.length; i++) {
            let n = ary[i];
            ret = fn.call(n, i, n);
        }
        return ret;
    }
    _listen(key, fn, cache) {
        if (!cache[key]) {
            cache[key] = [];
        }
        cache[key].push(fn);
    }
    _remove(key, cache, fn) {
        if (cache[key]) {
            if (fn) {
                for (let i = cache[key].length; i >= 0; i--) {
                    if (cache[key] === fn) {
                        cache[key].splice(i, 1);
                    }
                }
            } else {
                cache[key] = [];
            }
        }
    }
    _trigger() {
        let cache = Array.prototype.shift.call(arguments);
        let key = Array.prototype.shift.call(arguments);
        let args = arguments;
        let stack = cache[key];
        if (!stack || !stack.length) {
            return;
        }
        let that = this;
        return this.each(stack, function () {
            return this.apply(that, args);
        });
    }
}
