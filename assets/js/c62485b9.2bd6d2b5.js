"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[3493],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),h=o,m=l["".concat(c,".").concat(h)]||l[h]||d[h]||a;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},429:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Introduction to huronOS",s={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Introduction to huronOS",description:"huronOS is GNU / Linux distribution that is specialized in competitive programming and all the activities around it, like official contests, training camps, practice contests or tests.",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/introduction/",permalink:"/docs/introduction/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/category/introduction"},next:{title:"Using for contest",permalink:"/docs/introduction/using-for-contest"}},c={},p=[{value:"What is different with huronOS?",id:"what-is-different-with-huronos",level:2},{value:"Synchronization",id:"synchronization",level:2},{value:"Execution modes",id:"execution-modes",level:2},{value:"Double persistence",id:"double-persistence",level:2},{value:"Quick Setups",id:"quick-setups",level:2}],u={toc:p},l="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-huronos"},"Introduction to huronOS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"huronOS")," is GNU / Linux distribution that is ",(0,o.kt)("strong",{parentName:"p"},"specialized in competitive programming")," and all the activities around it, like official contests, training camps, practice contests or tests."),(0,o.kt)("h2",{id:"what-is-different-with-huronos"},"What is different with huronOS?"),(0,o.kt)("p",null,"huronOS is designed to work as a ",(0,o.kt)("strong",{parentName:"p"},"live USB")," compatible with both legacy and UEFI BIOS so that you ",(0,o.kt)("strong",{parentName:"p"},"don't need to modify the hardware")," provided by your educational institution, you only boot and ",(0,o.kt)("strong",{parentName:"p"},"in a matter of seconds")," you can have a ",(0,o.kt)("strong",{parentName:"p"},"competitive programming environment")," ready for a competition."),(0,o.kt)("h2",{id:"synchronization"},"Synchronization"),(0,o.kt)("p",null,"We know that most of competitive programming activities are not individual, but with a ",(0,o.kt)("strong",{parentName:"p"},"group of people")," that will compete together, at the same location or on the same arena. That's why huronOS is built with ",(0,o.kt)("strong",{parentName:"p"},"synchronization in mind"),". huronOS is capable of sync with network-directives that set the ",(0,o.kt)("strong",{parentName:"p"},"behavior")," of the system, like the ",(0,o.kt)("strong",{parentName:"p"},"software")," to enabled for the contestants, the ",(0,o.kt)("strong",{parentName:"p"},"firewall")," setup, the ",(0,o.kt)("strong",{parentName:"p"},"wallpapers"),", the ",(0,o.kt)("strong",{parentName:"p"},"auto mounting")," rules for external devices, the ",(0,o.kt)("strong",{parentName:"p"},"timezone"),", the ",(0,o.kt)("strong",{parentName:"p"},"keyboard layouts"),", etc. Everything ",(0,o.kt)("strong",{parentName:"p"},"remotely controlled")," and applied to all the instances configured with that directives."),(0,o.kt)("h2",{id:"execution-modes"},"Execution modes"),(0,o.kt)("p",null,"huronOS have an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"execution mode"))," feature that enables you to arrange ",(0,o.kt)("strong",{parentName:"p"},"multiple contest")," at different moments and limit them by time and date, so that once a contest mode start, huronOS knows that all the ",(0,o.kt)("strong",{parentName:"p"},"filesystem")," needs to be ",(0,o.kt)("strong",{parentName:"p"},"clean")," and ready for an ",(0,o.kt)("strong",{parentName:"p"},"isolated environment")," for the competition. This way you don't need to clean the devices for every contest."),(0,o.kt)("h2",{id:"double-persistence"},"Double persistence"),(0,o.kt)("p",null,"huronOS have a ",(0,o.kt)("strong",{parentName:"p"},"persistence")," module for ",(0,o.kt)("strong",{parentName:"p"},"each")," execution mode, like an ",(0,o.kt)("strong",{parentName:"p"},"event")," such as a training camps and the ",(0,o.kt)("strong",{parentName:"p"},"contests")," that can live inside a training camp. This way you can have a persistent drive for all the code during the learning, but as soon as the contest starts, the event data will be ",(0,o.kt)("strong",{parentName:"p"},"unaccessible")," to the contestant. After the contests finishes, the code of the contest can be copied to the event drive, ready for ",(0,o.kt)("strong",{parentName:"p"},"upsolving")," and continue the learning. "),(0,o.kt)("h2",{id:"quick-setups"},"Quick Setups"),(0,o.kt)("p",null,"All these features, enables ",(0,o.kt)("strong",{parentName:"p"},"site managers")," to ",(0,o.kt)("strong",{parentName:"p"},"quickly change")," the setup of their huronOS instances to arrange an ",(0,o.kt)("strong",{parentName:"p"},"IOI-like")," contest with certain software requirements for today, and then an ",(0,o.kt)("strong",{parentName:"p"},"ICPC-like")," contest for tomorrow without needing to worry about preparing everything in time."))}d.isMDXComponent=!0}}]);