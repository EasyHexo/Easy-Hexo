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
    "revision": "c70a533091cf4db4c594b09e740112d5"
  },
  {
    "url": "0-Intro/0-2-thanks.html",
    "revision": "db3a74136375d28cba6942551387c56b"
  },
  {
    "url": "0-Intro/index.html",
    "revision": "c9092ecabc8b94e827f1645f229717e0"
  },
  {
    "url": "1-Hexo-install-and-config/1-1-meet-hexo.html",
    "revision": "e7d27a3c71c5cb0fc0450ddfa97d72af"
  },
  {
    "url": "1-Hexo-install-and-config/1-2-install-hexo.html",
    "revision": "35ebd6e36fc2220e354b51d67259285c"
  },
  {
    "url": "1-Hexo-install-and-config/1-3-config-hexo.html",
    "revision": "7301754aaeab36af7655f4483a962bff"
  },
  {
    "url": "1-Hexo-install-and-config/1-4-deploy-hexo.html",
    "revision": "1aac136feb8346c9db99bef5227eaa1a"
  },
  {
    "url": "1-Hexo-install-and-config/1-5-continuous-integration.html",
    "revision": "e01e4107d2352f1d9b9b85eb7dae5eac"
  },
  {
    "url": "1-Hexo-install-and-config/index.html",
    "revision": "b3ef87c9ccef6501178ca5cf32aa79e3"
  },
  {
    "url": "2-Theme-use-and-config/2-1-hexo-theme-next-5.x.x/index.html",
    "revision": "e11d6b890eba7fd4576c23563badfd92"
  },
  {
    "url": "2-Theme-use-and-config/2-10-hexo-theme-indigo/index.html",
    "revision": "655c5de4159d6b26b774f48fbeaafef8"
  },
  {
    "url": "2-Theme-use-and-config/2-11-hexo-theme-melody/index.html",
    "revision": "08d5717e01503310b0a52421514c4366"
  },
  {
    "url": "2-Theme-use-and-config/2-12-hexo-theme-icarus/index.html",
    "revision": "e0a302255c48e91d4aa9fdaeaea92255"
  },
  {
    "url": "2-Theme-use-and-config/2-13-hexo-theme-fluid/index.html",
    "revision": "f1c8f2c3ed074cba3691f833ff4f6ca0"
  },
  {
    "url": "2-Theme-use-and-config/2-14-hexo-theme-matery/index.html",
    "revision": "c18ec105999ebc3403a786aae3ca30cb"
  },
  {
    "url": "2-Theme-use-and-config/2-15-hexo-theme-journal/index.html",
    "revision": "3f8464e2e3a57324fe055fecb551c7c5"
  },
  {
    "url": "2-Theme-use-and-config/2-16-hexo-theme-stun/index.html",
    "revision": "e556eadfe76dbe37bbdaf2c8cc7ae7ff"
  },
  {
    "url": "2-Theme-use-and-config/2-2-hexo-theme-next-6.x.x/index.html",
    "revision": "2284d2e4ce01ac30f41db925f2bf7d5d"
  },
  {
    "url": "2-Theme-use-and-config/2-3-hexo-theme-yilia/index.html",
    "revision": "d20d166f61b0f1bdb9834c3938ffd00e"
  },
  {
    "url": "2-Theme-use-and-config/2-4-hexo-theme-apollo/index.html",
    "revision": "4768dc94bdacc557e6b0deb7523a9625"
  },
  {
    "url": "2-Theme-use-and-config/2-5-hexo-theme-material/index.html",
    "revision": "99a9dcebf908b6733e66ef1d6c127750"
  },
  {
    "url": "2-Theme-use-and-config/2-6-hexo-theme-material-x/index.html",
    "revision": "a5e74afb8e6257c9d5c9e5da09e717e1"
  },
  {
    "url": "2-Theme-use-and-config/2-7-hexo-theme-bmw/index.html",
    "revision": "ee0ba039d849edc765206dd67f6908a0"
  },
  {
    "url": "2-Theme-use-and-config/2-8-hexo-theme-aero-dual/index.html",
    "revision": "3ce9f48df416664fca4cd3a8705cf29b"
  },
  {
    "url": "2-Theme-use-and-config/2-9-hexo-theme-amber/index.html",
    "revision": "7eee343d20e1dad3d7be00449e820513"
  },
  {
    "url": "2-Theme-use-and-config/index.html",
    "revision": "3dd5bb554b9a6963ca1726e7fc73ee77"
  },
  {
    "url": "3-Plugins-use-and-config/3-1-hexo-tag-aplayer/index.html",
    "revision": "b114bf608991269fddcab2e0ae0d2f05"
  },
  {
    "url": "3-Plugins-use-and-config/3-2-hexo-tag-dplayer/index.html",
    "revision": "59b2dd5a526b0341abf71b8e087631fd"
  },
  {
    "url": "3-Plugins-use-and-config/3-3-hexo-helper-live2d/index.html",
    "revision": "7abef6538ebbbe926fb1988b299e70d4"
  },
  {
    "url": "3-Plugins-use-and-config/3-4-hexo-blog-encrypt/index.html",
    "revision": "6766dc2c981e8833ae306a6e76e398e5"
  },
  {
    "url": "3-Plugins-use-and-config/3-5-hexo-tag-mmedia/index.html",
    "revision": "9daf1afa6036d00d84d42d50ea6ac7c8"
  },
  {
    "url": "3-Plugins-use-and-config/index.html",
    "revision": "07835c052a7aa2c8440662ec75fa6004"
  },
  {
    "url": "4-High-order-hexo-gamer/4-1-remote-editing/index.html",
    "revision": "8f135a7f7e230c6a195ecb84b34b42df"
  },
  {
    "url": "4-High-order-hexo-gamer/4-2-theme-develop/index.html",
    "revision": "2d3fbc16b871d43c86d2e5552a8e606b"
  },
  {
    "url": "4-High-order-hexo-gamer/index.html",
    "revision": "41726568cf7e9f32d2f7dee4b6639005"
  },
  {
    "url": "404.html",
    "revision": "b6b17c86f79d177e908f0f0b8bf4e423"
  },
  {
    "url": "5-Add/5-1-quote.html",
    "revision": "a5059ce8b2a226679a7d163e7ddc5104"
  },
  {
    "url": "5-Add/5-2-yaml.html",
    "revision": "64642414f3180803115d581423ffe7dd"
  },
  {
    "url": "5-Add/5-3-data-file.html",
    "revision": "6fb2ddcb12978c8e524febe6a9d40c9f"
  },
  {
    "url": "5-Add/index.html",
    "revision": "06502286feb09fae8af250d7f72f0494"
  },
  {
    "url": "assets/css/0.styles.e4967470.css",
    "revision": "70e1216adf4f0a6db3151ed525296dfd"
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
    "url": "assets/js/10.0038c381.js",
    "revision": "bd3e236652caaccb4e8b93f3bfb3e71f"
  },
  {
    "url": "assets/js/11.65e004fd.js",
    "revision": "bfecf32ac23d3a2b1a48855d012da462"
  },
  {
    "url": "assets/js/12.7037ba91.js",
    "revision": "0971ee04a3c77e27245e7ab05e84c402"
  },
  {
    "url": "assets/js/13.40840603.js",
    "revision": "054fdf794d129a6228fd993c2509d97e"
  },
  {
    "url": "assets/js/14.3237e030.js",
    "revision": "0f41bf0fcc9e23ece41f291432f3039c"
  },
  {
    "url": "assets/js/15.b5299aa6.js",
    "revision": "406c645fe238fdc421863de6e696b31b"
  },
  {
    "url": "assets/js/16.ff196b5d.js",
    "revision": "a3b01abd9c9f61fefbb7b690564ffec3"
  },
  {
    "url": "assets/js/17.98b45716.js",
    "revision": "5fe9deca5675e5e7714fd5baf48cd215"
  },
  {
    "url": "assets/js/18.1b53d4a8.js",
    "revision": "21da3f4847d08072639f05f050af9c72"
  },
  {
    "url": "assets/js/19.debfe9c1.js",
    "revision": "dee5c4a1563a516a8ec6e9855195723b"
  },
  {
    "url": "assets/js/20.cb592ca3.js",
    "revision": "4087d385abc50b050b1e4186390af843"
  },
  {
    "url": "assets/js/21.77e33e1a.js",
    "revision": "9e5b99b1809639c3fc06f746b9c614c9"
  },
  {
    "url": "assets/js/22.0e302153.js",
    "revision": "f0277219a0b1289815a70b5e1ed9a1e9"
  },
  {
    "url": "assets/js/23.df959b8d.js",
    "revision": "f1dc272902c06afba67a89b6aa62379a"
  },
  {
    "url": "assets/js/24.3beffb20.js",
    "revision": "053336089f2777f90c5fff498a85176b"
  },
  {
    "url": "assets/js/25.7aaf0531.js",
    "revision": "d07e896737bd273c18830d19e6f935f8"
  },
  {
    "url": "assets/js/26.89113025.js",
    "revision": "8928e8572c497fa7c13347e004d21397"
  },
  {
    "url": "assets/js/27.e5a9efcd.js",
    "revision": "afab07b234484b4b451202f1a8de74d6"
  },
  {
    "url": "assets/js/28.bdcc6ec6.js",
    "revision": "11ac56c8752a3b9711e08ea2d81d223b"
  },
  {
    "url": "assets/js/29.a776f658.js",
    "revision": "8fa3a23628399fb2b8d1a4d337de6229"
  },
  {
    "url": "assets/js/30.e7fdccac.js",
    "revision": "a8f9590bc781a2cafb745627ebb300dd"
  },
  {
    "url": "assets/js/31.f1d010ab.js",
    "revision": "ac90a9ab8e2d9cfc724e0fcd8c543700"
  },
  {
    "url": "assets/js/32.deb9d884.js",
    "revision": "5c89d1d11422c55bb7e32f145c6d0532"
  },
  {
    "url": "assets/js/33.593e55f0.js",
    "revision": "8023311cf9ad15b8c55eb3e50f04c59f"
  },
  {
    "url": "assets/js/34.f13db933.js",
    "revision": "3f4bf130b8021021a85e9062af4924a9"
  },
  {
    "url": "assets/js/35.b4aaee66.js",
    "revision": "7890a74fdc4438a6556f59d6b52053a3"
  },
  {
    "url": "assets/js/36.60d906f9.js",
    "revision": "2e22b929674bfa7672e154a6200a5288"
  },
  {
    "url": "assets/js/37.8dee28a4.js",
    "revision": "ef0ffea83145104325efee800f225969"
  },
  {
    "url": "assets/js/38.7b4ae9cf.js",
    "revision": "baef32142a6be055e61e42bc734f2e3c"
  },
  {
    "url": "assets/js/39.8c28fdc7.js",
    "revision": "72dcb80b3ff791f2ca987252a327266a"
  },
  {
    "url": "assets/js/40.3ea36caa.js",
    "revision": "00b823bb97bac11ea929394af2566f0b"
  },
  {
    "url": "assets/js/41.1dcf7ddd.js",
    "revision": "571dc276446431032db7c139c35b8c6c"
  },
  {
    "url": "assets/js/42.037330ee.js",
    "revision": "44c1aa666a509041b1a2d4789f78a696"
  },
  {
    "url": "assets/js/43.8570cd74.js",
    "revision": "1ec7ed049de096ff97e838e3b7af7c87"
  },
  {
    "url": "assets/js/44.95b9dd68.js",
    "revision": "28f13fa2ba3ee1bb98b37c0d35423315"
  },
  {
    "url": "assets/js/45.a8bba581.js",
    "revision": "4b50871b196a00d4429536dbdd4ad558"
  },
  {
    "url": "assets/js/46.eb2bf8ea.js",
    "revision": "58a3f129058ea6192428fb1011659527"
  },
  {
    "url": "assets/js/47.c27651cd.js",
    "revision": "cda3bdfb6bf075c2da7f8fb28f5c532b"
  },
  {
    "url": "assets/js/48.b978f1a6.js",
    "revision": "4b83230bea3c0a9559ba48fc135915db"
  },
  {
    "url": "assets/js/49.e3146519.js",
    "revision": "1664f3f874712d5361a5b0e64cb921d3"
  },
  {
    "url": "assets/js/50.d48650c1.js",
    "revision": "a94bae4910b1e08688a0bb3196b3d56f"
  },
  {
    "url": "assets/js/51.79b315df.js",
    "revision": "420019e23d701a30a4fcc4bfe405827b"
  },
  {
    "url": "assets/js/52.ca86ea56.js",
    "revision": "b948f37d76915240b5058fc4d4f73ac6"
  },
  {
    "url": "assets/js/6.edc05705.js",
    "revision": "f8ce948f312753dc53b3f7628b7d67b6"
  },
  {
    "url": "assets/js/7.0ff62ea1.js",
    "revision": "2f9a1a8fce84956954ced222de471642"
  },
  {
    "url": "assets/js/8.563943cb.js",
    "revision": "de8337dafa592ca9ee88979f8f0f368f"
  },
  {
    "url": "assets/js/9.e49bc0b3.js",
    "revision": "b2c5bc62bb8e15af59bd3b68c589f34f"
  },
  {
    "url": "assets/js/app.423d3599.js",
    "revision": "3f59ff928f493e9da040b2f17f3c0920"
  },
  {
    "url": "assets/js/vendors~dplayer.ec272c5d.js",
    "revision": "751738f62d73d13665b991e432d91371"
  },
  {
    "url": "assets/js/vendors~leancloud-storage.7eaefa08.js",
    "revision": "c41af13c920bbb03dbf1f50e55b2a7f0"
  },
  {
    "url": "assets/js/vendors~valine.82f32bc1.js",
    "revision": "f2150ef43e897db222ed1cf7073a8f00"
  },
  {
    "url": "favicon.png",
    "revision": "cdadd3d5566e73b5b42d7e19294cf73f"
  },
  {
    "url": "index.html",
    "revision": "bdd86a6bf41191d1a59fb57585b82267"
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
