webpackJsonp([1],{"2P4Y":function(t,e){},"5N5z":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("aFK5"),a=n.n(i),o=n("uQ5w").create();o.import(n("TfX4")),o.import({add:function(t,e){return t+e},subtract:function(t,e){return t-e},multiply:function(t,e){return t*e},divide:function(t,e){return t/e},mod:function(t,e){return t%e},unaryPlus:function(t){return t},unaryMinus:function(t){return-t},bitOr:function(t,e){return t|e},bitXor:function(t,e){return t^e},bitAnd:function(t,e){return t&e},bitNot:function(t){return~t},leftShift:function(t,e){return t<<e},rightArithShift:function(t,e){return t>>e},rightLogShift:function(t,e){return t>>>e},or:function(t,e){return!(!t&&!e)},xor:function(t,e){return!!t!=!!e},and:function(t,e){return!(!t||!e)},not:function(t){return!t},equal:function(t,e){return t===e},unequal:function(t,e){return t!==e},smaller:function(t,e){return t<e},larger:function(t,e){return t>e},smallerEq:function(t,e){return t<=e},largerEq:function(t,e){return t>=e},matrix:function(){throw new Error("Matrices not supported")},index:function(){throw new Error("Matrix indexes not supported")},pi:Math.PI,e:Math.E,true:!0,false:!1,null:null});var s={};a()(Math).forEach(function(t){Object.prototype.hasOwnProperty(t)||"random"===t||(s[t]=Math[t])}),o.import(s),o.import(n("++I0")),e.default=o},"7tQ2":function(t,e){},"99wx":function(t,e){},B6z3:function(t,e){},Dwrk:function(t,e){},IciD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("Dd8w"),o=n.n(a),s=n("mvHQ"),r=n.n(s),l=n("3zJd"),c=n.n(l)()(),h=c.get(),u="cos((cos(y) - x * y))",d="x",p=.005,v=.2,f=.2,g="#000000",m=null,b=.05,C=1,x={xFunction:h.xf||u,yFunction:h.yf||d,seed:h.seed||1,color:h.color||g,dTest:h.dt||p,separationDistance:h.sd||v,simplification:h.sm||f,timeStep:h.ts||b,bg:h.bg||m,strokeWidth:h.sw||C},w=function(t,e,n){var i=e[0],a=e[1],o=n[0]-i,s=n[1]-a;if(0!==o||0!==s){var r=((t[0]-i)*o+(t[1]-a)*s)/(o*o+s*s);r>1?(i=n[0],a=n[1]):r>0&&(i+=o*r,a+=s*r)}return(o=t[0]-i)*o+(s=t[1]-a)*s},_=function(t,e){if(t.length<=1)return t;var n=(e="number"==typeof e?e:1)*e,i=t.length-1,a=[t[0]];return function t(e,n,i,a,o){for(var s=a,r=void 0,l=n+1;l<i;l++){var c=w(e[l],e[n],e[i]);c>s&&(r=l,s=c)}s>a&&(r-n>1&&t(e,n,r,a,o),o.push(e[r]),i-r>1&&t(e,r,i,a,o))}(t,0,i,n,a),a.push(t[i]),a},y=n("Zx67"),S=n.n(y),k=n("zwoO"),F=n.n(k),E=n("Pf15"),M=n.n(E),T=n("Zrlr"),I=n.n(T),L=n("wxAW"),D=n.n(L),B={POINT:10,LENGTH:5,TRIGONOMETRY:9,ARITHMETICS:6,MINMAX:4,EXP:1,SIGN:.1},H=function(){function t(e){I()(this,t),this.probability=0,this.className=e}return D()(t,[{key:"getProbability",value:function(){return B[this.className]}},{key:"render",value:function(){return""}}]),t}(),P=function(t){function e(t,n){I()(this,e);var i=F()(this,(e.__proto__||S()(e)).call(this,n));return i.operator=t,i}return M()(e,t),D()(e,[{key:"render",value:function(){var t=this.getProbability();B[this.className]*=.25,A();var e=O();return B[this.className]=t,A(),this.operator(e)}}]),e}(H),R=function(t){function e(t,n){I()(this,e);var i=F()(this,(e.__proto__||S()(e)).call(this,n));return i.operator=t,i}return M()(e,t),D()(e,[{key:"render",value:function(){var t=this.getProbability();B[this.className]*=.25,A();var e=O(),n=O();return B[this.className]=t,A(),this.operator(e,n)}}]),e}(H),N=function(t){function e(t,n){I()(this,e);var i=F()(this,(e.__proto__||S()(e)).call(this,n));return i.constant=t,i}return M()(e,t),D()(e,[{key:"render",value:function(){return this.constant}}]),e}(H),$=[new N("x","POINT"),new N("y","POINT"),new N("sqrt(x*x + y*y)","LENGTH"),new P(function(t){return"sin("+t+")"},"TRIGONOMETRY"),new P(function(t){return"cos("+t+")"},"TRIGONOMETRY"),new R(function(t,e){return t+"*"+e},"ARITHMETICS"),new R(function(t,e){return t+"/"+e},"ARITHMETICS"),new R(function(t,e){return"("+t+"+"+e+")"},"ARITHMETICS"),new R(function(t,e){return"("+t+"-"+e+")"},"ARITHMETICS"),new R(function(t,e){return t===e?t:"min("+t+","+e+")"},"MINMAX"),new R(function(t,e){return t===e?t:"max("+t+","+e+")"},"MINMAX"),new P(function(t){return"log(abs("+t+"))"},"EXP"),new P(function(t){return"exp("+t+")"},"EXP"),new R(function(t,e){return"pow("+t+", "+e+")"},"EXP"),new P(function(t){return"abs("+t+")"},"SIGN"),new P(function(t){return"sign("+t+")"},"SIGN")];function A(){var t=0;$.forEach(function(e){return t+=e.getProbability()}),$.forEach(function(e){return e.probability=e.getProbability()/t})}function O(){for(var t=Math.random(),e=0,n=void 0,i=0;i<$.length&&!(t<(e+=(n=$[i]).probability));++i);if(!n)throw new Error("no more items");return n.render()}var U=function(){return A(),O()},X=n("KMTX"),j=n.n(X),W=n("or9x"),z=n("YrBu"),V=n.n(z);function Y(t,e){var n=t&&t.a,i=void 0;!(i=t&&t.hsl?V()(t.hsl):t&&t.hex&&t.hex.length>0?V()(t.hex):V()(t))||void 0!==i._a&&null!==i._a||i.setAlpha(n||1);var a=i.toHsl(),o=i.toHsv();return 0===a.s&&(o.h=a.h=t.h||t.hsl&&t.hsl.h||e||0),{hsl:a,hex:i.toHexString().toUpperCase(),hex8:i.toHex8String().toUpperCase(),rgba:i.toRgb(),hsv:o,oldHue:t.h||e||a.h,source:t.source,a:t.a||i.getAlpha()}}var G={props:["value"],data:function(){return{val:Y(this.value)}},computed:{colors:{get:function(){return this.val},set:function(t){this.val=t,this.$emit("input",t)}}},watch:{value:function(t){this.val=Y(t)}},methods:{colorChange:function(t,e){this.oldHue=this.colors.hsl.h,this.colors=Y(t,e||this.oldHue)},isValidHex:function(t){return V()(t).isValid()},simpleCheckForValidColor:function(t){for(var e=["r","g","b","a","h","s","l","v"],n=0,i=0,a=0;a<e.length;a++){var o=e[a];t[o]&&(n++,isNaN(t[o])||i++)}if(n===i)return t},paletteUpperCase:function(t){return t.map(function(t){return t.toUpperCase()})},isTransparent:function(t){return 0===V()(t).getAlpha()}}},Q={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(t){if(!(void 0!==this.max&&+t>this.max))return t;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(t){this.handleChange(t.target.value)},handleChange:function(t){var e={};e[this.label]=t,void 0===e.hex&&void 0===e["#"]?this.$emit("change",e):t.length>5&&this.$emit("change",e)},handleKeyDown:function(t){var e=this.val,n=Number(e);if(n){var i=this.arrowOffset||1;38===t.keyCode&&(e=n+i,this.handleChange(e),t.preventDefault()),40===t.keyCode&&(e=n-i,this.handleChange(e),t.preventDefault())}}}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vc-editable-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":t.labelId},domProps:{value:t.val},on:{keydown:t.handleKeyDown,input:[function(e){e.target.composing||(t.val=e.target.value)},t.update]}}),t._v(" "),n("span",{staticClass:"vc-input__label",attrs:{for:t.label,id:t.labelId}},[t._v(t._s(t.labelSpanText))]),t._v(" "),n("span",{staticClass:"vc-input__desc"},[t._v(t._s(t.desc))])])},staticRenderFns:[]};var K=n("VU/8")(Q,q,!1,function(t){n("IciD")},"data-v-d023b87e",null).exports,Z=n("p8uh"),J=n.n(Z),tt=n("R3sX"),et={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:n.n(tt)()(function(t,e){t(e)},20,{leading:!0,trailing:!1}),handleChange:function(t,e){!e&&t.preventDefault();var n=this.$refs.container,i=n.clientWidth,a=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,r=t.pageX||(t.touches?t.touches[0].pageX:0),l=t.pageY||(t.touches?t.touches[0].pageY:0),c=J()(r-o,0,i),h=J()(l-s,0,a),u=c/i,d=J()(-h/a+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:u,v:d,a:this.colors.hsv.a,source:"hsva"})},onChange:function(t){this.$emit("change",t)},handleMouseDown:function(t){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(t){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"vc-saturation",style:{background:t.bgColor},on:{mousedown:t.handleMouseDown,touchmove:t.handleChange,touchstart:t.handleChange}},[n("div",{staticClass:"vc-saturation--white"}),t._v(" "),n("div",{staticClass:"vc-saturation--black"}),t._v(" "),n("div",{staticClass:"vc-saturation-pointer",style:{top:t.pointerTop,left:t.pointerLeft}},[n("div",{staticClass:"vc-saturation-circle"})])])},staticRenderFns:[]};var it=n("VU/8")(et,nt,!1,function(t){n("2P4Y")},"data-v-7dfadf38",null).exports,at={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var t=this.value.hsl.h;return 0!==t&&t-this.oldHue>0&&(this.pullDirection="right"),0!==t&&t-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=t,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(t,e){!e&&t.preventDefault();var n=this.$refs.container,i=n.clientWidth,a=n.clientHeight,o=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,r=(t.pageX||(t.touches?t.touches[0].pageX:0))-o,l=(t.pageY||(t.touches?t.touches[0].pageY:0))-s,c=void 0;"vertical"===this.direction?(c=l<0?360:l>a?0:360*(-100*l/a+100)/100,this.colors.hsl.h!==c&&this.$emit("change",{h:c,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(c=r<0?0:r>i?360:360*(100*r/i)/100,this.colors.hsl.h!==c&&this.$emit("change",{h:c,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(t){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["vc-hue",this.directionClass]},[e("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":this.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:this.handleMouseDown,touchmove:this.handleChange,touchstart:this.handleChange}},[e("div",{staticClass:"vc-hue-pointer",style:{top:this.pointerTop,left:this.pointerLeft},attrs:{role:"presentation"}},[e("div",{staticClass:"vc-hue-picker"})])])])},staticRenderFns:[]};var st=n("VU/8")(at,ot,!1,function(t){n("X/y5")},"data-v-f7daa10a",null).exports,rt={},lt={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+function(t,e,n){var i=t+","+e+","+n;if(rt[i])return rt[i];var a=function(t,e,n){if("undefined"==typeof document)return null;var i=document.createElement("canvas");i.width=i.height=2*n;var a=i.getContext("2d");if(!a)return null;return a.fillStyle=t,a.fillRect(0,0,i.width,i.height),a.fillStyle=e,a.fillRect(0,0,n,n),a.translate(n,n),a.fillRect(0,0,n,n),i.toDataURL()}(t,e,n);return rt[i]=a,a}(this.white,this.grey,this.size)+")"}}}};var ct={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vc-checkerboard",style:this.bgStyle})},staticRenderFns:[]};var ht=n("VU/8")(lt,ct,!1,function(t){n("7tQ2")},"data-v-5a1358a0",null).exports,ut={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:ht},computed:{colors:function(){return this.value},gradientColor:function(){var t=this.colors.rgba,e=[t.r,t.g,t.b].join(",");return"linear-gradient(to right, rgba("+e+", 0) 0%, rgba("+e+", 1) 100%)"}},methods:{handleChange:function(t,e){!e&&t.preventDefault();var n=this.$refs.container,i=n.clientWidth,a=n.getBoundingClientRect().left+window.pageXOffset,o=(t.pageX||(t.touches?t.touches[0].pageX:0))-a,s=void 0;s=o<0?0:o>i?1:Math.round(100*o/i)/100,this.colors.a!==s&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:s,source:"rgba"})},handleMouseDown:function(t){this.handleChange(t,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vc-alpha"},[e("div",{staticClass:"vc-alpha-checkboard-wrap"},[e("checkboard")],1),this._v(" "),e("div",{staticClass:"vc-alpha-gradient",style:{background:this.gradientColor}}),this._v(" "),e("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:this.handleMouseDown,touchmove:this.handleChange,touchstart:this.handleChange}},[e("div",{staticClass:"vc-alpha-pointer",style:{left:100*this.colors.a+"%"}},[e("div",{staticClass:"vc-alpha-picker"})])])])},staticRenderFns:[]};var pt=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#CCCCCC","#FFFFFF"],vt={name:"ColorPicker",mixins:[G],data:function(){return{showColorPicker:!1}},components:{saturation:it,hue:st,alpha:n("VU/8")(ut,dt,!1,function(t){n("Dwrk")},"data-v-35a04f66",null).exports,"ed-in":K,checkboard:ht},props:{presetColors:{type:Array,default:function(){return pt}},disableAlpha:{type:Boolean,default:!0},disableFields:{type:Boolean,default:!1},label:{type:String,default:""}},computed:{labelId:function(){return"input__label__color__"+Math.random().toString().slice(2,5)},hex:function(){var t=void 0;return t=this.colors.a<1?this.colors.hex8:this.colors.hex,t.replace("#","")},activeColor:function(){var t=this.colors.rgba;return"rgba("+[t.r,t.g,t.b,t.a].join(",")+")"}},methods:{toggleColorPicker:function(){this.showColorPicker=!this.showColorPicker},emitChange:function(t){this.$emit("colorChange","#"+this.hex),this.showColorPicker=!1},handlePreset:function(t){this.colorChange({hex:t,source:"hex"})},childChange:function(t){this.colorChange(t)},basicInputChange:function(t){this.isValidHex(t.target.value)&&this.colorChange({hex:t.target.value,source:"hex"}),this.$emit("colorChange","#"+this.hex)},inputChange:function(t){t&&(t.hex?this.isValidHex(t.hex)&&this.colorChange({hex:t.hex,source:"hex"}):(t.r||t.g||t.b||t.a)&&this.colorChange({r:t.r||this.colors.rgba.r,g:t.g||this.colors.rgba.g,b:t.b||this.colors.rgba.b,a:t.a||this.colors.rgba.a,source:"rgba"}))}}},ft={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-control"},[n("div",{staticClass:"control-header"},[n("label",{staticClass:"control-label color-control-label",attrs:{for:t.labelId,id:t.labelId}},[t._v(t._s(t.label))]),t._v(" "),n("div",{staticClass:"color-indicator-wrapper"},[n("div",{staticClass:"color-indicator",style:{"background-color":"#"+t.hex},on:{click:t.toggleColorPicker}}),t._v(" "),n("input",{staticClass:"control-text-input color-control-text-input",attrs:{"aria-labelledby":t.labelId,type:"text"},domProps:{value:t.hex},on:{change:t.basicInputChange}}),t._v(" "),n("button",{staticClass:"btn btn-xsm btn-outline-secondary color-picker-button",on:{click:function(e){return e.preventDefault(),t.emitChange(e)}}},[t._v("SET")])])]),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.showColorPicker?n("div",{staticClass:"mt-2",class:["vc-sketch",t.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Color picker"}},[n("div",{staticClass:"vc-sketch-saturation-wrap"},[n("saturation",{on:{change:t.childChange},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),n("div",{staticClass:"vc-sketch-controls"},[n("div",{staticClass:"vc-sketch-sliders"},[n("div",{staticClass:"vc-sketch-hue-wrap"},[n("hue",{on:{change:t.childChange},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),t._v(" "),t.disableAlpha?t._e():n("div",{staticClass:"vc-sketch-alpha-wrap"},[n("alpha",{on:{change:t.childChange},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1)]),t._v(" "),n("div",{staticClass:"vc-sketch-color-wrap"},[n("div",{staticClass:"vc-sketch-active-color",style:{background:t.activeColor},attrs:{"aria-label":"Current color is "+t.activeColor}}),t._v(" "),n("checkboard")],1)]),t._v(" "),t.disableFields?t._e():n("div",{staticClass:"vc-sketch-field"},[n("div",{staticClass:"vc-sketch-field--double"},[n("ed-in",{attrs:{label:"hex",value:t.hex},on:{change:t.inputChange}})],1),t._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"r",value:t.colors.rgba.r},on:{change:t.inputChange}})],1),t._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"g",value:t.colors.rgba.g},on:{change:t.inputChange}})],1),t._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"b",value:t.colors.rgba.b},on:{change:t.inputChange}})],1),t._v(" "),t.disableAlpha?t._e():n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"a",value:t.colors.a,"arrow-offset":.01,max:1},on:{change:t.inputChange}})],1)]),t._v(" "),n("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[t._l(t.presetColors,function(e){return[t.isTransparent(e)?n("div",{key:e,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+e},on:{click:function(n){return t.handlePreset(e)}}},[n("checkboard")],1):n("div",{key:e,staticClass:"vc-sketch-presets-color",style:{background:e},attrs:{"aria-label":"Color:"+e},on:{click:function(n){return t.handlePreset(e)}}})]})],2)]):t._e()])],1)},staticRenderFns:[]};var gt=n("VU/8")(vt,ft,!1,function(t){n("mQWe")},"data-v-de2302c8",null).exports,mt=(n("Q7M0"),n("Itbb")),bt=n.n(mt),Ct=(n("99wx"),{name:"TextInput",components:{popper:bt.a},props:{leftIcon:{type:String},rightIcon:{type:String},label:{type:String,default:""},value:{type:String,default:""},tooltip:{type:String,default:""},showReset:{type:Boolean,default:!1}},methods:{onInput:function(t){this.$emit("input",t.target.value)}}}),xt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-control"},[n("div",{staticClass:"control-header"},[n("div",[t.leftIcon?n("svgicon",{attrs:{name:t.leftIcon,width:22,height:22,color:"#FFFFFF",fill:!1}}):t._e()],1),t._v(" "),n("div",{staticClass:"control-label"},[n("span",[t._v(t._s(t.label))]),t._v(" "),t.tooltip?n("popper",{staticClass:"ml-2",attrs:{trigger:"click",options:{placement:"top"}}},[n("div",{staticClass:"popper popper-content",domProps:{innerHTML:t._s(t.tooltip)}}),t._v(" "),n("button",{staticClass:"tooltip-trigger btn badge badge-pill badge-dark",attrs:{slot:"reference"},slot:"reference"},[t._v("\n          ?\n        ")])]):t._e()],1),t._v(" "),n("div",{staticClass:"right-icon"},[t.rightIcon?n("svgicon",{attrs:{name:t.rightIcon,width:22,height:22,color:"#FFFFFF",fill:!1}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"control-header"},[n("input",{staticClass:"control-text-input",attrs:{type:"text"},domProps:{value:t.value},on:{change:t.onInput}}),t._v(" "),t.showReset?n("a",{staticClass:"btn",on:{click:function(e){return t.$emit("reset")}}},[t._v("reset")]):t._e()])])},staticRenderFns:[]};var wt=n("VU/8")(Ct,xt,!1,function(t){n("uqh5")},"data-v-2e1e1554",null).exports,_t={name:"Slider",props:{disabled:{type:Boolean,default:!1},leftIcon:{type:Object},rightIcon:{type:Object},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,default:"Label"},value:{type:Number,default:50}},methods:{onInput:function(t){t.target.value>this.min?this.$emit("input",t.target.value):this.$emit("input",this.min),t.target.value<this.min&&this.$emit("input",this.min)}}},yt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-control"},[n("div",{staticClass:"control-header"},[n("div",[t.leftIcon?n("svgicon",{attrs:{name:t.leftIcon.icon,width:t.leftIcon.width,height:t.leftIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1),t._v(" "),n("div",{staticClass:"control-label"},[n("span",[t._v(t._s(t.label))])]),t._v(" "),n("div",[t.rightIcon?n("svgicon",{attrs:{name:t.rightIcon.icon,width:t.rightIcon.width,height:t.rightIcon.height,color:"#FFFFFF",fill:!1}}):t._e()],1)]),t._v(" "),n("div",{staticClass:"control-header"},[n("input",{staticClass:"custom-range",attrs:{disabled:t.disabled,type:"range",min:t.min,max:t.max,step:t.step},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),n("div",{staticClass:"control-output"},[n("input",{attrs:{disabled:t.disabled,type:"text"},domProps:{value:t.value},on:{change:t.onInput}})])])])},staticRenderFns:[]},St=n("VU/8")(_t,yt,!1,null,null,null).exports,kt=n("5N5z").default,Ft=n("RDPw"),Et=void 0,Mt=null,Tt=void 0,It=void 0,Lt=void 0,Dt={name:"App",components:{ColorPicker:gt,TextInput:wt,Slider:St},data:function(){return{strokeColor:{hex:x.color},bgColor:{hex:x.bg},appState:x,paper:{width:600,height:600},config:{boundingBox:{left:-5,top:-5,width:10,height:10}},formulaHelpText:'<h6>Formula Field</h6>\n            <p>You can use the following:</p>\n            <p>\n            Operators:<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>mod</code><br>\n            Arithmetic:<code>abs</code>, <code>exp</code>, <code>log</code>, <code>sqrt</code>, <code>ceil</code>, <code>floor</code>, <code>random</code>, <code>round</code><br>\n            Trigonometry:<code>tan</code>, <code>sin</code>, <code>cos</code>, <code>acos</code>, <code>asin</code>, <code>atan</code>, <code>atan2</code><br>\n            Statistics:<code>max</code>, <code>min</code><br>\n            Constants:<code>pi</code>, <code>e</code></p>\n            <p>Examples:</p>\n            <ul class="pl-3">\n              <li>\n                <code>\n                  (y*cos(y)-sin(y))\n                </code>\n              </li>\n              <li>\n                <code>\n                  random(x) + sin(y)\n                </code>\n              </li>\n              <li>\n              <code>atan(pi*y)</code></li>\n            </ul>',history:{index:0,items:[{x:x.xFunction,y:x.yFunction}]},favorites:{tooltip:!1,opened:!1,items:[],animateHeart:!1}}},mounted:function(){Tt=W("drawing").addClass("svg-paper").size(this.paper.width,this.paper.height).viewbox({x:0,y:0,width:this.paper.width,height:this.paper.height}),kt.config({randomSeed:this.appState.seed}),this.generateStreamlines()},methods:{addToFavorites:function(){this.favorites.animateHeart=!0;var t={x:this.appState.xFunction,y:this.appState.yFunction,dTest:this.appState.dTest,separationDistance:this.appState.separationDistance,timeStep:this.appState.timeStep,simplification:this.appState.simplification,strokeWidth:this.appState.strokeWidth,color:this.appState.color,bg:this.appState.bg,seed:this.appState.seed},e=function(t){for(var e=5381,n=t.length;n;)e=33*e^t.charCodeAt(--n);return e>>>0}(r()(t));this.favorites.items.find(function(t){return t.hash===e})||this.favorites.items.unshift(o()({},t,{hash:e}))},restoreFavorite:function(t){this.appState.xFunction=t.x,this.appState.yFunction=t.y,this.appState.dTest=t.dTest,this.appState.separationDistance=t.separationDistance,this.appState.timeStep=t.timeStep,this.appState.simplification=t.simplification,this.appState.strokeWidth=t.strokeWidth,this.appState.color=t.color,this.appState.bg=t.bg,this.appState.seed=t.seed,this.generateStreamlines()},deleteFavorite:function(t){this.favorites.items.splice(t,1)},addToHistory:function(){this.history.items.push({x:this.appState.xFunction,y:this.appState.yFunction}),this.history.index=this.history.items.length-1},backInHistory:function(){this.history.index>0&&(this.history.index--,this.appState.xFunction=this.history.items[this.history.index].x,this.appState.yFunction=this.history.items[this.history.index].y)},forwardInHistory:function(){this.history.index<this.history.items.length&&(this.history.index++,this.appState.xFunction=this.history.items[this.history.index].x,this.appState.yFunction=this.history.items[this.history.index].y)},setColor:function(t){Tt.select("polyline").stroke(t),this.appState.color=t},setBackgroundColor:function(t){this.appState.bg=t,this.appState.bg&&(It=Tt.rect(this.paper.width,this.paper.height).fill(t)).after(Lt),It&&It.fill(t)},download:function(){!function(t){var e=(new XMLSerializer).serializeToString(t);e=e.replace(/([\-+]?\d{1,}\.\d{3,}([eE][\-+]?\d+)?)/g,function(t){return(+t).toFixed(1)});var n=new Blob(['<?xml version="1.0" encoding="UTF-8" standalone="no"?>'+e],{type:"image/svg+xml;charset=utf-8"}),i=URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download="streamlines"+Date.now()+".svg",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}(Tt.node)},generateStreamlines:function(){var t=this;Tt.clear();var e=document.createElement("title");e.innerHTML="x="+this.appState.xFunction+"|y="+this.appState.yFunction+"|dTest="+this.appState.dTest+"|sd="+this.appState.separationDistance+"|sm="+this.appState.simplification+"|ts="+this.appState.timeStep+" | generated with FlowLines",Tt.node.appendChild(e),this.appState.bg&&(It=Tt.rect(this.paper.width,this.paper.height).fill(this.appState.bg)),Lt=Tt.group();var n=this.config,i=this.paper,a=this.appState.color,o=this.appState.strokeWidth,s=this.appState.simplification;Mt&&Mt.dispose();var r=new Ft({seed:this.appState.seed}),l={x:this.config.boundingBox.left+r.float()*this.config.boundingBox.width,y:this.config.boundingBox.top+r.float()*this.config.boundingBox.height};Et=function(e){return{x:kt.eval(t.appState.xFunction,{x:e.x,y:e.y}),y:kt.eval(t.appState.yFunction,{x:e.x,y:e.y})}},(Mt=j()({vectorField:Et,onStreamlineAdded:function(t){for(var e=[],r=0;r<t.length;r++){var l=(t[r].x-n.boundingBox.left)/n.boundingBox.width,c=(t[r].y-n.boundingBox.top)/n.boundingBox.height;e.push([Math.round(l*i.width*100)/100,Math.round((1-c)*i.height*100)/100])}var h=_(e,s);Lt.polyline(h).fill("none").stroke({width:o,color:a})},seed:l,boundingBox:n.boundingBox,dSep:this.appState.separationDistance,dTest:this.appState.dTest,timeStep:this.appState.timeStep})).run().then(function(){})},regenerateStreamlines:function(){this.appState.xFunction=U(),this.appState.yFunction=U(),this.generateStreamlines(),this.addToHistory()}},watch:{"appState.xFunction":function(t){c.set({xf:t}),this.generateStreamlines()},"appState.yFunction":function(t){c.set({yf:t}),this.generateStreamlines()},"appState.seed":function(t){c.set({seed:t})},"appState.dTest":function(t){c.set({dt:t}),this.generateStreamlines()},"appState.separationDistance":function(t){c.set({sd:t}),this.generateStreamlines()},"appState.simplification":function(t){c.set({sm:t}),this.generateStreamlines()},"appState.timeStep":function(t){c.set({ts:t}),this.generateStreamlines()},"appState.color":function(t){c.set({color:t})},"appState.strokeWidth":function(t){c.set({sw:t}),Tt.select("polyline").stroke({width:t})},"appState.bg":function(t){c.set({bg:t})},"favorites.items":function(t){0===t.length&&(this.favorites.opened=!1)}}},Bt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"sidebar"},[n("div",{staticClass:"controls-wrapper"},[n("div",{staticClass:"controls"},[n("div",{staticClass:"btn-group  d-flex",attrs:{role:"group","aria-label":"Basic example"}},[n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",disabled:0===t.history.index},on:{click:t.backInHistory}},[n("svg",{attrs:{viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M10 6 L2 16 10 26 M2 16 L30 16"}})])]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",disabled:t.history.items.length<=1||t.history.index===t.history.items.length-1},on:{click:t.forwardInHistory}},[n("svg",{attrs:{viewBox:"0 0 32 32",width:"24",height:"24",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M22 6 L30 16 22 26 M30 16 L2 16"}})])]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.regenerateStreamlines}},[t._v("Randomize")])]),t._v(" "),n("text-input",{attrs:{label:"X Formula",tooltip:t.formulaHelpText},model:{value:t.appState.xFunction,callback:function(e){t.$set(t.appState,"xFunction",e)},expression:"appState.xFunction"}}),t._v(" "),n("text-input",{attrs:{label:"Y Formula",tooltip:t.formulaHelpText},model:{value:t.appState.yFunction,callback:function(e){t.$set(t.appState,"yFunction",e)},expression:"appState.yFunction"}}),t._v(" "),n("slider",{attrs:{min:.001,max:.2,step:.001,label:"dTest"},model:{value:t.appState.dTest,callback:function(e){t.$set(t.appState,"dTest",t._n(e))},expression:"appState.dTest"}}),t._v(" "),n("slider",{attrs:{min:.001,max:1,step:.001,label:"Separation Distance"},model:{value:t.appState.separationDistance,callback:function(e){t.$set(t.appState,"separationDistance",t._n(e))},expression:"appState.separationDistance"}}),t._v(" "),n("slider",{attrs:{min:.01,max:1,step:.001,label:"Time Step"},model:{value:t.appState.timeStep,callback:function(e){t.$set(t.appState,"timeStep",t._n(e))},expression:"appState.timeStep"}}),t._v(" "),n("slider",{attrs:{min:.05,max:1,step:.05,label:"Simplification"},model:{value:t.appState.simplification,callback:function(e){t.$set(t.appState,"simplification",t._n(e))},expression:"appState.simplification"}}),t._v(" "),n("slider",{attrs:{min:1,max:5,step:1,label:"Stroke Width"},model:{value:t.appState.strokeWidth,callback:function(e){t.$set(t.appState,"strokeWidth",t._n(e))},expression:"appState.strokeWidth"}}),t._v(" "),n("color-picker",{attrs:{"disable-alpha":!0,label:"Stroke"},on:{colorChange:t.setColor},model:{value:t.strokeColor,callback:function(e){t.strokeColor=e},expression:"strokeColor"}}),t._v(" "),n("color-picker",{attrs:{"disable-alpha":!0,label:"Background"},on:{colorChange:t.setBackgroundColor},model:{value:t.bgColor,callback:function(e){t.bgColor=e},expression:"bgColor"}}),t._v(" "),n("slider",{attrs:{min:1,max:1e4,label:"Seed"},model:{value:t.appState.seed,callback:function(e){t.$set(t.appState,"seed",t._n(e))},expression:"appState.seed"}})],1)]),t._v(" "),n("div",{staticClass:"bottom-sheet"},[n("div",{staticClass:"reveal"}),t._v(" "),n("div",{staticClass:"d-flex pt-2 pb-2 download-wrapper"},[n("button",{staticClass:"btn ml-3 btn-primary btn-block",on:{click:function(e){return e.preventDefault(),t.download(e)}}},[t._v("\n          Download SVG "),n("svg",{attrs:{viewBox:"0 6 32 32",width:"16",height:"16",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16"}})])]),t._v(" "),n("button",{staticClass:"btn btn-xsm ml-3 mr-3",class:{"animate-heart":t.favorites.animateHeart},on:{animationend:function(e){t.favorites.animateHeart=!1},click:function(e){return e.preventDefault(),t.addToFavorites(e)}}},[n("svg",{attrs:{viewBox:"0 0 32 32",width:"22",height:"22",fill:"#af2430",stroke:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"}})])]),t._v(" "),n("transition",{attrs:{name:"list-button"}},[t.favorites.items.length?n("button",{staticClass:"btn btn-xsm mr-3",on:{click:function(e){t.favorites.opened=!t.favorites.opened}}},[n("svg",{attrs:{viewBox:"0 0 32 32",width:"22",height:"22",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"}})])]):t._e()])],1)]),t._v(" "),n("transition",{attrs:{name:"favorites"}},[t.favorites.opened?n("div",{staticClass:"favorites-wrapper"},[n("p",{staticClass:"pl-2 mb-1 mt-2"},[t._v("FAVORITES:\n          "),n("button",{staticClass:"btn float-right badge badge-pill badge-dark mr-2",on:{click:function(e){t.favorites.tooltip=!t.favorites.tooltip}}},[t._v("?")])]),t._v(" "),n("transition",{attrs:{name:"slide"}},[t.favorites.tooltip?n("p",{staticClass:"p-2 mb-0"},[t._v("Favorites are stored locally in your browser and will be cleared if you refresh the browser.")]):t._e()]),t._v(" "),n("transition-group",{attrs:{name:"slide",tag:"ul"}},t._l(t.favorites.items,function(e,i){return n("li",{key:e.hash},[n("span",{staticClass:"action"},[n("button",{staticClass:"btn btn-xsm",on:{click:function(n){return t.restoreFavorite(e)}}},[n("svg",{attrs:{viewBox:"0 0 32 32",width:"18",height:"18",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("circle",{attrs:{cx:"17",cy:"15",r:"1"}}),t._v(" "),n("circle",{attrs:{cx:"16",cy:"16",r:"6"}}),t._v(" "),n("path",{attrs:{d:"M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z"}})])])]),t._v(" "),n("span",{staticClass:"contents"},[t._v("\n            x: "+t._s(e.x)+" "),n("br"),t._v("\n            y: "+t._s(e.y)+"\n          ")]),t._v(" "),n("button",{staticClass:"btn btn-xsm delete",on:{click:function(e){return t.deleteFavorite(i)}}},[n("svg",{attrs:{viewBox:"0 0 32 32",width:"18",height:"18",fill:"#000000",stroke:"#fb00a5","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"}})])])])}),0)],1):t._e()])],1),t._v(" "),n("div",{staticClass:"paper"},[t._m(0),t._v(" "),n("p",{staticClass:"mt-2 mb-0 small text-black-50",attrs:{id:"xFunctionText"}},[t._v("x: "+t._s(this.appState.xFunction))]),t._v(" "),n("p",{staticClass:"small text-black-50",attrs:{id:"yFunctionText"}},[t._v("y: "+t._s(this.appState.yFunction))])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sketch"},[e("div",{attrs:{id:"drawing"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper"},[n("div",{staticClass:"footer"},[n("h2",[t._v("Flow Lines")]),t._v(" "),n("p",{staticClass:"small"},[t._v("Project by "),n("a",{attrs:{target:"_blank",href:"http://twitter.com/msurguy"}},[t._v("@msurguy")]),t._v(" "),n("br"),t._v(" "),n("a",{attrs:{target:"_blank",href:"http://github.com/msurguy/flow-lines"}},[t._v("Source")]),t._v(" | "),n("a",{attrs:{target:"_blank",href:"https://github.com/sponsors/msurguy"}},[t._v("Support")])])])])}]};var Ht=n("VU/8")(Dt,Bt,!1,function(t){n("P1zv")},"data-v-59db9240",null).exports,Pt=(n("B6z3"),n("QEfS")),Rt=n.n(Pt);n.d(e,"eventBus",function(){return Nt});var Nt=new i.a;i.a.config.productionTip=!1,i.a.use(Rt.a,{tagName:"svgicon"}),new i.a({el:"#app",components:{App:Ht},template:"<App/>"})},P1zv:function(t,e){},Q7M0:function(t,e){},"X/y5":function(t,e){},mQWe:function(t,e){},uqh5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.585bfa7df796caaef67b.js.map