"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[5861],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(o),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return o?r.createElement(m,s(s({ref:t},p),{},{components:o})):r.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},231:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:2},s="Accessing the root user",i={unversionedId:"usage/root-access",id:"usage/root-access",title:"Accessing the root user",description:"-> Default root password is toor",source:"@site/docs/usage/root-access.md",sourceDirName:"usage",slug:"/usage/root-access",permalink:"/docs/usage/root-access",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Install huronOS",permalink:"/docs/usage/how-to-install"},next:{title:"Boot Options",permalink:"/docs/usage/boot-options"}},l={},c=[{value:"How to change the root password",id:"how-to-change-the-root-password",level:2},{value:"For a single installation",id:"for-a-single-installation",level:3},{value:"For multiple installations",id:"for-multiple-installations",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"accessing-the-root-user"},"Accessing the root user"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"-> Default ",(0,n.kt)("inlineCode",{parentName:"strong"},"root")," password is ",(0,n.kt)("inlineCode",{parentName:"strong"},"toor"))),(0,n.kt)("p",null,"By default, the ",(0,n.kt)("em",{parentName:"p"},"contestant")," user has no password, it is logged automatically on boot and it is the user designed for any contestant during any contest or event. But in certain cases it's necessary to access the root user to solve certain issues."),(0,n.kt)("h2",{id:"how-to-change-the-root-password"},"How to change the root password"),(0,n.kt)("p",null,"We've worked hard for brining an easy to change root password, please check which method better fits for you. "),(0,n.kt)("h3",{id:"for-a-single-installation"},"For a single installation"),(0,n.kt)("p",null,"For installing huronOS, execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# `my_password` is your chosen password.\n./install.sh --root-password my_password\n")),(0,n.kt)("h3",{id:"for-multiple-installations"},"For multiple installations"),(0,n.kt)("p",null,"Keep in mind that if you want to change the password for every latter installations that you might create, instead of manually passing the password each time in the installer, follow the steps mentioned below"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy all the contents of the ISO somewhere where you have RW access, let's call this path ",(0,n.kt)("inlineCode",{parentName:"li"},"iso-data/")),(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("inlineCode",{parentName:"li"},"iso-data/utils")),(0,n.kt)("li",{parentName:"ol"},"From there execute",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# 'my_password' is your password, replace it please.\n./change-password my_password\n")),"Be sure to change ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"my_password"))," with the password that you want to set as the root password"),(0,n.kt)("li",{parentName:"ol"},"You're all set. Every other installation you make will have the password you defined."),(0,n.kt)("li",{parentName:"ol"},"You can re-pack your changes with the ",(0,n.kt)("inlineCode",{parentName:"li"},"make-iso.sh")," tool in case you want to easily move your custom build.")))}d.isMDXComponent=!0}}]);