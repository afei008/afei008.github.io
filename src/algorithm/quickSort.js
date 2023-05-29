// 大小判断
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0,
};
// 比较函数
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
// 调用函数
function quickSort(array, compareFn = defaultCompare) {
    return quick(array, 0, array.length - 1, compareFn);
}
// 分离函数
function quick(array, left, right, compareFn) {
    // 该变量帮助将子数组分离为较小值数组和较大值数组
    let index;
    if (array.length > 1) {
        // 对给定数组执行 partition 操作，以得到 index
        index = partition(array, left, right, compareFn);
        if (left < index - 1) {
            // 如果数组存在较小值的元素， 则重复该过程
            quick(array, left, index - 1, compareFn);
        }
        if (index < right) {
            // 同上
            quick(array, index, right, compareFn);
        }
    }
    return array;
}
// 划分函数
function partition(array, left, right, compareFn) {
    // 选择中间值作为主元
    const pivot = array[Math.floor((right + left) / 2)];
    // 初始化两个指针，left 为数组第一个元素，right 为数组最后一个元素
    let i = left;
    let j = right;
    while (i <= j) {
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++;
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--;
        }
        // 当左指针指向的元素比主元大，且右指针指向的元素比主元小
        // 并且此时左指针索引没有比右指针索引大时
        if (i <= j) {
            // 交换它们，然后移动两个指针，重复外层循环
            swap(array, i, j);
            i++;
            j++;
        }
    }
    return i;
}
// 交换函数
function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]];
}
