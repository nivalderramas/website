"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[3679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(y,s(s({ref:t},u),{},{components:n})):o.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},s="Boot Options",i={unversionedId:"usage/boot-options",id:"usage/boot-options",title:"Boot Options",description:"huronOS bootloader sample image",source:"@site/docs/usage/boot-options.md",sourceDirName:"usage",slug:"/usage/boot-options",permalink:"/docs/usage/boot-options",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accessing the root user",permalink:"/docs/usage/root-access"},next:{title:"Syncing Instances",permalink:"/docs/usage/syncing-instances"}},l={},c=[{value:"Start contest system",id:"start-contest-system",level:2},{value:"Start no-sync mode",id:"start-no-sync-mode",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"boot-options"},"Boot Options"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"huronOS bootloader sample image",src:n(4742).Z,width:"1276",height:"960"})),(0,r.kt)("h2",{id:"start-contest-system"},"Start contest system"),(0,r.kt)("p",null,"This is the default boot option, and you will boot into it after 7 seconds if you don't press ",(0,r.kt)("inlineCode",{parentName:"p"},"esc")," before this timer ends.\nThis option by defaults sync to the ",(0,r.kt)("strong",{parentName:"p"},"directives URL")," that you setup during installation, this means that you'll have persistence enabled and all the directives you just setup on the directives file."),(0,r.kt)("p",null,"With this option, you only need to boot and all the configurations will be prepared for you! :D"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note, if for some reason during a contest you need to restart the computer of a contestant, please make use to still use this same option for boot and give the system 1 minute for recovery time and fully resync. Al the data of the contest should be automatically restored.")),(0,r.kt)("h2",{id:"start-no-sync-mode"},"Start no-sync mode"),(0,r.kt)("p",null,"This option will boot huronOS with the ",(0,r.kt)("em",{parentName:"p"},"sync manager")," deactivated, meaning that you won't have persistence, and no directive will be activated on the system. This option use useful for different scenarios like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manually cleaning the ",(0,r.kt)("inlineCode",{parentName:"li"},"event/")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"contest/")," partitions."),(0,r.kt)("li",{parentName:"ul"},"Setting up a demo where you need to store data resilient to mode changes, e.g. casting screen to a projector."),(0,r.kt)("li",{parentName:"ul"},"Developing huronOS and needing to use ",(0,r.kt)("inlineCode",{parentName:"li"},"savechanges")," scripts.")),(0,r.kt)("p",null,"If after booting on no-synd mode you want to start the contest system, please execute in a ",(0,r.kt)("strong",{parentName:"p"},"root")," shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start hsync.timer\n")))}d.isMDXComponent=!0},4742:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/huronOS_bootloader_sample-e4dc76a399470ac03d3c62e01b562f29.png"}}]);