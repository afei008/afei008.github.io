import{_ as e,p as i,q as a,a1 as s}from"./framework-49860b1b.js";const r={},l=s('<h1 id="浏览器渲染" tabindex="-1"><a class="header-anchor" href="#浏览器渲染" aria-hidden="true">#</a> 浏览器渲染</h1><p>浏览器内核分为：渲染引擎、js 引擎</p><h2 id="页面加载过程" tabindex="-1"><a class="header-anchor" href="#页面加载过程" aria-hidden="true">#</a> 页面加载过程</h2><ul><li>浏览器根据 dns 服务器得到域名的 ip 地址</li><li>向这个 ip 的机器发送 http 请求</li><li>服务器收到、处理并返回 http 请求</li><li>浏览器得到返回内容</li></ul><h2 id="浏览器渲染过程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染过程" aria-hidden="true">#</a> 浏览器渲染过程</h2><ul><li><p>解析</p><ul><li>解析 html/svg/xhtml，生成 dom 树</li><li>解析 css，生成 css 规则树</li><li>运行 js，js 加载完成后，通过 api 来操作 dom 树和 css 规则树</li></ul></li><li><p>构建</p><p>解析完成后，通过 dom 树和 css 规则树来构建渲染树（rendering tree），渲染树只会包含需要显示的节点和样式信息，如某个节点是 <code>display:none</code>，则不会包含在渲染树中</p></li><li><p>布局</p><p>根据渲染树来进行布局（也可以叫做回流），该阶段浏览器要做的事情是弄清楚各个节点在页面中的确切位置和大小，该行为通常也被成为“自动重排”</p></li><li><p>绘制</p><p>布局完成后、浏览器调用操作系统原生 api 绘制</p></li></ul><p>渲染过程中，如果遇到 js，则停止渲染，把控制权交给 js 引擎，等 js 引擎运行完毕，再从中断的地方恢复 dom 构建</p><p>因为浏览器渲染是单线程，渲染引擎与 js 引擎共用一个线程</p><p>如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟脚本执行和 dom 构建，直至其完成 CSSOM 的下载和构建。</p><p>也就是说，在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 js，最后再继续构建 dom 。</p><h2 id="重绘-repaint" tabindex="-1"><a class="header-anchor" href="#重绘-repaint" aria-hidden="true">#</a> 重绘（repaint）</h2><p>对 dom 的修改导致了样式的变化、却未影响其几何属性时，浏览器不需要重新计算几何属性，直接为该元素绘制新的样式</p><h2 id="回流-reflow-也叫重排" tabindex="-1"><a class="header-anchor" href="#回流-reflow-也叫重排" aria-hidden="true">#</a> 回流（reflow，也叫重排）</h2><p>影响了几何属性变化</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><ul><li>浏览器工作流程：构建 dom -&gt; 构建 cssom -&gt; 构建渲染树 -&gt; 布局 -&gt; 绘制</li><li>cssom 会阻塞渲染，只有当 cssom 构建完毕后才会进入下一个阶段构建渲染树</li><li>通常情况下 dom 和 cssom 是并行构建的，但是当浏览器遇到一个不带 defer 或 async 属性的 script 标签时，dom 构建将暂停，如果此时又恰巧浏览器尚未完成 cssom 下载和构建，由于 js 可以修改 cssom，所以需要等待 cssom 构建完毕后再执行 js，最后才重新构建 dom</li></ul>',16),d=[l];function o(t,h){return i(),a("div",null,d)}const p=e(r,[["render",o],["__file","browser-rendering.html.vue"]]);export{p as default};
