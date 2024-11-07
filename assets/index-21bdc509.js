(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class l{constructor(){this.searchQuery="",this.page=1}fetchArticles(){const r=`https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(r,{headers:{Authorization:"6c3ff90be8064c3fb0b2e50b8eb13e97"}}).then(o=>o.json()).then(o=>(console.log(o),this.incrementPage(),o.articles))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.query}set query(r){this.searchQuery=r}}const a=document.getElementById("form"),f=document.getElementById("load-more__btn"),d=document.getElementById("list"),i=new l;a.addEventListener("submit",h);f.addEventListener("click",p);function h(s){s.preventDefault(),i.query=s.currentTarget.elements.query.value,i.resetPage(),i.fetchArticles().then(u)}function p(){i.fetchArticles().then(u)}function u(s){const r=s.map(n=>`
        <li>
            <a href="${n.url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${n.urlToImage}" alt="" width="480">
                <h2>${n.title}</h2>
                <p>Posted by: ${n.author}</p>
                <p></p>
            </article>
            </a>
        </li>
        `).join("");d.insertAdjacentHTML("beforeend",r)}
