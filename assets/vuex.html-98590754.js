import{_ as n,p as s,q as a,a1 as t}from"./framework-49860b1b.js";const e="/assets/vuex1-eee3f9d9.jpg",p="/assets/vuex2-fdc7185d.jpg",o={},c=t(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h1><h2 id="vuex-是什么" tabindex="-1"><a class="header-anchor" href="#vuex-是什么" aria-hidden="true">#</a> vuex 是什么</h2><p>vuex 是专门为 vue 应用程序设计的状态管理工具。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p><h2 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h2><p>vuex 的设计思想借鉴了 Flux、Redux，将数据存储在全局的 store，再将 store 挂载到每个 vue 实例组件中，利用 vue 的细粒度数据响应机制来进行高效的状态更新</p><h2 id="原理解析" tabindex="-1"><a class="header-anchor" href="#原理解析" aria-hidden="true">#</a> 原理解析</h2><p>主要理解两个问题</p><ul><li>vuex 的 store 是如何挂载注入到组件中呢？</li><li>vuex 的 state 和 getters 是如何映射到各个组件实例中响应式更新状态呢？</li></ul><h3 id="vuex-的-store-如何挂载注入到组件中" tabindex="-1"><a class="header-anchor" href="#vuex-的-store-如何挂载注入到组件中" aria-hidden="true">#</a> vuex 的 store 如何挂载注入到组件中</h3><p>首先安装 vuex</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 vue 的插件机制，在使用<code>Vue.use(vuex)</code>时，会调用 vuex 的 install 方法来装载 vuex，install 方法如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">_Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Vue <span class="token operator">&amp;&amp;</span> _Vue <span class="token operator">===</span> Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_NEV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
                <span class="token string">&#39;[vuex] already install. Vue.use(Vuex) should be called only once&#39;</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    Vue <span class="token operator">=</span> _Vue<span class="token punctuation">;</span>
    <span class="token function">applyMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>applyMixin 方法使用了 vue 的混入机制，在 vue 的声明周期 beforeCreate 钩子函数前混入 vuexInit 方法，核心代码如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">beforeCreate</span><span class="token operator">:</span> vuexInit <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">vuexInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store <span class="token operator">=</span>
            <span class="token keyword">typeof</span> options<span class="token punctuation">.</span>store <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
                <span class="token operator">?</span> options<span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token operator">:</span> options<span class="token punctuation">.</span>store<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>parent <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>$store<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$store <span class="token operator">=</span> optioins<span class="token punctuation">.</span>parent<span class="token punctuation">.</span>$store<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小结：通过分析源码得知，vuex 利用了 vue 的 mixin 混入机制，在 beforeCreate 钩子前混入 vuexInit 方法，vuexInit 方法实现了 store 注入 vue 组件实例，并且注册了 vuex store 的引用属性<code>$store</code>，store 注入 过程如下图 <img src="`+e+`" alt=""></p><h3 id="vuex-的-state-和-getters-是如何映射到各个组件实例中响应式更新状态" tabindex="-1"><a class="header-anchor" href="#vuex-的-state-和-getters-是如何映射到各个组件实例中响应式更新状态" aria-hidden="true">#</a> vuex 的 state 和 getters 是如何映射到各个组件实例中响应式更新状态</h3><p>store 实现的源码在 src/store.js</p><p>核心方法 resetStoreVM 如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resetStoreVM</span><span class="token punctuation">(</span><span class="token parameter">store<span class="token punctuation">,</span> state<span class="token punctuation">,</span> hot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> oldVm <span class="token operator">=</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">;</span>
    store<span class="token punctuation">.</span>getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> wrappedGetters <span class="token operator">=</span> store<span class="token punctuation">.</span>_wrappedGetters<span class="token punctuation">;</span>
    <span class="token keyword">const</span> computed <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">forEachValue</span><span class="token punctuation">(</span>wrappedGetters<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 给 computed 对象添加属性</span>
        computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> store<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 重写 get 方法，store.getters.xx 其实是访问了store._vm[xx]，其中添加 computed 属性</span>
        Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>_vm<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> silent <span class="token operator">=</span> Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent<span class="token punctuation">;</span>
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// 创建 Vue 实例来保存 state，同时让 state 变成响应式</span>
    <span class="token comment">// 这里代码才是核心，其实就是把 store 变成一个隐藏组件的 data</span>
    store<span class="token punctuation">.</span>_vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">$$state</span><span class="token operator">:</span> state<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        computed<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>silent <span class="token operator">=</span> silent<span class="token punctuation">;</span>
    <span class="token comment">// 只能通过 commit 方式更改状态</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>strict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">enableStrictMode</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面源码可以看出 vuex 的 state 状态是响应式，是借助 vue 的 data 生成的，将 store 存入 一个隐藏的 vue 实例组件的 data 中；vuex 的 getters 则是借助 vue 的计算属性 computed 实现数据监听</p><p>computed 计算属性监听 data 数据变更主要经历以下几个过程</p><p><img src="`+p+'" alt=""></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>vuex 是通过全局注入 store 对象，来实现组件间的状态共享。在大型复杂的项目中（多级组件嵌套），需要实现一个组件更改某个数据，多个组件自动获取更改后的数据进行业务逻辑处理，这时候使用 vuex 比较合适。假如只是多个组件间传递数据，使用 vuex 未免有点大材小用，其实只用使用组件间常用的通信方法即可。</p><p>一句话结束 vuex 工作原理：vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件；</p>',26),u=[c];function i(l,r){return s(),a("div",null,u)}const d=n(o,[["render",i],["__file","vuex.html.vue"]]);export{d as default};