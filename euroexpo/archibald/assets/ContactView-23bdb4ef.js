import{_ as I,o as f,c as y,b as s,k as l,v as d,i as c,l as b,f as D,m as j,p as V,a as E,e as $,w as B,T as C,h as M}from"./index-7eb84329.js";const h=a=>(V("data-v-903eec3d"),a=a(),E(),a),T=h(()=>s("h3",{class:"title-form caps"},"Vous êtes particulier.",-1)),z=h(()=>s("p",{class:"text-form"},[c("Vous avez un projet de construction de maison neuve, vous venez d’acquérir un bâtiment ancien et tout en gardant son cachet, vous le voulez whaou ! La maison est trop petite, un peu vieillotte, une extension/rénovation vous semble donc indispensable. "),s("br"),c(" Alors nous sommes votre agence, car ces 3 compétences sont dans notre cœur de métier. Aussi, vous allez adorer passer l’année avec nous. Oui, car choisir un architecte est non seulement une histoire de talents, mais aussi d’humain, de compréhension, d’échanges, de compromis et notre but est de vous emmener dans une maison que vous ne pourrez plus quitter. ")],-1)),F={class:"form-content"},A={class:"label-box label-anim first",for:"name"},N={class:"label-box label-anim second",for:"email"},q={class:"label-box label-anim third",for:"phone"},P=h(()=>s("hr",{class:"line-form"},null,-1)),O={class:"wrapper-radio"},R={class:"radio-content"},x=h(()=>s("label",{class:"label-radio",for:"select-1"}," Choice 1 ",-1)),Q=h(()=>s("label",{class:"label-radio",for:"select-2"}," Choice 2 ",-1)),X=h(()=>s("label",{class:"label-radio",for:"select-3"}," Choice 3 ",-1)),Y=h(()=>s("label",{class:"label-radio",for:"select-4"}," Choice 4 ",-1)),G={class:"label-box label-anim first",for:"budget"},H={class:"label-box label-anim second",for:"surface"},J={class:"label-box label-anim third",for:"postal-code"},K={class:"label-box",for:"message"},W=h(()=>s("div",{id:"success",class:"popup-info shadow-1"},"Message envoye",-1)),Z=h(()=>s("div",{id:"error",class:"popup-info shadow-1"},"Veuillez compléter les informations nécessaires.",-1)),ee={data(){return{formData:{name:null,email:null,phone:null,select:null,budget:null,surface:null,postal:null,message:null},errors:[]}},computed:{backgroundButton(){return{"background-ind":this.switch}}},methods:{async sendEmail(a,e,o,t,u,r,n,i,m){const p=document.getElementById("form"),v=document.querySelectorAll(".label-radio"),{nameInput:_,emailInput:g,budgetInput:w,surfaceInput:k,postalInput:L,messageInput:S}=this.$refs;if(this.errors=[],this.resetError(_,g,v,w,k,L,S),e||(this.errors.push("Nom"),_.classList.add("error")),o||(this.errors.push("Email"),g.classList.add("error")),u||(this.errors.push("Aucunes selections"),v.forEach(U=>{U.classList.add("error")})),r||(this.errors.push("Email"),w.classList.add("error")),n||(this.errors.push("Email"),k.classList.add("error")),i||(this.errors.push("Email"),L.classList.add("error")),m||(this.errors.push("Message"),S.classList.add("error")),console.log(a," ",e," ",o," ",t," ",u," ",r," ",n," ",i," ",m),this.errors.length===0&&e&&o&&u&&r&&n&&i&&m)try{console.log("Success"),this.showText("success")}catch(U){console.error("Erreur lors de l'envoi.",U.text)}finally{p.reset(),this.formData={name:null,email:null,phone:null,select:null,budget:null,surface:null,postal:null,message:null},this.resetError(_,g,v,w,k,L,S),this.errors=[]}else this.showText("error"),console.error(`Les champs obligatoires sont manquants: ${this.errors.join(", ")}`)},resetError(a,e,o,t,u,r,n){const i=[a,e,t,u,r,n],m=o;i&&i.forEach(p=>{p.classList.remove("error")}),m.forEach(p=>{p.classList.remove("error")})},showText(a){const e=document.getElementById("success"),o=document.getElementById("error");a=="success"?e.classList.add("up"):o.classList.add("up"),setTimeout(()=>{e.classList.remove("up"),o.classList.remove("up")},2500)}}},se=Object.assign(ee,{__name:"FormIndividual",props:{switch:Boolean},setup(a){return(e,o)=>(f(),y("form",{class:"form",id:"form",method:"post",onSubmit:o[11]||(o[11]=j(t=>e.sendEmail("Formulaire Particulier",e.formData.name,e.formData.email,e.formData.phone,e.formData.select,e.formData.budget,e.formData.surface,e.formData.postal,e.formData.message),["prevent"]))},[T,z,s("div",F,[s("label",A,[l(s("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.formData.name=t),class:"input-box",type:"text",name:"",id:"name",ref:"nameInput",placeholder:"Votre nom"},null,512),[[d,e.formData.name]])]),s("label",N,[l(s("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>e.formData.email=t),class:"input-box",type:"email",name:"",id:"email",ref:"emailInput",placeholder:"Votre mail"},null,512),[[d,e.formData.email]])]),s("label",q,[l(s("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>e.formData.phone=t),class:"input-box",type:"tel",name:"",id:"phone",placeholder:"Votre N° de téléphone (facultatif)"},null,512),[[d,e.formData.phone]])]),P,s("div",O,[c(" Votre projet concerne : "),s("div",R,[l(s("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-1",value:"select-1"},null,512),[[b,e.formData.select]]),x,l(s("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-2",value:"select-2"},null,512),[[b,e.formData.select]]),Q,l(s("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-3",value:"select-3"},null,512),[[b,e.formData.select]]),X,l(s("input",{"onUpdate:modelValue":o[6]||(o[6]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-4",value:"select-4"},null,512),[[b,e.formData.select]]),Y])]),s("label",G,[c(" Quel est votre budget pour ce projet ? (estimation) "),l(s("input",{"onUpdate:modelValue":o[7]||(o[7]=t=>e.formData.budget=t),class:"input-box",type:"number",name:"",id:"budget",ref:"budgetInput",placeholder:"en €"},null,512),[[d,e.formData.budget]])]),s("label",H,[c(" A combien estimez-vous la surface ? "),l(s("input",{"onUpdate:modelValue":o[8]||(o[8]=t=>e.formData.surface=t),class:"input-box",type:"number",name:"",id:"surface",ref:"surfaceInput",placeholder:"en m²"},null,512),[[d,e.formData.surface]])]),s("label",J,[c(" Votre code postale ou la ville du projet. "),l(s("input",{"onUpdate:modelValue":o[9]||(o[9]=t=>e.formData.postal=t),class:"input-box",type:"text",name:"",id:"postal-code",ref:"postalInput"},null,512),[[d,e.formData.postal]])]),s("label",K,[c(" Faites une courte description du projet. "),l(s("textarea",{"onUpdate:modelValue":o[10]||(o[10]=t=>e.formData.message=t),class:"input-box",name:"",id:"message",ref:"messageInput",cols:"30",rows:"10",placeholder:"..."},null,512),[[d,e.formData.message]])]),s("input",{class:D([e.backgroundButton,"input-submit"]),type:"submit",value:"Envoyer"},null,2)]),W,Z],32))}}),oe=I(se,[["__scopeId","data-v-903eec3d"]]);const te=s("h3",{class:"title-form caps"},"Vous êtes professionnel.",-1),ae=s("p",{class:"text-form"},[c("C’est avec cette même énergie que nous vous proposerons de collaborer sur vos projets en se calibrant sur vos exigences tout en vous faisant profiter de notre créativité. "),s("br"),c(" Avant de monter notre agence, nous avons bien évidemment travaillés dans d’autres structures exclusivement dédiées aux professionnels de la construction. "),s("br"),c(" Collectifs, ERP, bureaux, artisanal ou de l’industriel n’ont vraiment plus de secret. ")],-1),le={class:"form-content"},re={class:"label-box label-anim first",for:"email"},ne={class:"label-box label-anim second",for:"compagny-name"},ie={class:"label-box label-anim third",for:"name"},de={class:"label-box label-anim fourth",for:"phone"},ce=s("hr",null,null,-1),ue={class:"wrapper-radio"},me={class:"radio-content"},pe=s("label",{class:"label-radio",for:"select-1"}," Choice 1 ",-1),fe=s("label",{class:"label-radio",for:"select-2"}," Choice 2 ",-1),he=s("label",{class:"label-radio",for:"select-3"}," Choice 3 ",-1),be=s("label",{class:"label-radio",for:"select-4"}," Choice 4 ",-1),ve={class:"label-box",for:"message"},_e=s("div",{id:"success",class:"popup-info shadow-1"},"Message envoye",-1),ge=s("div",{id:"error",class:"popup-info shadow-1"},"Veuillez compléter les informations nécessaires.",-1),we={data(){return{formData:{email:null,compagny:null,name:null,phone:null,select:null,message:null},errors:[]}},computed:{backgroundButton(){return{"background-pro":!this.switch}}},methods:{async sendEmail(a,e,o,t,u,r,n){const i=document.getElementById("form"),m=document.querySelectorAll(".label-radio"),{emailInput:p,compagnyInput:v,nameInput:_,messageInput:g}=this.$refs;if(this.errors=[],this.resetError(p,v,_,m,g),e||(this.errors.push("Email"),p.classList.add("error")),o||(this.errors.push("Entreprise"),v.classList.add("error")),t||(this.errors.push("Nom"),_.classList.add("error")),r||(this.errors.push("Aucunes selections"),m.forEach(w=>{w.classList.add("error")})),n||(this.errors.push("Message"),g.classList.add("error")),console.log(a," ",e," ",o," ",t," ",u," ",r," ",n),this.errors.length===0&&e&&o&&t&&r&&n)try{console.log("Success"),this.showText("success")}catch(w){console.error("Erreur lors de l'envoi.",w.text)}finally{i.reset(),this.formData={email:null,compagny:null,name:null,phone:null,select:null,message:null},this.resetError(p,v,_,m,g),this.errors=[]}else this.showText("error"),console.error(`Les champs obligatoires sont manquants: ${this.errors.join(", ")}`)},resetError(a,e,o,t,u){const r=[a,e,o,u],n=t;r&&r.forEach(i=>{i.classList.remove("error")}),n.forEach(i=>{i.classList.remove("error")})},showText(a){const e=document.getElementById("success"),o=document.getElementById("error");a=="success"?e.classList.add("up"):o.classList.add("up"),setTimeout(()=>{e.classList.remove("up"),o.classList.remove("up")},2500)}}},ye=Object.assign(we,{__name:"FormProfessional",props:{switch:Boolean},setup(a){return(e,o)=>(f(),y("form",{class:"form",id:"form",method:"post",onSubmit:o[9]||(o[9]=j(t=>e.sendEmail("Formulaire Professionnel",e.formData.email,e.formData.compagny,e.formData.name,e.formData.phone,e.formData.select,e.formData.message),["prevent"]))},[te,ae,s("div",le,[s("label",re,[l(s("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.formData.email=t),class:"input-box",type:"email",name:"email",id:"email",ref:"emailInput",placeholder:"Votre mail"},null,512),[[d,e.formData.email]])]),s("label",ne,[l(s("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>e.formData.compagny=t),class:"input-box",type:"text",name:"compagny-name",id:"compagny-name",ref:"compagnyInput",placeholder:"Nom de l'entreprise"},null,512),[[d,e.formData.compagny]])]),s("label",ie,[l(s("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>e.formData.name=t),class:"input-box",type:"text",name:"name",id:"name",ref:"nameInput",placeholder:"Votre nom"},null,512),[[d,e.formData.name]])]),s("label",de,[l(s("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.formData.phone=t),class:"input-box",type:"tel",name:"phone",id:"phone",placeholder:"Votre N° de téléphone (facultatif)"},null,512),[[d,e.formData.phone]])]),ce,s("div",ue,[c(" Votre projet concerne : "),s("div",me,[l(s("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-1",value:"select-1"},null,512),[[b,e.formData.select]]),pe,l(s("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-2",value:"select-2"},null,512),[[b,e.formData.select]]),fe,l(s("input",{"onUpdate:modelValue":o[6]||(o[6]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-3",value:"select-3"},null,512),[[b,e.formData.select]]),he,l(s("input",{"onUpdate:modelValue":o[7]||(o[7]=t=>e.formData.select=t),class:"input-radio",type:"radio",name:"radio",id:"select-4",value:"select-4"},null,512),[[b,e.formData.select]]),be])]),s("label",ve,[c(" Votre message. "),l(s("textarea",{"onUpdate:modelValue":o[8]||(o[8]=t=>e.formData.message=t),class:"input-box",name:"",id:"message",ref:"messageInput",cols:"30",rows:"10",placeholder:"..."},null,512),[[d,e.formData.message]])]),s("input",{class:D([e.backgroundButton,"input-submit"]),type:"submit",value:"Envoyer"},null,2)]),_e,ge],32))}});const De={},$e=a=>(V("data-v-33ba8297"),a=a(),E(),a),Ie={class:"map-content"},Ve=$e(()=>s("iframe",{class:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1374679740215!2d2.369321576464248!3d48.855588971331706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673eca93a6b0f%3A0x91231eacae8ed26b!2s16%20Rue%20St%20Sabin%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1696342959240!5m2!1sfr!2sfr",width:"800",height:"600",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)),Ee=[Ve];function ke(a,e){return f(),y("div",Ie,Ee)}const Le=I(De,[["render",ke],["__scopeId","data-v-33ba8297"]]);const Se={data(){return{checked:!1}},computed:{ball(){return{"ball-color":this.checked}},individual(){return{"name-color-individual":this.checked}},professional(){return{"name-color-professional":!this.checked}}},methods:{changeMode(){const{switchInput:a}=this.$refs;a.checked?(this.checked=!0,this.$emit("switch-mode",this.checked)):(this.checked=!1,this.$emit("switch-mode",this.checked))}}},Ue=a=>(V("data-v-fdf3c160"),a=a(),E(),a),Be={class:"wrapper-switch"},Ce=Ue(()=>s("div",{class:"text-part"},[s("p",null,"Vous êtes ?")],-1)),Me={class:"switch-part"},je=["checked"],Te={for:"type-customer",class:"label"};function ze(a,e,o,t,u,r){return f(),y("div",Be,[Ce,s("div",Me,[s("span",{class:D(["name-mode",r.professional])},"Professionnel",2),s("input",{class:"checkbox",ref:"switchInput",onChange:e[0]||(e[0]=(...n)=>r.changeMode&&r.changeMode(...n)),type:"checkbox",id:"type-customer",checked:u.checked},null,40,je),s("label",Te,[s("div",{id:"ball",class:D(["ball shadow-1",r.ball])},null,2)]),s("span",{class:D(["name-mode",r.individual])},"Particulier",2)])])}const Fe=I(Se,[["render",ze],["__scopeId","data-v-fdf3c160"]]);const Ae=a=>(V("data-v-37707c6c"),a=a(),E(),a),Ne={class:"wrapper-contact-view middle"},qe={class:"wrapper-container-contact frameworkX space-header"},Pe={class:"wrapper-content-contact"},Oe=Ae(()=>s("h1",{class:"title-contact"},"Nous contacter",-1)),Re={class:"wrapper-content-form"},xe={class:"wrapper-form"},Qe={class:"wrapper-img-form"},Xe={key:0,class:"ind-picture"},Ye={key:1,class:"pro-picture"},Ge={class:"wrapper-map frameworkY"},He={data(){return{commit:!1}},methods:{SwitchForms(a){this.commit=a}}},Je=Object.assign(He,{__name:"ContactView",setup(a){return(e,o)=>(f(),y("section",Ne,[s("div",qe,[s("div",Pe,[Oe,s("div",Re,[s("div",xe,[$(Fe,{class:"switch-button",onSwitchMode:e.SwitchForms},null,8,["onSwitchMode"]),$(C,{name:"transition-form",mode:"out-in",appear:""},{default:B(()=>[e.commit?(f(),M(oe,{key:0,switch:e.commit},null,8,["switch"])):(f(),M(ye,{key:1,switch:e.commit},null,8,["switch"]))]),_:1})])])]),s("div",Qe,[$(C,{name:"transition-img-form",mode:"out-in",appear:""},{default:B(()=>[e.commit?(f(),y("div",Xe)):(f(),y("div",Ye))]),_:1})])]),s("div",Ge,[$(Le)])]))}}),We=I(Je,[["__scopeId","data-v-37707c6c"]]);export{We as default};
