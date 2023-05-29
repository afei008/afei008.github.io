import{_ as a,M as t,p,q as e,N as o,Q as n,t as c,a1 as l}from"./framework-49860b1b.js";const i={},u=n("h1",{id:"使用伪元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用伪元素","aria-hidden":"true"},"#"),c(" 使用伪元素")],-1),r=n("p",null,"伪元素不算什么技巧了，善于使用伪元素能减少页面的标签嵌套，配合投影效果，能实现一些常规的图形",-1),k=l(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- @format --&gt;</span>

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>the-shapes-of-css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">body</span><span class="token punctuation">{</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.heart</span> <span class="token punctuation">{</span>
                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.heart::before,
            .heart::after</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 50px 0 0<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.heart::after</span> <span class="token punctuation">{</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">.infinity</span> <span class="token punctuation">{</span>
                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 212px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.infinity::before,
            .infinity::after</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> 20px solid red<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 50px 0 50px<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.infinity::after</span> <span class="token punctuation">{</span>
                <span class="token property">left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50px 50px 50px 0<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">.egg</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 125px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50% 50% 50% 50% / 60% 60% 40% 40%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">.pacman</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> 60px solid red<span class="token punctuation">;</span>
                <span class="token property">border-right-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">.rss</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 20em<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 20em<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.rss::before</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
                <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 11.5em<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 3.5em<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.rss::after</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 13em<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 13em<span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> -2em<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 3.8em<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 2.5em<span class="token punctuation">;</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> -2em 2em 0 0 #fff inset<span class="token punctuation">,</span> -4em 4em 0 0 red inset<span class="token punctuation">,</span>
                    -6em 6em 0 0 #fff inset<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">.taiji</span> <span class="token punctuation">{</span>
                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 96px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
                <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
                <span class="token property">border-width</span><span class="token punctuation">:</span> 2px 2px 50px 2px<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.taiji::before</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> gray<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> 18px solid red<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.taiji::after</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> 18px solid gray<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token selector">.moon</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">box-shadow</span><span class="token punctuation">:</span> 15px 15px 0 0 red<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>heart<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>infinity<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>egg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pacman<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>taiji<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const s=t("iframe-load");return p(),e("div",null,[u,r,o(s,{src:"/src/css-tricks/11.html"}),k])}const g=a(i,[["render",d],["__file","11.html.vue"]]);export{g as default};
