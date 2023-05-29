import{_ as t,M as p,p as e,q as c,N as l,Q as n,t as s,a1 as o}from"./framework-49860b1b.js";const i={},u=n("h1",{id:"兄弟选择器-的妙用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#兄弟选择器-的妙用","aria-hidden":"true"},"#"),s(" 兄弟选择器 "),n("code",null,"~"),s(" 的妙用")],-1),k=n("p",null,[s("兄弟选择器 "),n("code",null,"~"),s(" 用来选择同级的元素，但将它和伪类选择器 "),n("code",null,":first-child"),s(),n("code",null,":nth-last-child"),s(" 结合起来用时，可以计算当前同级的元素的个数")],-1),d=o(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">.btns</span> <span class="token punctuation">{</span>
                <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">ul</span> <span class="token punctuation">{</span>
                <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
                <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
                <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">counter-reset</span><span class="token punctuation">:</span> count<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li</span> <span class="token punctuation">{</span>
                <span class="token property">counter-increment</span><span class="token punctuation">:</span> count<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
                <span class="token property">outline-offset</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li::before</span> <span class="token punctuation">{</span>
                <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">counter</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
                <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 一个元素 */</span>
            <span class="token selector">li:only-child</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 二个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(2),
            li:first-child:nth-last-child(2) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li:first-child:nth-last-child(2) + li</span> <span class="token punctuation">{</span>
                <span class="token property">margin-bottom</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 三个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(3),
            li:first-child:nth-last-child(3) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li:first-child:nth-last-child(3)</span><span class="token punctuation">{</span>
                <span class="token property">margin-left</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 四个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(4),
            li:first-child:nth-last-child(4) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 五个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(5),
            li:first-child:nth-last-child(5) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li:first-child:nth-last-child(5)</span> <span class="token punctuation">{</span>
                <span class="token property">margin-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 六个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(6),
            li:first-child:nth-last-child(6) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 七个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(7),
            li:first-child:nth-last-child(7) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li:first-child:nth-last-child(7)</span> <span class="token punctuation">{</span>
                <span class="token property">margin-left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">margin-right</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 八个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(8),
            li:first-child:nth-last-child(8) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">li:first-child:nth-last-child(8)</span> <span class="token punctuation">{</span>
                <span class="token property">margin-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">/* 九个元素 */</span>
            <span class="token selector">li:first-child:nth-last-child(9),
            li:first-child:nth-last-child(9) ~ li</span> <span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>photo-group<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>增加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reduce<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>减少<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">let</span> group <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;photo-group&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> add <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> reduce <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;reduce&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            add<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">let</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                group<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span>
                count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            reduce<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">let</span> last <span class="token operator">=</span> group<span class="token punctuation">.</span>lastElementChild<span class="token punctuation">;</span>
                group<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span><span class="token punctuation">;</span>
                count<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(v,m){const a=p("iframe-load");return e(),c("div",null,[u,k,l(a,{src:"/src/css-tricks/10.html"}),d])}const h=t(i,[["render",r],["__file","10.html.vue"]]);export{h as default};
