import{_ as a,p as e,q as i,a1 as l}from"./framework-49860b1b.js";const r={},d=l('<h1 id="bff" tabindex="-1"><a class="header-anchor" href="#bff" aria-hidden="true">#</a> BFF</h1><h2 id="什么是-bff" tabindex="-1"><a class="header-anchor" href="#什么是-bff" aria-hidden="true">#</a> 什么是 BFF</h2><p>BFF 只是一种逻辑分层，而非一种技术，即 Backend For Fronted（服务于前端的后端），也就是服务器设计 API 时会考虑前端的使用，并在服务端直接进行业务逻辑的处理，又称为用户体验适配器</p><h2 id="解决了什么问题" tabindex="-1"><a class="header-anchor" href="#解决了什么问题" aria-hidden="true">#</a> 解决了什么问题</h2><p>举例</p><ul><li>某个页面，每次访问的时候会发送 3 个请求</li><li>为了同时保障 Android、iOS、web 端的不同需求，需要为不同平台写不同的 api 接口，而每当接口变更的时候，需要 3 个客户端分别修改一遍</li></ul><p>BFF 作为中间件，将这些修改统一进行处理</p><ul><li>将 3 个请求变成 1 个请求提供给前端</li><li>将不同平台的接口变成 1 个相同的接口</li></ul><h2 id="使用-bff-的正确姿势" tabindex="-1"><a class="header-anchor" href="#使用-bff-的正确姿势" aria-hidden="true">#</a> 使用 BFF 的正确姿势</h2><ul><li><p>多端应用</p><p>为不同设备提供不同的 API，虽然它们可能是实现相同的功能，但因为不同设备的特殊性，它们对服务器的 API 访问也各有其特点，需要区别处理</p></li><li><p>服务聚合</p><p>随着微服务的兴起，原本在同一个进程内运行的业务流程被拆分到了不同的服务中，在增加业务灵活性的同时，也让前端的调用变得更复杂，BFF 屏蔽了复杂的服务调用链，让前端调用变得简单</p></li><li><p>非必要，不新增</p><p>BFF 虽然有各种好处，但是由于它所带来的代码重复和工作量增加问题，如果新需求与已有的 BFF 功能相近，此时要谨慎对待新增 BFF 的行为</p></li></ul><h2 id="实战中的用法" tabindex="-1"><a class="header-anchor" href="#实战中的用法" aria-hidden="true">#</a> 实战中的用法</h2><ul><li><p>访问控制</p><p>如服务中的权限控制，将所有服务中的权限控制集中在 BFF 层，使下层服务更加纯粹和独立</p></li><li><p>应用缓存</p><p>项目中经常存在一些需要缓存的临时数据，此时 BFF 作为业务的汇聚点，距离用户请求最近，所以将缓存操作放在 BFF 层</p></li><li><p>第三方入口</p><p>在业务中需要与第三方交互时，将该交互放在 BFF 层，这样可以只暴露必要信息给第三方，从而便于控制第三方的访问</p></li></ul>',12),p=[d];function h(n,t){return e(),i("div",null,p)}const F=a(r,[["render",h],["__file","bff.html.vue"]]);export{F as default};