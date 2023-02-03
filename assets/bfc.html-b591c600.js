import{_ as l,p as i,q as e,a1 as a}from"./framework-49860b1b.js";const t={},o=a('<h1 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h1><p>BFC 即 Block Formatting Contexts (块级格式化上下文)，是 Web 页面的可视 CSS 渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域</p><h2 id="形成的条件" tabindex="-1"><a class="header-anchor" href="#形成的条件" aria-hidden="true">#</a> 形成的条件</h2><ul><li>根元素 <code>&lt;html&gt;</code></li><li>浮动元素（元素的 float 不是 none）</li><li>绝对定位元素（元素的 position 为 absolute 或 fixed）</li><li>行内块元素（元素的 display 为 inline-block）</li><li>表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）</li><li>表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）</li><li>匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 table、row、tbody、thead、tfoot 的默认属性）或 inline-table）</li><li>overflow 值不为 visible 的块元素</li><li>display 值为 flow-root 的元素</li><li>contain 值为 layout、content 或 paint 的元素</li><li>弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）</li><li>网格元素（display 为 grid 或 inline-grid 元素的直接子元素）</li><li>多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）</li><li>column-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。</li></ul><h2 id="常见现象及处理" tabindex="-1"><a class="header-anchor" href="#常见现象及处理" aria-hidden="true">#</a> 常见现象及处理</h2><ul><li><p>margin 重叠</p><p>同一个 BFC 下的上下外边距会发生重叠；解决：使它们分别处于两个不同的 BFC 下</p></li><li><p>清除浮动</p><p>浮动元素会导致父元素的高度塌陷；解决：使父元素成为一个新的 BFC</p></li></ul>',6),n=[o];function r(c,d){return i(),e("div",null,n)}const p=l(t,[["render",r],["__file","bfc.html.vue"]]);export{p as default};
