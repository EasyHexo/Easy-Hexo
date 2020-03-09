/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0-Intro/0-1-member.html",
    "revision": "0f3fc8a03ba35fc4e68b0d705f6bad7c"
  },
  {
    "url": "0-Intro/0-2-thanks.html",
    "revision": "0b0d65dc486109ea5fd62888b9cfc18d"
  },
  {
    "url": "0-Intro/index.html",
    "revision": "27f019775affc6fe030d320f4e76d5e4"
  },
  {
    "url": "1-Hexo-install-and-config/1-1-meet-hexo.html",
    "revision": "7388f5fefd824738bc35e421256bd13b"
  },
  {
    "url": "1-Hexo-install-and-config/1-2-install-hexo.html",
    "revision": "fd6daa9674203a9c2df7ff514ecdec52"
  },
  {
    "url": "1-Hexo-install-and-config/1-3-config-hexo.html",
    "revision": "81f291bf00b960ae52ebd63bcb66893a"
  },
  {
    "url": "1-Hexo-install-and-config/1-4-deploy-hexo.html",
    "revision": "80c4817ed303be444c3ebad0447038a7"
  },
  {
    "url": "1-Hexo-install-and-config/1-5-continuous-integration.html",
    "revision": "436bc8bd6a95730e780b4fe2292efc03"
  },
  {
    "url": "1-Hexo-install-and-config/index.html",
    "revision": "17b5a07879f96fa0f6a2f942f72edfe9"
  },
  {
    "url": "2-Theme-use-and-config/2-10-hexo-theme-indigo/index.html",
    "revision": "b6babb3d4eb1275eea48c48042de4382"
  },
  {
    "url": "2-Theme-use-and-config/2-12-hexo-theme-icarus/index.html",
    "revision": "dbec0cbaa7a40b067de9b0f315160102"
  },
  {
    "url": "2-Theme-use-and-config/2-13-hexo-theme-fluid/index.html",
    "revision": "4b5beae570308f9179eb10ec86214b92"
  },
  {
    "url": "2-Theme-use-and-config/2-14-hexo-theme-matery/index.html",
    "revision": "0a297ff35e1041523b08b2776427bf88"
  },
  {
    "url": "2-Theme-use-and-config/2-15-hexo-theme-journal/index.html",
    "revision": "d2359ff462f048e44c0bc8a3f04c6683"
  },
  {
    "url": "2-Theme-use-and-config/2-16-hexo-theme-stun/index.html",
    "revision": "48dfe3d6a82785ead2f14e1189edf62a"
  },
  {
    "url": "2-Theme-use-and-config/2-3-hexo-theme-yilia/index.html",
    "revision": "752c621289f3414b19a5ff89397a5391"
  },
  {
    "url": "2-Theme-use-and-config/2-4-hexo-theme-apollo/index.html",
    "revision": "303440cd40dee62881d47c367c1dd1d1"
  },
  {
    "url": "2-Theme-use-and-config/2-5-hexo-theme-material/index.html",
    "revision": "c9c5fbefb23cd6ffa7e51c102f75e0f6"
  },
  {
    "url": "2-Theme-use-and-config/2-6-hexo-theme-volantis/index.html",
    "revision": "29594c9142a0d76e851126d7edd7b94e"
  },
  {
    "url": "2-Theme-use-and-config/2-7-hexo-theme-bmw/index.html",
    "revision": "8256a24258a8b490f61ebc6b8d4040a6"
  },
  {
    "url": "2-Theme-use-and-config/2-8-hexo-theme-aero-dual/index.html",
    "revision": "ef2be3fc46df6f16c3391b0a13a1f725"
  },
  {
    "url": "2-Theme-use-and-config/2-9-hexo-theme-amber/index.html",
    "revision": "ee4178f01b4d4c77ad81f41f786a6b1c"
  },
  {
    "url": "2-Theme-use-and-config/index.html",
    "revision": "c8204ba63c53da0418d76aff9c8082ff"
  },
  {
    "url": "3-Plugins-use-and-config/3-1-hexo-tag-aplayer/index.html",
    "revision": "f23db38e0c17294476dcc6c6a57c1059"
  },
  {
    "url": "3-Plugins-use-and-config/3-2-hexo-tag-dplayer/index.html",
    "revision": "0739592663c934f082fafaea8ed77133"
  },
  {
    "url": "3-Plugins-use-and-config/3-3-hexo-helper-live2d/index.html",
    "revision": "215dff42e9b1042240c653db5f1ff25f"
  },
  {
    "url": "3-Plugins-use-and-config/3-4-hexo-blog-encrypt/index.html",
    "revision": "69bf352b51bb2dccb48bdf85b70fea94"
  },
  {
    "url": "3-Plugins-use-and-config/3-5-hexo-tag-mmedia/index.html",
    "revision": "d6aaafd72c7e0d777b6a64672b4958c8"
  },
  {
    "url": "3-Plugins-use-and-config/index.html",
    "revision": "8ad721816428e629796e91673c021428"
  },
  {
    "url": "4-High-order-hexo-gamer/4-1-remote-editing/index.html",
    "revision": "3e9291f31b64a8fa1cd2a81f1e91522b"
  },
  {
    "url": "4-High-order-hexo-gamer/4-2-theme-develop/index.html",
    "revision": "beb447fee0b1d6400d3dd59548455590"
  },
  {
    "url": "4-High-order-hexo-gamer/index.html",
    "revision": "9b47b53162382e21b83c24166b0efb84"
  },
  {
    "url": "404.html",
    "revision": "700683c4e419c346120d458cd1e3f6c8"
  },
  {
    "url": "5-Add/5-1-quote.html",
    "revision": "f97517415c15e59409e2dc93dc250675"
  },
  {
    "url": "5-Add/5-2-yaml.html",
    "revision": "5f0d7cad1021c0d62f950ffa9a7c59f6"
  },
  {
    "url": "5-Add/5-3-data-file.html",
    "revision": "0454ed2f3b1c41e7883a77d8f171cf87"
  },
  {
    "url": "5-Add/index.html",
    "revision": "6589bafc2966b46cf13e705bc0f6a000"
  },
  {
    "url": "assets/css/0.styles.d0b59fb5.css",
    "revision": "e5c1161b10e21660d173b7c5e32a1b90"
  },
  {
    "url": "assets/img/0.9987079e.png",
    "revision": "9987079ef83b8cd188639288be0d055d"
  },
  {
    "url": "assets/img/1.0e612e45.png",
    "revision": "0e612e45a1db10fd9fc8caf7b52f3d87"
  },
  {
    "url": "assets/img/1.16d2c02b.png",
    "revision": "16d2c02bb9a77c729935e969550faf25"
  },
  {
    "url": "assets/img/1.2c388fd0.png",
    "revision": "2c388fd07174969a5345155f96dba892"
  },
  {
    "url": "assets/img/1.2e6dd9d5.png",
    "revision": "2e6dd9d5ed42921582e3e7873b358fad"
  },
  {
    "url": "assets/img/1.776b296b.png",
    "revision": "776b296b48a1181123003912ba508f77"
  },
  {
    "url": "assets/img/1.7fabd81a.png",
    "revision": "7fabd81a8b2a18a211e1b55496668751"
  },
  {
    "url": "assets/img/1.95f35ebd.png",
    "revision": "95f35ebdb8dcd249135128b761e35d6d"
  },
  {
    "url": "assets/img/1.a68f892b.png",
    "revision": "a68f892b70b93aa2740412f347958cbe"
  },
  {
    "url": "assets/img/1.bbbb12d9.png",
    "revision": "bbbb12d95d1ccad390a1860804526b42"
  },
  {
    "url": "assets/img/1.c1216b34.png",
    "revision": "c1216b3471faaef191754cd9c9c1d183"
  },
  {
    "url": "assets/img/1.cfa12bea.png",
    "revision": "cfa12bea13be6d688ca7c9c5a563aa43"
  },
  {
    "url": "assets/img/1.eb1f69ab.png",
    "revision": "eb1f69abe0673719ed14c1c6b7fe345e"
  },
  {
    "url": "assets/img/10.517d5994.png",
    "revision": "517d5994472336d04d81191702181e3f"
  },
  {
    "url": "assets/img/10.5fdb206a.png",
    "revision": "5fdb206aac64442f50d209cc72c8be50"
  },
  {
    "url": "assets/img/10.80128e03.png",
    "revision": "80128e03652ca9438c91f7dce1c90b7b"
  },
  {
    "url": "assets/img/10.e98a26a3.png",
    "revision": "e98a26a393c74dc445eafc615bcd675b"
  },
  {
    "url": "assets/img/11.47be8d56.png",
    "revision": "47be8d56e607a26125dec5b6be6f80b5"
  },
  {
    "url": "assets/img/11.71e65e62.png",
    "revision": "71e65e62cbee5d44aa7d0221d4162ab0"
  },
  {
    "url": "assets/img/11.ac6f4d77.png",
    "revision": "ac6f4d770436c63b778dddd111e573aa"
  },
  {
    "url": "assets/img/12.4c8b7a97.png",
    "revision": "4c8b7a97075f06fd682525aef8093e2e"
  },
  {
    "url": "assets/img/12.62f3c668.png",
    "revision": "62f3c6688ad8c409be9b7f356a3dd293"
  },
  {
    "url": "assets/img/12.ac140576.png",
    "revision": "ac14057606e61a8124bc268548767ae0"
  },
  {
    "url": "assets/img/13.17a60fd5.png",
    "revision": "17a60fd5552cdfc30a9858975bee3bce"
  },
  {
    "url": "assets/img/13.5db81f0b.png",
    "revision": "5db81f0b073532dde303b60991554204"
  },
  {
    "url": "assets/img/14.19f34406.png",
    "revision": "19f34406446073a6e7eca401cf48cfad"
  },
  {
    "url": "assets/img/14.1a54aafe.png",
    "revision": "1a54aafe7d5a9fad021619953e96baf4"
  },
  {
    "url": "assets/img/14.43e2f7f5.png",
    "revision": "43e2f7f58c4fcc46c58a70454838849c"
  },
  {
    "url": "assets/img/15.1e44da02.png",
    "revision": "1e44da022b5918ed074ec9786e9f704d"
  },
  {
    "url": "assets/img/15.3c87eb1b.png",
    "revision": "3c87eb1b59f316d42fa48cefe1ff1fad"
  },
  {
    "url": "assets/img/15.d44cdf60.png",
    "revision": "d44cdf609ad813f2ea9760a3beb21ae1"
  },
  {
    "url": "assets/img/16.a2a2c910.png",
    "revision": "a2a2c9107e81096b2649bcee46d53956"
  },
  {
    "url": "assets/img/16.c7e4f994.png",
    "revision": "c7e4f994f96e6b9e6d6032b4168e5d0f"
  },
  {
    "url": "assets/img/16.ddcba499.png",
    "revision": "ddcba499213b3d95c8df9472652f70f5"
  },
  {
    "url": "assets/img/17.c0578ef2.png",
    "revision": "c0578ef27268ff897a788df6b43052f9"
  },
  {
    "url": "assets/img/2.049741d4.png",
    "revision": "049741d471d08dc404da8d0779f79845"
  },
  {
    "url": "assets/img/2.107e3c9e.png",
    "revision": "107e3c9e2618e1e728a0717965a051e1"
  },
  {
    "url": "assets/img/2.149d458a.png",
    "revision": "149d458ad86c1f76913c9f42bc6d7737"
  },
  {
    "url": "assets/img/2.1e151513.png",
    "revision": "1e151513587cdc30fa98d1bf440db8df"
  },
  {
    "url": "assets/img/2.6d3439c9.png",
    "revision": "6d3439c9ba66d60abd62bfb5e5ec2b03"
  },
  {
    "url": "assets/img/2.7d2b56cb.png",
    "revision": "7d2b56cb538d6b3f1778f90cdd31688f"
  },
  {
    "url": "assets/img/2.88753113.png",
    "revision": "88753113b3b78ddd2258bddfecbbca47"
  },
  {
    "url": "assets/img/2.bdd49d13.png",
    "revision": "bdd49d13f209b1b94944ff20ddc70790"
  },
  {
    "url": "assets/img/2.be3f2e72.png",
    "revision": "be3f2e7288cfb2edf5303bb5352fe3fe"
  },
  {
    "url": "assets/img/2.ec9e979d.png",
    "revision": "ec9e979d625f0031aec3b3e2f19aba2e"
  },
  {
    "url": "assets/img/22.3e302c33.png",
    "revision": "3e302c33d450cfff0088441af0c8a177"
  },
  {
    "url": "assets/img/23.6b668244.png",
    "revision": "6b668244a4824060f1d9082aa683888c"
  },
  {
    "url": "assets/img/24.42b67844.png",
    "revision": "42b67844c0fd26b1d313959edd1b9a46"
  },
  {
    "url": "assets/img/25.1359572e.png",
    "revision": "1359572ef3d8ac62d2e3d7e50e09194b"
  },
  {
    "url": "assets/img/26.f9430540.png",
    "revision": "f9430540bbb5a0bd765ed3d5cfa3c47b"
  },
  {
    "url": "assets/img/28.fc750073.png",
    "revision": "fc750073d53a4b662bef47b0250b12a3"
  },
  {
    "url": "assets/img/29.ab5339d7.png",
    "revision": "ab5339d71dc28a519fa2c24068a0eb34"
  },
  {
    "url": "assets/img/3.3025ffba.png",
    "revision": "3025ffba3c5ad094a9711b95f9b45dc7"
  },
  {
    "url": "assets/img/3.56f6fdb4.png",
    "revision": "56f6fdb456c7a34e11165b65e744adf0"
  },
  {
    "url": "assets/img/3.59bd3843.png",
    "revision": "59bd3843ea9d96ca55cce6980b19ac82"
  },
  {
    "url": "assets/img/3.7f737e5e.png",
    "revision": "7f737e5e37049b8543f8b41fe243524c"
  },
  {
    "url": "assets/img/3.ce1afbcb.png",
    "revision": "ce1afbcb86164bac83927e6ee21b480f"
  },
  {
    "url": "assets/img/3.d2897cc6.png",
    "revision": "d2897cc6cd1b74b9db15b32d4aa9cad6"
  },
  {
    "url": "assets/img/3.dfc7d048.png",
    "revision": "dfc7d04895ef89ce817a07b001e7fdb0"
  },
  {
    "url": "assets/img/3.ea634515.png",
    "revision": "ea634515dfca37dff4a1485c71503639"
  },
  {
    "url": "assets/img/30.516b44eb.png",
    "revision": "516b44eb892a3e53e01c0d1176f94ca1"
  },
  {
    "url": "assets/img/31.cb2ef1a1.png",
    "revision": "cb2ef1a16bb6e7a731a3ad58c449e94e"
  },
  {
    "url": "assets/img/32.a7d39f35.png",
    "revision": "a7d39f3573cc8a3a4e880f08550d17e9"
  },
  {
    "url": "assets/img/4.19674824.png",
    "revision": "196748246bea4013ac7a45b6eef85dcb"
  },
  {
    "url": "assets/img/4.1e986323.png",
    "revision": "1e986323f99ac408b20b1d69512490ef"
  },
  {
    "url": "assets/img/4.4ab46c6e.png",
    "revision": "4ab46c6ece6007d38ed1b1731ad42cc2"
  },
  {
    "url": "assets/img/4.627b29db.png",
    "revision": "627b29db735a2637bdad5bd53ae314a2"
  },
  {
    "url": "assets/img/4.d771774c.png",
    "revision": "d771774cc8d4850d29ee7cbd0540043f"
  },
  {
    "url": "assets/img/5.0433a5dc.png",
    "revision": "0433a5dc9aa85dfb6232e4efd14e8fa4"
  },
  {
    "url": "assets/img/5.253d379d.png",
    "revision": "253d379d0cf036d510250bc8347361d0"
  },
  {
    "url": "assets/img/5.53d5a8ac.png",
    "revision": "53d5a8ac6b25263aba3cbfefc1a85f26"
  },
  {
    "url": "assets/img/5.94a64962.png",
    "revision": "94a64962a2e331856b657486d7bc2601"
  },
  {
    "url": "assets/img/5.c1884f10.png",
    "revision": "c1884f10193c1fd2a8953ed52b83db9c"
  },
  {
    "url": "assets/img/6.42a038d2.png",
    "revision": "42a038d2b3d8e87a2561c52aadaea15f"
  },
  {
    "url": "assets/img/6.bc161dc5.png",
    "revision": "bc161dc5daa3655ccd5f97638051e1b4"
  },
  {
    "url": "assets/img/6.de847d46.png",
    "revision": "de847d4684ca2dbcd9bfcd7073d2235b"
  },
  {
    "url": "assets/img/6.f223bd87.png",
    "revision": "f223bd87d25fefde06f33f433763e17f"
  },
  {
    "url": "assets/img/7.36beed78.png",
    "revision": "36beed786e2dbb5d507e6a2c431bac34"
  },
  {
    "url": "assets/img/7.434ba293.png",
    "revision": "434ba2935432c97379a085b6195b8ba5"
  },
  {
    "url": "assets/img/7.46fbcaab.png",
    "revision": "46fbcaab57cc8c19e052b9d04b176d50"
  },
  {
    "url": "assets/img/7.cb05f646.jpg",
    "revision": "cb05f64647f7073ad56355f801c7c802"
  },
  {
    "url": "assets/img/8.13875c8c.png",
    "revision": "13875c8ced102625bdaf31e3e4ba6bf9"
  },
  {
    "url": "assets/img/8.a7c138db.png",
    "revision": "a7c138dbaec9d5d9bf05540b9f8ef00d"
  },
  {
    "url": "assets/img/8.c15f7ae8.png",
    "revision": "c15f7ae8bfdc988e4b690e2621e2b2b2"
  },
  {
    "url": "assets/img/9.16d2c02b.png",
    "revision": "16d2c02bb9a77c729935e969550faf25"
  },
  {
    "url": "assets/img/9.2ce92c31.png",
    "revision": "2ce92c31e115b0dda14ef4dd868169f1"
  },
  {
    "url": "assets/img/9.71844f46.png",
    "revision": "71844f46b18e9fd43f559c8b45e4dfb5"
  },
  {
    "url": "assets/img/9.958a4b0c.png",
    "revision": "958a4b0ccc996a781520beff27d29d58"
  },
  {
    "url": "assets/img/icaruslogo.5efd3090.svg",
    "revision": "5efd3090dd7645ea01bde2af13768798"
  },
  {
    "url": "assets/img/logo.859dcbfb.png",
    "revision": "859dcbfb6f273b6a6bfe535225b231c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.758a4c47.js",
    "revision": "b30fb09e058a7525a59beabf12ad5ba8"
  },
  {
    "url": "assets/js/10.e8590999.js",
    "revision": "d139cfc0720ad0f66e4ee63962409779"
  },
  {
    "url": "assets/js/11.6ace7bf2.js",
    "revision": "d832be23f6f5b643ec1c2edc7bb5bff5"
  },
  {
    "url": "assets/js/12.ad1c0cd5.js",
    "revision": "027880900ceb17bd3be44497bc663219"
  },
  {
    "url": "assets/js/13.4799b6a1.js",
    "revision": "35e457cb620e4caa3a9c006145faf8a8"
  },
  {
    "url": "assets/js/14.adff709e.js",
    "revision": "b9e008c01adba052a7f8f1150b740a33"
  },
  {
    "url": "assets/js/15.d8ee798d.js",
    "revision": "bf669109291aa19d67bb7f3a47ce9db8"
  },
  {
    "url": "assets/js/16.aad711a3.js",
    "revision": "98da35bd7f5cad363d74f560d07c6cb6"
  },
  {
    "url": "assets/js/17.09ceb41f.js",
    "revision": "0728902c0edcdbc4cefe55bd75bbbe06"
  },
  {
    "url": "assets/js/18.4c8ec89b.js",
    "revision": "e14769ed38cd2f8d1a25f6170154b23c"
  },
  {
    "url": "assets/js/19.1c6a3e80.js",
    "revision": "d0f99b0916fab9701bfbdfc9117d82be"
  },
  {
    "url": "assets/js/20.69b449d1.js",
    "revision": "60242998bb00cdb3daa4e6590b2a5cb8"
  },
  {
    "url": "assets/js/21.11bcdcf8.js",
    "revision": "66793e73b8f79b0908a122d863102e8f"
  },
  {
    "url": "assets/js/22.cec99004.js",
    "revision": "cc3844d8432342f5558bd57bd2333d88"
  },
  {
    "url": "assets/js/23.9dd56c9a.js",
    "revision": "7116d925e07ee36e2c51d9863049fb9a"
  },
  {
    "url": "assets/js/24.26097236.js",
    "revision": "3593db72d644c2ab5ee6891f87a7b111"
  },
  {
    "url": "assets/js/25.18fe3163.js",
    "revision": "36b85c39f93933b7839d82b90ea31d88"
  },
  {
    "url": "assets/js/26.89113025.js",
    "revision": "8928e8572c497fa7c13347e004d21397"
  },
  {
    "url": "assets/js/27.8ba247a3.js",
    "revision": "9c50fa3c925b1385636008a99897d2f5"
  },
  {
    "url": "assets/js/28.24a42e9e.js",
    "revision": "e6a5181b6594173021131bab955148b9"
  },
  {
    "url": "assets/js/29.9b5af5e1.js",
    "revision": "6ae7fa04153cee68902f9e5f72c39cb7"
  },
  {
    "url": "assets/js/30.fe9304ae.js",
    "revision": "df1f0932589d1649587e9b2bf3efc5cd"
  },
  {
    "url": "assets/js/31.caece0b7.js",
    "revision": "5c2946d0f0365e4921b816a3e4079958"
  },
  {
    "url": "assets/js/32.2ddc37b9.js",
    "revision": "8bd154c80af60d73d9723aacc3992da5"
  },
  {
    "url": "assets/js/33.98faafa4.js",
    "revision": "a162d8c6b1b0a6a382c6364291e7d1fb"
  },
  {
    "url": "assets/js/34.c6ec65db.js",
    "revision": "5155eba31bac32d554da63bd2f40a65d"
  },
  {
    "url": "assets/js/35.feedfeee.js",
    "revision": "f46197ac9182d0f6313c42557e7c1a6f"
  },
  {
    "url": "assets/js/36.0c70775d.js",
    "revision": "ba7f0696a017d0103338c5c1635422a1"
  },
  {
    "url": "assets/js/37.5b2d4802.js",
    "revision": "52531295eb3fc974e7077cd10837db3b"
  },
  {
    "url": "assets/js/38.484c8754.js",
    "revision": "e1836b429950a520da82da5def739a5d"
  },
  {
    "url": "assets/js/39.120c62fc.js",
    "revision": "94fbef7934698ae070b9cbd6ae14983d"
  },
  {
    "url": "assets/js/40.88c7f757.js",
    "revision": "56ad733d535f4f8c1d19aeb0c30e91f5"
  },
  {
    "url": "assets/js/41.d6b9ddb5.js",
    "revision": "ba24adcd3ff790b8e228aaad82c5e511"
  },
  {
    "url": "assets/js/42.c3703e4c.js",
    "revision": "9bd4e0c28ed540f57c8afa0fc2d7c6a7"
  },
  {
    "url": "assets/js/43.6db2cbbe.js",
    "revision": "c8e7c513648ed29b28a5abeae488e3a1"
  },
  {
    "url": "assets/js/44.0656560c.js",
    "revision": "11b909262bf0584878153207dbd6b485"
  },
  {
    "url": "assets/js/45.f6eddaa1.js",
    "revision": "8e4df6e84c4336872d171f6471653a3c"
  },
  {
    "url": "assets/js/46.2677573d.js",
    "revision": "4c2c25baaf11a148e98cde09f957a233"
  },
  {
    "url": "assets/js/47.2e5ae0d4.js",
    "revision": "0ef369e43a746f558767e03c42f16d10"
  },
  {
    "url": "assets/js/48.61ee2e64.js",
    "revision": "a09d188b5e82d02ec86c277745aa38c3"
  },
  {
    "url": "assets/js/49.49f4c643.js",
    "revision": "a2fb8189fb0472699dda5a9e82746ec0"
  },
  {
    "url": "assets/js/6.1e82657c.js",
    "revision": "827c56234b110ba61b15e62c20f43c0f"
  },
  {
    "url": "assets/js/7.50febeb5.js",
    "revision": "d36be46d72772b80b076cb3e10f9cdf4"
  },
  {
    "url": "assets/js/8.46120a69.js",
    "revision": "85bdec78becef2b785d2dc5d71bf0613"
  },
  {
    "url": "assets/js/9.cf5d2a14.js",
    "revision": "d09712ddea1cd32f46aae2d7171a4b55"
  },
  {
    "url": "assets/js/app.468e943d.js",
    "revision": "9ce7c81d5eea368f137cd0d0715cf689"
  },
  {
    "url": "assets/js/vendors~dplayer.42b7eb83.js",
    "revision": "07df513987e31558088b8ccc07e551e1"
  },
  {
    "url": "assets/js/vendors~leancloud-storage.1f24b279.js",
    "revision": "8d4480eebda4963eda05801762daeb21"
  },
  {
    "url": "assets/js/vendors~valine.f330106f.js",
    "revision": "6b00b7d2dfe615145a39da18538fd5a3"
  },
  {
    "url": "EasyHexo.png",
    "revision": "2b73cdc86773d2058e670c2c7562e5a9"
  },
  {
    "url": "favicon.png",
    "revision": "3ea06c165f31605820e0475d73481a58"
  },
  {
    "url": "index.html",
    "revision": "fd8b7baac1834a75f46ff936bfaa131b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
