let ul = document.getElementById('ul');
let frag = document.createDocumentFragment();
let data = [
    { src: 'effect-1/index.html' },
    { src: 'effect-2/index.html' },
    { src: 'effect-3/index.html' },
];

data.forEach(item => {
    let li = document.createElement('li');

    let iframe = document.createElement('iframe');
    iframe.src = item.src;
    iframe.title = 'iframe';
    iframe.scrolling = 'no';
    iframe.width = item.width || '500px';
    iframe.height = item.height || '500px';
    li.appendChild(iframe);

    let a = document.createElement('a');
    a.href = item.src;
    a.textContent = '全屏预览';
    a.target = '_blank';
    li.appendChild(a);

    frag.append(li);
});
ul.appendChild(frag);
