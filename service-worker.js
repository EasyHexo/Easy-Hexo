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
    "revision": "6bcbbdcae695686ad1a478fba2ef5883"
  },
  {
    "url": "0-Intro/0-2-thanks.html",
    "revision": "5e076f1567cc88f336cf9d08158ad8ee"
  },
  {
    "url": "0-Intro/index.html",
    "revision": "e15cdf6c30f14b0960e99a0e9adbfe16"
  },
  {
    "url": "1-Hexo-install-and-config/1-1-meet-hexo.html",
    "revision": "ecce004a005ae9eb8922c7e1f52d0231"
  },
  {
    "url": "1-Hexo-install-and-config/1-2-install-hexo.html",
    "revision": "2db22740b1db29d39374d7de4828d1d5"
  },
  {
    "url": "1-Hexo-install-and-config/1-3-config-hexo.html",
    "revision": "060b349feddc3f86fdc62b5950d85c40"
  },
  {
    "url": "1-Hexo-install-and-config/1-4-deploy-hexo.html",
    "revision": "2c93e4e8e81daf0018e60568a841f0a9"
  },
  {
    "url": "1-Hexo-install-and-config/1-5-continuous-integration.html",
    "revision": "a8cee9d1740534d6a214072d5f6ec18d"
  },
  {
    "url": "1-Hexo-install-and-config/index.html",
    "revision": "9e30ab5c98909483df77908c67f0c4a4"
  },
  {
    "url": "2-Theme-use-and-config/2-10-hexo-theme-indigo/index.html",
    "revision": "6b3ce63dcd5c40d15fdea1ce8526b3b7"
  },
  {
    "url": "2-Theme-use-and-config/2-12-hexo-theme-icarus/index.html",
    "revision": "fd6b73abdc7e2cc756b7d9982dc1234c"
  },
  {
    "url": "2-Theme-use-and-config/2-13-hexo-theme-fluid/index.html",
    "revision": "fa4410043e1f8a114bed0edc1b0d8a4c"
  },
  {
    "url": "2-Theme-use-and-config/2-14-hexo-theme-matery/index.html",
    "revision": "d1512212d95efa831a29bbae182b6cde"
  },
  {
    "url": "2-Theme-use-and-config/2-15-hexo-theme-journal/index.html",
    "revision": "9877c308b572a965e28a3469268f1af2"
  },
  {
    "url": "2-Theme-use-and-config/2-16-hexo-theme-stun/index.html",
    "revision": "246d10e022148c4b7aab7f5e477c5e94"
  },
  {
    "url": "2-Theme-use-and-config/2-3-hexo-theme-yilia/index.html",
    "revision": "6ba401d4919053016d47e93002d125a1"
  },
  {
    "url": "2-Theme-use-and-config/2-4-hexo-theme-apollo/index.html",
    "revision": "d0c65dcb843db9b6cb9ab39cb64b1778"
  },
  {
    "url": "2-Theme-use-and-config/2-5-hexo-theme-material/index.html",
    "revision": "a5882082dbb5c68371294b25bd5b0cb0"
  },
  {
    "url": "2-Theme-use-and-config/2-6-hexo-theme-volantis/index.html",
    "revision": "de7490e50bb9ed0c46a30272cf86de9d"
  },
  {
    "url": "2-Theme-use-and-config/2-7-hexo-theme-bmw/index.html",
    "revision": "ee528c9617d4c08e7766df9f75b210e3"
  },
  {
    "url": "2-Theme-use-and-config/2-8-hexo-theme-aero-dual/index.html",
    "revision": "4878f351bd1f9e51bbe5731e290a8901"
  },
  {
    "url": "2-Theme-use-and-config/2-9-hexo-theme-amber/index.html",
    "revision": "b24bc46fe96aac43333153afff82d71a"
  },
  {
    "url": "2-Theme-use-and-config/index.html",
    "revision": "6fda1426b1345a5df6205a3d7ba3f859"
  },
  {
    "url": "3-Plugins-use-and-config/3-1-hexo-tag-aplayer/index.html",
    "revision": "9a43429bf795101b63244407eb904d0a"
  },
  {
    "url": "3-Plugins-use-and-config/3-2-hexo-tag-dplayer/index.html",
    "revision": "f233af78be257a7205170b1cef58b887"
  },
  {
    "url": "3-Plugins-use-and-config/3-3-hexo-helper-live2d/index.html",
    "revision": "1a094a374188a6b0d48d0a97eb05be09"
  },
  {
    "url": "3-Plugins-use-and-config/3-4-hexo-blog-encrypt/index.html",
    "revision": "1780e7a2fd1028d788804905d0cd0ab0"
  },
  {
    "url": "3-Plugins-use-and-config/3-5-hexo-tag-mmedia/index.html",
    "revision": "6044e562d72ad0d85aae1b5a018140ee"
  },
  {
    "url": "3-Plugins-use-and-config/index.html",
    "revision": "5e22202ca943f608e7df14c57aa7221d"
  },
  {
    "url": "4-High-order-hexo-gamer/4-1-remote-editing/index.html",
    "revision": "fbe79a2de83dfe3f0d41511e0bd6ad31"
  },
  {
    "url": "4-High-order-hexo-gamer/4-2-theme-develop/index.html",
    "revision": "42a7c795164ff0221c38a64f613f476d"
  },
  {
    "url": "4-High-order-hexo-gamer/index.html",
    "revision": "19ba6b7789e5e711cb1f0823633d817a"
  },
  {
    "url": "404.html",
    "revision": "4f3adcb9c532108aea8dcaf1aa5fb45a"
  },
  {
    "url": "5-Add/5-1-quote.html",
    "revision": "f7759b47c047c773b30aa80607a1b2f0"
  },
  {
    "url": "5-Add/5-2-yaml.html",
    "revision": "ee130456a612adbcdca6740531f9aaf6"
  },
  {
    "url": "5-Add/5-3-data-file.html",
    "revision": "d9dbc01a6c0217d614bf9bbc0c083fe3"
  },
  {
    "url": "5-Add/index.html",
    "revision": "da0822797f8ca19dc85e9cf7f72283cd"
  },
  {
    "url": "assets/css/0.styles.28b347e9.css",
    "revision": "39368accc81e1df5d520c61569ee5b64"
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
    "url": "assets/img/1.d04bb3f0.png",
    "revision": "d04bb3f0878d79e959078de6163f9604"
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
    "url": "assets/js/1.be4cc10d.js",
    "revision": "7b8f1d4eefd280c4992c95e711ad84d6"
  },
  {
    "url": "assets/js/10.bdfb457f.js",
    "revision": "9e79d060a07f4670960881170d920e27"
  },
  {
    "url": "assets/js/11.c3d1456f.js",
    "revision": "107c34319b33a0409b34c5d7608dcfdd"
  },
  {
    "url": "assets/js/12.096aac17.js",
    "revision": "b09288358d2d8214b1dd9e9bacb26896"
  },
  {
    "url": "assets/js/13.53c31e8a.js",
    "revision": "f32edb44335ea1a5f4d461d92f33c077"
  },
  {
    "url": "assets/js/14.71162402.js",
    "revision": "10f40bfafe1956df34400bb04156b4bd"
  },
  {
    "url": "assets/js/15.acc8a831.js",
    "revision": "d7bcf382539b13f380996b58d1e94c8f"
  },
  {
    "url": "assets/js/16.54705049.js",
    "revision": "682a1da774d29494834f3a2fede29923"
  },
  {
    "url": "assets/js/17.4330d8bc.js",
    "revision": "d983521398f259a2bc7347b27af0e817"
  },
  {
    "url": "assets/js/18.2162fe90.js",
    "revision": "d823b5b434a229e2bfbc9223bc2a7719"
  },
  {
    "url": "assets/js/19.7850e200.js",
    "revision": "a00c71d4ec09139ebc151b13d1b04e62"
  },
  {
    "url": "assets/js/20.16e0d0c6.js",
    "revision": "46dd3f45210ff710c847131ad93d536e"
  },
  {
    "url": "assets/js/21.41162b37.js",
    "revision": "7957e5abdc2d16dc1eab7197c400f9df"
  },
  {
    "url": "assets/js/22.923b951d.js",
    "revision": "103260a75e8bad3f6f02339750595c93"
  },
  {
    "url": "assets/js/23.d995f577.js",
    "revision": "afee98c65a4d582196367e4907489e37"
  },
  {
    "url": "assets/js/24.39c58e44.js",
    "revision": "018253c683a8dacc9a7974e3cab60417"
  },
  {
    "url": "assets/js/25.ca0abe96.js",
    "revision": "405b4cef685cfee2736d5fa74314ccc4"
  },
  {
    "url": "assets/js/26.fcac3fde.js",
    "revision": "7710803dbbb78f5fdf6090ea80d79da6"
  },
  {
    "url": "assets/js/27.9042f1ba.js",
    "revision": "0bb2cc8434e9ce5fa8f6fcb1e08af886"
  },
  {
    "url": "assets/js/28.2b361e5f.js",
    "revision": "c64b976b6311a1f036cf9f4eae086c68"
  },
  {
    "url": "assets/js/29.4c3f01b7.js",
    "revision": "a65a74b64bf6e50369632e3a6eb8ad43"
  },
  {
    "url": "assets/js/30.f48d2f67.js",
    "revision": "4534bb2d58c9f8397c4d2623e2c722c6"
  },
  {
    "url": "assets/js/31.e99b2ab1.js",
    "revision": "7b5c9c5265aae070ec61e5b9d199f9c0"
  },
  {
    "url": "assets/js/32.9547fe63.js",
    "revision": "e45a4a7e342150217bd71c55edf48b3b"
  },
  {
    "url": "assets/js/33.277063e8.js",
    "revision": "326f89b027ae5f1d6035af341c6c9420"
  },
  {
    "url": "assets/js/34.ac93c46f.js",
    "revision": "ee66cf50d850fc5a7b028bc8b45e67ed"
  },
  {
    "url": "assets/js/35.712f6163.js",
    "revision": "fc55af9e4098d4d7c572f0c8f9350e03"
  },
  {
    "url": "assets/js/36.3520326b.js",
    "revision": "e96613a12fa78f71ccee4796cdc9a021"
  },
  {
    "url": "assets/js/37.19d4976e.js",
    "revision": "203f90aa3960e672c600ed1d28504754"
  },
  {
    "url": "assets/js/38.71cba1e5.js",
    "revision": "375c037fb429aeb0c76fc99a00833abf"
  },
  {
    "url": "assets/js/39.8376367a.js",
    "revision": "f7ece97a3a016c5f4d925ce80222ce19"
  },
  {
    "url": "assets/js/40.3fac309e.js",
    "revision": "a4899efab95dad8418185e44e6d59079"
  },
  {
    "url": "assets/js/41.eb02d0e1.js",
    "revision": "0f4ac90fad2327a55ee299cf9c4dbd20"
  },
  {
    "url": "assets/js/42.03e5807d.js",
    "revision": "fbe3efd8f22fd04c8046ee847b6ce95a"
  },
  {
    "url": "assets/js/43.11f94158.js",
    "revision": "83a67856c8f6a98201cd2a330fe0c5d9"
  },
  {
    "url": "assets/js/44.ad61641d.js",
    "revision": "ba051c8567e46d2fa1c8c23e4179ed8c"
  },
  {
    "url": "assets/js/45.0b60a5b9.js",
    "revision": "6217d0753d730101cbd5adbb2de02205"
  },
  {
    "url": "assets/js/46.c924beab.js",
    "revision": "ab8e476c23eb04dd11bb90e42885a852"
  },
  {
    "url": "assets/js/47.025f60fb.js",
    "revision": "fff7f23b24eab9670b2515a3e92c8400"
  },
  {
    "url": "assets/js/48.71726216.js",
    "revision": "71742fe240f9357b637a979d6e60a069"
  },
  {
    "url": "assets/js/49.3f61ac8b.js",
    "revision": "75fd8c67c907f924f46b3247b01665a6"
  },
  {
    "url": "assets/js/50.99c36626.js",
    "revision": "5023847ba67b87042436f7c2361afedb"
  },
  {
    "url": "assets/js/6.4faf3a05.js",
    "revision": "d5171cad4b52d965f507c06b53a65f1b"
  },
  {
    "url": "assets/js/7.ecff6ee3.js",
    "revision": "f6308aa48c669cf848bf4c189e3cd5ac"
  },
  {
    "url": "assets/js/8.e32ce7f7.js",
    "revision": "710dab781fe59db90b25272ce7d3e321"
  },
  {
    "url": "assets/js/9.30fd984a.js",
    "revision": "c2528fdefe67ac681c3423e8bc044e0b"
  },
  {
    "url": "assets/js/app.cd16ccf2.js",
    "revision": "c809d9e3798f0f95578c552536e99d16"
  },
  {
    "url": "assets/js/vendors~dplayer.a0a1b77f.js",
    "revision": "a8ba6e005d68973d4e65c31817f9ae9e"
  },
  {
    "url": "assets/js/vendors~leancloud-storage.d37dda6f.js",
    "revision": "f667aff0cf00c868d186ed2e561e9900"
  },
  {
    "url": "assets/js/vendors~valine.55fe70ab.js",
    "revision": "86bbcf857fbe874485ce7ba53990e7d5"
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
    "revision": "1c0e34aa14af5640e1fb18a62e34bba7"
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
