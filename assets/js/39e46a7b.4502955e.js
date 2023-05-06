"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[8172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?i.createElement(m,o(o({ref:t},u),{},{components:r})):i.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},o="Creating a Directives File",l={unversionedId:"usage/directives/creating-a-directives-file",id:"usage/directives/creating-a-directives-file",title:"Creating a Directives File",description:"TODO",source:"@site/docs/usage/directives/creating-a-directives-file.md",sourceDirName:"usage/directives",slug:"/usage/directives/creating-a-directives-file",permalink:"/docs/usage/directives/creating-a-directives-file",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Directives File",permalink:"/docs/category/directives-file"},next:{title:"Where to store the directives file",permalink:"/docs/usage/directives/where-to-store"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creating-a-directives-file"},"Creating a Directives File"),(0,n.kt)("p",null,"TODO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TimeZone=<YourTimezone>"),"\nThe time zone field must have a valid ",(0,n.kt)("em",{parentName:"li"},"Continent/City")," format. ",(0,n.kt)("a",{parentName:"li",href:"/docs/usage/directives/configurations/timezones"},"List of possible values")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ConfigurationExpirationTime=[ never | ISO8601 Time ]"),"\nThe time in which your configuration file will be valid. After this time the ",(0,n.kt)("em",{parentName:"li"},"default")," configuration will be loaded instead.\n-",(0,n.kt)("inlineCode",{parentName:"li"},"never")," Option should be used if the configuration file is expected to never expire.\n-",(0,n.kt)("inlineCode",{parentName:"li"},"ISO8601 Time")," Option should be use for setting an expiration time, it must use ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")," extended time format relative to the local time. Example:",(0,n.kt)("inlineCode",{parentName:"li"},"2030-01-10T11:45:01"),".")))}d.isMDXComponent=!0}}]);