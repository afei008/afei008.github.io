import{_ as a,p as e,q as i,a1 as r}from"./framework-49860b1b.js";const h={},s=r('<h1 id="墙与翻墙原理" tabindex="-1"><a class="header-anchor" href="#墙与翻墙原理" aria-hidden="true">#</a> 墙与翻墙原理</h1><h2 id="墙原理" tabindex="-1"><a class="header-anchor" href="#墙原理" aria-hidden="true">#</a> 墙原理</h2><p>GFW（great fire wall），封锁机制非常复杂，涉及到流量头、特征、IP、端口、数据量大小和长短、TCP 长连接的时长、被动监听、主动嗅探、人工干预</p><h3 id="常见封锁方式" tabindex="-1"><a class="header-anchor" href="#常见封锁方式" aria-hidden="true">#</a> 常见封锁方式</h3><ul><li>DNS 污染，解析错误地址或者不解析</li><li>过滤关键字</li><li>端口阻断</li><li>IP 地址批量封锁</li></ul><h2 id="翻墙原理" tabindex="-1"><a class="header-anchor" href="#翻墙原理" aria-hidden="true">#</a> 翻墙原理</h2><h3 id="vpn" tabindex="-1"><a class="header-anchor" href="#vpn" aria-hidden="true">#</a> VPN</h3><ul><li>本地计算机发出一个数据包，该数据包作用是请求建立加密通道</li><li>GFW 发现该目标是允许访问的地址，所以放行，允许建立加密通道</li><li>本地计算机再发出一个代理请求，到达远程服务器</li><li>远程服务器解密数据，发送到目标地址</li><li>目标地址把响应数据，发给远程服务器，再经过 GFW，再发给本地计算机</li></ul><h4 id="特征" tabindex="-1"><a class="header-anchor" href="#特征" aria-hidden="true">#</a> 特征</h4><ul><li>先发送一个请求建立加密链接的数据包</li><li>紧跟着发送一个代理请求</li></ul><h4 id="屏蔽" tabindex="-1"><a class="header-anchor" href="#屏蔽" aria-hidden="true">#</a> 屏蔽</h4><ul><li>屏蔽 VPN 通讯端口，政企用户需要申报审核，个人用户无法使用</li><li>提供 VPN 服务的服务器 IP 地址批量被封</li></ul><h3 id="shadowsocks" tabindex="-1"><a class="header-anchor" href="#shadowsocks" aria-hidden="true">#</a> shadowsocks</h3><ul><li>本地计算机发出一个数据包，给本地 ss 服务器（ss 客户端、路由器等）发送一个加密请求</li><li>发送加密数据，到达 GFW，经过 DNS 解析，因为 GFW 探测不到具有明显特征的流量，所以放行，到达远程 ss 服务器</li><li>远程 ss 服务器解密请求数据，发送到目标地址，得到目标响应</li><li>远程 ss 服务器加密响应数据，发送到 GFW，同样因为探测不到明显特征的流量，也不是明文数据，所以放行</li><li>到达本地 ss 服务器，然后解密，再发送到本地计算机</li></ul><h2 id="全局模式" tabindex="-1"><a class="header-anchor" href="#全局模式" aria-hidden="true">#</a> 全局模式</h2><p>指的是代表作为翻墙软件本身所接管道的流量，如果翻墙软件的权限不够，或者某些应用不遵守系统代理规则，就算打开了全局模式也没用</p><h2 id="协议优缺点" tabindex="-1"><a class="header-anchor" href="#协议优缺点" aria-hidden="true">#</a> 协议优缺点</h2><p>纠结协议安全不如纠结特征，纠结特征不如纠结使用方法和服务器供应商</p><h3 id="ss" tabindex="-1"><a class="header-anchor" href="#ss" aria-hidden="true">#</a> ss</h3><p>因为机制问题，目前还是体验最好、最简单粗暴、最快速、拥有最快的 RTT（通讯延迟）的方式</p><h3 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr" aria-hidden="true">#</a> ssr</h3><p>ss 优化版，并非同一个作者开发</p><h3 id="v2ray" tabindex="-1"><a class="header-anchor" href="#v2ray" aria-hidden="true">#</a> v2ray</h3><p>是个极具弹性的平台，支持的协议和算法多，机制和花样多，vmess+websocket+tls 是目前最稳定的方式之一</p><h3 id="trojan" tabindex="-1"><a class="header-anchor" href="#trojan" aria-hidden="true">#</a> trojan</h3><p>不支持代理，与 v2ray 区别不大，解决了 v2ray 的缺点</p><ul><li>解决了部署难度大，定死了协议只有一种 websocket+tls</li><li>剥离了 vmess</li></ul>',27),d=[s];function l(n,t){return e(),i("div",null,d)}const o=a(h,[["render",l],["__file","gfw.html.vue"]]);export{o as default};