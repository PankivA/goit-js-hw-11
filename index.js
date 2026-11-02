import{S as d,a as p,i as l}from"./assets/vendor-B2LILYAu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".loader"),u=document.querySelector(".gallery"),y=new d(".gallery a");function h(n){const r=n.map(({largeImageURL:s,webformatURL:o,tags:e,likes:t,views:i,comments:f,downloads:m})=>`<li class="gallery-item">
  <a href="${s}">
    <img src="${o}" alt="${e}">
  </a>
  <ul class="info">
    <li><span class="info-name">Likes:</span> ${t}</li>
    <li><span class="info-name">Views:</span> ${i}</li>
    <li><span class="info-name">Comments:</span> ${f}</li>
    <li><span class="info-name">Downloads:</span> ${m}</li>
  </ul>
</li>`).join("");u.innerHTML=r,y.refresh()}function g(){u.innerHTML=""}function L(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const S="https://pixabay.com/api/",w="34854696-76f476cf77bb49d9dc3b4708b";function q(n){return p.get(S,{params:{key:w,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const a=document.querySelector(".form");a.addEventListener("submit",P);function P(n){n.preventDefault();const s=new FormData(a).get("search-text").trim();a.reset(),g(),s&&(L(),q(s).then(o=>{o.hits.length?h(o.hits):l.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(()=>{l.error({message:"Something went wrong. Please try again!"})}).finally(b))}
//# sourceMappingURL=index.js.map
