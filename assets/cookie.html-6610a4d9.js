import{_ as n,p as s,q as a,a1 as e}from"./framework-49860b1b.js";const o={},t=e(`<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h1><ul><li>cookie 是一个请求首部，其中含有先前由服务器通过 Set-Cookie 首部投放并存储到客户端的 HTTP cookies</li><li>cookie 是服务器在本地机器上存储的小段文本，并随每一个请求发送至统一服务器。</li><li>cookie 保存在客户端，主要内容包括：键、值、过期时间、路径等</li></ul><p>分为会话 cookie 和持久 cookie</p><ul><li>会话 cookie 不设置过期时间，浏览器窗口关闭时就消失了。但是，有的浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话 cookie 也会被保留下来，就好像浏览器从来没有关闭一样</li><li>持久 cookie 指定一个特定的过期时间（Expires）或有效期（Max-Age），当 cookie 的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端</li></ul><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><ul><li>可以实现跨页面全局变量</li><li>可以跨越同域名下的多个网页，但不能跨越多个域名使用</li><li>同一个网站中所有页面共享一套 cookie</li><li>可以设置有效期</li></ul><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ul><li>每个特定域名下的 cookie 数量有限： <ul><li>IE6 或 IE6-(IE6 以下版本)：最多 20 个 cookie</li><li>IE7 或 IE7+(IE7 以上版本)：最多 50 个 cookie</li><li>FF:最多 50 个 cookie</li><li>Opera:最多 30 个 cookie</li><li>Chrome 和 safari 没有硬性限制</li><li>当超过单个域名限制之后，再设置 cookie，浏览器就会清除以前设置的 cookie。IE 和 Opera 会清理近期最少使用的 cookie，FF 会随机清理 cookie；</li></ul></li><li>存储量太小，只有 4KB；</li><li>每次 HTTP 请求都会发送到服务端，影响获取资源的效率；</li><li>需要自己封装获取、设置、删除 cookie 的方法；</li></ul><h2 id="cookie-的-secure-和-httponly-标记" tabindex="-1"><a class="header-anchor" href="#cookie-的-secure-和-httponly-标记" aria-hidden="true">#</a> cookie 的 Secure 和 HttpOnly 标记</h2><ul><li>标记为 Secure 的 cookie 只应通过被 https 协议加密过的请求发送给客户端，但是即使设置了该标记，敏感信息也不应该通过 cookie 传输，因为 cookie 有其固有的不安全性</li><li>带有 HttpOnly 标记的 cookie，无法通过 document.cookie 访问，它们只应该发送给客户端</li></ul><h2 id="cookie-作用域" tabindex="-1"><a class="header-anchor" href="#cookie-作用域" aria-hidden="true">#</a> cookie 作用域</h2><ul><li>Domain 标识指定了哪些主机可以接受 cookie，默认当前文档的主机，不包含子域名</li><li>Path 标识指定了主机下的哪些路径可以接受 cookie，该路径必须存在于请求 url 中，子路径也会被匹配</li></ul><h2 id="samesite-cookie-相对较新的字段" tabindex="-1"><a class="header-anchor" href="#samesite-cookie-相对较新的字段" aria-hidden="true">#</a> SameSite Cookie（相对较新的字段）</h2><ul><li>SameSite Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）</li><li>SameSite 有三种值：None、Strict、Lax（新版本浏览器默认值）</li></ul><h2 id="cookie-封装" tabindex="-1"><a class="header-anchor" href="#cookie-封装" aria-hidden="true">#</a> cookie 封装</h2><h3 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> oDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建日期对象</span>
    oDate<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>oDate<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置过期时间(天)</span>
    <span class="token comment">// 这样设置的 cookie 不会替换原有的，而是会将新增的值添加到前面</span>
    document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> key <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> value <span class="token operator">+</span> <span class="token string">&#39;;expires=&#39;</span> <span class="token operator">+</span> oDate<span class="token punctuation">.</span><span class="token function">toGMTString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置 cookie 的名称，数值，过期时间</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用</span>
<span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">&#39;sex&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取-cookie-的单个数值" tabindex="-1"><a class="header-anchor" href="#获取-cookie-的单个数值" aria-hidden="true">#</a> 获取 cookie 的单个数值</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> arr1 <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 cookie 按“; ”分割（注意分号后面有空格），数组元素为：cookie 名=cookie 值</span>
    <span class="token comment">// 分割数组里的每个元素</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr1<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> arr2 <span class="token operator">=</span> arr1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 按照“=”分割</span>
        <span class="token comment">// 如果数组的第一个元素等于给定的 cookie 名称</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回反编译后的 cookie 值</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用</span>
<span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除-cookie" tabindex="-1"><a class="header-anchor" href="#移除-cookie" aria-hidden="true">#</a> 移除 cookie</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setCookie</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cookie 的过期时间设为昨天</span>
<span class="token punctuation">}</span>
<span class="token comment">// 调用</span>
<span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h2><h3 id="session-是服务器端保存用户数据。" tabindex="-1"><a class="header-anchor" href="#session-是服务器端保存用户数据。" aria-hidden="true">#</a> session 是服务器端保存用户数据。</h3><p>浏览器第一次发送请求时，服务器自动生成了 session id 来唯一标识，并将其通过响应发送到浏览器。浏览器第二次请求时，会将前一次服务器响应中的 session id 放在请求中一并发送到服务器上，服务器从请求中提取出 session id，并和保存的所有 session id 进行对比，找到这个用户信息。一般默认 30 分钟后毁掉这个 session id</p><p>session id 是存放在 cookie 中的，每次访问将该 session id 发送到服务器进行对比，若该 id 已过期，则要求用户登录，若未过期，则自动登录</p><h2 id="cookie-和-session-的区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-session-的区别" aria-hidden="true">#</a> Cookie 和 Session 的区别</h2><ul><li>Cookie 在客户端（浏览器、易伪造、不安全），Session 在服务器端（会消耗服务器资源）。</li><li>Cookie 只能保存 ASCII 字符串，如果是 Unicode 字符或者二进制数据需要先进行编码。Cookie 中也不能直接存取 Java 对象。</li><li>Session 能够存取很多类型的数据，包括 String、Integer、List、Map 等，Session 中也可以保存 Java 对象。</li></ul><h2 id="location-storage-与-session-storage" tabindex="-1"><a class="header-anchor" href="#location-storage-与-session-storage" aria-hidden="true">#</a> location storage 与 session storage</h2><p>两者相同，除了生存周期不同之外，location storage 可永久存在，除非被清除，session storage 仅在当前标签页中存在</p>`,29),i=[t];function c(p,l){return s(),a("div",null,i)}const k=n(o,[["render",c],["__file","cookie.html.vue"]]);export{k as default};