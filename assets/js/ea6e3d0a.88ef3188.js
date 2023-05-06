"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[5974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="USB Drives Flag",s={unversionedId:"usage/directives/configurations/usb-drives",id:"usage/directives/configurations/usb-drives",title:"USB Drives Flag",description:"huronOS allows you to control if the USB drives can be automounted or not. You can control this by using the AllowUsbStorage flag.",source:"@site/docs/usage/directives/configurations/usb-drives.md",sourceDirName:"usage/directives/configurations",slug:"/usage/directives/configurations/usb-drives",permalink:"/docs/usage/directives/configurations/usb-drives",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Timezones",permalink:"/docs/usage/directives/configurations/timezones"},next:{title:"Wallpaper",permalink:"/docs/usage/directives/configurations/wallpaper"}},l={},c=[{value:"Considerations",id:"considerations",level:2},{value:"Post contest code-to-home for upsolving.",id:"post-contest-code-to-home-for-upsolving",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usb-drives-flag"},"USB Drives Flag"),(0,r.kt)("p",null,"huronOS allows you to control if the USB drives can be automounted or not. You can control this by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowUsbStorage")," flag."),(0,r.kt)("p",null,"Setting the flag to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"AllowUsbStorage=true\n")),(0,r.kt)("p",null,"Will allow the contestant to mount their portable USB drives to the system and copy content to and from the system."),(0,r.kt)("p",null,"Setting the flag to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"AllowUsbStorage=false\n")),(0,r.kt)("p",null,"Will not allow the contestant user to mount any USB drive to the system. Note that USB peripheral devices are allowed such as mouses, or keyboards."),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Note that if you switch from ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowUsbStorage=true")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowUsbStorage=false")," during runtime or on a mode change, all processes using the disk will be killed and all the mounted drives will be forcefully unmounted. Be careful of setting this rule to not damage connect USB drives's filesystem."),(0,r.kt)("h2",{id:"post-contest-code-to-home-for-upsolving"},"Post contest code-to-home for upsolving."),(0,r.kt)("p",null,"One of the best features of huronOS is that after a contest finishes, it can change it's modality from ",(0,r.kt)("em",{parentName:"p"},"contest")," to ",(0,r.kt)("em",{parentName:"p"},"always")," (default) and you can toggle the ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowUsbStorage")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," during the contest to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," on the always mode.  "),(0,r.kt)("p",null,"By default, huronOS copy the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"home/")," directory of the contest to the current ",(0,r.kt)("em",{parentName:"p"},"home")," on always mode. This directory have the format of ",(0,r.kt)("inlineCode",{parentName:"p"},"contest-datetime/")," and this can enable contestants to copy their contest code to their USB drives, being a perfect solution for enforcing upsolving while not breaking the rules during the competition."))}d.isMDXComponent=!0}}]);