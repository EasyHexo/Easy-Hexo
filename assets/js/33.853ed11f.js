(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{356:function(t,a,e){"use strict";e.r(a);var s=e(2),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装-hexo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-hexo"}},[t._v("#")]),t._v(" 安装 Hexo")]),t._v(" "),e("p",[t._v("在安装 Hexo 之前，你需要安装以下两个工具：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("如果您已经安装好以上两个工具，可以直接跳转至 "),e("RouterLink",{attrs:{to:"/1-Hexo-install-and-config/1-2-install-hexo.html#安装-hexo-2"}},[t._v("安装 Hexo")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"安装-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[t._v("#")]),t._v(" 安装 Git")]),t._v(" "),e("ul",[e("li",[t._v("Windows：下载并安装 "),e("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("git"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[t._v("Mac：使用 "),e("a",{attrs:{href:"http://mxcl.github.com/homebrew/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Homebrew"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"http://www.macports.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MacPorts"),e("OutboundLink")],1),t._v(" ： "),e("code",[t._v("brew install git")]),t._v(" ; 或下载 "),e("a",{attrs:{href:"http://sourceforge.net/projects/git-osx-installer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装程序"),e("OutboundLink")],1),t._v(" 安装。")]),t._v(" "),e("li",[t._v("Linux (Ubuntu, Debian)： "),e("code",[t._v("sudo apt-get install git-core")])]),t._v(" "),e("li",[t._v("Linux (Fedora, Red Hat, CentOS)： "),e("code",[t._v("sudo yum install git-core")])]),t._v(" "),e("li",[t._v("Linux (Arch 系列)： "),e("code",[t._v("sudo pacman -S git")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),e("p",[t._v("由于墙的原因，从上面的链接下载 git for windows 最好挂上一个代理，否则下载速度十分缓慢。也可以参考"),e("a",{attrs:{href:"https://github.com/waylau/git-for-win",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个页面"),e("OutboundLink")],1),t._v("，收录了存储于百度云的下载地址。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提醒")]),t._v(" "),e("p",[t._v("如果你是 CentOS 服务器上的，可以直接使用 "),e("a",{attrs:{href:"https://github.com/PasserByJia/HexoOneClickInstallation",target:"_blank",rel:"noopener noreferrer"}},[t._v("HexoOneClickInstallation"),e("OutboundLink")],1),t._v(" 这个脚本快速安装 Hexo。")])]),t._v(" "),e("h2",{attrs:{id:"安装-node-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[t._v("#")]),t._v(" 安装 Node.js")]),t._v(" "),e("p",[t._v("安装 Node.js 的最佳方式是使用 "),e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("cURL:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://raw.github.com/creationix/nvm/v0.33.11/install.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),e("p",[t._v("Wget:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qO- https://raw.github.com/creationix/nvm/v0.33.11/install.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),e("p",[t._v("安装完成后，重启终端并执行下列命令即可安装 Node.js。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ nvm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" stable\n")])])]),e("p",[t._v("或者您也可以下载 "),e("a",{attrs:{href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装程序"),e("OutboundLink")],1),t._v(" 来安装。")]),t._v(" "),e("h2",{attrs:{id:"安装-hexo-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-hexo-2"}},[t._v("#")]),t._v(" 安装 Hexo")]),t._v(" "),e("p",[t._v("安装好后，即可使用 npm 完成 Hexo 的安装。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g hexo-cli\n")])])]),e("h2",{attrs:{id:"视频"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),e("dplayer",{attrs:{src:"https://dl.sm9.top/Video/EasyHexo/安装.mp4","danmaku-api":"https://danmaku.xwhite.studio/api/dplayer/","danmaku-id":"6EF601270CB011D781FD2E84D102EC60","danmaku-addition":"https://danmaku.xwhite.studio/api/dplayer/v3/bilibili?aid=34828870&p=1",subtitle:"https://dl.sm9.top/Video/EasyHexo/安装.vtt"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);