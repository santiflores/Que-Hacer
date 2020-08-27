!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const i={burger:document.querySelector("#burger"),menu:document.querySelector("#menu"),likesBtn:document.querySelector("#likesBtn"),likes:document.querySelector("#likes"),activityButton:document.querySelector("#generate"),activitySection:document.querySelector("#section1"),main:document.querySelector("#main")};class s{constructor(e=""){NaN!==parseInt(e,10)?this.key=e:this.key=parseInt(e,10)}async getResults(){try{const e=await fetch("http://www.boredapi.com/api/activity?key="+this.key).then(e=>e.json());return this.title=e.activity,this.type=e.type,this.people=e.participants,this.price=e.price,this.link=e.link,this.access=e.accessibility,this.key=e.key,e}catch(e){console.log(e)}}}i.burger.addEventListener("click",()=>{i.menu.classList.contains("hidden")?i.menu.classList.remove("hidden"):i.menu.classList.add("hidden")}),i.likesBtn.addEventListener("click",()=>{i.likes.classList.contains("hidden")?i.likes.classList.remove("hidden"):i.likes.classList.add("hidden")});const c={};i.activityButton.addEventListener("click",async()=>{i.main.insertAdjacentHTML("afterend",'\n    <svg id="loader" class="animate-spin my-10 mx-auto h-16 w-16 text-center text-primary-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n    <circle class="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n  </svg> \n    '),i.activitySection.innerHTML="",window.location.hash="";const e=window.location.hash.replace("#","");c.act=e>=1e6&&e<=9999999?new s(e):new s;try{await c.act.getResults(),(()=>{const e=document.querySelector("#loader");e&&e.parentElement.removeChild(e)})(i.main),((e,t="false")=>{const n=`     \n                <div class="flex justify-between items-center ">\n            <h3 class="text-xl font-bold pl-6 capitalize"><a href="#${e.link}">${e.title}</a></h3>\n                <div class="bg-primary-200 px-6 py-2">\n                    <img class="pointer hover:scale-110 transition-transform" src="img/like-${t}.svg" alt="" srcset="">\n                </div>\n            </div>\n            <div class="h-1 bg-primary-200"></div>\n                <div class="font-semibold flex flex-col md:flex-row justify-evenly items-center p-3">            \n                    <h4>Categoria: <span class="font-bold capitalize">${e.type}</span></h4>\n                    <img src="img/${e.type}.svg" heigh="48" width="48">\n                    <h4>Participantes: <span class="font-bold">${e.people}</span></h4>\n                    <img src="img/participants.svg" heigh="48" width="48">\n                    <h4>Accesibilidad: <span class="font-bold">${Math.round(10*e.access)} / 10</span></h4>\n                    <img src="img/accesibility.svg" heigh="48" width="48">\n                    <h4>Precio: <span class="font-bold">${Math.round(10*e.price)} / 10</span></h4>\n                    <img src="img/price.svg" heigh="48" width="48">\n                </div>\n    `;i.activitySection.insertAdjacentHTML("afterbegin",n)})(c.act),console.log(c.act)}catch(e){console.log(e)}})}]);