import{_ as e,M as t,p as i,q as l,Q as n,t as s,N as o,V as c,a1 as p}from"./framework-49860b1b.js";const u={},r=n("h1",{id:"this",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#this","aria-hidden":"true"},"#"),s(" this")],-1),d=n("p",null,"当一个函数被调用时，会创建一个活动记录（执行上下文），该记录会包含一些信息（调用栈、调用方法、传入的参数等），this 就是该记录中的一个属性",-1),h=n("ul",null,[n("li",null,"在全局执行上下文中，this 指向全局对象"),n("li",null,"在函数执行上下文中，this 取决于函数的调用方式，如果该函数被一个引用对象调用，则指向该对象")],-1),k=n("h2",{id:"改变-this-指向",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#改变-this-指向","aria-hidden":"true"},"#"),s(" 改变 this 指向")],-1),v=p(`<h2 id="箭头函数的-this" tabindex="-1"><a class="header-anchor" href="#箭头函数的-this" aria-hidden="true">#</a> 箭头函数的 this</h2><ul><li>箭头函数自身没有 this，它的 this 是继承父执行上下文里面的 this，可以理解为定义时的 this</li><li>箭头函数没有 prototype</li><li>无法改变箭头函数的 this</li></ul><h2 id="调用栈" tabindex="-1"><a class="header-anchor" href="#调用栈" aria-hidden="true">#</a> 调用栈</h2><p>js 是单线程语言，所以只有一个调用栈，因此同一时间只能做一件事</p><ul><li>内存堆：内存分配发生的地方</li><li>调用栈：代码执行的地方</li></ul><p>定义：调用栈是解释器追踪函数执行流的一种机制。当执行环境中调用了多个函数时,通过这种机制,我们能够追踪到哪个函数正在执行，执行的函数体中又调用了哪个函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>hello 函数被调用，将 hello 添加进调用栈表</li><li>执行 hello 中的所有代码</li><li>直到执行 hi，将 hi 添加进调用栈</li><li>执行 hi 的所有代码，直到执行完毕</li><li>删除调用栈中的 hi</li><li>继续执行 hello 后面的代码，直到执行完毕</li><li>删除调用栈中的 hello</li></ul>`,8);function _(m,b){const a=t("RouterLink");return i(),l("div",null,[r,d,h,k,n("p",null,[s("详见"),o(a,{to:"/js/basis/bind-apply-call.html"},{default:c(()=>[s("bind、apply、call 的区别")]),_:1})]),v])}const x=e(u,[["render",_],["__file","1.html.vue"]]);export{x as default};