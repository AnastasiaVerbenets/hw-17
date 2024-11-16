(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="04f715244097a0c4a22752c3612f0538",l="https://api.themoviedb.org/3",a=document.querySelector(".list");fetch(`${l}/movie/popular?api_key=${c}&language=en-US&page=1`).then(r=>{if(!r.ok)throw new Error("error");return r.json()}).then(r=>u(r.results.slice(0,5))).catch(r=>console.log(r));function u(r){const n=r.map(o=>`
    <li class='thumb'>
    <img src='https://image.tmdb.org/t/p/w500/${o.poster_path}' alt='poster' width='200'>
        <h2>${o.original_title}</h2>
        <p>Original language: ${o.original_language}</p>
        <p>Release date: ${o.release_date}</p>
        <p>Origin country: ${o.origin_country}</p>
    </li>
    `).join("");a.insertAdjacentHTML("beforeend",n)}
