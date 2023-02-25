import{T as r}from"./data-b41fee68.js";import{_ as p,o as a,c as o,a as s,F as g,r as u,u as b,b as _,n as m,t as c,p as v,d as f,e as h}from"./index-f7e98f8d.js";const w="/space-tourism-website-main/assets/background-destination-desktop-47c4fc03.jpg",k="/space-tourism-website-main/assets/background-destination-mobile-59a7e1d7.jpg",y="/space-tourism-website-main/assets/background-destination-tablet-346382a8.jpg",M="/space-tourism-website-main/assets/image-europa-c9182c76.png",j="/space-tourism-website-main/assets/image-europa-1633fd2e.webp",T="/space-tourism-website-main/assets/image-mars-aa6f283f.png",C="/space-tourism-website-main/assets/image-mars-331b18c2.webp",E="/space-tourism-website-main/assets/image-moon-65df7a68.png",$="/space-tourism-website-main/assets/image-moon-85007328.webp",D="/space-tourism-website-main/assets/image-titan-c9e71a76.png",I="/space-tourism-website-main/assets/image-titan-5aa00dfe.webp";const d=t=>(v("data-v-476bb2e6"),t=t(),f(),t),S={class:"destination"},B={class:"destination_layout"},N=d(()=>s("h5",null,[s("span",null,"01"),h("Pick your destination")],-1)),U={class:"content"},V={key:0,class:"destination_container"},F={key:0,class:"picture_container appearance"},L=["src","alt"],O={class:"description"},X={class:"planet_nav"},z={key:0,class:"offsetX"},A={key:1,class:"offsetX"},P=d(()=>s("hr",null,null,-1)),R={key:2,class:"statistics offsetY"},Y={class:"distance"},q=d(()=>s("div",{class:"indicative"},"Avg. distance",-1)),G={class:"number"},H={class:"time"},J=d(()=>s("div",{class:"indicative"},"Est. travel time",-1)),K={class:"number"},Q={data(){return{name:"Moon",imgUrl(t){return new URL(Object.assign({"../assets/img/destination/background-destination-desktop.jpg":w,"../assets/img/destination/background-destination-mobile.jpg":k,"../assets/img/destination/background-destination-tablet.jpg":y,"../assets/img/destination/image-europa.png":M,"../assets/img/destination/image-europa.webp":j,"../assets/img/destination/image-mars.png":T,"../assets/img/destination/image-mars.webp":C,"../assets/img/destination/image-moon.png":E,"../assets/img/destination/image-moon.webp":$,"../assets/img/destination/image-titan.png":D,"../assets/img/destination/image-titan.webp":I})[`../assets/img/destination/${t}`],self.location).href}}},methods:{page(t){if(t==r.destinations[0].name)return this.name="Moon";if(t==r.destinations[1].name)return this.name="Mars";if(t==r.destinations[2].name)return this.name="Europa";if(t==r.destinations[3].name)return this.name="Titan"}},computed:{moon(){return{focus:this.name=="Moon"}},mars(){return{focus:this.name=="Mars"}},europa(){return{focus:this.name=="Europa"}},titan(){return{focus:this.name=="Titan"}}}},W=Object.assign(Q,{__name:"Destination",setup(t){return(i,n)=>(a(),o("div",S,[s("div",B,[N,(a(!0),o(g,null,u(b(r).destinations,e=>(a(),o("div",U,[e.name==this.name?(a(),o("div",V,[e.images.webp?(a(),o("div",F,[s("img",{src:i.imgUrl(e.images.webp),alt:e.name+" planet image"},null,8,L)])):_("",!0),s("div",O,[s("div",X,[s("ul",null,[s("li",{onClick:n[0]||(n[0]=l=>i.page("Moon")),class:m(i.moon)},"Moon",2),s("li",{onClick:n[1]||(n[1]=l=>i.page("Mars")),class:m(i.mars)},"Mars",2),s("li",{onClick:n[2]||(n[2]=l=>i.page("Europa")),class:m(i.europa)},"Europa",2),s("li",{onClick:n[3]||(n[3]=l=>i.page("Titan")),class:m(i.titan)},"Titan",2)])]),e.name?(a(),o("h2",z,c(e.name),1)):_("",!0),e.description?(a(),o("p",A,c(e.description),1)):_("",!0),P,e.distance&&e.travel?(a(),o("div",R,[s("div",Y,[q,s("span",G,c(e.distance),1)]),s("div",H,[J,s("span",K,c(e.travel),1)])])):_("",!0)])])):_("",!0)]))),256))])]))}}),ss=p(W,[["__scopeId","data-v-476bb2e6"]]);export{ss as default};