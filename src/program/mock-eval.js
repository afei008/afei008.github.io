let obj = {
    a: 123,
};
function moniEval(fn) {
    let Fn = Function;
    return new Fn('return ' + fn)();
}
console.log(moniEval('obj.a'));
