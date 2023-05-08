"use strict";(self.webpackChunkhuron_os_website=self.webpackChunkhuron_os_website||[]).push([[3173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,k=m["".concat(l,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:1},s="How to Install huronOS",i={unversionedId:"usage/how-to-install",id:"usage/how-to-install",title:"How to Install huronOS",description:"Warnings:",source:"@site/docs/usage/how-to-install.md",sourceDirName:"usage",slug:"/usage/how-to-install",permalink:"/website/docs/usage/how-to-install",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using huronOS",permalink:"/website/docs/category/using-huronos"},next:{title:"Accessing the root user",permalink:"/website/docs/usage/root-access"}},l={},p=[{value:"Requirements",id:"requirements",level:3},{value:"Dependencies",id:"dependencies",level:4},{value:"Process",id:"process",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-install-huronos"},"How to Install huronOS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warnings:")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"huronOS is still ",(0,o.kt)("em",{parentName:"p"},"Work in Progress"),", and lot of the features that are usually expected from the installer of a distribution are not currently available.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Currently, the huronOS installer does only work on GNU / Linux distros. It has not been tested on other ",(0,o.kt)("em",{parentName:"p"},"Unix-Like")," operating systems like ",(0,o.kt)("em",{parentName:"p"},"macOS"),", ",(0,o.kt)("em",{parentName:"p"},"BSD")," or utilities like ",(0,o.kt)("em",{parentName:"p"},"WSL"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Currently, is not possible to burn the ISO image directly on the USB")," and have a working instance of huronOS due to unique features of the system that requires an special installation method.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Currently, huronOS is not capable of work without a ",(0,o.kt)("em",{parentName:"strong"},"directives")," file.")," This file needs to live in the network and be accessible using the ",(0,o.kt)("em",{parentName:"p"},"http")," or ",(0,o.kt)("em",{parentName:"p"},"https")," URL schemes.")),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A working Linux distro to install the system from."),(0,o.kt)("li",{parentName:"ul"},"A USB device to install the system on (You will lose all your data so back it up)."),(0,o.kt)("li",{parentName:"ul"},"Installed dependencies ",(0,o.kt)("em",{parentName:"li"},"(see depencies for you distribution)"),". "),(0,o.kt)("li",{parentName:"ul"},"A directives file accessible from the network that will be using huronOS. Please check the ",(0,o.kt)("a",{parentName:"li",href:"/website/docs/usage/directives/creating-a-directives-file"},"directives file document")," for guidance on setting up this file.")),(0,o.kt)("h4",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On Debian:"),"  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install squashfs-tools parted psmisc e2fsprogs dosfstools perl-base\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On Ubuntu:"),"  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install squashfs-tools parted psmisc e2fsprogs dosfstools perl-base\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On Fedora:"),"  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install squashfs-tools parted psmisc e2fsprogs dosfstools perl-base\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On Arch Linux:"),"  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -S install squashfs-tools parted psmisc e2fsprogs dosfstools perl\n")))),(0,o.kt)("h3",{id:"process"},"Process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Get the ISO of huronOS."),(0,o.kt)("br",{parentName:"p"}),"\n","You can either build the ISO by yourself or download it from the ",(0,o.kt)("a",{parentName:"p",href:"https://huronos.org"},"huronOS website"),".",(0,o.kt)("br",{parentName:"p"}),"\n","For this case, we will supose that we've already downloaded the ISO file ",(0,o.kt)("inlineCode",{parentName:"p"},"huronOS-b2023.b0023-amd64.iso"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mount the ISO."),(0,o.kt)("br",{parentName:"p"}),"\n","Create a directory where you will access to the contents of the ISO, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"/media/iso"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Mount the ISO on this directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mount ./huronOS-b2023.b0023-amd64.iso /media/iso\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Prepare your system for the installation."),(0,o.kt)("br",{parentName:"p"}),"\n","Go to your iso mounted directory, and you will find a directory structure like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"/media/iso/\n    \u251c\u2500\u2500 boot\n    \u251c\u2500\u2500 checksums\n    \u251c\u2500\u2500 EFI\n    \u251c\u2500\u2500 huronOS\n    \u251c\u2500\u2500 install.sh\n    \u2514\u2500\u2500 utils\n       \u2514\u2500\u2500 change-password.sh\n")),(0,o.kt)("p",{parentName:"li"},"Make sure you can execute all the commands within ",(0,o.kt)("inlineCode",{parentName:"p"},"install.sh"),". This is needed in order to successfully use the installer.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Mask")," your current automount tool. The installer will partition your USB, so automounter utilities can interfere with the installer. Please mask your automounter tool while using the installer. Eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl mask udisks2"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Upload your directives file"),(0,o.kt)("br",{parentName:"p"}),"\n","huronOS requires a directives file to sync with, so upload your file to a server that makes it accessible to huronOS. This can be on the internet, on your intranet, on your local area network, on your own hosting server or even on github ",(0,o.kt)("em",{parentName:"p"},"(by accessing raw contents)"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This URL will create an exception on the firewall of huronOS to the IP address of the server which is hosting this file. Not doing this would result on a soft-lock of the system not being able to sync anymore.")),(0,o.kt)("p",{parentName:"li"},"Please, test the access to this file ",(0,o.kt)("strong",{parentName:"p"},"from")," the network in which you will be using huronOS. Some WANs might have an external firewall blocking the access to your file, resulting in huronOS not being able to keep in sync.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Install huronOS."),"  "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You'll be needing a USB drive of at least ",(0,o.kt)("strong",{parentName:"p"},"16GiB+")," for a better performance. Please connect this USB drive and be aware ",(0,o.kt)("strong",{parentName:"p"},"you will lost all data on it for the installation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute the installer, chose one of this options:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Set a custom root password"),"  ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# `my_password` is your chosen password.\n./install.sh --root-password my_password\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use the default ",(0,o.kt)("em",{parentName:"strong"},"toor")," password for root"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./install.sh\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill the prompts:  "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Write the ",(0,o.kt)("strong",{parentName:"li"},"directives url")," to sync with, please ",(0,o.kt)("strong",{parentName:"li"},"paste the URL you previously setup"),". If you don't have one, just leave it blank ",(0,o.kt)("em",{parentName:"li"},"(just be aware that sync won't work)"),", this can be changed after the installation."),(0,o.kt)("li",{parentName:"ol"},"Write the ",(0,o.kt)("strong",{parentName:"li"},"directives server IP")," to force the firewall exception to this specific server. You can leave if blank if you want to fallback to DNS resolution."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The installer will prompt you to select a disk to target the installation. ",(0,o.kt)("strong",{parentName:"p"},"Please do this carefully as the selected disk will be completely erased"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for the installer to finish and disconnect the USB drive. If something fails during the installer, please retry.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Boot from huronOS."),(0,o.kt)("br",{parentName:"p"}),"\n","Connect your USB drive and boot from it. You will be auto-logged on the contestant user. For accessing the ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/usage/root-access"},"root user"),", please check the documentation."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Booting will require enabling boot from USB devices. On UEFI boot, Secure Boot needs to be ",(0,o.kt)("strong",{parentName:"p"},"disabled"),".")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If the computer have windows installed, make sure to fully shutdown the computer as the ",(0,o.kt)("em",{parentName:"p"},"Windows Fast Startup")," can prevent the computer from booting on other disks."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Select the boot option."),(0,o.kt)("br",{parentName:"p"}),"\n","By default huronOS will boot automatically on ",(0,o.kt)("inlineCode",{parentName:"p"},"Start contest system")," option after 7 seconds. Most of times this is what you want to use. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/website/docs/usage/boot-options"},"boot options")," documentation for guidance on all the boot options."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wohoo!, You have installed huronOS!"),(0,o.kt)("br",{parentName:"p"}),"\n","We know, there's a lot of stuff to be improved, but you can help this project to get improved by contributing! Try the system, use it on your own community, arrange your own contests. You will find out how much time huronOS can save you to setup competitive programming competitions. Then, if you find this distro to help your community, contribute to it!, It's better for all to focus our efforts in one big definitive solution for the environment of our contests rather than creating lot of small solutions!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Thank you :)")))}c.isMDXComponent=!0}}]);