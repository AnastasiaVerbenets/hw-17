(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const a="47021183-57cb9b4788280b138c9bad41f",u="https://pixabay.com/api";class p{constructor(){this.page=1}fetchImages(){const s=`${u}?key=${a}&page=${this.page}&image_type=photo&per_page=3&colors=blue&orientation=horizontal`;return fetch(s).then(t=>{if(!t.ok)throw new Error(error);return t.json()}).then(({hits:t})=>(this.incrementPage(),t))}incrementPage(){this.page+=1}}const i=new p,f=document.querySelector(".list"),d=document.querySelector(".load-more__btn");m();d.addEventListener("click",h);function m(){i.fetchImages().then(o=>l(o.slice(0,3))).catch(o=>console.log(o))}function l(o){const s=o.map(t=>`
        <li class="item">
            <img src="${t.largeImageURL}" alt="${t.type}" />
            <p class="user">User: ${t.user}</p>
            <p class="likes">Likes: ${t.likes}</p>
            <p class="comments">Comments: ${t.comments}</p>
        </li>
        `).join("");f.insertAdjacentHTML("beforeend",s)}function h(){i.fetchImages().then(l)}
