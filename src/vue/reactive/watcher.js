import Dep, { pushTarget, popTarget } from './dep.js'

export default class Watcher {
    constructor(getter, options = {}) {
        const { computed, watch, callback } = options
        this.getter = getter
        this.computed = computed
        this.watch = watch
        this.callback = callback
        this.value = undefined

        if (computed) {
            this.dep = new Dep()
        } else {
            this.get()
        }
    }

    get() {
        pushTarget(this)
        this.value = this.getter()
        popTarget()
        return this.value
    }

    // 仅为 computed 使用
    depend() {
        this.dep.depend()
    }

    update() {
        if (this.computed) {
            this.get()
            this.dep.notify()
        } else if (this.watch) {
            const oldValue = this.value
            this.get()
            this.callback(this.value, oldValue)
        } else {
            this.get()
        }
    }
}
