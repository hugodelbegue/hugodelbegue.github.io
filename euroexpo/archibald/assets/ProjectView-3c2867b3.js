import{_ as y,a as L,b as P,c as S,d as k,e as z,f as I,g as N,h as A,i as E,j as R,k as V,l as C,m as H,n as U,o as B,p as D,I as q,N as O}from"./projects-naval-164d8334.js";import{_ as g,o as i,c as n,b as o,r as l,p as b,a as j,e as T,F as h,g as m,h as w,w as c,i as u,t as a,k as f}from"./index-5de6b1fd.js";const F={},M={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"icon-return",viewBox:"0 0 16 16"},Y=o("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"},null,-1),X=[Y];function x(e,t){return i(),n("svg",M,X)}const G=g(F,[["render",x]]);const J={},d=e=>(b("data-v-3514e6b2"),e=e(),j(),e),K={class:"show-project middle"},Q={class:"title-show-project"},W={class:"name-show-project"},Z={class:"text-show-project"},ee={class:"feature-show-project"},te={class:"feature-show"},oe=d(()=>o("span",{class:"feature caps"},"Surface de l'appartement :",-1)),se=d(()=>o("br",null,null,-1)),ie={class:"feature-show"},re=d(()=>o("span",{class:"feature caps"},"Mission :",-1)),ne=d(()=>o("br",null,null,-1)),ce={class:"feature-show"},ae=d(()=>o("span",{class:"feature caps"},"Architecte :",-1)),le=d(()=>o("br",null,null,-1)),_e={class:"feature-show"},ue=d(()=>o("span",{class:"feature caps"},"Coût des travaux :",-1));function de(e,t){return i(),n("div",K,[o("h2",Q,[l(e.$slots,"show-title",{},void 0,!0)]),o("span",W,[l(e.$slots,"show-name",{},void 0,!0)]),o("div",Z,[l(e.$slots,"show-text",{},void 0,!0)]),o("div",ee,[o("div",te,[oe,l(e.$slots,"show-surface",{},void 0,!0)]),se,o("div",ie,[re,l(e.$slots,"show-mission",{},void 0,!0)]),ne,o("div",ce,[ae,l(e.$slots,"show-expert",{},void 0,!0)]),le,o("div",_e,[ue,l(e.$slots,"show-price",{},void 0,!0)])])])}const pe=g(J,[["render",de],["__scopeId","data-v-3514e6b2"]]);const he={},me={class:"pictures-show-project"};function ge(e,t){return i(),n("div",me,[l(e.$slots,"show-picture",{},void 0,!0)])}const ve=g(he,[["render",ge],["__scopeId","data-v-ef014684"]]);const v=e=>(b("data-v-fdc742a5"),e=e(),j(),e),fe={class:"wrapper-page-project middle space-header"},we=v(()=>o("br",null,null,-1)),be=v(()=>o("br",null,null,-1)),je=v(()=>o("div",{class:"anchor"},null,-1)),$e={key:0,class:"ref-photographer"},ye=v(()=>o("div",{class:"loading loading-img"},null,-1)),Le=["src"],Pe={ref:"overlay"},Se={ref:"popup",class:"popup-info shadow-1"},ke={data(){return{projects:Object,selection:this.$attrs.selection,title:this.$attrs.id,zoomSwitch:!1,firstExecution:!1,imgUrl(e,t){return new URL(Object.assign({"../components/project/img/ReturnLeft.vue":y,"../components/project/img/architecture-interieure/la-villa-provencale/img1.jpeg":L,"../components/project/img/architecture-interieure/la-villa-provencale/img10.jpeg":P,"../components/project/img/architecture-interieure/la-villa-provencale/img2.jpeg":S,"../components/project/img/architecture-interieure/la-villa-provencale/img3.jpeg":k,"../components/project/img/architecture-interieure/la-villa-provencale/img4.jpeg":z,"../components/project/img/architecture-interieure/la-villa-provencale/img5.jpeg":I,"../components/project/img/architecture-interieure/la-villa-provencale/img6.jpeg":N,"../components/project/img/architecture-interieure/la-villa-provencale/img7.jpeg":A,"../components/project/img/architecture-interieure/la-villa-provencale/img8.jpeg":E,"../components/project/img/architecture-interieure/la-villa-provencale/img9.jpeg":R,"../components/project/img/architecture-interieure/test/img1.webp":V,"../components/project/img/architecture-interieure/test/img2.webp":C,"../components/project/img/architecture-interieure/test/img3.webp":H,"../components/project/img/architecture-navale/test/img4.webp":U,"../components/project/img/architecture-navale/test/img5.webp":B,"../components/project/img/architecture-navale/test/img6.webp":D})[`../components/project/img/${e}/${t}`],self.location).href},cleanUrl(e){return e.replace(/\s+/g,"-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}}},beforeMount(){window.addEventListener("scroll",this.appearancePopupInfo)},computed:{renderDataProject(){return this.selection=="architecture-interieure"?this.projects=q:this.projects=O,this.projects["projects-list"].filter(e=>e)},imgLoading(){document.querySelectorAll(".loading").forEach(t=>{t.remove()})}},methods:{backReturn(){this.$router.go(-1)},zoom(e){const t=document.querySelectorAll(".picture-show");for(let r=0;r<t.length;r++){const s=e.target.src,_=t[r].childNodes[0].src;s==_&&this.zoomSwitch?t[r].classList.add("zoom-in"):t[r].classList.remove("zoom-in")}},zoomPicture(e){const{overlay:t}=this.$refs;this.zoomSwitch=!this.zoomSwitch,this.zoomSwitch?(this.zoom(e),t.classList.add("overlay-image"),document.body.style.overflow="hidden"):(this.zoom(e),t.classList.remove("overlay-image"),document.body.style.overflow="")},appearancePopupInfo(){const{popup:e}=this.$refs,t=document.querySelector(".anchor"),r=document.documentElement.scrollHeight,s=window.innerHeight,_=t?t.offsetTop:void 0,p=s-_,$=(r-s)/1.25;e&&(window.scrollY<$&&window.scrollY>p?(this.firstExecution=!0,e.classList.remove("hidden-info"),e.classList.add("show-info")):this.firstExecution&&(e.classList.remove("show-info"),e.classList.add("hidden-info")))}}},ze=Object.assign(ke,{__name:"ProjectView",setup(e){return window.onpopstate=t=>{t.state&&(document.body.style.overflow="")},(t,r)=>(i(),n("section",fe,[o("button",{class:"back-return",onClick:r[0]||(r[0]=(...s)=>t.backReturn&&t.backReturn(...s))},[T(G)]),(i(!0),n(h,null,m(t.renderDataProject,s=>(i(),n("div",null,[t.cleanUrl(s.title)==t.title?(i(),w(pe,{key:0,class:"frameworkX frameworkY"},{"show-title":c(()=>[u(a(s.title),1)]),"show-name":c(()=>[u(a(s["customer-name"]),1)]),"show-text":c(()=>[(i(!0),n(h,null,m(s.description,_=>(i(),n("p",null,[u(a(_.text)+" ",1),we,be]))),256))]),"show-surface":c(()=>[u(a(s.surface),1)]),"show-mission":c(()=>[u(a(s.mission),1)]),"show-expert":c(()=>[u(a(s.expert),1)]),"show-price":c(()=>[u(a(s.price),1)]),_:2},1024)):f("",!0)]))),256)),je,(i(!0),n(h,null,m(t.renderDataProject,s=>(i(),n("div",null,[t.cleanUrl(s.title)==t.title?(i(),n("div",$e,"Photos. "+a(s.photographer),1)):f("",!0),t.cleanUrl(s.title)==t.title?(i(),w(ve,{key:1},{"show-picture":c(()=>[(i(!0),n(h,null,m(s["show-pictures"],_=>(i(),n("div",{class:"picture-show",onClick:r[2]||(r[2]=(...p)=>t.zoomPicture&&t.zoomPicture(...p))},[ye,o("img",{class:"picture",src:t.imgUrl(t.selection,_.img),alt:"Photo de projet",onLoad:r[1]||(r[1]=(...p)=>t.imgLoading&&t.imgLoading(...p))},null,40,Le)]))),256))]),_:2},1024)):f("",!0)]))),256)),o("div",Pe,null,512),o("div",Se,"cliquer sur une image pour la zoomer",512)]))}}),Ae=g(ze,[["__scopeId","data-v-fdc742a5"]]);export{Ae as default};