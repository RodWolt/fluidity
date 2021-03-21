(this.webpackJsonpfluidity=this.webpackJsonpfluidity||[]).push([[0],{101:function(n,e,t){},102:function(n,e,t){},217:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(75),i=t.n(o),c=(t(101),t(102),t(6)),l=t(3),u=t(4),s=function(){return JSON.parse(localStorage.getItem("settings")||"{}")},p=function(n){return s()[n]};function d(){var n=Object(l.a)(["\n    transform: rotate(90deg);\n    min-width: max-content;\n    color: ",";\n    transition: .5s;\n    letter-spacing: 5px;\n"]);return d=function(){return n},n}function f(){var n=Object(l.a)(["\n    border: 4px solid var(--accent-color);\n    height: calc(100% - 8px);\n    width: 90px;\n    cursor: ",';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.8;\n    position: relative;\n    ::before {\n        content: "";\n        position: absolute;\n        bottom: 0px;\n        width: 100%;\n        height: ',";\n        background-color: var(--accent-color);\n        transition:  ",";\n    }\n    :hover{\n        ","\n    }\n\n   > .wave {\n        /* Waves Source: https://codepen.io/mburakerman/pen/eRZZEv */\n        width: 90px;\n        height: 50px;\n        position: absolute;\n        top: ",";\n        overflow: hidden;\n        transition:  ",';\n        ::before{\n            content:"";\n            width: 180px;\n            height: 185px;\n            position: absolute;\n            top: -25%;\n            left: 50%;\n            margin-left: -90px;\n            margin-top: -140px;\n            border-radius: 37%;\n            background: var(--bg-color);\n            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n        }\n        @keyframes wave {\n            from { transform: rotate(0deg);}\n            from { transform: rotate(360deg);}\n        }\n    }\n\n\n    ',";\n"]);return f=function(){return n},n}function v(){var n=Object(l.a)(["\n    height: 100%;\n    width: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    transition:.3s;\n"]);return v=function(){return n},n}function b(){var n=Object(l.a)(["\n    height: 400px;\n    display: flex;\n    padding: 0 10px;\n    flex-direction: row;\n    border-right:3px solid var(--default-color);\n    :first-of-type{\n        border-left:3px solid var(--default-color);\n    }\n"]);return b=function(){return n},n}function m(){var n=Object(l.a)(["\n    margin-left: 100px;\n    display:flex;\n    width:calc(100% - 400px - 100px);\n\n    @media only screen and (max-width: 1730px) {\n"]);return m=function(){return n},n}var g=u.a.div(m()),h=function(n){return r.a.createElement(g,null,n.children)},x=u.a.div(b()),w=u.a.div(v(),(function(n){return n.width+"px"})),y=u.a.div(f(),(function(n){return n.active?"default":"pointer"}),(function(n){return n.active?"390px":"0"}),(function(n){return n.active?"1s":".5s"}),(function(n){return!n.active&&"\n            ::before {\n                height: 50%;\n            }\n            > .wave {\n                top: 180px;\n                ::before{\n                    animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n                    top: -25%;\n                    left: 50%;\n                }\n            }\n        "}),(function(n){return n.active?"0px":"350px"}),(function(n){return n.active?"1s":".5s"}),(function(n){return!n.active&&"\n        :hover{\n            > * {\n                color: var(--bg-color);\n                text-shadow:\n                    5px 0px 0 var(--accent-color),\n                    4px 0px 0 var(--accent-color),\n                    3px 0px 0 var(--accent-color),\n                    2px 0px 0 var(--accent-color),\n                    1px 0px 0 var(--accent-color),\n                    -1px 0px 0 var(--accent-color),\n                    0px 1px 0 var(--accent-color),\n                    0px -1px 0 var(--accent-color);\n            }\n        }\n    "})),j=u.a.h1(d(),(function(n){return n.active?"var(--bg-color)":"var(--default-color)"})),k=function(n){var e,t=n.active,o=n.title,i=n.children,l=n.onClick,u=Object(a.useState)(t?500:0),s=Object(c.a)(u,2),p=s[0],d=s[1];return Object(a.useEffect)((function(){d(e&&t?e.clientWidth-113*e.children.length-3:0)}),[t]),r.a.createElement(x,{ref:function(n){return e=null===n||void 0===n?void 0:n.parentElement}},r.a.createElement(y,{active:t,onClick:l},r.a.createElement("div",{className:"wave"}),r.a.createElement(j,{active:t,title:o},o)),r.a.createElement(w,{width:p},i))},E=t(77),O=t.n(E),S=t(78),C=t.n(S),z=t(79),_=t.n(z),J=t(80),N=t.n(J),A=t(81),K=t.n(A),I=t(82),B=t.n(I),D=t(83),T=t.n(D),W=t(84),q=t.n(W),L=[{title:"Reddit",links:[{label:"r/startpages",value:"https://www.reddit.com/r/startpages/"},{label:"r/unixporn",value:"https://www.reddit.com/r/unixporn/"},{label:"r/rainmeter",value:"https://www.reddit.com/r/rainmeter/"},{label:"r/AnimalsBeingDerps",value:"https://www.reddit.com/r/AnimalsBeingDerps/"}]},{title:"3D Modelling",links:[{label:"Blender",value:"https://www.blender.org/"},{label:"BlenderGuru",value:"https://www.blenderguru.com/"},{label:"Poliigon",value:"https://www.poliigon.com/"},{label:"Blender tutorial",value:"https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U"},{label:"The other Blender tutorial",value:"https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1"}]},{title:"Design",links:[{label:"PixlrX",value:"https://pixlr.com/x/"},{label:"AI Image Enlarger",value:"https://bigjpg.com/en"},{label:"Img to Svg Converter",value:"https://picsvg.com/"},{label:"Affinity",value:"https://affinity.serif.com/en-us/tutorials/designer/desktop/"},{label:"Affinity - YT",value:"https://www.youtube.com/c/AffinityRevolution/playlists"}]},{title:"Music",links:[{label:"i wanna be a cowboy",value:"https://www.youtube.com/watch?v=8zWz92f_HGs"},{label:"let the bodies hit the floor",value:"https://www.youtube.com/watch?v=b--VKaCB9u0"},{label:"Nobody Kanna Cross It",value:"https://www.youtube.com/watch?v=2wqTnwJGvtc"},{label:"Smug Dancin",value:"https://www.youtube.com/watch?v=eNZ9Od1jQ4Q"},{label:"Utamaru - The Sanctified Mind Cover",value:"https://www.youtube.com/watch?v=MHlJKLlS07U"}]},{title:"Sauce",links:[{label:"JS Library - React",value:"https://reactjs.org/"},{label:"CSS Writing Library - EmotionJS",value:"https://emotion.sh/docs/introduction"},{label:"Pictures - DeathAndMilk",value:"https://www.instagram.com/deathandmilk_/"},{label:"Icons - FontAwesome",value:"https://fontawesome.com/icons"},{label:"Text Flicker - CodeMyUI",value:"https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/"},{label:"Wave Animation - mburakerman",value:"https://codepen.io/mburakerman/pen/eRZZEv"},{label:"About me t(\u0ca0\u76ca\u0ca0t)",value:"/"},{label:"Da real sauce \u0505(\u2661\ufe43\u2661\u0505)",value:"https://www.youtube.com/watch?v=qr89xoZyE1g"},{label:"Even more real sauce ( \u0361\xb0 \u035c\u0296 \u0361\xb0)",value:"https://www.youtube.com/watch?v=VLhJOd_TFiI"}]}],M=[{label:"pic_1",value:O.a},{label:"pic_2",value:C.a},{label:"pic_3",value:_.a},{label:"pic_4",value:N.a},{label:"pic_5",value:K.a},{label:"pic_6",value:B.a},{label:"pic_7",value:T.a},{label:"pic_8",value:q.a}],P=[{label:"DuckDuckGo",value:"duckduckgo.com/"},{label:"Google",value:"google.com/search"},{label:"Qwant",value:"qwant.com/"}],U={"--bg-color":"rgb(46, 46, 46)","--default-color":"rgb(230, 230, 230)","--accent-color":"rgb(255, 180, 230)","--accent-color2":"rgb(180, 255, 230)"};function V(){var n=Object(l.a)(['\n    width: fit-content;\n    white-space: nowrap;\n    position:relative;\n    padding: 10px 0 10px 30px;\n    font-size:1rem;\n    transition:.5s;\n\n    ::before{\n        position:absolute;\n        left:0px;\n        bottom:5px;\n        z-index:0;\n        content: "";\n        height:5px;\n        width:100%;\n        background-color: var(--accent-color);\n        transition:.5s;\n        opacity:.7;\n    }\n\n    :hover {\n        color: var(--accent-color2);\n        animation:text-flicker 0.01s ease 0s infinite alternate;\n    }\n\n']);return V=function(){return n},n}var R=u.a.a(V()),Z=function(){var n,e=Object(a.useState)(0),t=Object(c.a)(e,2),o=t[0],i=t[1];try{var l=p("link-groups");n=l?JSON.parse(l):L}catch(u){n=[]}return r.a.createElement(h,null,n.map((function(n,e){return r.a.createElement(k,{key:"AccordionGroup"+e,active:o===e,title:n.title,onClick:function(){return i(e)}},n.links.map((function(n,e){return r.a.createElement(R,{key:"LinkItem"+e,href:n.value},n.label)})))})))},F=t(85),G=t.n(F),H=t(86),Q=t.n(H),X=t(87),Y=t.n(X);function $(){var n=Object(l.a)(["\n    position: fixed;\n    left: 35px;\n    bottom: 40px;\n    height: 2.9rem;\n    width: 2.9rem;\n\n    background: var(--default-color);\n    \n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(",");\n    mask-image: url(",");\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n    width: 100%;\n    font-size: 30pt;\n    \n    background-color: rgba(0,0,0,0);\n    color: var(--default-color);\n    transition: .3s;\n    border: none;\n    border-bottom: 2px solid var(--default-color);\n    opacity: 0.3;\n    \n    ::placeholder {\n        color: var(--default-color);\n    }\n    \n    :hover, :focus {\n        opacity: 1;\n        outline: none;\n    }\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n    position: fixed;\n    left: 100px;\n    right: 50px;\n    bottom: 40px;\n    height:min-content;\n    "]);return en=function(){return n},n}var tn=u.a.div(en()),an=u.a.input(nn()),rn=u.a.div($(),(function(n){return n.src}),(function(n){return n.src})),on=function(){var n=p("search-engine")||"duckduckgo.com/",e=n.startsWith("google")?G.a:n.startsWith("qwant")?Y.a:Q.a;return r.a.createElement(tn,null,r.a.createElement(an,{placeholder:"Always stay clean!",type:"input",onKeyUp:function(e){return 13===e.which&&(t=e.currentTarget.value,void(window.location.href="https://"+n+"?q="+t));var t},autoFocus:!0}),r.a.createElement(rn,{src:e}))},cn=t(8),ln=t(27),un=t(93);function sn(){var n=Object(l.a)(["\n    color: ",";\n    background-color: transparent;\n    min-width:50px;\n\tfont-size: 20px;\n    border: none;\n\topacity: 0.7;\n\tcursor: pointer;\n\ttransition: .3s;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    :enabled:hover{\n        ",";\n    }\n    :focus{\n        outline: none;\n    }\n    :disabled{\n        opacity: 0.2;\n        cursor: default;\n    }\n\n    > span{\n        margin-right:10px;\n    }\n"]);return sn=function(){return n},n}var pn=u.a.button(sn(),(function(n){return n.inverted?"var(--bg-color)":"var(--default-color)"}),(function(n){return n.inverted?"filter: \n            drop-shadow(2px 2px 0 var(--accent-color))\n            drop-shadow(-2px -2px 0 var(--accent-color2))\n            drop-shadow(-2px 2px 0 var(--accent-color))\n            drop-shadow(2px -2px 0 var(--accent-color2))":"animation: box-flicker 0.01s ease 0s infinite alternate"})),dn=function(n){var e=n.icon,t=n.text,a=Object(un.a)(n,["icon","text"]);return r.a.createElement(pn,a,t&&r.a.createElement("span",null,t),r.a.createElement(ln.a,{icon:e}))};function fn(){var n=Object(l.a)(["\n    height: 20px;\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    align-items: space-between;\n    justify-content: space-between;\n    padding:5px 0;\n"]);return fn=function(){return n},n}var vn=u.a.div(fn()),bn=function(n){var e=n.values,t=n.onChange,o=n.settingsKey,i=Object(a.useState)(0),l=Object(c.a)(i,2),u=l[0],s=l[1];Object(a.useEffect)((function(){e.forEach((function(n,e){p(o)===n.value&&e!==u&&s(e)}))}),[]);var d=function(n){s(n),t(e[n].value)};return r.a.createElement(vn,null,r.a.createElement(dn,{disabled:u<=0,onClick:function(){d(u-1)},icon:cn.a}),e[u].label,r.a.createElement(dn,{disabled:u>=e.length-1,onClick:function(){return d(u+1)},icon:cn.b}))};function mn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    color: var(--default-color);\n    border: none;\n    height:100%;\n    outline:none;\n    width: calc(100% - 82px);\n"]);return mn=function(){return n},n}function gn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    border: 2px solid var(--default-color);\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0 10px 20px;\n    width:376px;\n"]);return gn=function(){return n},n}var hn=u.a.div(gn()),xn=u.a.input(mn()),wn=function(n){var e=n.settingsKey,t=n.onChange,o=Object(a.useState)(p(e)||""),i=Object(c.a)(o,2),l=i[0],u=i[1];return r.a.createElement(hn,null,r.a.createElement(xn,{type:"text",onKeyUp:function(n){return 13===n.which?t(l):u(n.currentTarget.value)},placeholder:"Picture URL",defaultValue:l}),r.a.createElement(dn,{icon:cn.c,onClick:function(n){return t(l)}}))};function yn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    color: var(--default-color);\n    border: none;\n    height: 100%;\n    outline: none;\n    width: 100%;\n    resize: none;\n"]);return yn=function(){return n},n}function jn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    border: 2px solid var(--default-color);\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px 0 10px 20px;\n    width:calc(100% - 450px);\n    height:calc(100% - 30px);\n"]);return jn=function(){return n},n}var kn=u.a.div(jn()),En=u.a.textarea(yn()),On=JSON.stringify([{title:"Title",links:[{label:"label",value:"url"},{label:"label",value:"url"},{label:"label",value:"url"}]}],null,4),Sn=function(n){var e=n.initialValue,t=(n.settingsKey,n.onChange);return r.a.createElement(kn,null,r.a.createElement(En,{onKeyUp:function(n){return t(n.currentTarget.value)},placeholder:On,defaultValue:e}))},Cn=t(94),zn=t(92);function _n(){var n=Object(l.a)(["\n    > div * {\n        background-color: var(--bg-color)!important;\n        color: var(--default-color)!important;\n        box-shadow: none;\n    }\n    > div{\n        border: 2px solid var(--default-color);\n    }\n"]);return _n=function(){return n},n}function Jn(){var n=Object(l.a)(["\n    width: 100%;\n    padding: 5px 0;\n    cursor: pointer;\n    opacity: ",";\n    color: ",";\n    :hover {\n        color: var(--accent-color2);\n        animation:text-flicker 0.01s ease 0s infinite alternate;\n    }\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n    height: 200px;\n    display: flex;\n    > div {\n        padding: 0 10px;\n        width: 180px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n"]);return Nn=function(){return n},n}var An=u.a.div(Nn()),Kn=u.a.div(Jn(),(function(n){return!n.active&&"0.7"}),(function(n){return n.active&&"var(--accent-color)"})),In=u.a.div(_n()),Bn=function(n){var e=n.newColors,t=n.setNewColors,o=Object(a.useState)(Object.keys(U)[0]),i=Object(c.a)(o,2),l=i[0],u=i[1],s=JSON.parse(e);return r.a.createElement(An,null,r.a.createElement("div",null,Object.keys(U).map((function(n){return r.a.createElement(Kn,{key:n,active:n===l,onClick:function(){return u(n)}},n)}))),r.a.createElement(In,null,r.a.createElement(zn.a,{color:s[l],onChange:function(n){return n&&function(n){var e=Object(Cn.a)({},s);e[l]=n.hex,t(JSON.stringify(e))}(n)}})))};function Dn(){var n=Object(l.a)(["\n    margin: 10px 80px; \n    height:200px;\n    width:200px;\n    border: 1px solid var(--default-color);\n    padding: 5px;\n    object-fit:cover;\n\n    animation:circling-shadow-small 4s ease 0s infinite normal;\n"]);return Dn=function(){return n},n}function Tn(){var n=Object(l.a)(["\n    background-color: var(--default-color);\n    color: var(--bg-color);\n    font-size: 1rem;\n    padding: 10px 20px;\n    :enabled:hover{\n        animation: circling-shadow-small 2s ease 0s infinite normal;\n    }\n"]);return Tn=function(){return n},n}function Wn(){var n=Object(l.a)(["\n    position: absolute;\n    right:0px;\n    top:0px;\n    z-index:15;\n    height:30px;\n    opacity: 1;\n    padding:0;\n"]);return Wn=function(){return n},n}function qn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    position: relative;\n    padding: 10px 0px;\n    z-index: 10;\n    display:flex;\n    justify-content: space-between;\n"]);return qn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    width:400px;\n    height:100%;\n    margin-right:30px;\n    padding-right:20px;\n    overflow-y: auto;\n"]);return Ln=function(){return n},n}function Mn(){var n=Object(l.a)(['\n    background-color: var(--bg-color);\n    position: relative;\n    border: 2px solid var(--default-color);\n    width: 100%;\n    height: 100%;\n    padding: 60px 30px 30px 30px;\n    box-shadow: 10px 10px 0px var(--accent-color);\n    animation-fill-mode: both;\n    display:flex;\n\n    ::before{\n        content:"Settings";\n        color: var(--bg-color);\n        padding: 5px 0 0 10px;\n        background-color: var(--default-color);\n        width:calc(100% - 10px);\n        height: 25px;\n        position:absolute;\n        z-index:10;\n        left:0;\n        top:0;\n    }\n']);return Mn=function(){return n},n}var Pn=u.a.div(Mn()),Un=u.a.div(Ln()),Vn=u.a.div(qn()),Rn=Object(u.a)(dn)(Wn()),Zn=Object(u.a)(dn)(Tn()),Fn=u.a.img(Dn()),Gn=function(n){var e=n.hidePopup,t=Object(a.useState)(p("colors")||JSON.stringify(U)),o=Object(c.a)(t,2),i=o[0],l=o[1],u=Object(a.useState)(p("link-groups")||JSON.stringify(L,null,4)),d=Object(c.a)(u,2),f=d[0],v=d[1],b=Object(a.useState)(p("image")||M[0].value),m=Object(c.a)(b,2),g=m[0],h=m[1],x=Object(a.useState)(p("search-engine")||P[0].value),w=Object(c.a)(x,2),y=w[0],j=w[1],k=function(n,e){!function(n,e){var t=s();t[n]=e,localStorage.setItem("settings",JSON.stringify(t))}(n,e)};return r.a.createElement(Pn,null,r.a.createElement(Rn,{inverted:!0,onClick:function(){return e()},icon:cn.f}),r.a.createElement(Un,null,r.a.createElement(Vn,null,r.a.createElement(bn,{settingsKey:"search-engine",values:P,onChange:j})),r.a.createElement(Vn,null,r.a.createElement(bn,{settingsKey:"image",values:M,onChange:h})),r.a.createElement(Vn,null,r.a.createElement(wn,{settingsKey:"image",onChange:h})),r.a.createElement(Vn,null,r.a.createElement(Fn,{src:g})),r.a.createElement(Vn,null,r.a.createElement(Bn,{newColors:i,setNewColors:l})),r.a.createElement(Vn,null,r.a.createElement(Zn,{onClick:function(){return k("image",g),k("search-engine",y),k("colors",i),k("link-groups",f),void window.location.reload(!1)},text:"Apply",icon:cn.e}),r.a.createElement(Zn,{onClick:function(){localStorage.clear(),window.location.reload(!1)},text:"Reset",icon:cn.g}))),r.a.createElement(Sn,{settingsKey:"link-groups",onChange:v,initialValue:f}))};function Hn(){var n=Object(l.a)(["\n    position: absolute;\n\ttop:0px;\n    left:0px;\n    right:0px;\n    bottom:0px;\n    padding:100px;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return Hn=function(){return n},n}function Qn(){var n=Object(l.a)(["\n    position: fixed;\n\tleft:0px;\n    width:100%;\n    height:100%;\n    background-color: var(--bg-color);\n    opacity: 0.7;\n"]);return Qn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n\tposition: fixed;\n\ttop: 20px;\n\tright:20px;\n\tfont-size: 20px;\n\n\tcolor: var(--default-color);\n    background-color:transparent;\n    border:none;\n\topacity: 0.3;\n\n\tcursor: pointer;\n\ttransition: .3s;\n\n    :hover{\n        opacity: .5;\n        color: var(--accent-color2);\n        animation:box-flicker 0.01s ease 0s infinite alternate;\n    }\n    :focus{\n        outline: none;\n    }\n"]);return Xn=function(){return n},n}var Yn=u.a.button(Xn()),$n=u.a.div(Qn()),ne=u.a.div(Hn()),ee=function(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1],i=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Yn,{onClick:function(){return o(!0)}},r.a.createElement(ln.a,{icon:cn.d})),t&&r.a.createElement(ne,null,r.a.createElement($n,{onClick:function(){return i()}}),r.a.createElement(Gn,{hidePopup:i})))};function te(){var n=Object(l.a)(["\n    height:400px;\n    width:400px;\n    border: 2px solid var(--default-color);\n    padding: 10px;\n    object-fit:cover;\n\n    animation:circling-shadow 4s ease 0s infinite normal;\n"]);return te=function(){return n},n}function ae(){var n=Object(l.a)(["\n    padding:0px 100px;\n    display:flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items:center;\n    height:calc(100% - 100px);\n"]);return ae=function(){return n},n}var re=u.a.div(ae()),oe=u.a.img(te()),ie=function(){var n=Object(a.useState)(p("image")||M[0].value),e=Object(c.a)(n,2),t=e[0],o=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,r.a.createElement("div",null,r.a.createElement(oe,{src:t,onError:function(){return o(M[0].value)}})),r.a.createElement(Z,null)),r.a.createElement(on,null),r.a.createElement(ee,null))},ce=function(){var n=p("colors");if(n){var e=document.documentElement,t=JSON.parse(n);Object.keys(t).forEach((function(n){e.style.setProperty(n,t[n])}))}return r.a.createElement(ie,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},77:function(n,e,t){n.exports=t.p+"static/media/pic_1.03400a86.jpg"},78:function(n,e,t){n.exports=t.p+"static/media/pic_2.42b93d95.jpg"},79:function(n,e,t){n.exports=t.p+"static/media/pic_3.8796fde5.jpg"},80:function(n,e,t){n.exports=t.p+"static/media/pic_4.66ccb182.jpg"},81:function(n,e,t){n.exports=t.p+"static/media/pic_5.6e9543cd.jpg"},82:function(n,e,t){n.exports=t.p+"static/media/pic_6.65b20253.jpg"},83:function(n,e,t){n.exports=t.p+"static/media/pic_7.6516acf6.jpg"},84:function(n,e,t){n.exports=t.p+"static/media/pic_8.ba1342f4.png"},85:function(n,e,t){n.exports=t.p+"static/media/google.9ef22081.svg"},86:function(n,e,t){n.exports=t.p+"static/media/duckduckgo.e5067b7c.svg"},87:function(n,e,t){n.exports=t.p+"static/media/qwant.f90c346a.svg"},96:function(n,e,t){n.exports=t(217)}},[[96,1,2]]]);
//# sourceMappingURL=main.e17e93a0.chunk.js.map