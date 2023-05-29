function btnFn() {
    // 参考地址：https://segmentfault.com/q/1010000010733839
    if (document.body.createTextRange) {
        // 兼容 ie
        let range = document.body.createTextRange();
        range.moveToElementText(span);
        range.select();
    } else if (window.getSelection) {
        let selection = window.getSelection();
        // 创建一个 range 对象
        let range = document.createRange();
        // 设置 range 对象，使其包含一个 Node 的内容
        range.selectNodeContents(span);
        // 取消所有选择对象
        selection.removeAllRanges();
        // 添加选择对象
        selection.addRange(range);
    } else {
        alert('none');
    }
    // 该方法将被弃用，暂时没有替代品，有个 Clipboard 提案
    document.execCommand('Copy');
}
