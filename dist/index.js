(()=>{"use strict";const e=async function(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=c394a103dd1f0d201c32226e45bbcce5&units=metric`);return await t.json()},t=async function(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=minutely&appid=c394a103dd1f0d201c32226e45bbcce5&units=metric`),a=await n.json();return console.log(a),a},n=document.createElement("ul"),a=document.createElement("ul"),o=new Date,c=o.getHours(),d=(e,t)=>{let n=c+e+t;return n>23&&(n=c+t+e-24),n<10?"0"+n.toFixed(2):n.toFixed(2)};(()=>{console.log(o),console.log(c);let e=o.getTimezoneOffset();console.log(c+e)})();const s=e=>{const t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday";let n=o.getDay()+e;return o.getDay()+e>6&&(n=o.getDay()+e-7),t[n]},i=(e,o)=>{const c=document.querySelector(".Location_holder");c.classList.add("hide");const i=document.querySelector("body"),l=document.createElement("ul");l.classList.add("forcast__container"),l.classList.add(e),i.appendChild(l);const r=document.createElement("h2");r.classList.add("main_header"),r.textContent="Forecast report";const m=document.createElement("button");m.classList.add("return_button"),m.textContent="Return",m.addEventListener("click",(()=>{const e=document.querySelector(".hourly__container"),t=document.querySelector(".daily__container");p(e),p(t),p(l),l.remove(),c.classList.remove("hide")}));const p=e=>{for(;e.firstChild;)e.firstChild.remove()},u=document.createElement("li"),h=document.createElement("p");h.classList.add("today_mini_header"),h.textContent="Today",n.classList.add("hourly__container"),u.appendChild(h),u.appendChild(n),t(e,o).then((e=>((e,t)=>{const a=e.timezone_offset/60/60;console.log(a),t.forEach(((e,t)=>{const o=document.createElement("li");n.appendChild(o);const c=document.createElement("img");c.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,c.classList.add("hour_image_icon"),o.appendChild(c);const s=document.createElement("section");c.classList.add("dayTimeTempSection"),o.appendChild(s);const i=document.createElement("p");i.textContent=`${d(t,a)}`,i.classList.add("mini_temp"),s.appendChild(i);const l=document.createElement("p");l.textContent=`${Math.round(e.temp)}°`,l.classList.add("mini_temp"),s.appendChild(l)}))})(e,e.hourly.splice(0,12)))),t(e,o).then((e=>{e.daily.forEach(((e,t)=>{const n=document.createElement("li");a.appendChild(n);const o=document.createElement("p");o.textContent=`${s(t)}`,o.classList.add("mini_temp"),n.appendChild(o);const c=document.createElement("p");c.textContent=`${Math.round(e.temp.day)}°`,c.classList.add("big_temp"),n.appendChild(c);const d=document.createElement("img");d.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,d.classList.add("day_image_icon"),n.appendChild(d)}))}));const y=document.createElement("li"),g=document.createElement("p");g.classList.add("today_mini_header"),g.textContent="Next forecast",a.classList.add("daily__container"),y.appendChild(g),y.appendChild(a),[r,m,u,y].forEach((e=>l.appendChild(e)))},l=document.querySelector(".container"),r=e=>{const t=document.createElement("li");t.dataset.lat=e.coord.lat,t.dataset.lon=e.coord.lon,t.classList.add("city__container"),t.addEventListener("click",(()=>{i(t.dataset.lat,t.dataset.lon)}));const n=document.createElement("h3");n.textContent=`${Math.round(e.main.temp)}°`,n.classList.add("city_temp");const a=document.createElement("p");a.textContent=`${e.weather[0].main}`,a.classList.add("city_weather");const o=document.createElement("h3");o.textContent=`${e.name}`,o.classList.add("city_name");const c=document.createElement("img");c.src=`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`,c.classList.add("material-icons"),c.classList.add("weather__icon"),[n,a,o,c].forEach((e=>t.appendChild(e))),4==l.querySelectorAll("li").length&&l.removeChild(l.lastElementChild),l.prepend(t)},m=document.querySelector(".search_inputbox"),p=document.querySelector(".search_button"),u=document.querySelector(".location_button");let h=["paris","london","madrid","newcastle"];window.addEventListener("load",(()=>{if(null!==localStorage.getItem("Locations")){let e=localStorage.getItem("Locations");h=JSON.parse(e)}h.forEach((t=>{e(t).then((e=>{r(e)}))}))}));const y=()=>{const t=m.value.toLowerCase();L(),h.includes(t)?alert("You have searched this place already"):(e(t).then((e=>{r(e)})),h.length>4&&h.shift(),L())};p.addEventListener("click",(()=>{y()})),m.addEventListener("keypress",(e=>{"Enter"===e.key&&y()})),u.addEventListener("click",(()=>{window.navigator.geolocation.getCurrentPosition(g,console.log)}));const g=t=>{let n=t.coords,{latitude:a,longitude:o}=n;(async function(e,t){const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=c394a103dd1f0d201c32226e45bbcce5`);return await n.json()})(a,o).then((t=>{h.includes(t.name.toLowerCase())?alert("Please search somewhere new"):h.push(t.name.toLowerCase())&&h.shift()&&e(t.name).then((e=>{r(e)}))}))},L=()=>{h=[],document.querySelectorAll(".city_name").forEach((e=>{h.push(e.innerHTML.toLowerCase())})),console.log(h),localStorage.setItem("Locations",JSON.stringify(h))};forcast()})();