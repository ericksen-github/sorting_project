!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);let n;const o=(()=>{const e=e=>{const t=document.getElementById("container"),r=document.createElement("div");r.id="barWrapper",t.appendChild(r);for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("bar"),n.style.height=e[t]+"px",r.appendChild(n)}};return{generateArray:()=>{n=Array.from({length:100},()=>Math.floor(96*Math.random()+5)),e(n)},clearBars:()=>{const e=document.getElementById("container");e.removeChild(e.lastElementChild)}}})();let l=1;const i={resetTimeTracker:()=>{l=1},handleHighlighting:(e,t,r)=>{const n=document.getElementById("barWrapper"),o=e.index,i=t.index,c=e.value;setTimeout(()=>{n.childNodes[o].style.backgroundColor="red",n.childNodes[i].style.backgroundColor="red",n.childNodes[r].style.height=c+"px",setTimeout(()=>{n.childNodes[o].style.backgroundColor="blue",n.childNodes[i].style.backgroundColor="blue"},500)},500*l),l++},swapDivs:(e,t)=>{setTimeout(()=>{document.getElementById("barWrapper").childNodes[t].style.height=e.value+"px"},500*l)}},c=(()=>{function e(r){if(r.length<=1)return r;const n=Math.floor(r.length/2),o=r.slice(0,n),l=r.slice(n);return function(e,r){let n=[],o=0,l=0,c=[];e.forEach(e=>{c.push(e.index)}),r.forEach(e=>{c.push(e.index)});let a=Math.min(...c);for(;o<e.length&&l<r.length;)e[o].value<r[l].value?(i.handleHighlighting(e[o],r[l],a),e[o].index=a,a++,n.push(e[o]),o++):(i.handleHighlighting(r[l],e[o],a),r[l].index=a,a++,n.push(r[l]),l++);let d=e.slice(o),u=r.slice(l);d.length>0?d=t(d,a):u=t(u,a);return n.concat(d).concat(u)}(e(o),e(l))}const t=(e,t)=>{for(let r=0;r<e.length;r++)i.swapDivs(e[r],t),e[r].index=t,t++;return e};return{preMerge:t=>{let r=[];for(let e=0;e<t.length;e++)r.push({value:t[e],index:[e][0]});console.log(e(r)),i.resetTimeTracker()},mergeSort:e}})();document.getElementById("createNewArray").addEventListener("click",()=>{o.clearBars(),o.generateArray()}),document.getElementById("mergeSort").addEventListener("click",()=>{console.log("click on merge"),c.preMerge(n)}),o.generateArray()}]);