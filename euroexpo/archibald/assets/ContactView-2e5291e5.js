import{_ as l,o as t,c as a,d as u,p as r,a as d,b as s,n as i,e as c,w as f,T as v,f as p}from"./index-5c41f2ce.js";const x={},y={class:"form",action:""},w=u('<h3 class="title-form caps">Vous êtes particulier.</h3><p class="text-form">Vous avez un projet de construction de maison neuve, vous venez d’acquérir un bâtiment ancien et tout en gardant son cachet, vous le voulez whaou ! La maison est trop petite, un peu vieillotte, une extension/rénovation vous semble donc indispensable. <br> Alors nous sommes votre agence, car ces 3 compétences sont dans notre cœur de métier. Aussi, vous allez adorer passer l’année avec nous. Oui, car choisir un architecte est non seulement une histoire de talents, mais aussi d’humain, de compréhension, d’échanges, de compromis et notre but est de vous emmener dans une maison que vous ne pourrez plus quitter. </p><div class="form-content"><label class="label-box" for="name"><input class="input-box" type="text" name="" id="name" placeholder="Votre nom"></label><label class="label-box" for="email"><input class="input-box" type="email" name="" id="email" placeholder="Votre mail"></label><label class="label-box" for="phone"><input class="input-box" type="tel" name="" id="phone" placeholder="Votre N° de téléphone (facultatif)"></label><hr><div class="wrapper-radio"> Votre projet concerne <label for="select-1"><input type="radio" name="radio" id="select-1"> Choice 1 </label><label for="select-2"><input type="radio" name="radio" id="select-2"> Choice 2 </label><label for="select-3"><input type="radio" name="radio" id="select-3"> Choice 3 </label><label for="select-4"><input type="radio" name="radio" id="select-4"> Choice 4 </label></div><label class="label-box label-anim first" for="budget"> Quel est votre budget estimé pour ce projet ? <input class="input-box" type="number" name="" id="budget" placeholder="en €"></label><label class="label-box label-anim second" for="surface"> A combien estimez-vous la surface ? <input class="input-box" type="number" name="" id="surface" placeholder="en m²"></label><label class="label-box label-anim third" for="postal-code"> Votre code postale ou ville du projet <input class="input-box" type="text" name="" id="postal-code"></label><label class="label-box" for="message"> Faites une courte description du projet <textarea class="input-box" name="" id="message" cols="30" rows="10" placeholder="..."></textarea></label><input class="input-submit" type="submit" value="Envoyer"></div>',3),g=[w];function $(e,o){return t(),a("form",y,g)}const k=l(x,[["render",$]]),V={},C={class:"form",action:""},I=u('<h3 class="title-form caps">Vous êtes professionnel.</h3><p class="text-form">C’est avec cette même énergie que nous vous proposerons de collaborer sur vos projets en se calibrant sur vos exigences tout en vous faisant profiter de notre créativité. <br> Avant de monter notre agence, nous avons bien évidemment travaillés dans d’autres structures exclusivement dédiées aux professionnels de la construction. <br> Collectifs, ERP, bureaux, artisanal ou de l’industriel n’ont vraiment plus de secret. </p><div class="form-content"><label class="label-box" for="email"><input class="input-box" type="email" name="" id="email" placeholder="Votre mail"></label><label class="label-box label-anim" for="compagny-name"><input class="input-box" type="text" name="" id="compagny-name" placeholder="Nom de l&#39;entreprise"></label><label class="label-box" for="name"><input class="input-box" type="text" name="" id="name" placeholder="Votre nom"></label><label class="label-box" for="phone"><input class="input-box" type="tel" name="" id="phone" placeholder="Votre N° de téléphone (facultatif)"></label><hr><div class="wrapper-radio"> Votre projet concerne <label for="select-1"><input type="radio" name="radio" id="select-1"> Choice 1 </label><label for="select-2"><input type="radio" name="radio" id="select-2"> Choice 2 </label><label for="select-3"><input type="radio" name="radio" id="select-3"> Choice 3 </label><label for="select-4"><input type="radio" name="radio" id="select-4"> Choice 4 </label></div><label class="label-box" for="message"> Votre message <textarea class="input-box" name="" id="message" cols="30" rows="10" placeholder="..."></textarea></label><input class="input-submit" type="submit" value="Envoyer"></div>',3),P=[I];function j(e,o){return t(),a("form",C,P)}const z=l(V,[["render",j]]);const F={},S=e=>(r("data-v-b1725427"),e=e(),d(),e),M={class:"map-content"},N=S(()=>s("iframe",{class:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.07592855112!2d2.2506651077887243!3d48.85935694222463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66df01996d0b9%3A0xc53954691b52e25d!2sArchibald!5e0!3m2!1sfr!2sfr!4v1695299683647!5m2!1sfr!2sfr",width:"800",height:"600",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),A=[N];function B(e,o){return t(),a("div",M,A)}const q=l(F,[["render",B],["__scopeId","data-v-b1725427"]]);const E={data(){return{checked:!1}},computed:{individual(){return{"name-color-individual":!this.checked}},professional(){return{"name-color-professional":this.checked}}},methods:{changeMode(){const{switchInput:e}=this.$refs;e.checked?(this.checked=!0,this.$emit("pro-mode",this.checked)):(this.checked=!1,this.$emit("pro-mode",this.checked))}}},m=e=>(r("data-v-e4ce6327"),e=e(),d(),e),L={class:"wrapper-switch"},O=m(()=>s("div",{class:"text-part"},[s("p",null,"Vous êtes ?")],-1)),T={class:"switch-part"},Q=["checked"],R=m(()=>s("label",{for:"type-customer",class:"label"},[s("div",{id:"ball",class:"ball"})],-1));function X(e,o,_,oe,b,n){return t(),a("div",L,[O,s("div",T,[s("span",{class:i(["name-mode",n.individual])},"Particulier",2),s("input",{class:"checkbox",ref:"switchInput",onChange:o[0]||(o[0]=(...h)=>n.changeMode&&n.changeMode(...h)),type:"checkbox",id:"type-customer",checked:b.checked},null,40,Q),R,s("span",{class:i(["name-mode",n.professional])},"Professionnel",2)])])}const Y=l(E,[["render",X],["__scopeId","data-v-e4ce6327"]]);const D=e=>(r("data-v-c05615e8"),e=e(),d(),e),G={class:"wrapper-contact middle space-header"},H=D(()=>s("h1",{class:"title-contact"},"Nous contacter",-1)),J={class:"wrapper-content-contact frameworkX"},K={class:"wrapper-content-form"},U={key:0,class:"pro-picture"},W={key:1,class:"ind-picture"},Z={class:"wrapper-form"},ee={class:"wrapper-map frameworkY"},se={data(){return{pro:!1}},computed:{changeFormPicture(){const e=document.body.classList.contains("hidden");return console.log("document.body",document.body.classList.contains("hidden")),console.log(e),{}}},methods:{ProfessinalForm(e){this.pro=e}}},te=Object.assign(se,{__name:"ContactView",setup(e){return(o,_)=>(t(),a("section",G,[H,s("div",J,[s("div",K,[s("div",{class:i(["wrapper-img-form",o.changeFormPicture])},[this.pro?(t(),a("div",U)):(t(),a("div",W))],2),s("div",Z,[c(Y,{class:"switch-button",onProMode:o.ProfessinalForm},null,8,["onProMode"]),c(v,{name:"transition-form",mode:"out-in",appear:""},{default:f(()=>[this.pro?(t(),p(z,{key:0})):(t(),p(k,{key:1}))]),_:1})])])]),s("div",ee,[c(q)])]))}}),le=l(te,[["__scopeId","data-v-c05615e8"]]);export{le as default};
