(()=>{var e={};e.id=931,e.ids=[931],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},6240:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d});var i=r(9442),n=r(42),s=r(8190),o=r.n(s),a=r(3289),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9306)),"/Users/segunoroyo/Documents/Work/Mine/Webfolio/segunoroyo/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1112)),"/Users/segunoroyo/Documents/Work/Mine/Webfolio/segunoroyo/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/segunoroyo/Documents/Work/Mine/Webfolio/segunoroyo/src/app/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},635:(e,t,r)=>{Promise.resolve().then(r.bind(r,9306))},3270:(e,t,r)=>{Promise.resolve().then(r.bind(r,3246))},2704:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let i=r(4564),n=r(3966),s=r(6493),o=n._(r(3606)),a=i._(r(28)),l=i._(r(4909)),d=r(7877),u=r(3634),c=r(1561);r(8080);let p=r(7567),f=i._(r(1911)),m=r(5945),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,i,n,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function x(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:d,className:u,style:c,fetchPriority:p,placeholder:f,loading:g,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:_,sizesInput:k,onLoad:C,onError:S,...P}=e,N=(0,o.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&h(e,f,y,w,j,v,k))},[r,f,y,w,j,S,v,k]),M=(0,m.useMergedRef)(t,N);return(0,s.jsx)("img",{...P,...x(p),loading:g,width:l,height:a,decoding:d,"data-nimg":b?"fill":"1",className:u,style:c,sizes:n,srcSet:i,src:r,ref:M,onLoad:e=>{h(e.currentTarget,f,y,w,j,v,k)},onError:e=>{_(!0),"empty"!==f&&j(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(p.RouterContext),i=(0,o.useContext)(c.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[x,y]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:_,meta:k}=(0,d.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:x,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{..._,unoptimized:k.unoptimized,placeholder:k.placeholder,fill:k.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:y,setShowAltText:j,sizesInput:e.sizes,ref:t}),k.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},992:(e,t,r)=>{"use strict";e.exports=r(4942).vendored.contexts.AmpContext},2588:(e,t,r)=>{"use strict";e.exports=r(4942).vendored.contexts.HeadManagerContext},1561:(e,t,r)=>{"use strict";e.exports=r(4942).vendored.contexts.ImageConfigContext},1095:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7877:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(8080);let i=r(3559),n=r(3634);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,d,{src:u,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:x,height:v,fill:b=!1,style:y,overrideSrc:w,onLoad:j,onLoadingComplete:_,placeholder:k="empty",blurDataURL:C,fetchPriority:S,decoding:P="async",layout:N,objectFit:M,objectPosition:O,lazyBoundary:E,lazyRoot:z,...A}=e,{imgConf:I,showAltText:R,blurComplete:D,defaultLoader:W}=t,G=I||n.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}if(void 0===W)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=A.loader||W;delete A.loader,delete A.srcSet;let L="__next_img_default"in U;if(L){if("custom"===a.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...i}=t;return e(i)}}if(N){"fill"===N&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[N];t&&!c&&(c=t)}let T="",q=o(x),F=o(v);if((r=u)&&"object"==typeof r&&(s(r)||void 0!==r.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,T=e.src,!b){if(q||F){if(q&&!F){let t=q/e.width;F=Math.round(e.height*t)}else if(!q&&F){let t=F/e.height;q=Math.round(e.width*t)}}else q=e.width,F=e.height}}let H=!f&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,H=!1),a.unoptimized&&(p=!0),L&&u.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(p=!0);let B=o(h),$=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},R?{}:{color:"transparent"},y),V=D||"empty"===k?null:"blur"===k?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:q,heightInt:F,blurWidth:l,blurHeight:d,blurDataURL:C||"",objectFit:$.objectFit})+'")':'url("'+k+'")',X=V?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),u=l.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:a({config:t,src:r,quality:s,width:l[u]})}}({config:a,src:u,unoptimized:p,width:q,quality:B,sizes:c,loader:U});return{props:{...A,loading:H?"lazy":m,fetchPriority:S,width:q,height:F,decoding:P,className:g,style:{...$,...X},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:p,priority:f,placeholder:k,fill:b}}}},4909:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let i=r(4564),n=r(3966),s=r(6493),o=n._(r(3606)),a=i._(r(7838)),l=r(992),d=r(2588),u=r(1095);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(8080);let f=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let s=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?s=!1:t.add(n.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!o)&&r.has(e)?s=!1:(r.add(e),i[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let i=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,o.useContext)(l.AmpStateContext),i=(0,o.useContext)(d.HeadManagerContext);return(0,s.jsx)(a.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3559:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=i?40*i:t,l=n?40*n:r,d=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3634:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},9110:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(4564),n=r(7877),s=r(2704),o=i._(r(1911));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},1911:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},7838:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=r(3606),n=()=>{},s=()=>{};function o(e){var t;let{headManager:r,reduceComponentsToState:o}=e;function a(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(o(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),a(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=a),()=>{r&&(r._pendingUpdate=a)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},3246:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var i=r(6493),n=r(9110),s=r.n(n),o=r(89),a=r(3606);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var u={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:n="",children:s,iconNode:o,...l},c)=>(0,a.createElement)("svg",{ref:c,...u,width:t,height:t,stroke:e,strokeWidth:i?24*Number(r)/Number(t):r,className:d("lucide",n),...l},[...o.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(s)?s:[s]])),p=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...i},n)=>(0,a.createElement)(c,{ref:n,iconNode:t,className:d(`lucide-${l(e)}`,r),...i}));return r.displayName=`${e}`,r},f=p("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]),m=p("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function g(e){let{image:t,title:r,description:n,link:o,bgColor:a}=e;return(0,i.jsx)("div",{className:"lg:even:mt-24",children:(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("div",{className:"relative",children:(0,i.jsxs)("div",{className:"flex flex-col lg:gap-16 gap-8",children:[(0,i.jsx)("div",{className:`bg-${a} w-full relative overflow-hidden lg:h-[40rem] h-[32rem] rounded-2xl ring-1 ring-slate-400/30`,children:(0,i.jsx)(s(),{src:t,alt:"",fill:!0,sizes:"(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",priority:!1,className:"object-cover rounded-2xl"})}),(0,i.jsx)("div",{className:"w-full flex flex-col gap-6",children:(0,i.jsxs)("div",{className:"space-y-12",children:[(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsx)("h2",{className:"lg:text-4xl text-3xl text-slate-800 dark:text-slate-100 font-header lg:font-medium font-thin",children:r}),(0,i.jsx)("p",{className:"text-slate-600 dark:text-slate-400 lg:text-2xl text-xl",children:n})]}),(0,i.jsx)("a",{href:o,className:"group inline-flex text-center w-full",children:(0,i.jsxs)("button",{type:"button",className:"lg:w-[12rem] w-full text-center flex items-center justify-center bg-slate-950 dark:bg-indigo-400 px-8 lg:py-4 py-5 text-white font-semibold dark:text-slate-100 rounded-3xl hover:bg-slate-800 transition-all duration-300",children:["View more",(0,i.jsx)("span",{className:"absolute right-0 invisible opacity-0 group-hover:ml-3 group-hover:relative group-hover:visible group-hover:opacity-100 transition-all duration-500",children:(0,i.jsx)(m,{className:""})})]})})]})})]})})})})}let h=[{image:"/testimage.webp",type:"Case study",title:"Mailchimp Mobile Homepage Redesign",description:"Surfacing the most relevant information for mobile users",link:"/century-onboarding",bgColor:"pink-200"},{image:"/testimage2.webp",type:"Case study",title:"Mailchimp Mobile Homepage Redesign",description:"Surfacing the most relevant information for mobile users",link:"/century-onboarding",bgColor:"white"},{image:"",type:"Case study",title:"Mailchimp Mobile Homepage Redesign",description:"Surfacing the most relevant information for mobile users",link:"/century-onboarding",bgColor:"blue-200"},{image:"",type:"Case study",title:"Mailchimp Mobile Homepage Redesign",description:"Surfacing the most relevant information for mobile users",link:"/century-onboarding",bgColor:"yellow-200"},{image:"",type:"Case study",title:"Mailchimp Mobile Homepage Redesign",description:"Surfacing the most relevant information for mobile users",link:"/century-onboarding",bgColor:"amber-200"}];function x(){return(0,i.jsxs)("div",{className:"bg-white dark:bg-black",children:[(0,i.jsx)(o.h,{}),(0,i.jsxs)("main",{className:"relative",children:[(0,i.jsxs)("div",{className:"relative flex flex-col mx-auto max-w-3xl md:h-[95vh] h-[40rem] justify-center items-center px-8",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-6 text-center",children:[(0,i.jsx)("h1",{className:"text-4xl text-slate-800 dark:text-slate-100 font-header font-medium",children:"Hello, I am Segun Oroyo"}),(0,i.jsx)("h4",{className:"text-slate-600 dark:text-slate-400 text-lg font-medium",children:"Design enthusiast fueled by a passion for user-centricity and efficiency. Currently Product Design Lead at Fullgap to shape Project management lifecycle. Always eager to collaborate on projects with measurable positive impact."}),(0,i.jsxs)("div",{className:"flex items-center mx-auto",children:[(0,i.jsxs)("span",{className:"relative flex h-3 w-3 mr-2",children:[(0,i.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),(0,i.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-green-500"})]}),(0,i.jsx)("span",{className:"text-slate-600 dark:text-slate-400 text-sm font-semibold",children:"BASED IN LONDON, UK"})]})]}),(0,i.jsx)("div",{className:"absolute bottom-[2rem]",children:(0,i.jsx)("svg",{className:"animate-bounce w-6 h-6",children:(0,i.jsx)(f,{className:"stroke-slate-600 dark:stroke-slate-400"})})})]}),(0,i.jsx)("div",{className:"relative px-8 py-12",children:(0,i.jsx)("div",{className:"mx-auto max-w-5xl",children:(0,i.jsx)("div",{className:"grid lg:grid-cols-2 gap-24",children:h.map(e=>(0,i.jsx)(g,{image:e.image,type:e.type,title:e.title,description:e.description,link:e.link,bgColor:e.bgColor},e.title))})})})]}),(0,i.jsxs)("footer",{className:"hidden row-start-3 flex gap-6 flex-wrap items-center justify-center",children:[(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{"aria-hidden":!0,src:"/file.svg",alt:"File icon",width:16,height:16}),"Learn"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{"aria-hidden":!0,src:"/window.svg",alt:"Window icon",width:16,height:16}),"Examples"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(s(),{"aria-hidden":!0,src:"/globe.svg",alt:"Globe icon",width:16,height:16}),"Go to nextjs.org →"]})]})]})}},9306:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(8105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/segunoroyo/Documents/Work/Mine/Webfolio/segunoroyo/src/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/segunoroyo/Documents/Work/Mine/Webfolio/segunoroyo/src/app/page.tsx","default")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[492,570,881,951],()=>r(6240));module.exports=i})();