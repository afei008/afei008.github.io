import{_ as n,p as s,q as a,R as t,a1 as e}from"./framework-49860b1b.js";const p={},c=e(`<h1 id="height-0-到-auto-的动画效果" tabindex="-1"><a class="header-anchor" href="#height-0-到-auto-的动画效果" aria-hidden="true">#</a> height 0 到 auto 的动画效果</h1><p>在以前实现这种效果需要借助 <code>js</code> 的来计算实际高度，现在可完全使用 <code>css</code> 实现，只要浏览器兼容（目前大部分浏览器都已兼容）</p><h2 id="使用-flex" tabindex="-1"><a class="header-anchor" href="#使用-flex" aria-hidden="true">#</a> 使用 flex</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
    <span class="token property">max-height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper:hover .inner</span> <span class="token punctuation">{</span>
    <span class="token property">max-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="wrapper"><div><div class="inner"><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p></div></div></div><h2 id="使用-grid" tabindex="-1"><a class="header-anchor" href="#使用-grid" aria-hidden="true">#</a> 使用 grid</h2><p>推荐使用这种方法。flex 的实现，父元素的高度没有过渡</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.flex</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 0fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.flex:hover</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><div class="grid"><div class="inner"><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p><p>这是一段文本</p></div></div>`,13);function l(i,o){return s(),a("div",null,[t(" @format "),c])}const d=n(p,[["render",l],["__file","1.html.vue"]]);export{d as default};