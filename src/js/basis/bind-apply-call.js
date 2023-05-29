Function.prototype.myBind = function () {
    let _this = this;
    let _thisArg = arguments[0];
    let args = Array.prototype.slice.call(arguments, 1);
    return function () {
        // 连接 bind 函数参数与被 bind 函数参数
        let funcArgs = args.concat(Array.prototype.slice.call(arguments));
        // 通过 apply 修改 this 指向，同时返回结果
        return _this.apply(_thisArg, funcArgs);
    };
};

Function.prototype.myBind = function () {
    if (typeof this !== 'function') {
        throw new TypeError(this + ' must be a function');
    }
    let _this = this;
    let _thisArg = arguments[0];
    let args = Array.prototype.slice.call(arguments, 1);
    let bound = function () {
        // bind 返回的函数的参数转成数组
        let boundArgs = Array.prototype.slice.call(arguments);
        // 连接 bind 函数返回参数与被 bind 函数参数
        let funcArgs = args.concat(boundArgs);
        // new 调用时（此处使用 this instanceof bound 不是很准确，new.target 就是解决这个问题的）
        if (this instanceof bound) {
            // 实现 1、2、4 步
            // _this 可能是箭头函数，箭头函数没有 prototype，所以不需要做指向操作
            if (_this.prototype) {
                function fn() {}
                fn.prototype = _this.prototype;
                bound.prototype = new fn();
            }
            // 实现 3 步
            let result = _this.apply(this, funcArgs);
            // 实现 5 步
            let isObject = typeof result === 'object' && result !== null;
            let isFunction = typeof result === 'function';
            if (isObject || isFunction) {
                return result;
            }
            return this;
        } else {
            return _this.apply(_thisArg, funcArgs);
        }
    };
    // Object.defineProperties 实现 Function.name 和 Function.length
    Object.defineProperties(bound, {
        name: {
            value: 'bound ' + _this.name,
        },
        length: {
            value: _this.length,
        },
    });
    return bound;
};

var $Array = Array;
var ArrayPrototype = $Array.prototype;
var $Object = Object;
var array_push = ArrayPrototype.push;
var array_slice = ArrayPrototype.slice;
var array_join = ArrayPrototype.join;
var array_concat = ArrayPrototype.concat;
var $Function = Function;
var FunctionPrototype = $Function.prototype;
var apply = FunctionPrototype.apply;
var max = Math.max;
// 简版，源码更复杂
var isCallable = function isCallable(value) {
    if (typeof value !== 'function') {
        return false;
    }
    return true;
};
var Empty = function Empty() {};
// 源码使用的是 defineProperties，此处直接使用 prototype
FunctionPrototype.bind3 = function bind(that) {
    var target = this;
    if (!isCallable(target)) {
        throw new TypeError(
            'Function.prototype.bind called on incompatible ' + target
        );
    }
    var args = array_slice.call(arguments, 1);
    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = apply.call(
                target,
                this,
                array_concat(args, array_slice.call(arguments))
            );
            if ($Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return apply.call(
                target,
                that,
                array_concat.call(args, array_slice.call(arguments))
            );
        }
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        array_push.call(boundArgs, '$' + i);
    }
    // 使用 Function 构造方式动态生成形参 length $1，$2，$3...
    bound = $Function(
        'binder',
        'return function (' +
            array_join.call(boundargs, ',') +
            '){return binder.apply(this, arguments); }'
    )(binder);
    if (target.prototype) {
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
