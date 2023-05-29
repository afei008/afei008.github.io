import Dep from './dep.js'

function isObject(val) {
    return val !== null && typeof val === 'object'
}

// 将对象定义为响应式
export default function reactive(data) {
    if (isObject(data)) {
        Object.keys(data).forEach(key => {
            defineReactive(data, key)
        })
    }
    return data
}

function defineReactive(data, key) {
    let val = data[key]

    // 收集依赖
    const dep = new Dep()
    Object.defineProperty(data, key, {
        get() {
            dep.depend()
            return val
        },
        set(newVal) {
            val = newVal
            dep.notify()
        },
    })

    if (isObject(val)) {
        reactive(val)
    }
}
