var singleNumber = function (nums) {
    let x;
    for (let i = 0; i < nums.length; i++) {
        x ^= nums[i];
    }
    return x;
};

function find_num(arr) {
    //  记录数组所有值的异或结果
    let ret = 0;
    //  记录 ret 二进制中第一个为 1 的位置
    let pos = 0;
    //  记录分组后异或结果的输出
    let x = 0;
    let y = 0;
    //  获取所有值异或结果
    for (let i = 0; i < arr.length; i++) {
        ret ^= arr[i];
    }
    //  找到 ret 二进制中第一个为 1 的位置
    for (let i = 0; i < 32; i++) {
        //  将 ret 进行右移 i 位，然后和 1 进行与运算
        //  &：按位与运算，每一个比特位，两个位置都为 1，结果为 1，反之为 0
        if (1 === ((ret >> i) & 1)) {
            pos = i;
            break;
        }
    }
    //  对源数组进行分组输出异或结果
    for (let i = 0; i < arr.length; i++) {
        //  将数组每一项进行 pos 位的右移操作，然后和 1 进行与运算
        if (1 === ((arr[i] >> pos) & 1)) {
            x ^= arr[i];
        } else {
            y ^= arr[i];
        }
    }
    return [x, y];
}

function searchNum(arr) {
    let obj = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    for (let prop in obj) {
        if (obj[prop] === 1) {
            result.push(prop);
        }
    }
    return result;
}

function searchNum2(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function findNum(arr) {
    const length = arr.length;
    let m = [];
    let result = [];
    let num = 0;
    for (let i = 0; i < 32; i++) {
        for (let j = 0; j < length; j++) {
            let bit = arr[j] & 1;
            if (!m[i]) {
                m[i] = [];
            }
            m[i] = Number(m[i]) + bit;
            arr[j] >>= 1;
        }
    }
    console.log(m);
    for (let i = 0; i < 32; i++) {
        if (m[i] % 3 != 0) {
            result.push(i);
            num += 1 << (i & 0x1f);
        }
    }
    for (let i = 0; i < result.length; i++) {
        num += result[i] << 1;
    }
    if (result[0] === 0) {
        num += 1;
    }
    return num;
}
console.log(findNum([4, 4, 4, 5, 5, 5, 9]));
