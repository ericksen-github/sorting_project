!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);let n;const o=(()=>{const e=e=>{const t=document.getElementById("container"),r=document.createElement("div");r.id="barWrapper",t.appendChild(r);for(let t=0;t<e.length;t++){const n=document.createElement("div");n.classList.add("bar"),n.style.height=e[t]+"px",r.appendChild(n)}};return{generateArray:()=>{n=Array.from({length:100},()=>Math.floor(276*Math.random()+25)),e(n)},clearBars:()=>{const e=document.getElementById("container");e.removeChild(e.lastElementChild)}}})();let l=1;const a=(()=>{const e=()=>{l<400?l++:l+=l<500?.75:.6};return{resetTimeTracker:()=>{l=1},swapColors:(t,r,n)=>{const o=document.getElementById("barWrapper"),a=o.childNodes[r.index],c=o.childNodes[n.index];setTimeout(()=>{"red"==t?(a.style.backgroundColor="red",c.style.backgroundColor="red"):"blue"==t&&(a.style.backgroundColor="rgb(68, 68, 206)",c.style.backgroundColor="rgb(68, 68, 206)")},40*l),e()},shiftDivs:t=>{const r=document.getElementById("barWrapper");setTimeout(()=>{for(let e=0;e<t.length;e++){const n=t[e].index,o=t[e].value;r.childNodes[n].style.height=o+"px"}},40*l),e()},grabTimerValue:()=>[l,40]}})(),c=(()=>{function e(r){if(r.length<=1)return r;const n=Math.floor(r.length/2),o=r.slice(0,n),l=r.slice(n);return function(e,r){let n=[];for(;0<e.length&&0<r.length;)a.swapColors("red",e[0],r[0]),e[0].value<r[0].value?(a.swapColors("blue",e[0],r[0]),n.push(e[0]),e.shift()):(a.swapColors("blue",e[0],r[0]),r[0].index=e[0].index,n.push(r[0]),t(e,r),r.shift());return n.concat(e).concat(r)}(e(o),e(l))}const t=(e,t)=>{let r=[];r.push({value:t[0].value,index:t[0].index});for(let t=0;t<e.length;t++)e[t].index=e[t].index+1,r.push({value:e[t].value,index:e[t].index});a.shiftDivs(r)},r=e=>{const t=[document.getElementById("createNewArray"),document.getElementById("mergeSort")];t.forEach(e=>{e.classList.add("disable")}),setTimeout(()=>{t.forEach(e=>{e.classList.remove("disable")})},e[0]*e[1]+100)};return{preMerge:t=>{a.resetTimeTracker();let n=[];for(let e=0;e<t.length;e++)n.push({value:t[e],index:[e][0]});e(n),r(a.grabTimerValue())},mergeSort:e}})();const d=(()=>{const e=e=>{let t,r=e.length;do{t=!1;for(let n=0;n<r;n++)if(e[n]>e[n+1]){let r=e[n];e[n]=e[n+1],e[n+1]=r,t=!0}}while(t);return e};return{preBubble:t=>{console.log(e(t))}}})();document.getElementById("createNewArray").addEventListener("click",()=>{o.clearBars(),o.generateArray()}),document.getElementById("mergeSort").addEventListener("click",()=>{c.preMerge(n)}),document.getElementById("bubbleSort").addEventListener("click",()=>{d.preBubble(n)}),o.generateArray()}]);