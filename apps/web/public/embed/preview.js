!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();window.fingerprint="0db2801b",function(e,t,n){let i=function(e,t){e.q.push(t)},o=e.document;e.Cal=e.Cal||function(){let r=e.Cal,l=arguments;if(r.loaded||(r.ns={},r.q=r.q||[],o.head.appendChild(o.createElement("script")).src=t,r.loaded=!0),l[0]===n){const e=function(){i(e,arguments)},t=l[1];return e.q=e.q||[],void("string"==typeof t?(r.ns[t]=e)&&i(e,l):i(r,l))}i(r,l)}}(window,"http://localhost:3000/embed/embed.js","init");const e=window;e.Cal("init",{origin:"http://localhost:3000"});const t=new URL(document.URL).searchParams,n=t.get("embedType"),i=t.get("calLink");if("inline"===n)e.Cal("inline",{elementOrSelector:"#my-embed",calLink:i});else if("floating-popup"===n)e.Cal("floatingButton",{calLink:i,attributes:{id:"my-floating-button"}});else if("element-click"===n){const e=document.createElement("button");e.setAttribute("data-cal-link",i),e.innerHTML="I am a button that exists on your website",document.body.appendChild(e)}e.addEventListener("message",(e=>{const t=e.data;if("cal:preview"!==t.mode)return;const n=window.Cal;if(!n)throw new Error("Cal is not defined yet");if("instruction"==t.type&&n(t.instruction.name,t.instruction.arg),"inlineEmbedDimensionUpdate"==t.type){const e=document.querySelector("#my-embed");e&&(e.style.width=t.data.width,e.style.height=t.data.height)}}));