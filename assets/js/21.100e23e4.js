(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{143:function(t,e,o){},391:function(t,e,o){"use strict";var a=o(143);o.n(a).a},411:function(t,e,o){"use strict";o.r(e);var a=o(172),n=(o(74),o(96),{props:{src:{type:String,default:"",required:!0},screenshot:{type:Boolean,default:!1},subtitle:{type:String,default:""},danmakuId:{type:String,default:""},danmakuApi:{type:String,default:"https://danmu.u2sb.top/api/danmu/dplayer/"},danmakuAddition:{type:String,default:""},autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#b7daff"},loop:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},logo:{type:String,default:""},mutex:{type:Boolean,default:!0},crossOrigin:{type:Boolean,default:!1},proxy:{type:String,default:"https://cors-anywhere.herokuapp.com"}},data:function(){return{shouldShowPlayer:!1}},methods:{showPlayer:function(){var t=this;this.shouldShowPlayer=!0,Promise.all([Promise.all([o.e(0),o.e(3)]).then(o.t.bind(null,405,7)),Promise.all([o.e(0),o.e(3)]).then(o.t.bind(null,406,7))]).then((function(e){new(0,Object(a.a)(e,1)[0].default)({container:t.$refs.container,autoplay:t.autoplay,theme:t.theme,loop:t.loop,screenshot:t.screenshot,hotkey:t.hotkey,preload:t.preload,logo:t.logo,video:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.src):t.src},subtitle:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.subtitle):t.subtitle,color:"#000000",fontSize:"25px",bottom:"2%"},danmaku:{id:t.danmakuId,api:t.danmakuApi,addition:[t.danmakuAddition]},mutex:t.mutex})}))}}}),l=(o(391),o(2)),i=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dplayer"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!this.shouldShowPlayer,expression:"!shouldShowPlayer"}],staticClass:"btn-show-player",on:{click:this.showPlayer}},[this._v("\n    点击加载播放器\n  ")]),this._v(" "),this.shouldShowPlayer?e("div",{ref:"container"}):this._e()])}),[],!1,null,"03caee8e",null);e.default=i.exports}}]);