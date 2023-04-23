"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[3173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,k=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="How to Install huronOS",s={unversionedId:"usage/how-to-install",id:"usage/how-to-install",title:"How to Install huronOS",description:"Warnings:",source:"@site/docs/usage/how-to-install.md",sourceDirName:"usage",slug:"/usage/how-to-install",permalink:"/huronOS-website/docs/usage/how-to-install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using huronOS",permalink:"/huronOS-website/docs/category/using-huronos"},next:{title:"Accessing the root user",permalink:"/huronOS-website/docs/usage/root-access"}},l={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Process",id:"process",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-install-huronos"},"How to Install huronOS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warnings:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"huronOS is still ",(0,r.kt)("em",{parentName:"p"},"Work in Progress"),", and lot of the features that are usually expected from the installer of a distribution are not currently available.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Currently, the huronOS installer does only work on GNU / Linux distros. It has not been tested on other ",(0,r.kt)("em",{parentName:"p"},"Unix-Like")," operating systems like ",(0,r.kt)("em",{parentName:"p"},"macOS"),", ",(0,r.kt)("em",{parentName:"p"},"BSD")," or utilities like ",(0,r.kt)("em",{parentName:"p"},"WSL"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Currently, is not possible to burn the ISO image directly on the USB")," and have a working instance of huronOS due to unique features of the system that requires an special installation method.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Currently, huronOS is not capable of work without a ",(0,r.kt)("em",{parentName:"strong"},"directives")," file.")," This file needs to live in the network and be accessible using the ",(0,r.kt)("em",{parentName:"p"},"http")," or ",(0,r.kt)("em",{parentName:"p"},"https")," URL schemes.")),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A working Linux distro to install the system from."),(0,r.kt)("li",{parentName:"ul"},"A USB device to install the system on (You will lose all your data so back it up)."),(0,r.kt)("li",{parentName:"ul"},"The software for executing the commands: ",(0,r.kt)("inlineCode",{parentName:"li"},"bash"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"fuser"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"parted")," (GNU Parted), ",(0,r.kt)("inlineCode",{parentName:"li"},"mkfs.vfat"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mkfs.ext4"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"sha256sum"),"."),(0,r.kt)("li",{parentName:"ul"},"A directives file accessible from the network that will be using huronOS. Please check the ",(0,r.kt)("a",{parentName:"li",href:"/huronOS-website/docs/usage/directives/creating-a-directives-file"},"directives file document")," for guidance on setting up this file.")),(0,r.kt)("h3",{id:"process"},"Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get the ISO of huronOS."),(0,r.kt)("br",{parentName:"p"}),"\n","You can either build the ISO by yourself or download it from the ",(0,r.kt)("a",{parentName:"p",href:"https://huronos.org"},"huronOS website"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For this case, we will supose that we've already downloaded the ISO file ",(0,r.kt)("inlineCode",{parentName:"p"},"huronOS-b2023.b0023-amd64.iso"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mount the ISO."),(0,r.kt)("br",{parentName:"p"}),"\n","Create a directory where you will access to the contents of the ISO, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"/media/iso"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Mount the ISO on this directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mount ./huronOS-b2023.b0023-amd64.iso /media/iso\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prepare your system for the installation."),(0,r.kt)("br",{parentName:"p"}),"\n","Go to your iso mounted directory, and you will find a directory structure like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"/media/iso/\n    \u251c\u2500\u2500 boot\n    \u251c\u2500\u2500 checksums\n    \u251c\u2500\u2500 EFI\n    \u251c\u2500\u2500 huronOS\n    \u251c\u2500\u2500 install.sh\n    \u2514\u2500\u2500 utils\n       \u2514\u2500\u2500 change-password.sh\n")),(0,r.kt)("p",{parentName:"li"},"Make sure you can execute all the commands within ",(0,r.kt)("inlineCode",{parentName:"p"},"install.sh"),". This is needed in order to successfully use the installer.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Mask")," your current automount tool. The installer will partition your USB, so automounter utilities can interfere with the installer. Please mask your automounter tool while using the installer. Eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl mask udisks2"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Upload your directives file"),(0,r.kt)("br",{parentName:"p"}),"\n","huronOS requires a directives file to sync with, so upload your file to a server that makes it accessible to huronOS. This can be on the internet, on your intranet, on your local area network, on your own hosting server or even on github ",(0,r.kt)("em",{parentName:"p"},"(by accessing raw contents)"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," This URL will create an exception on the firewall of huronOS to the IP address of the server which is hosting this file. Not doing this would result on a soft-lock of the system not being able to sync anymore.")),(0,r.kt)("p",{parentName:"li"},"Please, test the access to this file ",(0,r.kt)("strong",{parentName:"p"},"from")," the network in which you will be using huronOS. Some WANs might have an external firewall blocking the access to your file, resulting in huronOS not being able to keep in sync.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install huronOS."),(0,r.kt)("br",{parentName:"p"}),"\n","Connect your USB drive, and execute the installer by running ",(0,r.kt)("inlineCode",{parentName:"p"},"./install.sh"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The installer will prompt you to write the ",(0,r.kt)("em",{parentName:"li"},"directives url")," to sync with, please paste the URL you previously setup. If you don't have one, just leave it blank ",(0,r.kt)("em",{parentName:"li"},"(just be aware that sync won't work)"),", this can be changed after the installation."),(0,r.kt)("li",{parentName:"ol"},"The installer will prompt you to select a disk to target the installation. ",(0,r.kt)("strong",{parentName:"li"},"Please do this carefully as the selected disk will be completely erased"),"."),(0,r.kt)("li",{parentName:"ol"},"Wait for the installer to finish and disconnect the USB drive. If something fails during the installer, please retry.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You can change the default root password of the current instalation by executing the installer like this"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," ./install.sh --root-password my_password\n")),(0,r.kt)("p",{parentName:"li"},"Keep in mind that if you want to change the password for every latter instalations that you might create, instead of manually passing the password each time in the installer, follow the steps mentioned below"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Copy all the contents of the ISO somewhere where you have RW access, let's call this path ~/iso/"),(0,r.kt)("li",{parentName:"ul"},"Navigate to ~/iso/utils"),(0,r.kt)("li",{parentName:"ul"},"From there execute",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"./change-password my_password\n"))," Be sure to change ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"my_password"))," with the password that you want to set as the root password"),(0,r.kt)("li",{parentName:"ul"},"You're all set. Every other instalation you make will have the password you defined."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Boot from huronOS."),(0,r.kt)("br",{parentName:"p"}),"\n","Connect your USB drive and boot from it. You will be auto-logged on the contestant user. For accessing the ",(0,r.kt)("a",{parentName:"p",href:"/huronOS-website/docs/usage/root-access"},"root user"),", please check the documentation."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Booting will require enabling boot from USB devices. On UEFI boot, Secure Boot needs to be ",(0,r.kt)("strong",{parentName:"p"},"disabled"),".")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If the computer have windows installed, make sure to fully shutdown the computer as the ",(0,r.kt)("em",{parentName:"p"},"Windows Fast Startup")," can prevent the computer from booting on other disks."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Select the boot option."),(0,r.kt)("br",{parentName:"p"}),"\n","By default huronOS will boot automatically on ",(0,r.kt)("inlineCode",{parentName:"p"},"Start contest system")," option after 7 seconds. Most of times this is what you want to use. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/huronOS-website/docs/usage/boot-options"},"boot options")," documentation for guidance on all the boot options."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wohoo!, You have installed huronOS!"),(0,r.kt)("br",{parentName:"p"}),"\n","We know, there's a lot of stuff to be improved, but you can help this project to get improved by contributing! Try the system, use it on your own community, arrange your own contests. You will find out how much time huronOS can save you to setup competitive programming competitions. Then, if you find this distro to help your community, contribute to it!, It's better for all to focus our efforts in one big definitive solution for the environment of our contests rather than creating lot of small solutions!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Thank you :)")))}c.isMDXComponent=!0}}]);