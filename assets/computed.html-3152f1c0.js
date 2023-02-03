import{_ as n,p as s,q as a,a1 as e}from"./framework-49860b1b.js";const t={},p=e(`<h1 id="计算属性缓存原理" tabindex="-1"><a class="header-anchor" href="#计算属性缓存原理" aria-hidden="true">#</a> 计算属性缓存原理</h1><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">ourder</span><span class="token operator">:</span> hello<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回顾-watcher-的流程" tabindex="-1"><a class="header-anchor" href="#回顾-watcher-的流程" aria-hidden="true">#</a> 回顾 watcher 的流程</h2><p>watcher 的的核心概念是 get 求值和 update 更新</p><ul><li>在求值的时候，它会把自身，也就是 watcher 本身赋值给 Dep.target 这个全局变量</li><li>然后求值的过程中，会读取到响应式属性，那么响应式属性的 dep 就会收集到这个 watcher 作为依赖</li><li>下次响应式属性更新了，就会从 dep 中找出它收集到 watcher，触发 watcher.update() 去更新</li></ul><p>在基本的响应式更新视图的流程中</p><ul><li>get 求值就是指 Vue 的组件重新渲染的函数，</li><li>update 的时候，其实就是重新调用组件的渲染函数去更新视图</li></ul><p>这套流程同样适用于 computed 的更新</p><h2 id="初始化-computed" tabindex="-1"><a class="header-anchor" href="#初始化-computed" aria-hidden="true">#</a> 初始化 computed</h2><p>Vue 会对 options 中的每个 computed 属性也用 watcher 去包装起来，它的 get 函数显然就是要执行用户定义的求值函数，而 update 则是一个比较复杂的流程</p><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p>在组件初始化的时候，会进入到初始化 computed 的函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">initComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>computed<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// initComputed 函数</span>
<span class="token keyword">var</span> watchers <span class="token operator">=</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_computedWatchers <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 依次为每个 computed 属性定义</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> computed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userDef <span class="token operator">=</span> computed<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    watchers<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>
        vm<span class="token punctuation">,</span> <span class="token comment">// 实例</span>
        getter<span class="token punctuation">,</span> <span class="token comment">// 用户传入的求值函数</span>
        noop<span class="token punctuation">,</span> <span class="token comment">// 回调函数</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token comment">// 声明 lazy 属性，标记 computed watcher</span>
    <span class="token punctuation">)</span>
    <span class="token comment">// 用户在调用 getter 函数的时候，会发生的事情</span>
    <span class="token function">defineComputed</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> key<span class="token punctuation">,</span> userDef<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用循环为每个 computed 属性生成一个<code>计算watcher</code>，该 watcher 保留管家你属性简化后的形式为</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dirty</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 缓存的关键</span>
    <span class="token literal-property property">getter</span><span class="token operator">:</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 此处假设用户传入的函数为 sum()</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 value 开始为 undefined，lazy 为 true，说明它的值是惰性计算的，只有到真正在模板里去读取它的值后才会计算</p><p>接下来看看 defineComputed，它决定了用户在读取 this.sum 这个计算属性的值后会发生什么</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// defineComputed 简化后的代码</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 组件实例上拿到 computed watcher</span>
        <span class="token keyword">const</span> watcher <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_computedWatchers <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_computedWatchers<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 只有 dirty 为 true 才会重新求值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>dirty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                watcher<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 此处也是个关键</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                watcher<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 返回计算出来的值</span>
            <span class="token keyword">return</span> watcher<span class="token punctuation">.</span>value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>dirty 这个概念代表脏数据，说明这个数据需要重新调用用户传入的 sum 函数来求值，第一次在模板中读到的时候，它一定是 true，所以初始化的时候就会经历一次求值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// evaluate 函数</span>
<span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下次没有特殊情况时，再次读取到 sum 的时候，发现 dirty 为 false，则直接返回 value，这就是计算属性缓存的概念</p><h3 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h3><p>当 count 更新的时候，到底是怎么触发 sum 在页面上变更的？要从上面提到的 evaluate() 函数中的求值操作说起</p><p><strong>Dep.target 变更为<code>渲染watcher</code></strong>，此时 Dep.target 为<code>渲染watcher</code>，targetStack 为 [<code>渲染 watcher</code>]</p><p>在模板中读取 sum 变量的时候，全局的 Dep.target 应该是<code>渲染watcher</code>，全局的 Dep.target 状态是一个用栈 targetStack 来保存，便于前进和回退 Dep.target</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// get函数</span>
<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> value
    <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> m<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token function">popTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刚进入 get 方法的时候，就执行 pushTarget，把 <code>计算watcher</code>自身置为 Dep.target，等待依赖收集，执行完 pushTarget 后</p><p><strong>Dep.target 变更为<code>计算watcher</code></strong>，此时 Dep.target 为<code>计算watcher</code>，targetStack 为 [<code>渲染 watcher</code>, <code>计算 watcher</code>]</p><p>代码往下，此时会执行 getter 函数，就是用户传入的 sum 函数，执行的时候读取到了 this.count，这是一个响应式的属性，此时会触发 count 的 get 劫持</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// get 简化代码</span>
<span class="token comment">// 在闭包中，会保留对于 count 这个 key 所定义的 dep</span>
<span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 闭包中也会保留上一次 set 函数所设置的 val</span>
<span class="token keyword">let</span> val
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> vale
        <span class="token comment">// Dep.target 此时是 计算watcher</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 收集依赖</span>
            dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// dep.depend()</span>
<span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此时 Dep.target 为 计算watcher</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 计算watcher 的 addDep 函数</span>
<span class="token function">addDep</span><span class="token punctuation">(</span><span class="token parameter">dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 此处做了一系列去重操作，简化掉</span>
    <span class="token comment">// 这里把 count 的 dep 也存在自身的 deps 上</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
    <span class="token comment">// 带着 计算watcher 自身作为参数，回到 dep 的 addSub 函数</span>
    dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Dep</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">addSub</span><span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经历上述的收集流程后，此时的一些状态，可以看出 <code>计算watcher</code> 和它所依赖的响应式值的 dep，互相保留了彼此</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// sum 的 计算watcher</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">deps</span><span class="token operator">:</span> <span class="token punctuation">[</span>count的dep<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dirty</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 求值完了，所以是false</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getter</span><span class="token operator">:</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// count 的 dep</span>
<span class="token punctuation">{</span>
    <span class="token literal-property property">subs</span><span class="token operator">:</span> <span class="token punctuation">[</span>sum的计算watcher<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>收集流程执行完，执行 poptarget</p><p><strong>Dep.target 变更为<code>渲染watcher</code></strong>，此时 Dep.target 为<code>渲染watcher</code>，targetStack 为 [<code>渲染 watcher</code>]</p><p>此时 evaluate 函数执行完毕，代码继续往下，走到了下面这里</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时的 Dep.target 为 <code>渲染watcher</code>，所以进入到了 watcher.depend()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// watcher.depend()</span>
<span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">.</span>length
    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deps<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于经过前面的收集依赖过程，<code>计算watcher</code>的 deps 里面保存了 count 的 dep，也就是说此时又会调用 count 上的 dep.depend()</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Dep</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这次的 Dep.target 已经是 <code>渲染watcher</code> 了，所以这个 count 的 dep 又会把 <code>渲染watcher</code> 存放进自身的 subs 中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">subs</span><span class="token operator">:</span> <span class="token punctuation">[</span>sum的计算watcher<span class="token punctuation">,</span> 渲染watcher<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时 count 更新了，再回到 count 的响应式劫持逻辑里去</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> val
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span><span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal
        <span class="token comment">// 触发 count 的 dep 的 notify</span>
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Dep</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
    subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 subs 里保存的 watcher 依次去调用它们的 update 方法</p><ol><li><p>调用 <code>计算watcher</code> 的 update</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 计算watcher 的 update</span>
<span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用 <code>渲染watcher</code> 的 update 这里其实就是调用 <code>vm._update(vm._render())</code> 这个函数，重新根据 render 函数生成 vnode 去渲染视图</p><p>而在 render 的过程中，一定会访问到 sum 这个值，那么又回到 sum 定义的 get 函数</p></li></ol><h2 id="缓存生效的情况" tabindex="-1"><a class="header-anchor" href="#缓存生效的情况" aria-hidden="true">#</a> 缓存生效的情况</h2><p>只有计算属性依赖的响应式值发生更新的时候，才会把 dirty 重置为 true，这一下次读取的时候才会发生真正的计算</p><p>以开头的示例来说，当 count 发生变换的时候，sum 才会重新计算，order 发生变换的时候，sum 读取的是缓存值</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>计算属性更新的路径是为</p><ul><li>响应式的值 count 更新</li><li>同时通知<code>computed watcher</code> 和 <code>渲染 watcher</code> 更新</li><li><code>computed watcher</code> 把 dirty 设置为 true</li><li>视图渲染读到 computed 的值，由于 dirty 为 ture 所以 <code>computed watcher</code> 重新求值</li></ul>`,54),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","computed.html.vue"]]);export{d as default};
