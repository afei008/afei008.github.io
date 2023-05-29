function permutation(str) {
    // 定义存放结果的数组
    let result = [];

    if (str.length <= 1) {
        return [str];
    }

    // 定义第一个字符串为 left
    let left = str[0];
    // 其余部分为 rest
    let rest = str.slice(1, str.length);
    let preResult = permutation(rest);
    // 对 permutation(rest）里的每一个排列进行处理
    // 将 left 插入到每一个位置中，每得到一个排列，便将它 push 到 result 里面去
    for (var i = 0; i < preResult.length; i++) {
        for (var j = 0; j < preResult[i].length + 1; j++) {
            var tmp =
                preResult[i].slice(0, j) +
                left +
                preResult[i].slice(j, preResult[i].length);
            result.push(tmp);
        }
    }

    return result;
}
console.log(permutation('abc'));
