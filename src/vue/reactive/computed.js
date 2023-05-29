import Watcher from './watcher.js'

export default function computed(getter) {
    let def = {}
    const computedWatcher = new Watcher(getter, { computed: true })
    Object.defineProperty(def, 'value', {
        get() {
            // 先让 computedWatcher 收集渲染 watcher 作为自己的依赖
            computedWatcher.depend()
            // 在这次执行用户传入的函数中，又会让响应式的值收集到 computedWatcher
            return computedWatcher.get()
        },
    })
    return def
}
