"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[6598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},i="OmegaUP Firewall Exception",l={unversionedId:"usage/directives/firewall/omegaup",id:"usage/directives/firewall/omegaup",title:"OmegaUP Firewall Exception",description:"For setting up the huronOS firewall to open the web connectivity with the OmegaUP platform, is required to open several websites for OmagaUP to work correctly. OmegaUP does not have a feature to isolate your contest from the rest of the platform as codeforces does, so, be aware that allowing this platform will allow the users to also access their private file such as previous submissions.",source:"@site/docs/usage/directives/firewall/omegaup.md",sourceDirName:"usage/directives/firewall",slug:"/usage/directives/firewall/omegaup",permalink:"/docs/usage/directives/firewall/omegaup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Codeforces Firewall Exception",permalink:"/docs/usage/directives/firewall/codeforces"},next:{title:"Customizing the huronOS ISO",permalink:"/docs/usage/customizing-huronOS-iso"}},s={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"omegaup-firewall-exception"},"OmegaUP Firewall Exception"),(0,n.kt)("p",null,"For setting up the huronOS firewall to open the web connectivity with the OmegaUP platform, is required to open several websites for OmagaUP to work correctly. OmegaUP does not have a feature to isolate your contest from the rest of the platform as codeforces does, so, be aware that allowing this platform will allow the users to also access their private file such as previous submissions."),(0,n.kt)("p",null,"Please, use the following rules on your ",(0,n.kt)("inlineCode",{parentName:"p"},"AllowedWebsites")," configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="directives.hdf"',title:'"directives.hdf"'},"AllowedWebsites=omegaup.com|maxcdn.bootstrapcdn.com|samhebert.net|cdnjs.cloudflare.com\n")),(0,n.kt)("p",null,"This will also enable OmegaUP's ephemeral grader feature."),(0,n.kt)("p",null,"If you find out some missing exception, please open a Pull Request on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/equetzal/huronOS-build-tools"},"huronOS-build-tools")," repository."))}f.isMDXComponent=!0}}]);