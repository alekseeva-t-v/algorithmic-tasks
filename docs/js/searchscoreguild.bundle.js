!function(){"use strict";const e=document.getElementById("results");function i(i,l){const n=document.createElement("li");n.innerHTML=l?`Ваш счет — ${i}. Вы могли бы играть в гильдии ${l.guild} и занять там ${l.placement} место`:`Вы — единствнный игрок со счетом ${i}`,e.appendChild(n)}function l(e,i,n,o,g,t){if(o>t||n>g)return null;if(o===t&&n===g){const l=e[n][o];return l.leaguePoints===i?{guild:l.guild,placement:e[n].length-o}:null}const a=Math.floor((n+g)/2),s=Math.floor((o+t)/2),{leaguePoints:u}=e[a][s];return u<i?l(e,i,n,s+1,a,t)||l(e,i,a+1,o,g,s)||l(e,i,a+1,s+1,g,t):l(e,i,n,s+1,a,t)||l(e,i,a+1,o,g,s)||l(e,i,n,o,a,s)}function n(e,i){return e.length&&e[0].length?l(e,i,0,0,e.length-1,e[0].length-1):null}const o=[[{login:"stypeano",leaguePoints:4,guild:"seabass"},{login:"rstrazir",leaguePoints:356,guild:"seabass"},{login:"cathead",leaguePoints:930,guild:"seabass"},{login:"cavernous",leaguePoints:1056,guild:"seabass"}],[{login:"ConspiracyLil",leaguePoints:18,guild:"goldfish"},{login:"CzarStories",leaguePoints:568,guild:"goldfish"},{login:"GottaSaiyan",leaguePoints:931,guild:"goldfish"},{login:"Mountaintrid",leaguePoints:1130,guild:"goldfish"}],[{login:"Rectionom",leaguePoints:42,guild:"catfish"},{login:"JoshChase",leaguePoints:931,guild:"catfish"},{login:"DreamLess",leaguePoints:956,guild:"catfish"},{login:"BlondiePlanet",leaguePoints:1045,guild:"catfish"}],[{login:"Breakingbing",leaguePoints:64,guild:"bream"},{login:"Goldenelox",leaguePoints:932,guild:"bream"},{login:"SaiyanBroadway",leaguePoints:1432,guild:"bream"},{login:"BoostScooby",leaguePoints:1476,guild:"bream"}]];i(4,n(o,4)),i(14,n(o,14))}();