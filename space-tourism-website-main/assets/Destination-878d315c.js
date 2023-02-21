import{T as r}from"./data-b41fee68.js";import{_ as g,o as a,c as o,a as s,F as p,r as u,u as b,b as _,n as c,t as d,p as v,d as f,e as h}from"./index-e7748397.js";const k="/assets/background-destination-desktop-47c4fc03.jpg",w="/assets/background-destination-mobile-59a7e1d7.jpg",y="/assets/background-destination-tablet-346382a8.jpg",M="/assets/image-europa-c9182c76.png",j="/assets/image-europa-1633fd2e.webp",T="/assets/image-mars-aa6f283f.png",C="/assets/image-mars-331b18c2.webp",E="/assets/image-moon-65df7a68.png",$="/assets/image-moon-85007328.webp",D="/assets/image-titan-c9e71a76.png",I="/assets/image-titan-5aa00dfe.webp";const l=t=>(v("data-v-476bb2e6"),t=t(),f(),t),S={class:"destination"},B={class:"destination_layout"},N=l(()=>s("h5",null,[s("span",null,"01"),h("Pick your destination")],-1)),U={class:"content"},V={key:0,class:"destination_container"},F={key:0,class:"picture_container appearance"},L=["src","alt"],O={class:"description"},X={class:"planet_nav"},z={key:0,class:"offsetX"},A={key:1,class:"offsetX"},P=l(()=>s("hr",null,null,-1)),R={key:2,class:"statistics offsetY"},Y={class:"distance"},q=l(()=>s("div",{class:"indicative"},"Avg. distance",-1)),G={class:"number"},H={class:"time"},J=l(()=>s("div",{class:"indicative"},"Est. travel time",-1)),K={class:"number"},Q={data(){return{name:"Moon",imgUrl(t){return new URL(Object.assign({"../assets/img/destination/background-destination-desktop.jpg":k,"../assets/img/destination/background-destination-mobile.jpg":w,"../assets/img/destination/background-destination-tablet.jpg":y,"../assets/img/destination/image-europa.png":M,"../assets/img/destination/image-europa.webp":j,"../assets/img/destination/image-mars.png":T,"../assets/img/destination/image-mars.webp":C,"../assets/img/destination/image-moon.png":E,"../assets/img/destination/image-moon.webp":$,"../assets/img/destination/image-titan.png":D,"../assets/img/destination/image-titan.webp":I})[`../assets/img/destination/${t}`],self.location).href}}},methods:{page(t){if(t==r.destinations[0].name)return this.name="Moon";if(t==r.destinations[1].name)return this.name="Mars";if(t==r.destinations[2].name)return this.name="Europa";if(t==r.destinations[3].name)return this.name="Titan"}},computed:{moon(){return{focus:this.name=="Moon"}},mars(){return{focus:this.name=="Mars"}},europa(){return{focus:this.name=="Europa"}},titan(){return{focus:this.name=="Titan"}}}},W=Object.assign(Q,{__name:"Destination",setup(t){return(n,i)=>(a(),o("div",S,[s("div",B,[N,(a(!0),o(p,null,u(b(r).destinations,e=>(a(),o("div",U,[e.name==this.name?(a(),o("div",V,[e.images.webp?(a(),o("div",F,[s("img",{src:n.imgUrl(e.images.webp),alt:e.name+" planet image"},null,8,L)])):_("",!0),s("div",O,[s("div",X,[s("ul",null,[s("li",{onClick:i[0]||(i[0]=m=>n.page("Moon")),class:c(n.moon)},"Moon",2),s("li",{onClick:i[1]||(i[1]=m=>n.page("Mars")),class:c(n.mars)},"Mars",2),s("li",{onClick:i[2]||(i[2]=m=>n.page("Europa")),class:c(n.europa)},"Europa",2),s("li",{onClick:i[3]||(i[3]=m=>n.page("Titan")),class:c(n.titan)},"Titan",2)])]),e.name?(a(),o("h2",z,d(e.name),1)):_("",!0),e.description?(a(),o("p",A,d(e.description),1)):_("",!0),P,e.distance&&e.travel?(a(),o("div",R,[s("div",Y,[q,s("span",G,d(e.distance),1)]),s("div",H,[J,s("span",K,d(e.travel),1)])])):_("",!0)])])):_("",!0)]))),256))])]))}}),ss=g(W,[["__scopeId","data-v-476bb2e6"]]);export{ss as default};
