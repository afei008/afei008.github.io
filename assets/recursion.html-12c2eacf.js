import{_ as n,p as s,q as a,a1 as e}from"./framework-49860b1b.js";const t="/assets/recursion1-70efdd10.png",p="/assets/recursion2-bf8e1d86.png",c={},i=e(`<h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h1><p>一个函数直接或间接地调用自身，视为直接或间接递归</p><p>递归通常需要有边界条件、前进段、返回段，边界条件不满足时，递归前进，满足时，递归返回，递归一般用于解决三类问题：</p><ul><li>数据的定义是按递归定义的（斐波那契数列，n 的阶乘）</li><li>问题解法按递归实现（回溯）</li><li>数据的结构形式按递归定义的（二叉树遍历，图的搜索）</li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点：</h2><ul><li>相对于常用的算法（如普通循环）等，运行效率低，因此尽量避免使用</li><li>除非没有更好的算法或者某种特定情况，递归更为适合的时候</li><li>在递归调用的过程中，系统为每一层的返回点、局部量等开辟了栈来存储</li><li>因此递归次数过多容易造成栈溢出</li></ul><h2 id="普通递归" tabindex="-1"><a class="header-anchor" href="#普通递归" aria-hidden="true">#</a> 普通递归</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+`" alt="图解递归过程"></p><h2 id="尾递归" tabindex="-1"><a class="header-anchor" href="#尾递归" aria-hidden="true">#</a> 尾递归</h2><p>尾递归就是从最后开始计算，每递归一次就算出相应的结果，函数调用出现在函数的尾部，因为是尾部，所以没有必要去保存任何局部变量，直接让被调用的函数返回时越过调用者</p><p>尾递归就是把当前运算结果（或路径）放在参数里传给下层函数，深层函数所面对的是越来越复杂的问题（而不是越来越简单的问题），因为参数里带有前面若干步的运算结果</p><p>尾递归无需向上返回，但是需要引入额外的空间来保持当前的结果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> ret1<span class="token punctuation">,</span> ret2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ret1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">fibonacci2</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> ret2<span class="token punctuation">,</span> ret1 <span class="token operator">+</span> ret2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="图解尾递归过程"></p>',15),o=[i];function l(r,u){return s(),a("div",null,o)}const k=n(c,[["render",l],["__file","recursion.html.vue"]]);export{k as default};