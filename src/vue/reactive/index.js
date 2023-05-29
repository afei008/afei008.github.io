import reactive from './reactive.js'
import Watcher from './watcher.js'
import computed from './computed.js'
import watch from './watch.js'

const data = reactive({
    msg: 'Hello World',
    number: 1,
})

new watch(
    () => data.msg,
    (nv, ov) => {
        console.log('nv', nv)
        console.log('ov', ov)
    }
)
new Watcher(() => {
    document.getElementById('app').innerHTML = `
    <p>当前data的状态是：${JSON.stringify(data)}</p>
    <p>请在控制台输入data，分别改变data.msg尝试效果</p>
    <p>msg is ${data.msg}</p>`
})

const numberPlusOne = computed(() => data.number + 1)
new Watcher(() => {
    document.getElementById('app2').innerHTML = `computed: 1 + number 是 ${numberPlusOne.value}`
})
window.data = data