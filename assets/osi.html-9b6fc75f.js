import{_ as a,p as e,q as h,a1 as r}from"./framework-49860b1b.js";const i={},d=r('<h1 id="osi-七层协议模型" tabindex="-1"><a class="header-anchor" href="#osi-七层协议模型" aria-hidden="true">#</a> OSI 七层协议模型</h1><h2 id="物理层" tabindex="-1"><a class="header-anchor" href="#物理层" aria-hidden="true">#</a> 物理层</h2><p>定义物理设备标准、物理传输介质，包括有线与无线介质</p><h2 id="数据链路层" tabindex="-1"><a class="header-anchor" href="#数据链路层" aria-hidden="true">#</a> 数据链路层</h2><p>隐藏不同物理介质的不同特性，为数据在不同传输介质上提供统一的标准</p><h2 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h2><p>可以理解为由路由器组成网络层，通过寻址功能，隐藏中间的的网络拓扑链接细节，使得在上层协议看起来双方通信是直连的</p><h2 id="传输层-即-tcp、udp、sctp-不常见-先于网络层发明" tabindex="-1"><a class="header-anchor" href="#传输层-即-tcp、udp、sctp-不常见-先于网络层发明" aria-hidden="true">#</a> 传输层（即 TCP、UDP、SCTP(不常见) 先于网络层发明）</h2><p>对数据进行封装成一个个数据包，为应用程序隐藏数据包跳转的细节，负责数据包的接收、重发、链路重连等</p><h2 id="会话层" tabindex="-1"><a class="header-anchor" href="#会话层" aria-hidden="true">#</a> 会话层</h2><p>建立和管理应用程序之间的通信，否则就要人工自己打包自己发送数据包</p><h2 id="表示层" tabindex="-1"><a class="header-anchor" href="#表示层" aria-hidden="true">#</a> 表示层</h2><p>解决不同系统之间的通信语法问题</p><h2 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h2><p>各种软件、web 应用</p><h1 id="四层协议模型" tabindex="-1"><a class="header-anchor" href="#四层协议模型" aria-hidden="true">#</a> 四层协议模型</h1><ul><li>数据链路层</li><li>网络层</li><li>传输层</li><li>应用层</li></ul>',17),t=[d];function n(c,s){return e(),h("div",null,t)}const o=a(i,[["render",n],["__file","osi.html.vue"]]);export{o as default};
