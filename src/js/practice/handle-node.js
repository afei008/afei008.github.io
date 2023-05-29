let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let target = document.getElementById('target');

btn1.addEventListener('click', btnFn1, false);
btn2.addEventListener('click', btnFn2, false);
btn3.addEventListener('click', btnFn3, false);
btn4.addEventListener('click', btnFn4, false);

function btnFn1() {
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'ul');

    let frag = document.createDocumentFragment();

    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.setAttribute('id', `li-${i}`);
        li.setAttribute('class', `li-${i}`);
        li.innerHTML = i;
        frag.appendChild(li);
    }
    ul.appendChild(frag);
    target.appendChild(ul);
}
function btnFn2() {
    let li3 = document.getElementById('li-2');
    target.firstChild.removeChild(li3);
}
function btnFn3() {
    let oldNode = document.getElementById('li-1');
    let newNode = document.createElement('li');
    newNode.setAttribute('id', 'li-5');
    newNode.setAttribute('class', 'li-5');
    newNode.innerHTML = 5;
    target.firstChild.replaceChild(newNode, oldNode);
}

function btnFn4() {
    let ul = document.getElementsByTagName('ul')[0];
    let node = document.createElement('p');
    let parentNode = ul.firstChild.parentNode;
    let nextSibling = ul.firstChild.nextSibling;
    let previousSibling = ul.firstChild.previousSibling;
    node.innerHTML = `父节点：${
        parentNode != null ? parentNode.getAttribute('id') : ''
    }
                    ---后一个兄弟节点：${
                        nextSibling != null
                            ? nextSibling.getAttribute('id')
                            : '无后一个兄弟节点'
                    }
                    ---前一个兄弟节点：${
                        previousSibling != null
                            ? previousSibling.getAttribute('id')
                            : '无前一个兄弟节点'
                    }`;
    target.appendChild(node);
}
