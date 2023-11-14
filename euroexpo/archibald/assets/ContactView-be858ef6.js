import{_ as V,o as m,c as b,b as s,l,v as d,f as i,m as v,g as $,q,p as I,d as k,a as z,e as D,w as U,T as B,j}from"./index-e5a0a22d.js";const h=t=>(I("data-v-2895be6a"),t=t(),k(),t),M=h(()=>s("h3",{class:"title-form caps"},"Vous êtes particulier.",-1)),N=h(()=>s("p",{class:"text-form"},[i("Vous pensez que votre maison mérite une petite touche de modernité ou une rénovation complète ? Vous avez des idées plein la tête, des images d'un intérieur idéal mais vous ne savez pas comment vous y prendre ? "),s("br"),i(" Alors nous sommes l’agence qu’il vous faut ! "),s("br"),i(" Chez nous, chaque projet est une opportunité unique de créer un espace qui reflète vos envies. "),s("br"),i(" Nous sommes là pour concrétiser vos rêves les plus fous. "),s("br"),i(" Vous souhaitez en savoir plus ? Contactez-nous dès aujourd'hui en remplissant le formulaire ci-dessous pour débuter cette aventure ensemble ! ")],-1)),P={class:"form-content"},T={class:"label-box label-anim first",for:"name"},F={class:"label-box label-anim second",for:"email"},A={class:"label-box label-anim third",for:"phone"},O=h(()=>s("hr",{class:"line-form"},null,-1)),x={class:"wrapper-radio"},R={class:"radio-content"},X=h(()=>s("label",{class:"label-radio",for:"select-1"}," Choice 1 ",-1)),Y=h(()=>s("label",{class:"label-radio",for:"select-2"}," Choice 2 ",-1)),Q=h(()=>s("label",{class:"label-radio",for:"select-3"}," Choice 3 ",-1)),G=h(()=>s("label",{class:"label-radio",for:"select-4"}," Choice 4 ",-1)),H={class:"label-box label-anim first",for:"budget"},J={class:"label-box label-anim second",for:"surface"},K={class:"label-box label-anim third",for:"postal-code"},W={class:"label-box",for:"message"},Z=h(()=>s("div",{id:"success",class:"popup-info middle shadow-1"},"Message envoyé",-1)),ee=h(()=>s("div",{id:"error",class:"popup-info middle shadow-1"},"Veuillez compléter les informations nécessaires.",-1)),se={data(){return{formData:{name:null,email:null,phone:null,select:null,budget:null,surface:null,postal:null,message:null},errors:[]}},computed:{backgroundButton(){return{"background-ind":this.switch}}},methods:{async sendEmail(t,e,a,o,u,r,n,c,p){const f=document.getElementById("form"),_=document.querySelectorAll(".label-radio"),{nameInput:g,emailInput:w,budgetInput:y,surfaceInput:L,postalInput:E,messageInput:S}=this.$refs;if(this.errors=[],this.resetError(g,w,_,y,L,E,S),e||(this.errors.push("Nom"),g.classList.add("error")),a||(this.errors.push("Email"),w.classList.add("error")),u||(this.errors.push("Aucunes selections"),_.forEach(C=>{C.classList.add("error")})),r||(this.errors.push("Email"),y.classList.add("error")),n||(this.errors.push("Email"),L.classList.add("error")),c||(this.errors.push("Email"),E.classList.add("error")),p||(this.errors.push("Message"),S.classList.add("error")),console.log(t," ",e," ",a," ",o," ",u," ",r," ",n," ",c," ",p),this.errors.length===0&&e&&a&&u&&r&&n&&c&&p)try{console.log("Success"),this.showText("success")}catch(C){console.error("Erreur lors de l'envoi.",C.text)}finally{f.reset(),this.formData={name:null,email:null,phone:null,select:null,budget:null,surface:null,postal:null,message:null},this.resetError(g,w,_,y,L,E,S),this.errors=[]}else this.showText("error"),console.error(`Les champs obligatoires sont manquants: ${this.errors.join(", ")}`)},resetError(t,e,a,o,u,r,n){const c=[t,e,o,u,r,n],p=a;c&&c.forEach(f=>{f.classList.remove("error")}),p.forEach(f=>{f.classList.remove("error")})},showText(t){const e=document.getElementById("success"),a=document.getElementById("error");t=="success"?e.classList.add("up"):a.classList.add("up"),setTimeout(()=>{e.classList.remove("up"),a.classList.remove("up")},2500)}}},ae=Object.assign(se,{__name:"FormIndividual",props:{switch:Boolean},setup(t){return(e,a)=>(m(),b("form",{class:"form",id:"form",method:"post",onSubmit:a[11]||(a[11]=q(o=>e.sendEmail("Formulaire Particulier",e.formData.name,e.formData.email,e.formData.phone,e.formData.select,e.formData.budget,e.formData.surface,e.formData.postal,e.formData.message),["prevent"]))},[M,N,s("div",P,[s("label",T,[l(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.formData.name=o),class:"input-box",type:"text",name:"",id:"name",ref:"nameInput",placeholder:"Votre nom"},null,512),[[d,e.formData.name]])]),s("label",F,[l(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.formData.email=o),class:"input-box",type:"email",name:"",id:"email",ref:"emailInput",placeholder:"Votre mail"},null,512),[[d,e.formData.email]])]),s("label",A,[l(s("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>e.formData.phone=o),class:"input-box",type:"tel",name:"",id:"phone",placeholder:"Votre N° de téléphone (facultatif)"},null,512),[[d,e.formData.phone]])]),O,s("div",x,[i(" Votre projet concerne : "),s("div",R,[l(s("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-1",value:"select-1"},null,512),[[v,e.formData.select]]),X,l(s("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-2",value:"select-2"},null,512),[[v,e.formData.select]]),Y,l(s("input",{"onUpdate:modelValue":a[5]||(a[5]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-3",value:"select-3"},null,512),[[v,e.formData.select]]),Q,l(s("input",{"onUpdate:modelValue":a[6]||(a[6]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-4",value:"select-4"},null,512),[[v,e.formData.select]]),G])]),s("label",H,[i(" Quel est votre budget pour ce projet ? (estimation) "),l(s("input",{"onUpdate:modelValue":a[7]||(a[7]=o=>e.formData.budget=o),class:"input-box",type:"number",name:"",id:"budget",ref:"budgetInput",placeholder:"en €"},null,512),[[d,e.formData.budget]])]),s("label",J,[i(" A combien estimez-vous la surface ? "),l(s("input",{"onUpdate:modelValue":a[8]||(a[8]=o=>e.formData.surface=o),class:"input-box",type:"number",name:"",id:"surface",ref:"surfaceInput",placeholder:"en m²"},null,512),[[d,e.formData.surface]])]),s("label",K,[i(" Votre code postale ou la ville du projet. "),l(s("input",{"onUpdate:modelValue":a[9]||(a[9]=o=>e.formData.postal=o),class:"input-box",type:"text",name:"",id:"postal-code",ref:"postalInput"},null,512),[[d,e.formData.postal]])]),s("label",W,[i(" Faites une courte description du projet. "),l(s("textarea",{"onUpdate:modelValue":a[10]||(a[10]=o=>e.formData.message=o),class:"input-box",name:"",id:"message",ref:"messageInput",cols:"30",rows:"10",placeholder:"..."},null,512),[[d,e.formData.message]])]),s("input",{class:$([e.backgroundButton,"input-submit"]),type:"submit",value:"Envoyer"},null,2)]),Z,ee],32))}}),oe=V(ae,[["__scopeId","data-v-2895be6a"]]);const te=s("h3",{class:"title-form caps"},"Vous êtes professionnel.",-1),le=s("p",{class:"text-form"},[i(" Explorons ensemble votre vision et créons ensemble un espace de travail singulier ! "),s("br"),i(" Bienvenue chez Archibald, l'adresse incontournable où vos idées prennent forme. "),s("br"),i(" Notre agence, riche de son expertise, va bien au-delà des conventions du design. "),s("br"),i(" L’objectif : Insuffler une nouvelle vie aux espaces de travail tout en préservant l'identité et les aspirations uniques de chaque entreprise que nous accompagnons "),s("br"),i(" Vous aimeriez nous faire part d’un projet ? "),s("br"),i(" Contactez-nous dès aujourd’hui en remplissant le formulaire ci-dessous afin d’initier cette collaboration. ")],-1),re={class:"form-content"},ie={class:"label-box label-anim first",for:"email"},ne={class:"label-box label-anim second",for:"compagny-name"},ce={class:"label-box label-anim third",for:"name"},de={class:"label-box label-anim fourth",for:"phone"},ue=s("hr",null,null,-1),me={class:"wrapper-radio"},pe={class:"radio-content"},fe=s("label",{class:"label-radio",for:"select-1"}," Choice 1 ",-1),he=s("label",{class:"label-radio",for:"select-2"}," Choice 2 ",-1),ve=s("label",{class:"label-radio",for:"select-3"}," Choice 3 ",-1),be=s("label",{class:"label-radio",for:"select-4"}," Choice 4 ",-1),_e={class:"label-box",for:"message"},ge=s("div",{id:"success",class:"popup-info middle shadow-1"},"Message envoyé",-1),we=s("div",{id:"error",class:"popup-info middle shadow-1"},"Veuillez compléter les informations nécessaires.",-1),ye={data(){return{formData:{email:null,compagny:null,name:null,phone:null,select:null,message:null},errors:[]}},computed:{backgroundButton(){return{"background-pro":!this.switch}}},methods:{async sendEmail(t,e,a,o,u,r,n){const c=document.getElementById("form"),p=document.querySelectorAll(".label-radio"),{emailInput:f,compagnyInput:_,nameInput:g,messageInput:w}=this.$refs;if(this.errors=[],this.resetError(f,_,g,p,w),e||(this.errors.push("Email"),f.classList.add("error")),a||(this.errors.push("Entreprise"),_.classList.add("error")),o||(this.errors.push("Nom"),g.classList.add("error")),r||(this.errors.push("Aucunes selections"),p.forEach(y=>{y.classList.add("error")})),n||(this.errors.push("Message"),w.classList.add("error")),console.log(t," ",e," ",a," ",o," ",u," ",r," ",n),console.log(this.errors),this.errors.length===0&&e&&a&&o&&r&&n)try{console.log("Success"),this.showText("success")}catch(y){console.error("Erreur lors de l'envoi.",y.text)}finally{c.reset(),this.formData={email:null,compagny:null,name:null,phone:null,select:null,message:null},this.resetError(f,_,g,p,w),this.errors=[]}else this.showText("error"),console.error(`Les champs obligatoires sont manquants: ${this.errors.join(", ")}`)},resetError(t,e,a,o,u){const r=[t,e,a,u],n=o;r&&r.forEach(c=>{c.classList.remove("error")}),n.forEach(c=>{c.classList.remove("error")})},showText(t){const e=document.getElementById("success"),a=document.getElementById("error");t=="success"?e.classList.add("up"):a.classList.add("up"),setTimeout(()=>{e.classList.remove("up"),a.classList.remove("up")},2500)}}},De=Object.assign(ye,{__name:"FormProfessional",props:{switch:Boolean},setup(t){return(e,a)=>(m(),b("form",{class:"form",id:"form",method:"post",onSubmit:a[9]||(a[9]=q(o=>e.sendEmail("Formulaire Professionnel",e.formData.email,e.formData.compagny,e.formData.name,e.formData.phone,e.formData.select,e.formData.message),["prevent"]))},[te,le,s("div",re,[s("label",ie,[l(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.formData.email=o),class:"input-box",type:"email",name:"email",id:"email",ref:"emailInput",placeholder:"Votre mail"},null,512),[[d,e.formData.email]])]),s("label",ne,[l(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.formData.compagny=o),class:"input-box",type:"text",name:"compagny-name",id:"compagny-name",ref:"compagnyInput",placeholder:"Nom de l'entreprise"},null,512),[[d,e.formData.compagny]])]),s("label",ce,[l(s("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>e.formData.name=o),class:"input-box",type:"text",name:"name",id:"name",ref:"nameInput",placeholder:"Votre nom"},null,512),[[d,e.formData.name]])]),s("label",de,[l(s("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e.formData.phone=o),class:"input-box",type:"tel",name:"phone",id:"phone",placeholder:"Votre N° de téléphone (facultatif)"},null,512),[[d,e.formData.phone]])]),ue,s("div",me,[i(" Votre projet concerne : "),s("div",pe,[l(s("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-1",value:"select-1"},null,512),[[v,e.formData.select]]),fe,l(s("input",{"onUpdate:modelValue":a[5]||(a[5]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-2",value:"select-2"},null,512),[[v,e.formData.select]]),he,l(s("input",{"onUpdate:modelValue":a[6]||(a[6]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-3",value:"select-3"},null,512),[[v,e.formData.select]]),ve,l(s("input",{"onUpdate:modelValue":a[7]||(a[7]=o=>e.formData.select=o),class:"input-radio",type:"radio",name:"radio",id:"select-4",value:"select-4"},null,512),[[v,e.formData.select]]),be])]),s("label",_e,[i(" Votre message. "),l(s("textarea",{"onUpdate:modelValue":a[8]||(a[8]=o=>e.formData.message=o),class:"input-box",name:"",id:"message",ref:"messageInput",cols:"30",rows:"10",placeholder:"..."},null,512),[[d,e.formData.message]])]),s("input",{class:$([e.backgroundButton,"input-submit"]),type:"submit",value:"Envoyer"},null,2)]),ge,we],32))}});const $e={},Ve={class:"wrapper-coordinate"},Ie=z('<div class="contact-steps" data-v-cdcc44aa><h3 class="title-steps" data-v-cdcc44aa>Voici les points que nous allons aborder pendant notre échange</h3><div class="step step-one" data-v-cdcc44aa><div class="subtitle-steps" data-v-cdcc44aa>Votre project dans sa globalité</div><p data-v-cdcc44aa>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dolor sit. Provident illum voluptatibus corporis. Lorem ipsum dolor sit amet.</p></div><div class="step step-two" data-v-cdcc44aa><div class="subtitle-steps" data-v-cdcc44aa>Votre budget</div><p data-v-cdcc44aa>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dolor sit. Provident illum voluptatibus corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, nam?</p></div><div class="step step-three" data-v-cdcc44aa><div class="subtitle-steps" data-v-cdcc44aa>Le calendrier</div><p data-v-cdcc44aa>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dolor sit. Provident illum voluptatibus corporis.</p></div><div class="step step-four" data-v-cdcc44aa><div class="subtitle-steps" data-v-cdcc44aa>Le déroulé de notre mission</div><p data-v-cdcc44aa>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, dolor sit. Provident illum voluptatibus corporis.</p></div></div><hr class="line" data-v-cdcc44aa><div class="contact-address-content" data-v-cdcc44aa><div class="contact-address" data-v-cdcc44aa>16 rue St Sabin, 75011 Paris</div> - <a class="contact-link" href="mailto:paris@archibald.fr" target="_blank" data-v-cdcc44aa><div class="contact-mail" data-v-cdcc44aa>paris@archibald.fr</div></a></div><p data-v-cdcc44aa>Si vous souhaitez directement nous appeler, cliquez sur le numéro ci-dessous :</p><a class="contact-link" href="tel:+0144545830" data-v-cdcc44aa><div class="contact-phone" data-v-cdcc44aa><b data-v-cdcc44aa>01 44 54 58 30</b></div></a>',5),ke=[Ie];function Le(t,e){return m(),b("section",Ve,ke)}const Ee=V($e,[["render",Le],["__scopeId","data-v-cdcc44aa"]]);const Se={},Ce=t=>(I("data-v-2be6a625"),t=t(),k(),t),Ue={class:"map-content"},Be=Ce(()=>s("iframe",{class:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1374679740215!2d2.369321576464248!3d48.855588971331706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673eca93a6b0f%3A0x91231eacae8ed26b!2s16%20Rue%20St%20Sabin%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1696342959240!5m2!1sfr!2sfr",width:"800",height:"600",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),je=[Be];function qe(t,e){return m(),b("div",Ue,je)}const ze=V(Se,[["render",qe],["__scopeId","data-v-2be6a625"]]);const Me={data(){return{checked:!1}},computed:{ball(){return{"ball-color":this.checked}},individual(){return{"name-color-individual":this.checked}},professional(){return{"name-color-professional":!this.checked}}},methods:{changeMode(){const{switchInput:t}=this.$refs;t.checked?(this.checked=!0,this.$emit("switch-mode",this.checked)):(this.checked=!1,this.$emit("switch-mode",this.checked))}}},Ne=t=>(I("data-v-fc4ccc64"),t=t(),k(),t),Pe={class:"wrapper-switch middle"},Te=Ne(()=>s("div",{class:"text-part all-caps"},[s("p",null,"Vous êtes ?")],-1)),Fe={class:"switch-part"},Ae=["checked"],Oe={for:"type-customer",class:"label"};function xe(t,e,a,o,u,r){return m(),b("div",Pe,[Te,s("div",Fe,[s("span",{class:$(["name-mode",r.professional])},"Professionnel",2),s("input",{class:"checkbox",ref:"switchInput",onChange:e[0]||(e[0]=(...n)=>r.changeMode&&r.changeMode(...n)),type:"checkbox",id:"type-customer",checked:u.checked},null,40,Ae),s("label",Oe,[s("div",{id:"ball",class:$(["ball shadow-1",r.ball])},null,2)]),s("span",{class:$(["name-mode",r.individual])},"Particulier",2)])])}const Re=V(Me,[["render",xe],["__scopeId","data-v-fc4ccc64"]]);const Xe=t=>(I("data-v-48b178cd"),t=t(),k(),t),Ye={class:"wrapper-contact-view middle"},Qe={class:"wrapper-container-contact frameworkX space-header"},Ge={class:"wrapper-content-contact"},He={class:"wrapper-content-form"},Je={class:"wrapper-form"},Ke={class:"wrapper-img-form"},We={key:0,class:"ind-picture"},Ze={key:1,class:"pro-picture"},es=Xe(()=>s("div",{class:"img-block"},null,-1)),ss={class:"wrapper-map frameworkY"},as={data(){return{commit:!1}},methods:{SwitchForms(t){this.commit=t}}},os=Object.assign(as,{__name:"ContactView",setup(t){return(e,a)=>(m(),b("section",Ye,[s("div",Qe,[s("div",Ge,[s("div",He,[s("div",Je,[D(Re,{class:"switch-button",onSwitchMode:e.SwitchForms},null,8,["onSwitchMode"]),D(B,{name:"transition-form",mode:"out-in",appear:""},{default:U(()=>[e.commit?(m(),j(oe,{key:0,switch:e.commit},null,8,["switch"])):(m(),j(De,{key:1,switch:e.commit},null,8,["switch"]))]),_:1})])])]),D(B,{name:"transition-page",appear:""},{default:U(()=>[s("div",Ke,[D(B,{name:"transition-img-form",mode:"out-in"},{default:U(()=>[e.commit?(m(),b("div",We)):(m(),b("div",Ze))]),_:1}),es])]),_:1})]),D(Ee,{class:"frameworkX frameworkY middle"}),s("div",ss,[D(ze)])]))}}),ls=V(os,[["__scopeId","data-v-48b178cd"]]);export{ls as default};
