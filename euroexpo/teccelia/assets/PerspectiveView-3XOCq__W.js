import{_ as c,c as r,a as n,F as l,r as d,n as g,g as v,o as a,u as m,p as u,d as h}from"./index-x_hla-VT.js";import{p}from"./utils-ZRjjU7Yd.js";const y=s=>(u("data-v-f5300656"),s=s(),h(),s),f={class:"wrapper-perspective exterior global-padding"},I=["src"],z={class:"wrapper-axonometry global-padding"},P=["src"],w={class:"wrapper-perspective global-padding"},L=["src"],E=y(()=>n("div",{id:"overlay"},null,-1)),S={mixins:[v],data(){return{zoomSwitch:!1,dataLoaded:!1,dataPerspectiveExterior:!1,dataAxonometry:!1,dataPerspectiveInterior:!1}},methods:{loadingPerspectiveExterior(){this.dataPerspectiveExterior=!0,this.loading()},loadingAxonometry(){this.dataAxonometry=!0,this.loading()},loadingPerspectiveInterior(){this.dataPerspectiveInterior=!0,this.loading()},loading(){this.dataPerspectiveExterior&&this.dataAxonometry&&this.dataPerspectiveInterior&&(this.dataLoaded=!0)},zoom(s){const e=document.querySelectorAll(".img"),o=s.currentTarget.src;for(let i=0;i<e.length;i++){const t=e[i].src;o==t&&this.zoomSwitch?e[i].classList.add("zoom-in","fix"):e[i].classList.remove("zoom-in","fix")}},zoomImg(s){const e=document.getElementById("overlay-container"),o=document.getElementById("overlay");this.zoomSwitch=!this.zoomSwitch,this.zoomSwitch?(this.zoom(s),e.classList.add("overlay-height"),o.classList.add("overlay-img"),document.body.style.overflow="hidden"):(this.zoom(s),e.classList.remove("overlay-height"),o.classList.remove("overlay-img"),document.body.style.overflow="")}}},b=Object.assign(S,{__name:"PerspectiveView",setup(s){return(e,o)=>(a(),r("section",{id:"overlay-container",class:g(["animation-opacity",{"animation-loading":e.dataLoaded}])},[n("div",f,[(a(!0),r(l,null,d(e.perspectiveExterior,i=>(a(),r("img",{class:"img img-perspective",src:m(p)("perspectives",i),onClick:o[0]||(o[0]=(...t)=>e.zoomImg&&e.zoomImg(...t)),onLoad:o[1]||(o[1]=(...t)=>e.loadingPerspectiveExterior&&e.loadingPerspectiveExterior(...t))},null,40,I))),256))]),n("div",z,[(a(!0),r(l,null,d(e.axonometry,i=>(a(),r("img",{class:"img img-axonometry",src:m(p)("axonometries",i),onClick:o[2]||(o[2]=(...t)=>e.zoomImg&&e.zoomImg(...t)),onLoad:o[3]||(o[3]=(...t)=>e.loadingAxonometry&&e.loadingAxonometry(...t))},null,40,P))),256))]),n("div",w,[(a(!0),r(l,null,d(e.perspectiveInterior,i=>(a(),r("img",{class:"img img-perspective",src:m(p)("perspectives",i),onClick:o[4]||(o[4]=(...t)=>e.zoomImg&&e.zoomImg(...t)),onLoad:o[5]||(o[5]=(...t)=>e.loadingPerspectiveInterior&&e.loadingPerspectiveInterior(...t))},null,40,L))),256))]),E],2))}}),k=c(b,[["__scopeId","data-v-f5300656"]]);export{k as default};