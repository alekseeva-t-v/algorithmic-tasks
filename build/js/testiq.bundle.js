!function(){"use strict";const e=document.getElementById("results");function n(n,t){const c=document.createElement("li");n===t?(c.innerHTML="Тест пройден!",c.style.color="green"):(c.innerHTML=`Тест не пройден! ${n} не равно ${t}`,c.style.color="red"),e.appendChild(c)}function t(e){const n=e.split(" ").map((e=>e%2)),t=n.reduce(((e,n)=>e+n),0)>1?0:1;return n.indexOf(t)+1}n(t("2 4 7 8 10"),3),n(t("1 2 1 1"),2)}();