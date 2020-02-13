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
    "revision": "70ae0d4f82490b741dcbd0fe15dc558f"
  },
  {
    "url": "0-Intro/0-2-thanks.html",
    "revision": "7c020e6eb8ffa842ae2be1cfd0ce91d3"
  },
  {
    "url": "0-Intro/index.html",
    "revision": "cbd0860fda96df53d92b9f16cab98c0b"
  },
  {
    "url": "1-Hexo-install-and-config/1-1-meet-hexo.html",
    "revision": "338cf17825de06074da155579c45cad4"
  },
  {
    "url": "1-Hexo-install-and-config/1-2-install-hexo.html",
    "revision": "31d18f01c355e66bb3ce5cb727192292"
  },
  {
    "url": "1-Hexo-install-and-config/1-3-config-hexo.html",
    "revision": "26abc601dfa0b55cec2c835e5182606c"
  },
  {
    "url": "1-Hexo-install-and-config/1-4-deploy-hexo.html",
    "revision": "2264589e6d676e8fbc2c88dbf3d723d1"
  },
  {
    "url": "1-Hexo-install-and-config/1-5-continuous-integration.html",
    "revision": "13c8d257937416c0140ac7c6ebd0b1d8"
  },
  {
    "url": "1-Hexo-install-and-config/index.html",
    "revision": "d8e3da0d893c9127e48084f06e91222c"
  },
  {
    "url": "2-Theme-use-and-config/2-1-hexo-theme-next-5.x.x/index.html",
    "revision": "72c7b1db61f6686d3672227554262b6d"
  },
  {
    "url": "2-Theme-use-and-config/2-10-hexo-theme-indigo/index.html",
    "revision": "9232fa2d8d95c6a6edbed59b259b16c4"
  },
  {
    "url": "2-Theme-use-and-config/2-11-hexo-theme-melody/index.html",
    "revision": "583d5ad48c7871668da53c945d247a9c"
  },
  {
    "url": "2-Theme-use-and-config/2-12-hexo-theme-icarus/index.html",
    "revision": "8841af2c17ee15e0afbdf547289a16bc"
  },
  {
    "url": "2-Theme-use-and-config/2-13-hexo-theme-fluid/index.html",
    "revision": "088c801c8049ded9fba4601acbd5bf50"
  },
  {
    "url": "2-Theme-use-and-config/2-14-hexo-theme-matery/index.html",
    "revision": "063d19d0358062406209ad9d560e8310"
  },
  {
    "url": "2-Theme-use-and-config/2-15-hexo-theme-journal/index.html",
    "revision": "f04766f7ea75e7f80c8e123c6c5cbd1f"
  },
  {
    "url": "2-Theme-use-and-config/2-16-hexo-theme-stun/index.html",
    "revision": "26a535be17a6af7b2d6333a77d2666b0"
  },
  {
    "url": "2-Theme-use-and-config/2-2-hexo-theme-next-6.x.x/index.html",
    "revision": "669ac6111f7f9561311ceee981bea2e1"
  },
  {
    "url": "2-Theme-use-and-config/2-3-hexo-theme-yilia/index.html",
    "revision": "82d8a2b9bc8811607d6211e584c81ec3"
  },
  {
    "url": "2-Theme-use-and-config/2-4-hexo-theme-apollo/index.html",
    "revision": "2928b9de5148e6243e5cd58ee5f5e849"
  },
  {
    "url": "2-Theme-use-and-config/2-5-hexo-theme-material/index.html",
    "revision": "72bc678997ac1252fcaea8201b841bad"
  },
  {
    "url": "2-Theme-use-and-config/2-6-hexo-theme-material-x/index.html",
    "revision": "66e35564c4b57b5e71347fdc1466c17d"
  },
  {
    "url": "2-Theme-use-and-config/2-7-hexo-theme-bmw/index.html",
    "revision": "71d78e8a1e16e091d303725d02fe0096"
  },
  {
    "url": "2-Theme-use-and-config/2-8-hexo-theme-aero-dual/index.html",
    "revision": "2e1ceac0a828d9169531f97641d7b2c5"
  },
  {
    "url": "2-Theme-use-and-config/2-9-hexo-theme-amber/index.html",
    "revision": "9e19b358a37503dc77e2ed49a2834dca"
  },
  {
    "url": "2-Theme-use-and-config/index.html",
    "revision": "8231ba7d279449b18275f0c917dba686"
  },
  {
    "url": "3-Plugins-use-and-config/3-1-hexo-tag-aplayer/index.html",
    "revision": "83b43d4b3c48515eb5b13d3d466d8cf4"
  },
  {
    "url": "3-Plugins-use-and-config/3-2-hexo-tag-dplayer/index.html",
    "revision": "bf6d979e32998c253cee57fe4c31c2b4"
  },
  {
    "url": "3-Plugins-use-and-config/3-3-hexo-helper-live2d/index.html",
    "revision": "8a2342565f61bfb0b3d3ef8086599819"
  },
  {
    "url": "3-Plugins-use-and-config/3-4-hexo-blog-encrypt/index.html",
    "revision": "c358451cfbf7b3c260f1fe75a15d4c7e"
  },
  {
    "url": "3-Plugins-use-and-config/index.html",
    "revision": "8db0a81108c9ac06948f0e1d1db9fde9"
  },
  {
    "url": "4-High-order-hexo-gamer/4-1-remote-editing/index.html",
    "revision": "d70b2062f948d642bad676e368af9095"
  },
  {
    "url": "4-High-order-hexo-gamer/4-2-theme-develop/index.html",
    "revision": "1a3a2be69c13f98ebf40dd18449b6a39"
  },
  {
    "url": "4-High-order-hexo-gamer/index.html",
    "revision": "d5f17c1b7b314d1580d78e8de413986d"
  },
  {
    "url": "404.html",
    "revision": "c2be09ff7691c3e42474ad74f32c806e"
  },
  {
    "url": "5-Add/5-1-quote.html",
    "revision": "aeac4bbafa2f818409aa1bc2a6cc3eca"
  },
  {
    "url": "5-Add/5-2-yaml.html",
    "revision": "5b72222563683c84c700d6fdd26abf16"
  },
  {
    "url": "5-Add/5-3-data-file.html",
    "revision": "039f293409352017cb9551fea59acaca"
  },
  {
    "url": "5-Add/index.html",
    "revision": "92ed4bc9ec1cd65b7af408ad86962e15"
  },
  {
    "url": "assets/css/0.styles.fd04ded7.css",
    "revision": "8544bde9adf931f739b3cbba900d0200"
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
    "url": "assets/img/1.4fa33170.png",
    "revision": "4fa3317038e81cde72571978f7e102e2"
  },
  {
    "url": "assets/img/1.651f21a2.png",
    "revision": "651f21a2429d1f8024f49c7d5e60cde8"
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
    "url": "assets/img/2.5befaf8f.png",
    "revision": "5befaf8fb9e48bc6bf7200bafaabc074"
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
    "url": "assets/img/2.e9252a34.png",
    "revision": "e9252a346566993759bc52dceca05fe1"
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
    "url": "assets/img/logo.46a8e342.png",
    "revision": "46a8e342448fbba2b0610c5ba43993b4"
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
    "url": "assets/js/10.19bc9c06.js",
    "revision": "316cf9f75ed47df4520b16665c0dd990"
  },
  {
    "url": "assets/js/11.a10187a2.js",
    "revision": "f8af438c8e5844b5bed3c9da5893db44"
  },
  {
    "url": "assets/js/12.41021f89.js",
    "revision": "3c7cc9c609916b42271c1aeae48b2bba"
  },
  {
    "url": "assets/js/13.61dbe9c7.js",
    "revision": "b504269cebcbf37086997a6d04981c5e"
  },
  {
    "url": "assets/js/14.cc11d3ba.js",
    "revision": "9516c35021ab7f23b73e3efc8a367c73"
  },
  {
    "url": "assets/js/15.f971360f.js",
    "revision": "89f9a46ead5c1a61d31a35a32bf7f5bd"
  },
  {
    "url": "assets/js/16.6f75d793.js",
    "revision": "5883678fc2312bb0922f1cc34a16d179"
  },
  {
    "url": "assets/js/17.0b41cbb8.js",
    "revision": "ede7b67193e642aa41e0433eaca4384a"
  },
  {
    "url": "assets/js/18.bb47554a.js",
    "revision": "69b8db7d49d0d943f51b7e05cf190361"
  },
  {
    "url": "assets/js/19.0bcd50c9.js",
    "revision": "f6566b574247bd1eb019c6a6031ca1a2"
  },
  {
    "url": "assets/js/20.992f8087.js",
    "revision": "a1c89ef1a20e87fb4e872b4a1502d2a9"
  },
  {
    "url": "assets/js/21.5cdf9b11.js",
    "revision": "d6c3eb7e722bfdab503a3b92841228d3"
  },
  {
    "url": "assets/js/22.7ebaa19e.js",
    "revision": "69b65cacdc97b248c3cf6ae18546354f"
  },
  {
    "url": "assets/js/23.d1dbf729.js",
    "revision": "b1b6356157c3b2b8fd33d29792985814"
  },
  {
    "url": "assets/js/24.cbc64ba1.js",
    "revision": "0065fcf4aa99fe9117a77d392f22424c"
  },
  {
    "url": "assets/js/25.a05ea585.js",
    "revision": "940656185df18fc505bd3c1f717806c3"
  },
  {
    "url": "assets/js/26.e06f6027.js",
    "revision": "2216bfa5fabe92fcf30fc695dc7d2a9c"
  },
  {
    "url": "assets/js/27.17ad94a9.js",
    "revision": "44fc033ef806d53505b646e58a79689b"
  },
  {
    "url": "assets/js/28.09876e96.js",
    "revision": "0a3f34d0f86780c16f471781e21a7831"
  },
  {
    "url": "assets/js/29.9f8d193e.js",
    "revision": "b44c97c184ca753ee435b58b61ace262"
  },
  {
    "url": "assets/js/30.42131eac.js",
    "revision": "5d9faabb4ada8c810229250d611ebb60"
  },
  {
    "url": "assets/js/31.23b8ac46.js",
    "revision": "64c25e2a1046ecd8042aae43e72f2ee3"
  },
  {
    "url": "assets/js/32.565a7129.js",
    "revision": "2eb5427b48fd9fc4d465d4d97ae13707"
  },
  {
    "url": "assets/js/33.ed816255.js",
    "revision": "123ed69a7414713aeb1672df4cd0036f"
  },
  {
    "url": "assets/js/34.d11a2c33.js",
    "revision": "761b467963c958aacab937743052d844"
  },
  {
    "url": "assets/js/35.8543db42.js",
    "revision": "f8f0d3601db01176ed75b05bb9e73294"
  },
  {
    "url": "assets/js/36.68a1c2dd.js",
    "revision": "fadac73b3d6bf6111e805b84bd1ae9cf"
  },
  {
    "url": "assets/js/37.2611fe7a.js",
    "revision": "99b90fa1321fba2cb8f74ecb86152e25"
  },
  {
    "url": "assets/js/38.e9ca79b5.js",
    "revision": "de65084171249582d2eb2fa7cbb9e4c5"
  },
  {
    "url": "assets/js/39.2416af03.js",
    "revision": "1239b9c426d8dc945191824751fcc3ea"
  },
  {
    "url": "assets/js/40.773f550c.js",
    "revision": "ce0b1b23e679f288a273593f90113841"
  },
  {
    "url": "assets/js/41.b9ed2dd0.js",
    "revision": "a90fd084994094756ac20eaa36236ccf"
  },
  {
    "url": "assets/js/42.a0b92934.js",
    "revision": "8c328208a4367e33679c80d5f117fc4e"
  },
  {
    "url": "assets/js/43.cf899288.js",
    "revision": "2ff08cd4a8d2839f7ba28688daddd0e7"
  },
  {
    "url": "assets/js/44.6eb0e1cb.js",
    "revision": "36e1d0a6d94eb58090cb71623bd9ea33"
  },
  {
    "url": "assets/js/45.a7ffbf09.js",
    "revision": "fb8c002459b72c28b0b7894e01ab48ed"
  },
  {
    "url": "assets/js/46.9fef32c5.js",
    "revision": "0858970fe575c3177bb6b66d4642e3f3"
  },
  {
    "url": "assets/js/47.d7c6a6f6.js",
    "revision": "6a9db20bd3bbbb3720b5eb670da8ff9c"
  },
  {
    "url": "assets/js/48.4db50fbe.js",
    "revision": "66f225a9c9b33ab93d85d05f9b8e0c80"
  },
  {
    "url": "assets/js/49.97a24199.js",
    "revision": "d61332a265b4ebafe259ff72f8f48a19"
  },
  {
    "url": "assets/js/50.e48a0571.js",
    "revision": "ba5cad5e56ec036b92525cd7fcecf761"
  },
  {
    "url": "assets/js/51.11ecd9cd.js",
    "revision": "9e4bcee8fae5264639bca869f42b1c27"
  },
  {
    "url": "assets/js/6.b1d0335e.js",
    "revision": "827c56234b110ba61b15e62c20f43c0f"
  },
  {
    "url": "assets/js/7.c4b25860.js",
    "revision": "0f87ea1ef114fd2987033c7d849730b3"
  },
  {
    "url": "assets/js/8.f9b6b4e0.js",
    "revision": "2ce5293069240176690f677fd548d07f"
  },
  {
    "url": "assets/js/9.6e46e977.js",
    "revision": "70cd8584820aa7319935430af8891a8d"
  },
  {
    "url": "assets/js/app.daed65c0.js",
    "revision": "64094fdd03f655d6a4ac578493659507"
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
    "url": "favicon.png",
    "revision": "cdadd3d5566e73b5b42d7e19294cf73f"
  },
  {
    "url": "index.html",
    "revision": "aec2f46dc9e19f7c5a45631eb04b4c68"
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
