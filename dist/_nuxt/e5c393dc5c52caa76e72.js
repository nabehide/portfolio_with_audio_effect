(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(e,t,a){var s=a(196);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(7).default)("7a7181d4",s,!0,{sourceMap:!1})},189:function(e,t,a){var s=a(198);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(7).default)("6a65384b",s,!0,{sourceMap:!1})},195:function(e,t,a){"use strict";var s=a(188);a.n(s).a},196:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,"\n#guiWrapper[data-v-b73d8368]{position:absolute;top:0;right:0\n}\n#guiContainer[data-v-b73d8368]{position:relative;z-index:1\n}\n#guiContainer *[data-v-b73d8368]{font-size:20px;color:red\n}\n@media screen and (min-width:768px){\n#guiContainer *[data-v-b73d8368]{font-size:10px\n}\n}",""])},197:function(e,t,a){"use strict";var s=a(189);a.n(s).a},198:function(e,t,a){(e.exports=a(6)(!1)).push([e.i,"\n.container[data-v-554721c5]{position:relative;width:100%;height:100%\n}\ncanvas[data-v-554721c5]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)\n}",""])},207:function(e,t,a){"use strict";a.r(t);a(30),a(18);var s={data:function(){return{}},mounted:function(){var e=this,t=a(194);this.gui=new t.GUI({closed:!1,closeOnTop:!0,autoPlace:!1}),this.gui.open(),document.getElementById("guiContainer").appendChild(this.gui.domElement),this.canvasParametersState=this.$store.getters["canvasParameters/state"],this.canvasParameters=JSON.parse(JSON.stringify(this.canvasParametersState));var s=this.gui.addFolder("general");s.open(),s.add(this.canvasParameters.fps,"fps",this.canvasParameters.fps.min,this.canvasParameters.fps.max,this.canvasParameters.fps.step).listen().onChange(function(){e.$store.commit("canvasParameters/set",{name:"fps",value:e.canvasParameters.fps.fps})}),s.add(this.canvasParameters.scene,"scene",this.canvasParameters.scene.scenes).setValue(this.canvasParameters.scene.scene).onChange(function(){e.$store.commit("canvasParameters/set",{name:"scene",value:e.canvasParameters.scene.scene}),document.getElementById("buttonChangeScene").click()}),this.state=this.$store.getters["parameters/state"],this.parameters=JSON.parse(JSON.stringify(this.state));var n=function(t){var a=e.gui.addFolder(t);a.open();var s=function(s){var n=e.parameters[t][s],r=n.max,i=n.min,o=n.step;a.add(e.parameters[t][s],s,i,r,o).listen().onChange(function(){e.setParameter(t,s)})};for(var n in e.parameters[t])s(n)};for(var r in this.parameters)n(r);window.addEventListener("keydown",function(t){var a,s;switch(t.key){case"a":a="invertColor",s="isColorInverted",e.keyEvent(a,s,!e.parameters[a][s][s]);break;case"s":a="glitch",s="isGlitched",e.keyEvent(a,s,!e.parameters[a][s][s]);break;case"w":a="glitch",s="glitch",e.keyEvent(a,s,e.parameters[a][s][s]+1);break;case"x":a="glitch",s="glitch",e.keyEvent(a,s,e.parameters[a][s][s]-1);break;case"e":a="zoom",s="zoom",e.keyEvent(a,s,e.parameters[a][s][s]+1);break;case"c":a="zoom",s="zoom",e.keyEvent(a,s,e.parameters[a][s][s]-1);break;case"f":a="time",s="isStopped",e.keyEvent(a,s,!e.parameters[a][s][s]);break;default:console.log(t.key)}})},methods:{setParameter:function(e,t){this.$store.commit("parameters/set",{effect:e,name:t,value:this.parameters[e][t][t]})},keyEvent:function(e,t,a){this.parameters[e][t][t]=a,this.setParameter(e,t)},requestSuccess:function(e){for(var t=e.inputs.values(),a=t.next();!a.done;a=t.next()){var s=a.value;this.midiDevices.inputs[s.name]=s,s.addEventListener("midimessage",this.inputEvent,!1)}for(var n=e.outputs.values(),r=n.next();!r.done;r=n.next()){var i=r.value;this.midiDevices.outputs[i.name]=i}},requestError:function(e){console.log("MIDI error",e)},inputEvent:function(e){e}}},n=(a(195),a(12)),r=Object(n.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"guiWrapper"}},[t("div",{attrs:{id:"guiContainer"}})])}],!1,null,"b73d8368",null);r.options.__file="Gui.vue";var i={components:{Gui:r.exports}},o=(a(197),Object(n.a)(i,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Gui")],1)},[],!1,null,"554721c5",null));o.options.__file="settings.vue";t.default=o.exports}}]);