!function(){"use strict";const e=document.getElementById("results");function n(n,t){const r=document.createElement("li");n===t?(r.innerHTML="Тест пройден!",r.style.color="green"):(r.innerHTML=`Тест не пройден! ${n} не равно ${t}`,r.style.color="red"),e.appendChild(r)}function t(e){if(e<1||!Number.isInteger(e))throw new Error("Индекс должен быть целым числом больше или равным единице!");return 1===e?0:2===e?1:t(e-1)+t(e-2)}n(t(1),0),n(t(2),1),n(t(13),144)}();