!function(){"use strict";const e=document.getElementById("results");function n(n,t){const o=document.createElement("li");n===t?(o.innerHTML="Тест пройден!",o.style.color="green"):(o.innerHTML=`Тест не пройден! ${n} не равно ${t}`,o.style.color="red"),e.appendChild(o)}const t={"(":")","[":"]"},o=new Set(Object.keys(t)),c=new Set(Object.values(t));function s(e){const n=[];for(const s of e)if(o.has(s)&&n.push(s),c.has(s)){if(!n.length)return!1;const e=n.pop();if(s!==t[e])return!1}return!n.length}n(s("(((())()))"),!0),n(s("())"),!1),n(s(")("),!1),n(s("([])"),!0),n(s("([)]"),!1)}();