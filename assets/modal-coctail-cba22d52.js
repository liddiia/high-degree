import{m as l,f as a,a as r,C as s,d,c as n}from"./icons-3a8f2790.js";const f=t=>{if(t.currentTarget===t.target||t.target.dataset.typecockt!=="coct-btn")return;const o=t.target;console.log(o);let e=o.dataset.idCoctail;console.log(e);let c=o.dataset.localcockt,i=a.indexOf(e);c==="favorite"&&i===-1?(o.textContent="Remove from favorites",c="remfromfavorite",r(e,a,s),document.getElementById(e).classList.add("is-favorite"),console.log(a)):(o.textContent="Add to favorites",c="favorite",d(e,a,s),document.getElementById(e).classList.remove("is-favorite"))},m=t=>{t.target.classList.contains("cocktail-modal-back")&&setTimeout(n(t.target),500)};l.addEventListener("click",f);l.addEventListener("click",m);