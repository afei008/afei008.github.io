let container = document.querySelector('.container')
let textBox = document.querySelector('.text-box')
let items = document.querySelectorAll('.options .item')

textBox.onclick = () => {
    container.classList.toggle('active')
}

function itemsUnactive() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active')
    }
}

function itemActive(item) {
    itemsUnactive()
    textBox.value = item.textContent
    item.classList.add('active')
}

for (let i = 0; i < items.length; i++) {
    items[i].onclick = e => itemActive(e.target)
}

function isParent(obj, parentObj) {
    while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY') {
        if (obj == parentObj) {
            return true
        }
        obj = obj.parentNode
    }
    return false
}
document.addEventListener('click', e => {
    if (!isParent(e.target, container)) {
        container.classList.remove('active')
    }
})
