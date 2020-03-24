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
    "revision": "d079ce949456cb4afc93292f8fd25a2b"
  },
  {
    "url": "0-Intro/0-2-thanks.html",
    "revision": "277467d95b85b7ee81dadc151072d99a"
  },
  {
    "url": "0-Intro/index.html",
    "revision": "a571f63e37cd7bd932e260dd6dc0a693"
  },
  {
    "url": "1-Hexo-install-and-config/1-1-meet-hexo.html",
    "revision": "0d23340f8e12716c4b1e0a8042b5a8ad"
  },
  {
    "url": "1-Hexo-install-and-config/1-2-install-hexo.html",
    "revision": "42ed620ed668aecfbcbab4041f066136"
  },
  {
    "url": "1-Hexo-install-and-config/1-3-config-hexo.html",
    "revision": "37ce5ccee39c2acc9021341da6fdf06c"
  },
  {
    "url": "1-Hexo-install-and-config/1-4-deploy-hexo.html",
    "revision": "44255766b44e5e0539f2f2163307492d"
  },
  {
    "url": "1-Hexo-install-and-config/1-5-continuous-integration.html",
    "revision": "74c3db417ddbd44c851e5cfe6569f41b"
  },
  {
    "url": "1-Hexo-install-and-config/index.html",
    "revision": "22ef03d1da903e7cd45fa9f28334bc19"
  },
  {
    "url": "2-Theme-use-and-config/2-10-hexo-theme-indigo/index.html",
    "revision": "8e2d79989338aef3b8b283cbe90631e8"
  },
  {
    "url": "2-Theme-use-and-config/2-12-hexo-theme-icarus/index.html",
    "revision": "b7b473ef6cc95fab192c8b6aee3f8975"
  },
  {
    "url": "2-Theme-use-and-config/2-13-hexo-theme-fluid/index.html",
    "revision": "36f973b296c4455b4bcf4d9b99809533"
  },
  {
    "url": "2-Theme-use-and-config/2-14-hexo-theme-matery/index.html",
    "revision": "4a118d139fad0cc546c31c8bad0259d5"
  },
  {
    "url": "2-Theme-use-and-config/2-15-hexo-theme-journal/index.html",
    "revision": "5e567117b849e93589c3cf33ebf71182"
  },
  {
    "url": "2-Theme-use-and-config/2-16-hexo-theme-stun/index.html",
    "revision": "777d9802ee2005a31436ba1403b27c29"
  },
  {
    "url": "2-Theme-use-and-config/2-3-hexo-theme-yilia/index.html",
    "revision": "c53dd15e6cd22253d6aff14cb1fb176b"
  },
  {
    "url": "2-Theme-use-and-config/2-4-hexo-theme-apollo/index.html",
    "revision": "6cbd25e97bf507a6c4e7a52ddbe3c855"
  },
  {
    "url": "2-Theme-use-and-config/2-5-hexo-theme-material/index.html",
    "revision": "4092cacbd27c5a6edaa18557909ec2b9"
  },
  {
    "url": "2-Theme-use-and-config/2-6-hexo-theme-volantis/index.html",
    "revision": "11824eed20375e960d95c844708412e4"
  },
  {
    "url": "2-Theme-use-and-config/2-7-hexo-theme-bmw/index.html",
    "revision": "dea4f9e933b4d194980a2dbb52f94131"
  },
  {
    "url": "2-Theme-use-and-config/2-8-hexo-theme-aero-dual/index.html",
    "revision": "3b23f7ce81f755495c5a197e6a004723"
  },
  {
    "url": "2-Theme-use-and-config/2-9-hexo-theme-amber/index.html",
    "revision": "df0cdc4bfb5aa993fd945637abcc3f2b"
  },
  {
    "url": "2-Theme-use-and-config/index.html",
    "revision": "0e8da53abf870119bf181feacc710657"
  },
  {
    "url": "3-Plugins-use-and-config/3-1-hexo-tag-aplayer/index.html",
    "revision": "bb634dd716328df5e33fd73d5317cd9c"
  },
  {
    "url": "3-Plugins-use-and-config/3-2-hexo-tag-dplayer/index.html",
    "revision": "da301e998255a7778aadc01048fc4357"
  },
  {
    "url": "3-Plugins-use-and-config/3-3-hexo-helper-live2d/index.html",
    "revision": "87e5e7934a150a6e59e72b5f688537b0"
  },
  {
    "url": "3-Plugins-use-and-config/3-4-hexo-blog-encrypt/index.html",
    "revision": "77898cc09841c4e8b28b8b56a07635a7"
  },
  {
    "url": "3-Plugins-use-and-config/3-5-hexo-tag-mmedia/index.html",
    "revision": "6415a3996ad9c966551d4f73810e5618"
  },
  {
    "url": "3-Plugins-use-and-config/index.html",
    "revision": "07280e7f798343a7284ba8fba44907ed"
  },
  {
    "url": "4-High-order-hexo-gamer/4-1-remote-editing/index.html",
    "revision": "7baae2ad6ebf9b6c8d7a190168f2f4f5"
  },
  {
    "url": "4-High-order-hexo-gamer/4-2-theme-develop/index.html",
    "revision": "3edd2894e79b431eff3659ff8a716d68"
  },
  {
    "url": "4-High-order-hexo-gamer/index.html",
    "revision": "12719a129de230e5f4de9fe017d8c2aa"
  },
  {
    "url": "404.html",
    "revision": "5a702b3fd8319ebd8551bcb4d01a7de8"
  },
  {
    "url": "5-Add/5-1-quote.html",
    "revision": "9f629f11f6d860263379076f53963fbd"
  },
  {
    "url": "5-Add/5-2-yaml.html",
    "revision": "afef78c148a3d38b50cda0ff19ed8990"
  },
  {
    "url": "5-Add/5-3-data-file.html",
    "revision": "fd46be213b10ab8f44df9efd443ca16f"
  },
  {
    "url": "5-Add/index.html",
    "revision": "3b9da58dbb65f185c08d4feb9150976e"
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
    "url": "assets/img/1.83db3e4f.png",
    "revision": "83db3e4f508da2454c4c3835f4da4edd"
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
    "url": "assets/img/2.c8fd4268.png",
    "revision": "c8fd42689310dce36bb7bfce2d68de46"
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
    "url": "assets/js/10.9c1513a1.js",
    "revision": "bb0d9539506b6dc464d4721b6fc638df"
  },
  {
    "url": "assets/js/11.b04a27f3.js",
    "revision": "cc4c3adf0605e6c12b247fca214ba8a1"
  },
  {
    "url": "assets/js/12.1451cf7a.js",
    "revision": "b63663db457196d26489b928129e2c77"
  },
  {
    "url": "assets/js/13.61c35e20.js",
    "revision": "c57a70003c8c749ac54262de6a5d9b8f"
  },
  {
    "url": "assets/js/14.d8a7679b.js",
    "revision": "4aac12014c62940865a872c1b009cfbe"
  },
  {
    "url": "assets/js/15.62b7a0a5.js",
    "revision": "cfdaeaea35299050d61f806e04da0d29"
  },
  {
    "url": "assets/js/16.a3603d3d.js",
    "revision": "84b5985a166ef4b82a3595f309fe31d7"
  },
  {
    "url": "assets/js/17.e94d01a6.js",
    "revision": "8c46582d560651db38ee811d1cfd0834"
  },
  {
    "url": "assets/js/18.8f68df62.js",
    "revision": "b30a1a997f7632457198313f4a327ec9"
  },
  {
    "url": "assets/js/19.0c155749.js",
    "revision": "1260e6d4ef32a1897e8d721a898e4768"
  },
  {
    "url": "assets/js/20.57a37f6c.js",
    "revision": "fbd5451bef460f686b45b475c42df970"
  },
  {
    "url": "assets/js/21.921a2ac6.js",
    "revision": "70f18e2533ecc60f467b86bf2eff2dcb"
  },
  {
    "url": "assets/js/22.bd1263b1.js",
    "revision": "9704ee2278ecb69de2fec2387e1bf3dd"
  },
  {
    "url": "assets/js/23.fba43e56.js",
    "revision": "73c106790f3c154f4dd3c744b0eb485d"
  },
  {
    "url": "assets/js/24.e670e98b.js",
    "revision": "796715317bd5b1d0e2d5b63fd315872e"
  },
  {
    "url": "assets/js/25.daceb5ce.js",
    "revision": "53a61cf30d584b48ff3e130994a5f599"
  },
  {
    "url": "assets/js/26.8d830386.js",
    "revision": "438c48712f3b4acb7c0ee2cb522b01e2"
  },
  {
    "url": "assets/js/27.318921a2.js",
    "revision": "fc96d520d2a4f8fe112b22ea31231fc6"
  },
  {
    "url": "assets/js/28.9143683a.js",
    "revision": "768c3c73a262d4938d85cd6afdc0d26c"
  },
  {
    "url": "assets/js/29.b4b8002d.js",
    "revision": "b03fd03cd99868895f999fdd9f4fbf7f"
  },
  {
    "url": "assets/js/30.4eb4439d.js",
    "revision": "1e53012a1c593d370700db7c08064331"
  },
  {
    "url": "assets/js/31.d207faea.js",
    "revision": "28d58dacdb3776c50eccb97aaaa158c9"
  },
  {
    "url": "assets/js/32.2e75baf9.js",
    "revision": "556d0e6fcaa0477e7df9d6bc8b87e600"
  },
  {
    "url": "assets/js/33.853ed11f.js",
    "revision": "8cdd25481fff6e83fb70c497adbb5e4d"
  },
  {
    "url": "assets/js/34.4a5c01a4.js",
    "revision": "20c56c5f970514066c39b1fab793b848"
  },
  {
    "url": "assets/js/35.d09a5ba4.js",
    "revision": "b77e3a4c80d33ebbff7b895e1df92617"
  },
  {
    "url": "assets/js/36.3ab0082c.js",
    "revision": "b77847a68d110ce0de18265c9b01575f"
  },
  {
    "url": "assets/js/37.ebacac9d.js",
    "revision": "be0bcf319fe16fc9c322a6cf5fe313f5"
  },
  {
    "url": "assets/js/38.0f665c55.js",
    "revision": "68378d5b1f891bb0cfeab6f08b9d6684"
  },
  {
    "url": "assets/js/39.7f85bac9.js",
    "revision": "81f0b57db58a7377408ba603f86fbb78"
  },
  {
    "url": "assets/js/40.85e05143.js",
    "revision": "95f01df8745ec854361a65958f34b184"
  },
  {
    "url": "assets/js/41.1762d855.js",
    "revision": "c40676bcf6f5c6630544bc0fcb0f5f6c"
  },
  {
    "url": "assets/js/42.4e7fb2c0.js",
    "revision": "a4a43586be16720c056ee58ef9f4397c"
  },
  {
    "url": "assets/js/43.f14714c8.js",
    "revision": "027786923bcb3f59b270c2c10bac7b44"
  },
  {
    "url": "assets/js/44.ac34027c.js",
    "revision": "e5dde7dff1d2d744db0b0d0f045f8c61"
  },
  {
    "url": "assets/js/45.7089675a.js",
    "revision": "c234bc1f9c46bc3a88637b0c1e80cb0e"
  },
  {
    "url": "assets/js/46.1e822eee.js",
    "revision": "7c6cb5e08631083aeb2b12e15f50e998"
  },
  {
    "url": "assets/js/47.d2b9c621.js",
    "revision": "42bdf23adcebff8e4fad7950c5960c6e"
  },
  {
    "url": "assets/js/48.bd92fce6.js",
    "revision": "777e8cfb75cb3971e72858e3336e7d54"
  },
  {
    "url": "assets/js/49.2c863587.js",
    "revision": "0dadae287cc9c3498eb1e17ac0575043"
  },
  {
    "url": "assets/js/6.35995301.js",
    "revision": "6fae6ab915eb1399525729ebec8acf86"
  },
  {
    "url": "assets/js/7.048e7ff7.js",
    "revision": "5a1fa34f55bc9734bc9a81f7412cba16"
  },
  {
    "url": "assets/js/8.1093a2f4.js",
    "revision": "4dc60486de25f4a4fd83f50c6afdc096"
  },
  {
    "url": "assets/js/9.b30870e8.js",
    "revision": "bd7400b5fed7992394834d1e82e90848"
  },
  {
    "url": "assets/js/app.98c36e0e.js",
    "revision": "556f64e2bdcddccb2fef20031bb9f71f"
  },
  {
    "url": "assets/js/vendors~dplayer.fcb1aa74.js",
    "revision": "2abd7f4c83691a0580d53775276a5241"
  },
  {
    "url": "assets/js/vendors~leancloud-storage.71b5710a.js",
    "revision": "53c51918f80584cb6f7d890e09020f58"
  },
  {
    "url": "assets/js/vendors~valine.5f549902.js",
    "revision": "3c1953a87c3efe3b4353c746a6c2359e"
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
    "revision": "9c391b4e34e145ca613c3adb3ee2dcf3"
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
