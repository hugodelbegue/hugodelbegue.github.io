import{T as i}from"./data-b41fee68.js";import{_ as h,o as a,c,a as s,F as m,r as u,u as d,n as p,t as r,b as l,p as y,d as b,e as v}from"./index-e7748397.js";const f="/assets/background-technology-desktop-457659c3.jpg",j="/assets/background-technology-mobile-b1fdb61f.jpg",k="/assets/background-technology-tablet-cbc2b315.jpg",S="/assets/image-launch-vehicle-landscape-8d65dd76.jpg",T="/assets/image-launch-vehicle-portrait-7165cee7.jpg",L="/assets/image-space-capsule-landscape-2e8d59ba.jpg",C="/assets/image-space-capsule-portrait-c67ebf87.jpg",$="/assets/image-spaceport-landscape-fecb4811.jpg",I="/assets/image-spaceport-portrait-6467d1ec.jpg";const _=o=>(y("data-v-2c2bf35f"),o=o(),b(),o),U={class:"technology"},B={class:"technologie_layout"},N=_(()=>s("h5",null,[s("span",null,"03"),v("Space launch 101")],-1)),V={class:"content"},Y={key:0,class:"technology_container"},w={class:"description_container"},F={class:"number_choice"},O={key:0,class:"description offsetYbottom"},z=_(()=>s("h5",null,"The terminology...",-1)),D=["src","alt"],E=["src","alt"],R={data(){return{name:"Launch vehicle",cla:"",imgUrl(o){return new URL(Object.assign({"../assets/img/technology/background-technology-desktop.jpg":f,"../assets/img/technology/background-technology-mobile.jpg":j,"../assets/img/technology/background-technology-tablet.jpg":k,"../assets/img/technology/image-launch-vehicle-landscape.jpg":S,"../assets/img/technology/image-launch-vehicle-portrait.jpg":T,"../assets/img/technology/image-space-capsule-landscape.jpg":L,"../assets/img/technology/image-space-capsule-portrait.jpg":C,"../assets/img/technology/image-spaceport-landscape.jpg":$,"../assets/img/technology/image-spaceport-portrait.jpg":I})[`../assets/img/technology/${o}`],self.location).href}}},methods:{page(o){if(o==i.technology[0].name)return this.name="Launch vehicle";if(o==i.technology[1].name)return this.name="Spaceport";if(o==i.technology[2].name)return this.name="Space capsule"}},computed:{vehicle(){return{focus:this.name=="Launch vehicle"}},spaceport(){return{focus:this.name=="Spaceport"}},capsule(){return{focus:this.name=="Space capsule"}}}},q=Object.assign(R,{__name:"Technology",setup(o){return(t,n)=>(a(),c("div",U,[s("div",B,[N,(a(!0),c(m,null,u(d(i).technology,e=>(a(),c("div",V,[e.name==this.name?(a(),c("div",Y,[s("div",w,[s("div",F,[s("span",{onClick:n[0]||(n[0]=g=>t.page("Launch vehicle")),class:p(t.vehicle)},"1",2),s("span",{onClick:n[1]||(n[1]=g=>t.page("Spaceport")),class:p(t.spaceport)},"2",2),s("span",{onClick:n[2]||(n[2]=g=>t.page("Space capsule")),class:p(t.capsule)},"3",2)]),e.name&&e.description?(a(),c("div",O,[z,s("h3",null,r(e.name),1),s("p",null,r(e.description),1)])):l("",!0)]),e.images.portrait?(a(),c("img",{key:0,class:"offsetYtop portrait",src:t.imgUrl(e.images.portrait),alt:e.name+" technology image"},null,8,D)):l("",!0),e.images.landscape?(a(),c("img",{key:1,class:"offsetYtop landscape",src:t.imgUrl(e.images.landscape),alt:e.name+" technology image"},null,8,E)):l("",!0)])):l("",!0)]))),256))])]))}}),H=h(q,[["__scopeId","data-v-2c2bf35f"]]);export{H as default};
