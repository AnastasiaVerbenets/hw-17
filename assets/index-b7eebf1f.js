(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const l="47021183-57cb9b4788280b138c9bad41f",a="https://pixabay.com/api/";class u{constructor(){this.page=1}fetchImages(){const o=`${a}?key=${l}&editors_choice=true&page=${this.page}&per_page=3`;return fetch(o).then(t=>t.json()).then(({hits:t})=>(this.incrementPage(),t))}incrementPage(){this.page+=1}}const d=new u,f=document.querySelector(".list"),p=document.querySelector(".load-more__btn");p.addEventListener("click",g);i();function i(){d.fetchImages().then(s=>m(s)).catch(s=>console.log(s))}function m(s){const o=s.map(t=>`
        <li class="item">
            <img src="${t.webformatURL}" alt="${t.tags}" />
            <p class="user">User: ${t.user}</p>
            <p class="likes">Likes: ${t.likes}</p>
            <p class="comments">Comments: ${t.comments}</p>
        </li>
        `).join("");f.insertAdjacentHTML("beforeend",o)}function g(){i()}
