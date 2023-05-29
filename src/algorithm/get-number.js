function calsum(arr, sum) {
    for (let i = 0, j = arr.length - 1; i < j; ) {
        if (arr[i] + arr[j] < sum) {
            i++;
        } else if (arr[i] + arr[j] > sum) {
            j--;
        } else {
            console.log([arr[i], arr[j]]);
            return;
        }
        if (i == j) {
            console.log('not found');
            return;
        }
    }
}

function calsum2(array, result) {
    for (let i = 1; i < 1 << array.length; i++) {
        let sum = 0;
        let temp = '';
        for (let j = 0; j < array.length; j++) {
            // 用 i 与 2^j 进行位与运算
            // 若结果不为 0，则表示第 j 位不为 0，从数组中取出第 j 个数
            if ((i & (1 << j)) != 0) {
                sum += array[j];
                temp += array[j] + '+';
            }
        }
        if (sum == result) {
            let t = temp.split('+');
            let p = [];
            for (let j = 0; j < t.length; j++) {
                if (t[j] != '') {
                    p.push(t[j]);
                }
            }
            console.log(p);
        }
    }
}

function calsum3(array, sum) {
    if (array.length <= 0) {
        return;
    }
    if (array[0] > sum) {
        return;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == sum) {
            result.push(array[i]);
        }
        let array2 = array.slice(i + 1);
        for (let j = 0; j < array2.length; j++) {
            if (array[i] + array2[j] == sum) {
                result.push([array[i], array2[j]]);
            }
            if (array[i] + array2[j] < sum) {
                let target = calsum3(array2.slice(j + 1), sum - array[i] - array2[j]);
                if (target != undefined) {
                    result.push([array[i], array2[j], target]);
                }
            }
        }
    }
    return result;
}

function calsum4(len, sum, result, arr) {
    let temp = '';
    printNum(len, sum, result, arr);
    function printNum(len, sum, result, arr) {
        if (len < 0) {
            return;
        }
        if (sum === 0) {
            temp += result + '+';
        }
        result.push(arr[len - 1]);
        printNum(len - 1, sum - arr[len - 1], result, arr);
        result.pop();
        printNum(len - 1, sum, result, arr);
    }
    let t = temp.split('+');
    let p = new Set();
    for (let j = 0; j < t.length; j++) {
        if (t[j] != '') {
            p.add(t[j]);
        }
    }
    return Array.from(p);
}