(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),i=n("07e3"),c=n("8e60"),o=n("63b6"),a=n("9138"),s=n("ebfd").KEY,f=n("294c"),u=n("dbdb"),l=n("45f2"),b=n("62a0"),p=n("5168"),h=n("ccb9"),v=n("6718"),d=n("47ee"),y=n("9003"),m=n("e4ae"),g=n("f772"),O=n("36c3"),w=n("1bc3"),x=n("aebd"),S=n("a159"),j=n("0395"),E=n("bf0b"),_=n("d9f6"),C=n("c3a1"),P=E.f,N=_.f,k=j.f,F=r.Symbol,R=r.JSON,D=R&&R.stringify,J="prototype",T=p("_hidden"),$=p("toPrimitive"),A={}.propertyIsEnumerable,I=u("symbol-registry"),K=u("symbols"),W=u("op-symbols"),B=Object[J],M="function"==typeof F,Y=r.QObject,z=!Y||!Y[J]||!Y[J].findChild,G=c&&f(function(){return 7!=S(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=P(B,e);r&&delete B[e],N(t,e,n),r&&t!==B&&N(B,e,r)}:N,Q=function(t){var e=K[t]=S(F[J]);return e._k=t,e},q=M&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},H=function(t,e,n){return t===B&&H(W,e,n),m(t),e=w(e,!0),m(n),i(K,e)?(n.enumerable?(i(t,T)&&t[T][e]&&(t[T][e]=!1),n=S(n,{enumerable:x(0,!1)})):(i(t,T)||N(t,T,x(1,{})),t[T][e]=!0),G(t,e,n)):N(t,e,n)},L=function(t,e){m(t);var n,r=d(e=O(e)),i=0,c=r.length;while(c>i)H(t,n=r[i++],e[n]);return t},U=function(t,e){return void 0===e?S(t):L(S(t),e)},V=function(t){var e=A.call(this,t=w(t,!0));return!(this===B&&i(K,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(K,t)||i(this,T)&&this[T][t])||e)},X=function(t,e){if(t=O(t),e=w(e,!0),t!==B||!i(K,e)||i(W,e)){var n=P(t,e);return!n||!i(K,e)||i(t,T)&&t[T][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=k(O(t)),r=[],c=0;while(n.length>c)i(K,e=n[c++])||e==T||e==s||r.push(e);return r},tt=function(t){var e,n=t===B,r=k(n?W:O(t)),c=[],o=0;while(r.length>o)!i(K,e=r[o++])||n&&!i(B,e)||c.push(K[e]);return c};M||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=b(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(W,n),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),G(this,t,x(1,n))};return c&&z&&G(B,t,{configurable:!0,set:e}),Q(t)},a(F[J],"toString",function(){return this._k}),E.f=X,_.f=H,n("6abf").f=j.f=Z,n("355d").f=V,n("9aa9").f=tt,c&&!n("b8e3")&&a(B,"propertyIsEnumerable",V,!0),h.f=function(t){return Q(p(t))}),o(o.G+o.W+o.F*!M,{Symbol:F});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=C(p.store),it=0;rt.length>it;)v(rt[it++]);o(o.S+o.F*!M,"Symbol",{for:function(t){return i(I,t+="")?I[t]:I[t]=F(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),o(o.S+o.F*!M,"Object",{create:U,defineProperty:H,defineProperties:L,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),R&&o(o.S+o.F*(!M||f(function(){var t=F();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(g(e)||void 0!==t)&&!q(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,D.apply(R,r)}}),F[J][$]||n("35e8")(F[J],$,F[J].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),i=n("6abf").f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==c.call(t)?a(t):i(r(t))}},"1bc1":function(t,e,n){"use strict";var r=n("25e5"),i=n.n(r);i.a},"25e5":function(t,e,n){},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(r(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),i=n("9aa9"),c=n("355d");t.exports=function(t){var e=r(t),n=i.f;if(n){var o,a=n(t),s=c.f,f=0;while(a.length>f)s.call(t,o=a[f++])&&e.push(o)}return e}},6718:function(t,e,n){var r=n("e53d"),i=n("584a"),c=n("b8e3"),o=n("ccb9"),a=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=c?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:o.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,n){t.exports=n("8aae")},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("ExchangeRatesBox")],1)])},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[n("div",{staticClass:"box"},[n("h1",{staticClass:"text-title"},[t._v("อัตราการแลกเปลี่ยนสกุลเงิน")]),n("h1",{staticClass:"text-subtitle"},[t._v("(1 บาท ต่อ สกุลเงินต่างประเทศ)")]),n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column"},[n("ExchangeRatesTable")],1)])])])])},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table is-striped is-hoverable is-narrow is-fullwidth"},[t._m(0),n("tbody",t._l(t.getRates,function(e,r){return n("tr",{key:r,attrs:{id:r}},[n("td",{staticClass:"has-text-centered"},[n("span",[n("flag",{attrs:{iso:t.getCurrency[r]}})],1)]),n("td",{staticClass:"has-text-centered"},[n("span",[t._v(t._s(r))])]),n("td",{staticClass:"has-text-centered"},[n("span",[t._v(t._s(e))])])])}),0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"has-text-centered"},[n("span",[t._v("ประเทศ")])]),n("th",{staticClass:"has-text-centered"},[n("span",[t._v("สกุลเงิน")])]),n("th",{staticClass:"has-text-centered"},[n("span",[t._v("อัตราแลกเปลี่ยน")])])])])}],f=n("268f"),u=n.n(f),l=n("e265"),b=n.n(l),p=n("a4bb"),h=n.n(p),v=n("85f2"),d=n.n(v);function y(t,e,n){return e in t?d()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=h()(n);"function"===typeof b.a&&(r=r.concat(b()(n).filter(function(t){return u()(n,t).enumerable}))),r.forEach(function(e){y(t,e,n[e])})}return t}var g=n("2f62"),O={created:function(){this.$store.dispatch("fetchRates")},computed:m({},Object(g["b"])(["getCurrency","getRates"]))},w=O,x=n("2877"),S=Object(x["a"])(w,a,s,!1,null,null,null),j=S.exports,E={components:{ExchangeRatesTable:j}},_=E,C=(n("1bc1"),Object(x["a"])(_,c,o,!1,null,"07eef781",null)),P=C.exports,N={name:"home",components:{ExchangeRatesBox:P}},k=N,F=Object(x["a"])(k,r,i,!1,null,null,null);e["default"]=F.exports},bf0b:function(t,e,n){var r=n("355d"),i=n("aebd"),c=n("36c3"),o=n("1bc3"),a=n("07e3"),s=n("794b"),f=Object.getOwnPropertyDescriptor;e.f=n("8e60")?f:function(t,e){if(t=c(t),e=o(e,!0),s)try{return f(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),c=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*c(function(){n(1)}),"Object",o)}},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var r=n("62a0")("meta"),i=n("f772"),c=n("07e3"),o=n("d9f6").f,a=0,s=Object.isExtensible||function(){return!0},f=!n("294c")(function(){return s(Object.preventExtensions({}))}),u=function(t){o(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,r)){if(!s(t))return"F";if(!e)return"E";u(t)}return t[r].i},b=function(t,e){if(!c(t,r)){if(!s(t))return!0;if(!e)return!1;u(t)}return t[r].w},p=function(t){return f&&h.NEED&&s(t)&&!c(t,r)&&u(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:b,onFreeze:p}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=home.061a8a34.js.map