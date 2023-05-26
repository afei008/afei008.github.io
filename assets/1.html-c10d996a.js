import{_ as t,M as e,p,q as o,R as c,N as l,Q as n,t as a,a1 as i}from"./framework-49860b1b.js";const u={},d=n("h1",{id:"第一章-基础知识",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第一章-基础知识","aria-hidden":"true"},"#"),a(" 第一章 基础知识")],-1),r=n("h2",{id:"_1-1-canvas-元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-1-canvas-元素","aria-hidden":"true"},"#"),a(" 1.1 canvas 元素")],-1),k=i(`<ul><li>需设置 <code>canvas</code> 元素的 <code>width</code> 和 <code>height</code> 属性，<code>CSS</code> 属性设置的宽高样式，会被浏览器进行缩放，进而导致奇怪的效果 <strong>（<code>canvas</code> 的大小称为画布大小，<code>CSS</code> 大小称为绘图大小，当其不一致时，浏览器会对绘图大小进行缩放，因此尽量保持两者进行相同，或者不设置 <code>CSS</code> 属性）</strong></li><li><code>fillStyle</code>：填充样式，可选值（颜色字符串，<code>CanvasGradient</code> 对象，<code>CanvasPattern</code> 对象）</li><li><code>fillText(text, x, y, [maxWidth])</code>：填充文本</li><li><code>strokeStyle</code>：描边样式，同填充样式</li><li><code>strokeText(text, x, y, [maxWidth])</code>：描边文本</li></ul><h3 id="canvas-元素的-api" tabindex="-1"><a class="header-anchor" href="#canvas-元素的-api" aria-hidden="true">#</a> canvas 元素的 API</h3><table><thead><tr><th>属性</th><th>描述</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td></td><td>非负整数</td><td>300</td></tr><tr><td>height</td><td></td><td>非负整数</td><td>150</td></tr><tr><td><code>getContext()</code></td><td>返回与该 <code>canvas</code> 元素相关的绘图环境对象，每个环境对象与一个 <code>canvas</code> 元素相关联</td><td></td><td></td></tr><tr><td><code>toDataURL(type, quality)</code></td><td>返回一个数据地址（data URL），第一个参数为图像的类型：<code>image/jpeg</code> 或 <code>image/png</code>（默认值），第二个参数为图像的质量，值为 0-1.0 之间的浮点数</td><td></td><td></td></tr><tr><td><code>toBlob(callback, type, quality)</code></td><td>创建一个用于表示此 <code>canvas</code> 元素图像文件的 Blob，第一个参数是回调函数，可获得一个单独的 Blob 对象参数，第二个参数为图像类型，第三个参数为图像质量</td><td></td><td></td></tr></tbody></table><h2 id="_1-2-canvas-的绘图环境" tabindex="-1"><a class="header-anchor" href="#_1-2-canvas-的绘图环境" aria-hidden="true">#</a> 1.2 canvas 的绘图环境</h2><p><code>canvas</code> 元素仅仅是为了充当绘图环境对象的容器而存在，该环境对象提供了全部的绘制功能</p><h3 id="_2d-绘图环境" tabindex="-1"><a class="header-anchor" href="#_2d-绘图环境" aria-hidden="true">#</a> 2d 绘图环境</h3><p>除了指向 <code>canvas</code> 元素自身的 <code>canvas</code> 属性之外，其余的 2d 绘图环境属性都与绘图操作有关</p><table><thead><tr><th>属性</th><th>简介</th></tr></thead><tbody><tr><td>fillstyle</td><td>指定该绘图环境在后续的图像填充操作中所使用的颜色、渐变色或图案</td></tr><tr><td>font</td><td>设定在调用绘图环境对象的 <code>fillText()</code> 或 <code>strokeText()</code> 方法时所使用的字形</td></tr><tr><td>globalAlpha</td><td>全局透明度设定，取值为 <code>0-1.0</code> 之间浏览器会将每个像素的 <code>alpha</code> 值与该值相乘，在绘制图像时野生如此</td></tr><tr><td>globalCompsiteOperation</td><td>该值决定了将某个物体绘制在其他物体之上时，所采用的绘制方法，取值详见 2.14 节</td></tr><tr><td>lineCap</td><td>如何绘制线段的端点，取值为：<code>butt</code>（默认值）、<code>round</code>、<code>square</code></td></tr><tr><td>lineWidth</td><td>绘制线段的屏幕像素宽度，必须是非负、非无穷的浮点值，默认值为 <code>1.0</code></td></tr><tr><td>lineJoin</td><td>如何绘制线段交点，取值为：<code>bevel</code>、<code>round</code>、<code>miter</code>（默认值）</td></tr><tr><td>miterLimit</td><td>如何绘制 <code>miter</code> 形式的线段交点，详见 2.8.7 小节</td></tr><tr><td>shadowBlur</td><td>如何延伸阴影效果，值越高，延伸越远。该值代表高斯模糊方程式中的参数值，并非阴影像素的长度。取值为非负非无穷的浮点值，默认值为 0</td></tr><tr><td>shadowColor</td><td>阴影的颜色，通常采用半透明颜色</td></tr><tr><td>shadowOffsetX</td><td>以像素为单位，指定阴影效果水平方向偏移量</td></tr><tr><td>shadowOffsetY</td><td>以像素为单位，指定阴影效果垂直方向偏移量</td></tr><tr><td>strokeStyle</td><td>对路径进行描边时所用的绘制风格</td></tr><tr><td>textAlign</td><td>以 <code>fillText()</code> 或 <code>strokeText()</code> 方法进行绘制时，所画文本的水平对齐方式</td></tr><tr><td>textBaseline</td><td>以 <code>fillText()</code> 或 <code>strokeText()</code> 方法进行绘制时，所画文本的垂直对齐方式</td></tr></tbody></table><h3 id="canvas-状态的保存与恢复" tabindex="-1"><a class="header-anchor" href="#canvas-状态的保存与恢复" aria-hidden="true">#</a> canvas 状态的保存与恢复</h3><ul><li><code>context.save()</code>：保存当前<strong>绘图环境</strong>所有属性</li><li><code>context.restore()</code>：恢复</li></ul><p>两个方法可以嵌套使用，注意要成对使用，否则可能导致意料之外的效果</p><p><strong>注意：<code>canvas</code> 状态不包括当前的路径或位图。路径只能通过 <code>beginPath()</code> 来重置，位图是 <code>canvas</code> 本身的一个属性，不属于绘图环境对象</strong></p><p>用法如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 保存当前所有属性</span>
context<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置新属性</span>
context<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 绘制其他东西</span>
<span class="token comment">// ...</span>

<span class="token comment">// 恢复，即上面设置的新属性将还原</span>
context<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-程序清单规范格式" tabindex="-1"><a class="header-anchor" href="#_1-3-程序清单规范格式" aria-hidden="true">#</a> 1.3 程序清单规范格式</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">body</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">#canvas</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
                <span class="token property">border</span><span class="token punctuation">:</span> thin inset #aaa<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canvas<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>600<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            Canvas not supported
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-开始学习-html5" tabindex="-1"><a class="header-anchor" href="#_1-4-开始学习-html5" aria-hidden="true">#</a> 1.4 开始学习 HTML5</h2><h2 id="_1-5-基本的绘制操作" tabindex="-1"><a class="header-anchor" href="#_1-5-基本的绘制操作" aria-hidden="true">#</a> 1.5 基本的绘制操作</h2><p>一些例子，暂时略过</p><h2 id="_1-6-事件处理" tabindex="-1"><a class="header-anchor" href="#_1-6-事件处理" aria-hidden="true">#</a> 1.6 事件处理</h2><h3 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件" aria-hidden="true">#</a> 鼠标事件</h3><ul><li><code>canvas.onmousedown = (e) =&gt; { ... }</code></li><li><code>canvas.addEventListener(&#39;mousedown&#39;, (e) =&gt; { ... })</code></li></ul><p>其他鼠标事件 <code>mousemove</code>、<code>mouseup</code>、<code>mouseout</code> 等一样注册</p><h4 id="坐标转换" tabindex="-1"><a class="header-anchor" href="#坐标转换" aria-hidden="true">#</a> 坐标转换</h4><p>浏览器事件对象传递给监听的坐标是窗口坐标，此时需要将其转换为 <code>canvas</code> 坐标</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">windowToCanvas</span><span class="token punctuation">(</span><span class="token parameter">canvas<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 canvas 元素的边界框，该坐标是相对于窗口的</span>
    <span class="token keyword">const</span> box <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 此处返回的坐标，在 canvas 元素大小与绘图表面大小不相符时进行了缩放</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> x <span class="token operator">-</span> box<span class="token punctuation">.</span>left <span class="token operator">*</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> box<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> y <span class="token operator">-</span> box<span class="token punctuation">.</span>top <span class="token operator">*</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> box<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h3><p>除非要在 <code>canvas</code> 中实现字符控制功能，否则处理鼠标事件的场合比处理键盘事件多</p><ul><li><code>keydown</code>：查看其返回的 <code>keyCode</code> 属性的值。<strong>一般来说</strong>，可打印的字符，该值为 ASCII 码。其返回值通常还包含以下布尔值属性：<code>altKey</code>、<code>ctrlKey</code>、<code>metaKey</code>、<code>shiftKey</code></li><li><code>keyup</code>：同上</li><li><code>keypress</code>：浏览器只在产生可打印字符时才触发该事件，所以处理该事件时可以使用获取 <code>var key = String.fromCharCode(event.which);</code> 字符</li></ul><h3 id="触摸事件" tabindex="-1"><a class="header-anchor" href="#触摸事件" aria-hidden="true">#</a> 触摸事件</h3><ul><li><code>TouchEvent</code> 对象</li><li><code>TouchList</code> 对象</li><li><code>Touch</code> 对象</li></ul><p>详见 11 章</p><h2 id="_1-7-绘制表面的保存与恢复" tabindex="-1"><a class="header-anchor" href="#_1-7-绘制表面的保存与恢复" aria-hidden="true">#</a> 1.7 绘制表面的保存与恢复</h2><ul><li><code>getImageData()</code>：保存绘图环境的绘图表面</li><li><code>putImageData()</code>：恢复</li></ul><p>使用示例如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> imageData <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">saveDrawingSurface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    imageData <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getImageData</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">restoreDrawingSurface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">putImageData</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

canvas<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token function">saveDrawingSurface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

canvas<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dragging<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">restoreDrawingSurface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

canvas<span class="token punctuation">.</span><span class="token function-variable function">onmouseup</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">restoreDrawingSurface</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function v(m,h){const s=e("iframe-load");return p(),o("div",null,[c(" @format "),d,r,l(s,{src:"/html5-canvas/1/1.1.html"}),k])}const b=t(u,[["render",v],["__file","1.html.vue"]]);export{b as default};
