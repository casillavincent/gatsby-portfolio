(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[630],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var i=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),a=function(){return(a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function l(e){return e&&e.map((function(e,t){return i.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return i.createElement(m,a({attr:a({},e.attr)},t),l(e.child))}}function m(e){var t=function(t){var n,r=e.attr,o=e.size,l=e.title,s=c(e,["attr","size","title"]),m=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&i.createElement("title",null,l),e.children)};return void 0!==o?i.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}},8496:function(e,t,n){"use strict";var i=n(7294),r=n(9),o=r.ZP.section.withConfig({displayName:"Contact__StyledSection",componentId:"sc-1fn8kq5-0"})(["height:40vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px 35px;@media screen and (min-width:25em){height:75vh;min-height:600px;}"]),a=r.ZP.div.withConfig({displayName:"Contact__ContactInnerWrapper",componentId:"sc-1fn8kq5-1"})(["width:auto;height:auto;max-width:650px;@media screen and (min-width:75em){max-width:none;}"]),c=r.ZP.p.withConfig({displayName:"Contact__StyledContext",componentId:"sc-1fn8kq5-2"})(["font-size:0.75em;text-transform:uppercase;font-weight:normal;@media screen and (min-width:50em){font-size:0.85em;}"]),l=r.ZP.p.withConfig({displayName:"Contact__StyledTitle",componentId:"sc-1fn8kq5-3"})(["font-size:1.5em;font-weight:bold;letter-spacing:1px;line-height:1;@media screen and (min-width:25em){font-size:2em;}@media screen and (min-width:50em){font-size:4em;}"]),s=r.ZP.a.attrs({href:"mailto:webdeveloper@vcasilla.com?subject=Hello Vincent!",rel:"noopener noreferrer",target:"_blank"}).withConfig({displayName:"Contact__StyledEmail",componentId:"sc-1fn8kq5-4"})(["color:#f55f44;font-size:0.9em;transition:0.3s ease-out;&:hover{text-decoration:underline;}@media screen and (min-width:25em){font-size:1.2em;}@media screen and (min-width:50em){font-size:2em;}"]);t.Z=function(){return i.createElement(o,{className:"contact",id:"contact"},i.createElement(a,null,i.createElement(c,null,"Contact"),i.createElement(l,{className:"email-contact"},"Like my work? Let's chat!"),i.createElement(s,null,"webdeveloper@vcasilla.com")))}},8638:function(e,t,n){"use strict";var i=n(7294);t.Z=function(){return i.createElement("footer",{className:"site-footer",id:"site-footer"},i.createElement("p",{className:"copyright"},"© Vincent Casilla 2021"),i.createElement("div",{className:"social"},i.createElement("p",null,"connect with me"),i.createElement("div",{className:"social-links"},i.createElement("a",{rel:"noreferrer",href:"https://twitter.com/casillavincent",className:"twitter-link",title:"Twitter",id:"twitter",target:"_blank"},"Twitter"),i.createElement("a",{rel:"noreferrer",href:"https://github.com/casillavincent",className:"github-link",title:"Github",id:"github",target:"_blank"},"Github"),i.createElement("a",{rel:"noreferrer",href:"https://www.linkedin.com/in/vcasilla/",className:"linkedin-link",title:"Linkedin",id:"linkedin",target:"_blank"},"Linkedin"))))}},2402:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(2961);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var i,r,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return o}}(e,t)||(0,o.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.direction,o=void 0===r?"left":r,c=e.distance,l=void 0===c?"md":c,s=e.duration,m=void 0===s?.4:s,d=e.easing,u=void 0===d?"cubic-bezier(0, 0, 0, 1)":d,f=e.hideOutline,p=void 0===f||f,h=e.label,g=e.lines,b=void 0===g?3:g,y=e.onToggle,w=e.render,v=e.rounded,x=void 0!==v&&v,E=e.size,O=void 0===E?32:E,k=e.toggle,N=e.toggled,C=a((0,i.useState)(!1),2),_=C[0],S=C[1],j=Math.max(12,Math.min(48,O)),P=Math.round((48-j)/2),z=j/12,I=Math.round(z),Z=j/(b*(("lg"===l?.25:"sm"===l?.75:.5)+(3===b?1:1.25))),T=Math.round(Z),q=I*b+T*(b-1),L=Math.round((48-q)/2),H=parseFloat((j/(3===b?"lg"===l?4.0425:"sm"===l?5.1625:4.6325:"lg"===l?6.7875:"sm"===l?8.4875:7.6675)-(z-I+(Z-T))/(3===b?1:2)/(4/3)).toFixed(2)),M=Math.max(0,m),A={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(M,"s ").concat(u),userSelect:"none",width:"".concat(48,"px")},U={background:n,height:"".concat(I,"px"),left:"".concat(P,"px"),position:"absolute"};p&&(A.outline="none"),x&&(U.borderRadius="9em");var D=k||S,B=void 0!==N?N:_;return w({barHeight:I,barStyles:U,burgerStyles:A,easing:u,handler:function(){D(!B),"function"==typeof y&&y(!B)},isLeft:"left"===o,isToggled:B,label:h,margin:T,move:H,time:M,topOffset:L,width:j})};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=function(e){return i.createElement(c,m({},e,{render:function(e){return i.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:s(s({},e.burgerStyles),{},{transform:"".concat(e.isToggled?"rotate(".concat(180*(e.isLeft?-1:1),"deg)"):"none")}),tabIndex:0},i.createElement("div",{style:s(s({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?-1:1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(e.move,"px)"):"none")})}),i.createElement("div",{style:s(s({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),opacity:"".concat(e.isToggled?"0":"1")})}),i.createElement("div",{style:s(s({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?1:-1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(-1*e.move,"px)"):"none")})}))}}))},u=n(5444),f=n(9),p=f.ZP.header.withConfig({displayName:"styles__StyledHeader",componentId:"sc-1n7wflq-0"})(["width:100%;height:75px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:absolute;top:0px;left:0px;@media screen and (min-width:50em){height:90px;}"]),h=f.ZP.button.withConfig({displayName:"styles__StyledButton",componentId:"sc-1n7wflq-1"})(["background:none;border-style:none;margin-right:10px;transition:all 0.4s ease-out;@media screen and (min-width:50em){margin-right:100px;}"]),g=f.ZP.nav.withConfig({displayName:"styles__Navigation",componentId:"sc-1n7wflq-2"})(["transition:all 0.8s cubic-bezier(0.83,0,0.17,1);position:fixed;z-index:999;top:",";opacity:",";@media screen and (min-width:50em){top:",";}left:0px;background:white;width:100%;height:100vh;ul{width:inherit;height:inherit;display:flex;flex-direction:column;align-items:center;justify-content:center;}ul li{margin-bottom:25px;list-style-type:none;a{color:black;font-size:1.15em;transition:0.25s ease-out;@media screen and (min-width:50em){font-size:1.25em;&:hover{color:#f55f44;padding-left:10px;}}}}"],(function(e){return e.isOpen?"75px":"100%"}),(function(e){return e.isOpen?"100%":"25%"}),(function(e){return e.isOpen?"90px":"100%"})),b=f.ZP.div.withConfig({displayName:"styles__Logo",componentId:"sc-1n7wflq-3"})(["margin-left:20px;transition:all 0.4s ease-out;a{font-size:1.25em;padding:10px;color:",";}@media screen and (min-width:50em){margin-left:100px;a{font-size:1.5em;}}"],(function(e){return"light"===e.theme?"white":"black"})),y=function(e){var t=e.theme,n=(0,i.useState)(!1),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=document.querySelector("body");r?e.setAttribute("style","overflow-y: hidden"):e.removeAttribute("style")}),[r]),console.log(t),i.createElement(p,{className:"site-header"},i.createElement(b,{className:"logo",theme:t},i.createElement(u.rU,{to:"/"},"Portfolio.")),i.createElement(h,{className:"hamburger-icon"},i.createElement(d,{size:"20",color:"light"===t?"white":"black",toggled:r,toggle:o})),i.createElement(g,{className:"site-navigation",isOpen:r,onClick:function(){o(!1)}},i.createElement("ul",{className:"nav-ul"},i.createElement("li",{className:"nav-li"},i.createElement(u.rU,{to:"/"},"Home")),i.createElement("li",{className:"nav-li"},i.createElement(u.rU,{to:"/about"},"About")),i.createElement("li",{className:"nav-li"},i.createElement(u.rU,{to:"#contact"},"Contact")))))}},8497:function(e,t,n){"use strict";var i=n(7294);t.Z=function(e){var t=e.children;return i.createElement("div",{className:"wrapper"},i.createElement("main",{className:"site-main"},t))}},6650:function(e,t,n){"use strict";var i=n(7294),r=n(1852),o=n(9).ZP.button.withConfig({displayName:"TopBtn__StyledButton",componentId:"p8v6q0-0"})(["background:none;border-style:none;width:100%;height:100px;@media screen and (min-width:50em){transition:all 0.2s ease-out;&:hover{cursor:pointer;margin-bottom:5px;color:#f55f44;}width:100px;position:fixed;bottom:0px;left:0px;z-index:0;}"]);t.Z=function(){var e=document.querySelector("body"),t=(0,i.useState)(!1),n=t[0],a=t[1];return e.onscroll=function(e){window.innerHeight+window.scrollY>=document.body.offsetHeight?a(!0):a(!1)},i.createElement(o,{className:"back-to-top-btn",title:"Scroll to Top",onClick:function(){window.scrollTo(0,0)}},i.createElement(r.mXI,{size:"3em",color:n?"#f55f44":"black"}))}}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-ba28492b3873966157ba.js.map