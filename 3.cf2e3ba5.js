/*! For license information please see 3.cf2e3ba5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{116:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(134),o=a(97),i=a(104),l=a(10),s="light",u="dark",d=function(e){return e===u?u:s},m=function(){return l.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},f=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).colorMode,r=(a=void 0===a?{}:a).disableSwitch,c=void 0!==r&&r,i=Object(n.useState)(m),l=i[0],h=i[1],v=Object(n.useCallback)((function(){h(s),f(s)}),[]),b=Object(n.useCallback)((function(){h(u),f(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(l))}),[l]),Object(n.useEffect)((function(){if(!c)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(n.useEffect)((function(){c||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:l===u,setLightTheme:v,setDarkTheme:b}},v=a(135);var b=function(e){var t=h(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(v.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},g=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},p=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).announcementBar,r=(a=void 0===a?{}:a).id,c=void 0===r?"annoucement-bar":r,i=Object(n.useState)(!0),l=i[0],s=i[1];return Object(n.useEffect)((function(){if(c){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&s(!1)}}),[]),{isAnnouncementBarClosed:l,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),s(!0)}}},k=a(136);var E=function(e){var t=g(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=p(),o=c.isAnnouncementBarClosed,i=c.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:i}},e.children)},O=a(117),j=a(48),y=a.n(j);var _=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).announcementBar,n=void 0===a?{}:a,c=n.content,i=n.backgroundColor,l=n.textColor,s=Object(O.a)(),u=s.isAnnouncementBarClosed,d=s.closeAnnouncementBar;return!c||u?null:r.a.createElement("div",{className:y.a.announcementBar,style:{backgroundColor:i,color:l},role:"banner"},r.a.createElement("div",{className:y.a.announcementBarContent,dangerouslySetInnerHTML:{__html:c}}),r.a.createElement("button",{type:"button",className:y.a.announcementBarClose,onClick:d,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},w=a(2),C=a(101),N=a(103),S=function(){return null},T=a(180),x=a.n(T),L=a(49),I=a.n(L),B=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(C.a)(I.a.toggle,I.a.dark),style:a},t)},M=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(C.a)(I.a.toggle,I.a.light),style:a},t)},D=function(e){var t=Object(o.a)(),a=t.siteConfig.themeConfig.colorMode.switchConfig,n=a.darkIcon,c=a.darkIconStyle,i=a.lightIcon,l=a.lightIconStyle,s=t.isClient;return r.a.createElement(x.a,Object(w.a)({disabled:!s,icons:{checked:r.a.createElement(B,{icon:n,style:c}),unchecked:r.a.createElement(M,{icon:i,style:l})}},e))},P=a(118),A=a(112);var V=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},X=a(137),F=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],i=c[1],l=Object(n.useState)(0),s=l[0],u=l[1],d=Object(n.useState)(0),m=d[0],f=d[1],h=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]),v=Object(A.useLocation)(),b=V(v.hash),g=b[0],p=b[1];return Object(X.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<m))){if(o)return i(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-m,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,m]),Object(n.useEffect)((function(){e&&(r(!0),p(v.hash))}),[v]),Object(n.useEffect)((function(){e&&g&&i(!0)}),[g]),{navbarRef:h,isNavbarVisible:a}},R=a(138),U=a(139),H=a(140),G=a(50),Y=a.n(G),W=a(6);function z(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,u=e.prependBaseUrlToHref,d=Object(W.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),m=Object(i.a)(n),f=Object(i.a)(t),h=Object(i.a)(c,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(w.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?h:c}:Object.assign({isNavLink:!0,activeClassName:s,to:m},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(f)}}:null),d),o)}function J(e){var t=e.items,a=e.position,n=e.className,c=Object(W.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(C.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:Object(C.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(z,Object(w.a)({className:o(n)},c,{onClick:c.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){function t(){e.target.parentNode.classList.toggle("dropdown--show")}"Enter"!==e.key||c.to||t(),"Tab"===e.key&&t()}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(W.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(z,Object(w.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(z,Object(w.a)({className:o(n)},c))}function K(e){var t=e.items,a=(e.position,e.className),n=Object(W.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(C.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(z,Object(w.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(W.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(z,Object(w.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(z,Object(w.a)({className:c(a)},n)))}var q=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(W.a)(e,["mobile"]),c=a?K:J;return r.a.createElement(c,n)},Q=a(119);var Z=function(e,t){return"next"===e.name?t:e.name},$=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};var ee={default:q,docsVersion:function(e){var t=e.label,a=e.to,n=e.docsPluginId,c=e.nextVersionLabel,o=Object(W.a)(e,["label","to","docsPluginId","nextVersionLabel"]),i=Object(Q.useActiveVersion)(n),l=Object(Q.useLatestVersion)(n),s=null!=i?i:l,u=null!=t?t:function(e,t){return"next"===e.name?t:e.name}(s,c),d=null!=a?a:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(s).path;return r.a.createElement(q,Object(w.a)({},o,{label:u,to:d}))},docsVersionDropdown:function(e){var t,a=e.mobile,n=e.docsPluginId,c=e.nextVersionLabel,o=Object(W.a)(e,["mobile","docsPluginId","nextVersionLabel"]),i=Object(Q.useActiveDocContext)(n),l=Object(Q.useVersions)(n),s=Object(Q.useLatestVersion)(n),u=l.map((function(e){var t=(null==i?void 0:i.alternateDocVersions[e.name])||$(e);return{isNavLink:!0,label:Z(e,c),to:t.path,isActive:function(){return e===(null==i?void 0:i.activeVersion)}}})),d=null!==(t=i.activeVersion)&&void 0!==t?t:s,m=a?"Versions":Z(d,c),f=a?void 0:$(d).path;return r.a.createElement(q,Object(w.a)({},o,{mobile:a,label:m,to:f,items:u}))}};function te(e){var t=e.type,a=Object(W.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=ee[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t}(t);return r.a.createElement(n,a)}var ae=function(){var e,t,a=Object(o.a)(),c=a.siteConfig.themeConfig,i=c.navbar,l=(i=void 0===i?{}:i).title,s=void 0===l?"":l,u=i.items,d=void 0===u?[]:u,m=i.hideOnScroll,f=void 0!==m&&m,h=c.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,g=a.isClient,p=Object(n.useState)(!1),k=p[0],E=p[1],O=Object(n.useState)(!1),j=O[0],y=O[1],_=Object(P.a)(),T=_.isDarkTheme,x=_.setLightTheme,L=_.setDarkTheme,I=F(f),B=I.navbarRef,M=I.isNavbarVisible,A=Object(H.a)(),V=A.logoLink,X=A.logoLinkProps,G=A.logoImageUrl,W=A.logoAlt;Object(R.a)(k);var z=Object(n.useCallback)((function(){E(!0)}),[E]),J=Object(n.useCallback)((function(){E(!1)}),[E]),K=Object(n.useCallback)((function(e){return e.target.checked?L():x()}),[x,L]),q=Object(U.a)();Object(n.useEffect)((function(){q===U.b.desktop&&E(!1)}),[q]);var Q=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),Z=Q.leftItems,$=Q.rightItems;return r.a.createElement("nav",{ref:B,className:Object(C.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[Y.a.navbarHideable]=f,e[Y.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:z,onKeyDown:z},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(w.a)({className:"navbar__brand",to:V},X),null!=G&&r.a.createElement("img",{key:g,className:"navbar__logo",src:G,alt:W}),null!=s&&r.a.createElement("strong",{className:Object(C.a)("navbar__title",(t={},t[Y.a.hideLogoText]=j,t))},s)),Z.map((function(e,t){return r.a.createElement(te,Object(w.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},$.map((function(e,t){return r.a.createElement(te,Object(w.a)({},e,{key:t}))})),!b&&r.a.createElement(D,{className:Y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:K}),r.a.createElement(S,{handleSearchBarToggle:y,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(w.a)({className:"navbar__brand",onClick:J,to:V},X),null!=G&&r.a.createElement("img",{key:g,className:"navbar__logo",src:G,alt:W}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(D,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:K})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(te,Object(w.a)({mobile:!0},e,{onClick:J,key:t}))})))))))};function ne(e){var t=e.to,a=e.href,n=e.label,c=Object(W.a)(e,["to","href","label"]),o=Object(i.a)(t);return r.a.createElement(N.a,Object(w.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:o},c),n)}var re=function(){var e=Object(o.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=((void 0===t?{}:t).footer||{}).links;return r.a.createElement("footer",{className:"container p-0 m-0"},r.a.createElement("div",{className:"row bg-light no-gutters justify-content-center"},a&&a.length>0&&r.a.createElement(r.a.Fragment,null,a.map((function(e,t){return r.a.createElement("div",{className:"col col-xs-1 col-xl-1 mx-4 my-4",key:t},null!=e.title&&r.a.createElement("h5",null,e.title),r.a.createElement("ul",{className:"list-unstyled"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"mb-2",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{className:"mb-1",key:e.href||e.to},r.a.createElement(ne,e))}))))})))))};a(51);function ce(e){var t=e.children;return r.a.createElement(b,null,r.a.createElement(E,null,t))}t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.title,s=a.themeConfig.image,u=a.url,d=e.children,m=e.title,f=e.noFooter,h=e.description,v=e.image,b=e.keywords,g=e.permalink,p=e.version,k=m?m+" | "+l:l,E=v||s,O=Object(i.a)(E,{absolute:!0}),j=Object(i.a)(n);return r.a.createElement(ce,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:j}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),p&&r.a.createElement("meta",{name:"docsearch:version",content:p}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:O}),E&&r.a.createElement("meta",{property:"twitter:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),g&&r.a.createElement("meta",{property:"og:url",content:u+g}),g&&r.a.createElement("link",{rel:"canonical",href:u+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(_,null),r.a.createElement(ae,null),r.a.createElement("div",{className:"main-wrapper"},d),!f&&r.a.createElement(re,null))}},118:function(e,t,a){"use strict";var n=a(0),r=a(135);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},135:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},137:function(e,t,a){"use strict";var n=a(0),r=a(10),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],i=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),t),r}},138:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},139:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),c=a[0],o=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){o(t())}}),[]),c}},140:function(e,t,a){"use strict";var n=a(97),r=a(118),c=a(104),o=a(111);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).navbar,i=(a=void 0===a?{}:a).logo,l=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,u=Object(c.a)(l.href||"/"),d={};l.target?d={target:l.target}:Object(o.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var m=l.srcDark&&s?l.srcDark:l.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(c.a)(m),logoAlt:l.alt}}},180:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=m(c),i=m(a(181)),l=m(a(7)),s=m(a(182)),u=m(a(183)),d=a(184);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},181:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},182:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},183:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);