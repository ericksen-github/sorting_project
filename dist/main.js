!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r;const o=(()=>{const e=e=>{const t=document.getElementById("container"),n=document.createElement("div");n.id="barWrapper",t.appendChild(n);for(let t=0;t<e.length;t++){const r=document.createElement("div");r.classList.add("bar"),r.style.height=e[t]+"px",r.style.backgroundColor="blue",n.appendChild(r)}};return{generateArray:()=>{r=Array.from({length:50},()=>Math.floor(96*Math.random()+5)),e(r)},clearBars:()=>{const e=document.getElementById("container");e.removeChild(e.lastElementChild)}}})();let l=1;const i={resetTimeTracker:()=>{l=1},runAnimations:(e,t,n,r)=>{const o=document.getElementById("barWrapper"),i=o.childNodes[t.index],u=o.childNodes[n.index],d=t.value;setTimeout(()=>{"red"==e?(i.style.backgroundColor="red",u.style.backgroundColor="red"):"blue"==e?(i.style.backgroundColor="blue",u.style.backgroundColor="blue"):"divSize"==e&&(o.childNodes[r].style.height=d+"px")},500*l),l++},shiftDivs:e=>{const t=document.getElementById("barWrapper");setTimeout(()=>{for(let n=0;n<e.length;n++){const r=e[n].index,o=e[n].value;console.log(r," index"),t.childNodes[r].style.height=o+"px"}},500*l),l++}},u=(()=>{function e(t){if(t.length<=1)return t;const n=Math.floor(t.length/2),r=t.slice(0,n),o=t.slice(n);return function(e,t){let n=[],r=e[0].index;for(;0<e.length&&0<t.length;)if(i.runAnimations("red",e[0],t[0],r),e[0].value<t[0].value)i.runAnimations("blue",e[0],t[0],r),i.runAnimations("divSize",e[0],t[0],r),r++,n.push(e[0]),e.shift();else{i.runAnimations("divSize",t[0],e[0],r),i.runAnimations("blue",e[0],t[0],r),t[0].index=r,r++,n.push(t[0]),t.shift();let o=[];for(let t=0;t<e.length;t++){e[t].index=e[t].index+1;const n={value:e[t].value,index:e[t].index};o.push(n)}i.shiftDivs(o)}return n.concat(e).concat(t)}(e(r),e(o))}return{preMerge:t=>{i.resetTimeTracker();let n=[];for(let e=0;e<t.length;e++)n.push({value:t[e],index:[e][0]});e(n)},mergeSort:e}})();document.getElementById("createNewArray").addEventListener("click",()=>{o.clearBars(),o.generateArray()}),document.getElementById("mergeSort").addEventListener("click",()=>{u.preMerge(r)}),o.generateArray()}]);