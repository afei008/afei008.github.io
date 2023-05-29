// 顺序搜索
function defaultEquals(a, b) {
    return a === b;
}
const DOES_NOT_EXIST = -1;
function sequentialSeearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i;
        }
    }
    return DOES_NOT_EXIST;
}

// 二分搜索
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0,
};
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
function quickSort(array) {}
function binarySearch(array, value, compareFn = defaultCompare) {
    // 选择一个排序算法对数组进行排序
    const sortedArray = quickSort(array);
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1;
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

// 内插搜索：改良版的二分搜索，根据要搜索的值检查数组中不同地方
function interpolationSearch(
    array,
    value,
    compareFn = defaultCompare,
    equalsFn = defaultEquals,
    diffFn = defaultDiff
) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;
    while (
        low <= high &&
        biggerEquals(value, array[low], compareFn) &&
        lesserEquals(value, array[high], compareFn)
    ) {
        // 如果要查找的值，更接近 array[high]，则查找 position 位置旁更大的值，反之亦然
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
        position = low + Math.floor((high - low) * delta);
        // 如果找到了，则返回索引
        if (equalsFn(array[position], value)) {
            return position;
        }
        // 如果待搜索值小于当前位置的值
        // 则使用左边或右边的子数组重复这段逻辑
        if (compareFn(array[position], value) === Compare.LESS_THAN) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }
    return DOES_NOT_EXIST;
}
function lesserEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}
function biggerEquals(a, b, compareFn) {
    const comp = compareFn(a, b);
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}
function defaultDiff(a, b) {
    return Number(a) - Number(b);
}
