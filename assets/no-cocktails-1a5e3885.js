(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();const l=document.querySelector(".js-menu-container"),d=document.querySelector(".js-open-menu"),u=document.querySelector(".js-close-menu");d.addEventListener("click",r);u.addEventListener("click",r);function r(){l.classList.toggle("is-hidden")}const g=document.querySelector(".js-btn-sub-menu"),f=document.querySelector(".sub-menu"),p=document.querySelector(".opn-sub-icon");g.addEventListener("click",m);function m(){f.classList.toggle("is-open"),p.classList.toggle("rotate")}const y=document.querySelector(".desktop-menu-sub-list"),S=document.querySelector(".btn-hed-sub-menu"),v=document.querySelector(".heder-sub-icon");S.addEventListener("click",L);function L(){y.classList.toggle("is-open"),v.classList.toggle("rotate")}const b="favorites";let h=JSON.parse(localStorage.getItem("favorites"))||[],k=JSON.parse(localStorage.getItem("ingridients"))||[];function M(n,e,c){e.push(n),localStorage.setItem(c,JSON.stringify(e))}function x(n,e,c){let s=e.indexOf(n);console.log(s),s!==-1&&(e.splice(s,1),localStorage.setItem(c,JSON.stringify(e)))}const a=`<img
            srcset="/img/no-cocktails/no-cocktails@1x.png 1x, /img/no-cocktails/no-cocktails@2x.png 2x"
            src="/img/no-cocktails/no-cocktails@1x.png"
            alt="no-coctails"
            class="no-coctails-img"
            width="234"
            height="201"
            loading="lazy"
          />`;function q(n,e){e.textContent="",n.classList.add("active"),n.innerHTML=`${a}
          <p class="description-no-coctails">Sorry, we <span class="span-no-coctails">didn’t find</span> any cocktail for you</p>`}function O(n,e){e.textContent="Favorite cocktails",n.classList.add("active"),n.innerHTML=`${a}
 <p class="description-no-coctails">You haven't added any <span class="span-no-coctails">favorite cocktails</span> yet</p>`}function I(n,e){e.textContent="Favorite ingredients",n.classList.add("active"),n.innerHTML=`${a}
 <p class="description-no-coctails">You haven't added any <span class="span-no-coctails">favorite ingredients</span> yet</p>`}export{b as C,I as a,q as b,M as c,x as d,h as f,O as h,k as i};