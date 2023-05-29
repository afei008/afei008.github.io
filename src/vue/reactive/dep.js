export default class Dep {
    constructor() {
        this.deps = new Set()
    }

    depend() {
        if (Dep.target) {
            this.deps.add(Dep.target)
        }
    }

    notify() {
        this.deps.forEach(watch => watch.update())
    }
}

// 正在运行的 watcher，一定是一个 Watcher 的实例
Dep.target = null

// watcher 栈
const targetStack = []

// 将上一个 watcher 推到栈里，更新 Dep.target 为传入的 _target 变量
export function pushTarget(_target) {
    if (Dep.target) {
        targetStack.push(Dep.target)
    }
    Dep.target = _target
}

// 取回上一个 watcher 作为Dep.target，并且栈里要弹出上一个 watcher
export function popTarget() {
    Dep.target = targetStack.pop()
}
