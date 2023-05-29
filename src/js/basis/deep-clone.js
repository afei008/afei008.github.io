// 现解决该问题的办法为 eval 函数
function copyFunction(func) {
    let fnStr = func.toString();
    if (fnStr === `function ${func.name}(){[native code]}`) {
        return func;
    }
    // 有 prototype 为普通函数，没有则为箭头函数
    return func.prototype ? eval(`(${fnStr})`) : eval(fnStr);
}

function deepCopy(obj, cache = []) {
    if (typeof obj === 'function') {
        return copyFunction(obj);
    }

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // 解决特殊值
    // 判断类型，重新 new 一个返回，其他特殊类型未写进来，如 Set、Map
    if (Object.prototype.toString.call(obj) === '[object Data]') {
        return new Data(obj);
    }
    if (Object.prototype.toString.call(obj) === '[object RegExp]') {
        return new RegExp(obj);
    }
    if (Object.prototype.toString.call(obj) === '[object Error]') {
        return new Error(obj);
    }

    // 解决循环引用
    // 将对象，对象属性存储在数组中，下次遍历时有无已经遍历过的对象，有则直接返回，无则继续遍历
    const item = cache.filter(item => item.original === obj)[0];
    if (item) {
        return item.copy;
    }
    let copy = Array.isArray(obj) ? [] : {};
    cache.push({
        original: obj,
        copy,
    });
    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
}
