let amount = 100
let body = document.querySelector('.body')
let frag = document.createDocumentFragment()

for (let i = 0; i < amount; i++) {
    let el = document.createElement('i')

    let width = Math.random() * 5
    let left = Math.floor(Math.random() * window.innerWidth)
    let delay = Math.random() * -20
    let duration = Math.random() * 5

    el.style.width = `${0.2 + width}px`
    el.style.left = left + 'px'
    el.style.animationDelay = `${delay}s`
    el.style.animationDuration = `${duration}s`
    frag.appendChild(el)
}

body.appendChild(frag)
