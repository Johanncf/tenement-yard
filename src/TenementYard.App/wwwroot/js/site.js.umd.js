(function(r){typeof define=="function"&&define.amd?define(r):r()})(function(){"use strict";/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=([e,o,t])=>{const c=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(o).forEach(n=>{c.setAttribute(n,String(o[n]))}),t!=null&&t.length&&t.forEach(n=>{const s=a(n);c.appendChild(s)}),c},p=(e,o={})=>{const t="svg",c={...r,...o};return a([t,c,e])};/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e=>Array.from(e.attributes).reduce((o,t)=>(o[t.name]=t.value,o),{}),w=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",g=e=>e.flatMap(w).map(t=>t.trim()).filter(Boolean).filter((t,c,n)=>n.indexOf(t)===c).join(" "),y=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(o,t,c)=>t.toUpperCase()+c.toLowerCase()),i=(e,{nameAttr:o,icons:t,attrs:c})=>{var m;const n=e.getAttribute(o);if(n==null)return;const s=y(n),l=t[s];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const u=h(e),d={...r,"data-lucide":n,...c,...u},f=g(["lucide",`lucide-${n}`,u,c]);f&&Object.assign(d,{class:f});const v=p(l,d);return(m=e.parentNode)==null?void 0:m.replaceChild(v,e)};/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */(({icons:e={},nameAttr:o="data-lucide",attrs:t={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const c=document.querySelectorAll(`[${o}]`);if(Array.from(c).forEach(n=>i(n,{nameAttr:o,icons:e,attrs:t})),o==="data-lucide"){const n=document.querySelectorAll("[icon-name]");n.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(n).forEach(s=>i(s,{nameAttr:"icon-name",icons:e,attrs:t})))}})({icons:{Sun:A,Moon:b}})});
