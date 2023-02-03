import{_ as s,p as n,q as a,a1 as t}from"./framework-49860b1b.js";const e={},p=t(`<h1 id="props-与-slot-的区别" tabindex="-1"><a class="header-anchor" href="#props-与-slot-的区别" aria-hidden="true">#</a> props 与 slot 的区别</h1><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><p>父组件传给子组件参数</p><ul><li>用来接收参数，父组件向子组件传参，可以放在 props 中</li><li>该参数是一个响应式数据，props 的更改会导致子组件的刷新</li></ul><h2 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> slot</h2><p>父组件传给子组件模板</p><ul><li>用于在组件中插入内容或者组件之间的相互嵌套，如果组件中有需要单独定义的地方可以使用 slot</li><li><code>&lt;slot&gt;</code>元素上绑定的 attribute 称为插槽 prop（示例中的 user）</li><li>v-slot 指令可以将子组件内部的 插槽 prop 提供给父组件使用<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 子组件 current-user --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ user.lastName }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 父组件中使用 --&gt;</span>
<span class="token comment">&lt;!-- slotProps 是一个包含所有插槽 prop 的对象，命名随意 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slotProps<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ slotProps.user.firstName }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 父组件中使用（错误） --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">&gt;</span></span> {{ user.firstName }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 此时的 user 访问的是父组件中的 user，因此可能为 undefined --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,7),l=[p];function o(c,i){return n(),a("div",null,l)}const r=s(e,[["render",o],["__file","props-and-slot.html.vue"]]);export{r as default};
