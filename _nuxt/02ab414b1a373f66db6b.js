(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(t,e,n){"use strict";var o={props:{title:String,icon:String,description1:String,description2:String,links:Array,tags:Array,isColorInverted:Boolean}},r=(n(223),n(41)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:{isColorInverted:t.isColorInverted}},[n("div",[n("h3",[n("img",{attrs:{src:t.icon,width:"32",height:"32",alt:"icon"}}),t._v(" "),n("span",[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"descriptions"},[n("p",[t._v(t._s(t.description1))]),t._v(" "),n("p",[t._v(t._s(t.description2))]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.tags,(function(e){return n("div",{staticClass:"tag"},[n("span",[t._v(t._s(e))])])})),0)])]),t._v(" "),n("div",{staticClass:"buttons"},t._l(t.links,(function(link){return n("div",[n("a",{staticClass:"button",attrs:{href:link.url,target:"_blank",rel:"noopener"}},[n("font-awesome-icon",{staticClass:"button_icon",attrs:{icon:[link.awesome[0],link.awesome[1]]}}),t._v(" "),n("span",{staticClass:"button_text"},[t._v(t._s(link.name))])],1)])})),0)])}),[],!1,null,"6bcee4d7",null);e.a=component.exports},200:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("3502c046",content,!1,{sourceMap:!1})},201:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"コードメモ","description1":"音楽のコード進行を簡単にメモできるスマートフォンアプリ。","description2":" ","country":"jp/app","LP":"ランディングページ"},"en":{"title":"Chord Memos","description1":"A memo app for chord progression.","description2":" ","country":"us/app","LP":"Landing Page"}}'),delete t.options._Ctor}},202:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"スマートフォンアプリ一覧","description1":" ","description2":" "},"en":{"title":"Smartphone apps list","description1":" ","description2":" "}}'),delete t.options._Ctor}},203:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"ポートフォリオ","description1":"背景はフラグメントシェーダで作成しています。","description2":"Web Audio APIを用いたAudio effectが追加されたバージョンもあります。（PC推奨）","site":"サイト"},"en":{"title":"Portfolio","description1":"The background was created with fragment shader.","description2":"There is another version with audio effect using Web Audio API. (PC recommended)","site":"site"}}'),delete t.options._Ctor}},204:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"電源Wi-Fiマップ","description1":"電源（コンセント）やWi-Fiの使用可否を地図上に表示するアプリケーション。","description2":"お店の公式サイトの情報はPythonでWebスクレイピングしています。"},"en":{"title":"Charge and Wi-Fi Japan","description1":"The app shows charge / Wi-Fi spots in Japan.","description2":"The database is updated automatically by web scraping."}}'),delete t.options._Ctor}},205:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"タピオカマップ","description1":"近くのタピオカドリンクのお店が見つかるスマートフォンアプリ。","description2":"お店のデータベースはWebスクレイピングで自動化しています。"},"en":{"title":"Boba tea maps","description1":"A map app to find boba tea shops in Japan.","description2":"The database is updated automatically by web scraping."}}'),delete t.options._Ctor}},206:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"three.js native","description1":"3Dオブジェクトを見ながら、発熱するスマホで暖をとるスマートフォンアプリ。","description2":" "},"en":{"title":"three.js native","description1":"The native app shows 3D objects using three.js.","description2":" "}}'),delete t.options._Ctor}},207:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"ずっしーの音感トレーニング","description1":"ゲームをしながら相対音感が身につくスマートフォンアプリ。","description2":"ずっしーさんが企画・音楽を担当、私は開発を担当しました。","zussie":"ずっしーの音楽教室"},"en":{"title":"Zussie\'s music game for a good ear","description1":"A game app for training a good ear for pitch.","description2":"Over 20,000 downloads in a first week!","zussie":"Music lesson by Zussie"}}'),delete t.options._Ctor}},216:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/works/ChordMemos.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},tags:function(){return["React Native","i18n","Nuxt.js"]},links:function(){return[{name:"Apple Store",awesome:["fab","apple"],url:"https://itunes.apple.com/"+this.$t.bind(this)("country")+"/id1479015907"},{name:"Google Play Store",awesome:["fab","google-play"],url:"https://play.google.com/store/apps/details?id=com.codelyricsmemo"},{name:this.$t.bind(this)("LP"),awesome:["fas","external-link-alt"],url:"https://chord-memos.nabehide.com"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(225),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted,tags:this.tags}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},217:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/thumbnail.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},links:function(){return[{name:"Apple Store",awesome:["fab","apple"],url:"https://itunes.apple.com/us/developer/hidetoshi-watanabe/id1442101437#see-all/i-phonei-pad-apps"},{name:"Google Play Store",awesome:["fab","google-play"],url:"https://play.google.com/store/apps/developer?id=nabehide"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(226),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},218:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/thumbnail.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},tags:function(){return["Nuxt.js","Three.js","GLSL","Web Audio API"]},links:function(){return[{name:"Web"+this.$t.bind(this)("site"),awesome:["fas","external-link-alt"],url:"/"},{name:"Web"+this.$t.bind(this)("site")+" with audio effect",awesome:["fas","external-link-alt"],url:"https://nabehide.github.io/portfolio_with_audio_effect"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(227),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted,tags:this.tags}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},219:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/works/charge-wifi.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},tags:function(){return["React Native","Expo","Python Selenium"]},links:function(){return[{name:"Apple Store",awesome:["fab","apple"],url:"https://itunes.apple.com/us/app//id1448125892"},{name:"Google Play Store",awesome:["fab","google-play"],url:"https://play.google.com/store/apps/details?id=com.tapandwifi"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(228),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted,tags:this.tags}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},220:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/works/tapioca.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},tags:function(){return["React Native","Expo","Python Selenium"]},links:function(){return[{name:"Apple Store",awesome:["fab","apple"],url:"https://itunes.apple.com/us/app/%E3%82%BF%E3%83%94%E3%82%AA%E3%82%AB%E3%83%9E%E3%83%83%E3%83%97/id1459651029"},{name:"Google Play Store",awesome:["fab","google-play"],url:"https://play.google.com/store/apps/details?id=com.tapiokamap"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(229),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted,tags:this.tags}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},221:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/works/threejsNative.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},tags:function(){return["React Native","Three.js"]},links:function(){return[{name:"Apple Store",awesome:["fab","apple"],url:"https://itunes.apple.com/us/app/three-js-native/id1447928256"},{name:"Google Play Store",awesome:["fab","google-play"],url:"https://play.google.com/store/apps/details?id=com.three"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(230),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted,tags:this.tags}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},222:function(t,e,n){"use strict";var o=n(197),r={props:{isColorInverted:Boolean},computed:{title:function(){return this.$t.bind(this)("title")},icon:function(){return"/works/zussie.png"},description1:function(){return this.$t.bind(this)("description1")},description2:function(){return this.$t.bind(this)("description2")},tags:function(){return["Unity","Unity IAP","Firebase Cloud Firestore"]},links:function(){return[{name:"Apple Store",awesome:["fab","apple"],url:"https://itunes.apple.com/jp/app/id1453413519"},{name:"Google Play Store",awesome:["fab","google-play"],url:"https://play.google.com/store/apps/details?id=io.github.nabehide.zussie"},{name:this.$t.bind(this)("zussie"),awesome:["fas","external-link-alt"],url:"https://zussie-piano.com/app-introduction/"}]}},components:{WorksComponent:o.a}},c=n(41),l=n(231),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("WorksComponent",{attrs:{title:this.title,icon:this.icon,description1:this.description1,description2:this.description2,links:this.links,isColorInverted:this.isColorInverted,tags:this.tags}})}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},223:function(t,e,n){"use strict";var o=n(200);n.n(o).a},224:function(t,e,n){(e=n(42)(!1)).push([t.i,"section[data-v-6bcee4d7]{background-color:hsla(0,0%,100%,.3);border-radius:5px;width:90%;margin:20px 0;display:flex;flex-direction:column;justify-content:space-between}@media screen and (min-width:770px){section[data-v-6bcee4d7]{width:45%}}@media screen and (min-width:1180px){section[data-v-6bcee4d7]{width:30%}}.isColorInverted[data-v-6bcee4d7]{background-color:rgba(0,0,0,.5)}.descriptions[data-v-6bcee4d7]{padding:0 10px}h3[data-v-6bcee4d7]{padding:10px;margin:10px 0;display:flex;align-items:center}h3 img[data-v-6bcee4d7]{vertical-align:middle;border-radius:5px;margin-right:10px}.buttons[data-v-6bcee4d7]{display:flex;flex-direction:column;margin:10px}a[data-v-6bcee4d7]{text-decoration:none}.button_icon[data-v-6bcee4d7]{font-size:20px;flex-grow:1;margin:0 10px}.button_text[data-v-6bcee4d7]{flex-grow:100;text-align:center}.button[data-v-6bcee4d7]{margin:5px;padding:10px 15px;background-color:#111;border-radius:20px;display:flex;align-items:center;text-align:center}.button *[data-v-6bcee4d7]{color:#eee}.isColorInverted .button[data-v-6bcee4d7]{background-color:#eee}.isColorInverted .button *[data-v-6bcee4d7]{color:#111}.button[data-v-6bcee4d7],.button[data-v-6bcee4d7]:after,.button[data-v-6bcee4d7]:before{transition:background-color .3s}.button[data-v-6bcee4d7]:hover{background-color:rgba(0,0,0,.6)}.isColorInverted .button[data-v-6bcee4d7]:hover{background-color:hsla(0,0%,100%,.6)}.tag[data-v-6bcee4d7]{margin:5px;padding:5px 10px;border:1px solid #111}.tag span[data-v-6bcee4d7]{font-size:14px}.isColorInverted .tag[data-v-6bcee4d7]{border-color:#eee}",""]),t.exports=e},225:function(t,e,n){"use strict";var o=n(201),r=n.n(o);e.default=r.a},226:function(t,e,n){"use strict";var o=n(202),r=n.n(o);e.default=r.a},227:function(t,e,n){"use strict";var o=n(203),r=n.n(o);e.default=r.a},228:function(t,e,n){"use strict";var o=n(204),r=n.n(o);e.default=r.a},229:function(t,e,n){"use strict";var o=n(205),r=n.n(o);e.default=r.a},230:function(t,e,n){"use strict";var o=n(206),r=n.n(o);e.default=r.a},231:function(t,e,n){"use strict";var o=n(207),r=n.n(o);e.default=r.a}}]);