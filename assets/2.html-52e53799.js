import{_ as e,p as d,q as c,R as o,a1 as a}from"./framework-49860b1b.js";const t={},i=a('<h1 id="第-2-章-在网页中使用-svg" tabindex="-1"><a class="header-anchor" href="#第-2-章-在网页中使用-svg" aria-hidden="true">#</a> 第 2 章 在网页中使用 SVG</h1><h2 id="将-svg-作为图像" tabindex="-1"><a class="header-anchor" href="#将-svg-作为图像" aria-hidden="true">#</a> 将 SVG 作为图像</h2><ul><li>在 <code>&lt;img&gt;</code> 元素内包含 <code>SVG</code></li><li>在 <code>CSS</code> 中包含 <code>SVG</code></li></ul><h2 id="将-svg-作为应用程序" tabindex="-1"><a class="header-anchor" href="#将-svg-作为应用程序" aria-hidden="true">#</a> 将 SVG 作为应用程序</h2><ul><li>使用 <code>&lt;object&gt;</code> 元素嵌入外部文件，可以让不能直接显示 <code>SVG</code> 但是有 <code>SVG</code> 插件的老版本浏览器也能查看</li><li>使用 <code>&lt;embed&gt;</code> 元素，但没有 <code>&lt;object&gt;</code> 元素灵活</li></ul><h2 id="混合文档中的-svg-标记" tabindex="-1"><a class="header-anchor" href="#混合文档中的-svg-标记" aria-hidden="true">#</a> 混合文档中的 SVG 标记</h2><p>可以在一个文件内同时包含 <code>SVG</code> 代码与 <code>HTML</code> 或者 <code>XML</code> 标记。当应用 <code>CSS</code> 样式和使用脚本时，混合文档内的所有元素会被视为一个文档对象</p><h3 id="svg-中的-foreign-object" tabindex="-1"><a class="header-anchor" href="#svg-中的-foreign-object" aria-hidden="true">#</a> SVG 中的 foreign object</h3><p>混合内容的一种方式是在 <code>SVG</code> 内插入部分 HTML（或其他）内容。<code>SVG</code> 规范定义了一种在图像指定区域嵌入这种 <code>foreign</code> 内容的方式</p><ul><li><code>&lt;foreignObject&gt;</code> 元素定义了一个矩形区域，浏览器应该在其中绘制子 <code>XML</code> 内容，内容类型通过子内容上的 <code>xmlns</code> 属性声明的 <code>XML</code> 命名空间来定义</li><li>矩形区域通过元素的 <code>x</code>、<code>y</code>、<code>width</code>、<code>height</code> 属性定义，方式类似于 <code>&lt;use&gt;</code> 或者 <code>&lt;image&gt;</code> 元素</li><li>矩形区域基于本地 <code>SVG</code> 坐标系统求值，因此受坐标系统变换和其他 <code>SVG</code> 效果影响。子文档通常渲染在矩形框内，其结果可以像其他 <code>SVG</code> 图像一样被操作</li></ul><h3 id="在-xhtml-或者-html5-中内联-svg" tabindex="-1"><a class="header-anchor" href="#在-xhtml-或者-html5-中内联-svg" aria-hidden="true">#</a> 在 XHTML 或者 HTML5 中内联 SVG</h3><p>即在页面上直接写入 <code>SVG</code> 元素</p><h3 id="其他-xml-应用程序中的-svg" tabindex="-1"><a class="header-anchor" href="#其他-xml-应用程序中的-svg" aria-hidden="true">#</a> 其他 XML 应用程序中的 SVG</h3><p>如 <code>XSL-FO</code> 文件</p>',14);function r(h,l){return d(),c("div",null,[o(" @format "),i])}const n=e(t,[["render",r],["__file","2.html.vue"]]);export{n as default};