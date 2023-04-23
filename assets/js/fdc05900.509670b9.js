"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[6952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,c=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Building huronOS",l={unversionedId:"development/how-to-create-a-build",id:"development/how-to-create-a-build",title:"Building huronOS",description:"To build huronOS you'll be needing to follow several steps:",source:"@site/docs/development/how-to-create-a-build.md",sourceDirName:"development",slug:"/development/how-to-create-a-build",permalink:"/huronOS-website/docs/development/how-to-create-a-build",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to develop for huronOS",permalink:"/huronOS-website/docs/development/how-to-contribute"},next:{title:"Tips for Developing huronOS",permalink:"/huronOS-website/docs/development/tips-for-developing-huronOS"}},s={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-huronos"},"Building huronOS"),(0,r.kt)("p",null,"To build huronOS you'll be needing to follow several steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install Debian:"),(0,r.kt)("br",{parentName:"p"}),"\n","Firstly install on a computer Debian 11.6 with a minimal installation setup. Make sure to do not install ",(0,r.kt)("strong",{parentName:"p"},"any")," extra software mentioned on the installer, and do not setup extra users other than root. (if you do, erase them)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get huronOS-build-tools"),(0,r.kt)("br",{parentName:"p"}),"\n","Clone this repo on the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," root directory of your newly installed Debian.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compile the huronOS kernel"),(0,r.kt)("br",{parentName:"p"}),"\n","huronOS needs a kernel that supports ",(0,r.kt)("a",{parentName:"p",href:"https://aufs.sf.net"},"AUFS"),", so we need to replace the kernel. To do so, run as ",(0,r.kt)("strong",{parentName:"p"},"root"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd kernel-builder/\nchmod +x build-kernel.sh\n./build-kernel.sh\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build the base system"),(0,r.kt)("br",{parentName:"p"}),"\n","To build the base system (",(0,r.kt)("inlineCode",{parentName:"p"},"01-base.hsl"),") and the huronOS bootable skeleton filesystem, run as ",(0,r.kt)("strong",{parentName:"p"},"root"),":  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x base-system/base.sh\n./base-system/base.sh\n")),(0,r.kt)("p",{parentName:"li"},"After this, a directory and two files on ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," will be created: ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_iso_image.sh"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_zip_image.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"*-huronOS-data/")," directory. If your ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," directory is volatile, please move this files to another newly created directory on ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/iso"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Build the other system layers")),(0,r.kt)("p",{parentName:"li"},"To build the rest of the layers, you'll be needing to install huronOS on a temporal USB drive using the ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh")," provided on the ",(0,r.kt)("inlineCode",{parentName:"p"},"*-huronOS-data/")," directory."),(0,r.kt)("p",{parentName:"li"},"After this, please boot on the installed system.\nOnce booted, make sure to have access to this repository and internet connection. ",(0,r.kt)("strong",{parentName:"p"},"Please, consider that at this step, no persistence is provided yet, so all the changes will be volatile")),(0,r.kt)("p",{parentName:"li"},"Run as ",(0,r.kt)("strong",{parentName:"p"},"root")," the following commands to build the rest of the modules:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"02-firmware.hsl"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd software-modules/base/02-firmware/\nchmod +x firmware.sh\n./firmware.sh\nreboot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"03-budgie.hsl"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd software-modules/base/03-budgie/\nchmod +x budgie.sh\nchmod +x setup-desktop.sh\nchmod +x save.sh\n./budgie.sh\n# Wait for the GUI to start\n./setup-desktop.sh # Run this as contestant\n./save.sh # Run this as root\nreboot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"04-shared-libs.hsl"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd software-modules/base/04-shared-libs/\nchmod +x shared-libs.sh\n./shared-libs.sh\nreboot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"05-password.hsl"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd software-modules/base/05-password/\nchmod +x password.sh\n./password.sh\nreboot\n")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," After this, return to the debian installation and plug the USB drive, then copy the modules on the `*-data-huronOS/base/` directory.\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Pack the current software")),(0,r.kt)("p",{parentName:"li"},"After installing the base, the software to be used on competitions like ICPC or IOI will be required. The build scripts for each package are located in the directories"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./software-modules/internet/"},(0,r.kt)("inlineCode",{parentName:"a"},"internet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./software-modules/langs/"},(0,r.kt)("inlineCode",{parentName:"a"},"langs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./software-modules/programming/"},(0,r.kt)("inlineCode",{parentName:"a"},"programming"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./software-modules/tools/"},(0,r.kt)("inlineCode",{parentName:"a"},"tools")))),(0,r.kt)("p",{parentName:"li"},"After finishing with all the software, copy the resultant ",(0,r.kt)("inlineCode",{parentName:"p"},".hsm")," files to the ",(0,r.kt)("inlineCode",{parentName:"p"},"*-data-huronOS/huronOS/software/")," directory following the structure of the tree. Remember to reboot each time you create an ",(0,r.kt)("inlineCode",{parentName:"p"},".hsm")," module to prevent accumulating changes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create the ISO")),(0,r.kt)("p",{parentName:"li"},"After completing the huronOS data directory, you can run the ",(0,r.kt)("inlineCode",{parentName:"p"},"gen_iso_file.sh")," to create the packed ISO."))))}u.isMDXComponent=!0}}]);