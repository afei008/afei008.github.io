import{_ as a,M as t,p,q as c,N as e,Q as n,t as o,a1 as l}from"./framework-49860b1b.js";const i={},u=n("h1",{id:"头像悬停花式效果",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#头像悬停花式效果","aria-hidden":"true"},"#"),o(" 头像悬停花式效果")],-1),k=l(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- @format --&gt;</span>

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
                <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
                <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
                <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #e0e4cc<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">img</span> <span class="token punctuation">{</span>
                <span class="token property">--s</span><span class="token punctuation">:</span> 280px<span class="token punctuation">;</span> <span class="token comment">/* 图片尺寸 */</span>
                <span class="token property">--b</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span> <span class="token comment">/* 边框尺寸 */</span>
                <span class="token property">--c</span><span class="token punctuation">:</span> #e03770<span class="token punctuation">;</span> <span class="token comment">/* 边框演示 */</span>
                <span class="token property">--f</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token comment">/* 初始缩放比例 */</span>

                <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--s<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">aspect-ratio</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
                <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>

                <span class="token comment">/* 定义反向缩放变量，content-box 用于确保背景不会超出内容 */</span>
                <span class="token property">--g</span><span class="token punctuation">:</span> 50% / <span class="token function">calc</span><span class="token punctuation">(</span>100% / <span class="token function">var</span><span class="token punctuation">(</span>--f<span class="token punctuation">)</span><span class="token punctuation">)</span> 100% no-repeat content-box<span class="token punctuation">;</span>
                <span class="token property">--o</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token punctuation">(</span>1 / <span class="token function">var</span><span class="token punctuation">(</span>--f<span class="token punctuation">)</span> - 1<span class="token punctuation">)</span> * <span class="token function">var</span><span class="token punctuation">(</span>--s<span class="token punctuation">)</span> / 2 - <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">/* 使用径向渐变生成背景圆及边框 */</span>
                <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
                        circle closest-side<span class="token punctuation">,</span>
                        #01b1af <span class="token function">calc</span><span class="token punctuation">(</span>99% - <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token function">var</span><span class="token punctuation">(</span>--c<span class="token punctuation">)</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span><span class="token punctuation">)</span> 99%<span class="token punctuation">,</span>
                        #0000
                    <span class="token punctuation">)</span>
                    <span class="token comment">/* 该变量用于将背景圆圈进行反向缩放 */</span>
                    <span class="token function">var</span><span class="token punctuation">(</span>--g<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">/* 通过 outline 创建一个边框，将其与背景圆重叠 */</span>
                <span class="token comment">/* outline 可以调整定位，而 border 无法调整，因此不使用 border */</span>
                <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 0 999px 999px<span class="token punctuation">;</span>
                <span class="token property">outline</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">/* 需要将 outline 反向缩放以贴合背景圆 */</span>
                <span class="token property">outline-offset</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--o<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">/* 添加顶部填充，只要确保轮廓不会触及图片顶部即可，否则图片会被裁剪 */</span>
                <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--s<span class="token punctuation">)</span> / 5<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">/* mask 在此处作为最终的一步 */</span>
                <span class="token comment">/* 这里是一个简单的数学计算，但是代码写起来真是复杂 */</span>
                
                <span class="token comment">/* 
                    linear-gradient 用于创建上面的矩形部分

                    宽度，等于背景圆的宽度减去边框厚度的两倍
                    同时要将 outline 进行偏移，得到代码为：
                    calc(100% / var(--f) - 2 * var(--b) - 2px)

                    高度，等于元素大小的一半，因此为 50%

                    mask 的定位是先水平再垂直
                    水平定位，50%
                    垂直定位，从顶部偏移与 outline 偏移的值相同
                            但由于 outline 由外移动到内是需要负值，
                            而 mask 正值才是往下移动，因此需要一个 1px 去减，得到代码为：
                            calc(1px - var(--o))
                /* 
                    radial-gradient 用于创建下面的圆形部分

                */</span>
                <span class="token property">-webkit-mask</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#000 0 0<span class="token punctuation">)</span> no-repeat 50%
                        <span class="token function">calc</span><span class="token punctuation">(</span>1px - <span class="token function">var</span><span class="token punctuation">(</span>--o<span class="token punctuation">)</span><span class="token punctuation">)</span> /
                        <span class="token function">calc</span><span class="token punctuation">(</span>100% / <span class="token function">var</span><span class="token punctuation">(</span>--f<span class="token punctuation">)</span> - 2 * <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span> - 2px<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle closest-side<span class="token punctuation">,</span> #000 99%<span class="token punctuation">,</span> #0000<span class="token punctuation">)</span>
                        <span class="token function">var</span><span class="token punctuation">(</span>--g<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">mask</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>#000 0 0<span class="token punctuation">)</span> no-repeat 50%
                        <span class="token function">calc</span><span class="token punctuation">(</span>1px - <span class="token function">var</span><span class="token punctuation">(</span>--o<span class="token punctuation">)</span><span class="token punctuation">)</span> /
                        <span class="token function">calc</span><span class="token punctuation">(</span>100% / <span class="token function">var</span><span class="token punctuation">(</span>--f<span class="token punctuation">)</span> - 2 * <span class="token function">var</span><span class="token punctuation">(</span>--b<span class="token punctuation">)</span> - 2px<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span>
                    <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle closest-side<span class="token punctuation">,</span> #000 99%<span class="token punctuation">,</span> #0000<span class="token punctuation">)</span>
                        <span class="token function">var</span><span class="token punctuation">(</span>--g<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token property">transition</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">img:hover</span> <span class="token punctuation">{</span>
                <span class="token property">--f</span><span class="token punctuation">:</span> 1.35<span class="token punctuation">;</span> <span class="token comment">/* 悬停缩放比例 */</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./8.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,v){const s=t("iframe-load");return p(),c("div",null,[u,e(s,{src:"/src/css-tricks/8.html"}),k])}const b=a(i,[["render",r],["__file","8.html.vue"]]);export{b as default};