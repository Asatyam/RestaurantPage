(()=>{"use strict";function t(){mainContent.textContent="";const t=document.createElement("div");t.setAttribute("id","home");const e=document.createElement("p");e.textContent="Best pizza in your country";const n=document.createElement("p");n.textContent="Made with passion since 1908";const d=document.createElement("div");d.setAttribute("id","homeText"),d.appendChild(e),d.appendChild(n),t.appendChild(d);const c=document.createElement("div");c.setAttribute("id","homeImage");const o=document.createElement("img");o.setAttribute("src","../src/pizza.jpeg"),c.appendChild(o),t.appendChild(c),mainContent.appendChild(t)}const e=document.getElementById("content"),n=document.createElement("div");n.setAttribute("id","heading");const d=document.createElement("h1");d.textContent="Keep Eating",d.style.cssText="font-family:helvetica;text-align:center;padding:40px;",n.appendChild(d),e.appendChild(n);const c=document.createElement("div");c.setAttribute("id","tabs");const o=["Home","Menu","Contact"];for(let t=0;t<3;t++){const e=document.createElement("button");e.textContent=o[t],e.setAttribute("id",o[t]),e.style.cssText="padding:6px 12px 6px 12px;border-radius:10px;margin:10px;background-color:lightgreen;cursor:pointer;",c.appendChild(e)}n.appendChild(c),n.style.cssText="background-color:cyan;",c.style.cssText="display:flex;justify-content:center;gap:30px;";const i=document.createElement("div");i.setAttribute("id","mainContent"),e.appendChild(i),t();const a=document.getElementById("Home"),s=document.getElementById("Menu"),l=document.getElementById("Contact");a.addEventListener("click",t),s.addEventListener("click",(function(){mainContent.textContent="";const t=document.createElement("div");t.setAttribute("id","menu");for(let e=0;e<8;e++){const n=document.createElement("div");t.appendChild(n),n.textContent=`Pizza ${e}`;const d=document.createElement("img");d.setAttribute("src","../src/pizza.jpeg"),n.appendChild(d),n.style.border="1px solid black",n.style.display="flex",n.style.flexDirection="column"}mainContent.appendChild(t)})),l.addEventListener("click",(function(){mainContent.textContent="";const t=document.createElement("div");t.setAttribute("id","contact");const e=["Phone","Email","Address","State","Country"];for(let n=0;n<5;n++){const d=document.createElement("p");d.textContent=e[n],t.appendChild(d),t.style.border="2px solid green"}mainContent.appendChild(t)}))})();