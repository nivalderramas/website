"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[4741],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),g=p(n),k=r,N=g["".concat(o,".").concat(k)]||g[k]||u[k]||l;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m[g]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9201:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="Activating Software Modules",m={unversionedId:"usage/directives/configurations/software-modules",id:"usage/directives/configurations/software-modules",title:"Activating Software Modules",description:"We can define which software will be able to the users with the AvailableSoftware directive.",source:"@site/docs/usage/directives/configurations/software-modules.md",sourceDirName:"usage/directives/configurations",slug:"/usage/directives/configurations/software-modules",permalink:"/docs/usage/directives/configurations/software-modules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keyboard Layouts",permalink:"/docs/usage/directives/configurations/keyboard-layout"},next:{title:"Timezones",permalink:"/docs/usage/directives/configurations/timezones"}},o={},p=[{value:"Example",id:"example",level:3},{value:"List of Packages",id:"list-of-packages",level:2},{value:"Documentation",id:"documentation",level:3}],d={toc:p},g="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"activating-software-modules"},"Activating Software Modules"),(0,r.kt)("p",null,"We can define which software will be able to the users with the ",(0,r.kt)("inlineCode",{parentName:"p"},"AvailableSoftware")," directive.\nThe syntax is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SoftwareId|SoftwareId|..."))),(0,r.kt)("p",null,"Each ID is composed by ",(0,r.kt)("inlineCode",{parentName:"p"},"Category/PackageName")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"An example of a working directive for software is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"AvailableSoftware=internet/chromium|langs/g++\n")),(0,r.kt)("p",null,"This will result on Chromium and the g++ compiled being activated on huronOS."),(0,r.kt)("h2",{id:"list-of-packages"},"List of Packages"),(0,r.kt)("p",null,"This is a list of available packages in a default installation:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Software ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"internet/chromium")),(0,r.kt)("td",{parentName:"tr",align:null},"internet"),(0,r.kt)("td",{parentName:"tr",align:null},"chromium"),(0,r.kt)("td",{parentName:"tr",align:null},"Chromium")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"internet/crow")),(0,r.kt)("td",{parentName:"tr",align:null},"internet"),(0,r.kt)("td",{parentName:"tr",align:null},"crow"),(0,r.kt)("td",{parentName:"tr",align:null},"Crow Language Dictionary App")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"internet/firefox")),(0,r.kt)("td",{parentName:"tr",align:null},"internet"),(0,r.kt)("td",{parentName:"tr",align:null},"firefox"),(0,r.kt)("td",{parentName:"tr",align:null},"Firefox Browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/dotnet")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"dotnet"),(0,r.kt)("td",{parentName:"tr",align:null},"C# dotnet compiler (Microsoft)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/mono")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"mono"),(0,r.kt)("td",{parentName:"tr",align:null},"C# mono open compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/g++")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"g++"),(0,r.kt)("td",{parentName:"tr",align:null},"GNU C++ compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/gcc")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"gcc"),(0,r.kt)("td",{parentName:"tr",align:null},"GNU C compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/javac")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"javac"),(0,r.kt)("td",{parentName:"tr",align:null},"Open JDK Java compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/kotlinc")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"kotlinc"),(0,r.kt)("td",{parentName:"tr",align:null},"JetBrains Kotlin compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/pypy3")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"pypy3"),(0,r.kt)("td",{parentName:"tr",align:null},"Pypy 3 python compiler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/python3")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"python3"),(0,r.kt)("td",{parentName:"tr",align:null},"Python 3 interpreter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"langs/ruby")),(0,r.kt)("td",{parentName:"tr",align:null},"langs"),(0,r.kt)("td",{parentName:"tr",align:null},"ruby"),(0,r.kt)("td",{parentName:"tr",align:null},"Ruby interpreter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tools/byobu")),(0,r.kt)("td",{parentName:"tr",align:null},"tools"),(0,r.kt)("td",{parentName:"tr",align:null},"byoubu"),(0,r.kt)("td",{parentName:"tr",align:null},"Byoubu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tools/konsole")),(0,r.kt)("td",{parentName:"tr",align:null},"tools"),(0,r.kt)("td",{parentName:"tr",align:null},"konsole"),(0,r.kt)("td",{parentName:"tr",align:null},"KDE konsole")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tools/midnight-commander")),(0,r.kt)("td",{parentName:"tr",align:null},"tools"),(0,r.kt)("td",{parentName:"tr",align:null},"midnight-commander"),(0,r.kt)("td",{parentName:"tr",align:null},"Midnight-Commander")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/atom")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"atom"),(0,r.kt)("td",{parentName:"tr",align:null},"Atom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/codeblocks")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"codeblocks"),(0,r.kt)("td",{parentName:"tr",align:null},"Code::Blocks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/eclipse")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"eclipse"),(0,r.kt)("td",{parentName:"tr",align:null},"Eclipse")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/emacs")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"emacs"),(0,r.kt)("td",{parentName:"tr",align:null},"Emacs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/geany")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"geany"),(0,r.kt)("td",{parentName:"tr",align:null},"Geany")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/gedit")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"gedit"),(0,r.kt)("td",{parentName:"tr",align:null},"gedit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/gvim")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"gvim"),(0,r.kt)("td",{parentName:"tr",align:null},"gvim")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/intellij")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"intellij"),(0,r.kt)("td",{parentName:"tr",align:null},"IntelliJ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/joe")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"joe"),(0,r.kt)("td",{parentName:"tr",align:null},"Joe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/kate")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"kate"),(0,r.kt)("td",{parentName:"tr",align:null},"Kate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/kdevelop")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"kdevelop"),(0,r.kt)("td",{parentName:"tr",align:null},"KDevelop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/pycharm")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"pycharm"),(0,r.kt)("td",{parentName:"tr",align:null},"Pycharm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/sublime")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"sublime"),(0,r.kt)("td",{parentName:"tr",align:null},"Sublime Text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/vim")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"vim"),(0,r.kt)("td",{parentName:"tr",align:null},"Vim")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/vscode")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"vscode"),(0,r.kt)("td",{parentName:"tr",align:null},"Vscode (Codium)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"programming/rider")),(0,r.kt)("td",{parentName:"tr",align:null},"programming"),(0,r.kt)("td",{parentName:"tr",align:null},"rider"),(0,r.kt)("td",{parentName:"tr",align:null},"Rider")))),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"The reference documents for the langs are included in each language package.\nFor example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"langs/g++")," package does include the C++ Reference."))}u.isMDXComponent=!0}}]);