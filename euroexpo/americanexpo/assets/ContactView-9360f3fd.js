import{_ as b,o as d,c as p,a as s,b as i,p as g,d as v,n as f,w as u,v as c,e as L,f as U,g as m,h as B,i as G,T as Z,F as ee,j as M,t as C,u as te,k as se,l as ae,S as q}from"./index-657cd605.js";const w={_origin:"https://api.emailjs.com"},oe=(t,e="https://api.emailjs.com")=>{w._userID=t,w._origin=e},P=(t,e,a)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class O{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const A=(t,e,a={})=>new Promise((o,r)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:n})=>{const h=new O(n);h.status===200||h.text==="OK"?o(h):r(h)}),l.addEventListener("error",({target:n})=>{r(new O(n))}),l.open("POST",w._origin+t,!0),Object.keys(a).forEach(n=>{l.setRequestHeader(n,a[n])}),l.send(e)}),ne=(t,e,a,o)=>{const r=o||w._userID;return P(r,t,e),A("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:r,service_id:t,template_id:e,template_params:a}),{"Content-type":"application/json"})},ie=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},le=(t,e,a,o)=>{const r=o||w._userID,l=ie(a);P(r,t,e);const n=new FormData(l);return n.append("lib_version","3.11.0"),n.append("service_id",t),n.append("template_id",e),n.append("user_id",r),A("/api/v1.0/email/send-form",n)},Y={init:oe,send:ne,sendForm:le};const re={},j=t=>(g("data-v-caa644e8"),t=t(),v(),t),de={class:"container-add form-grid"},ue={class:"content-selection label-configuration"},ce=j(()=>s("span",{class:"title-selection"},"Stand configuration:",-1)),pe={class:"label-selection",for:"shed"},me={class:"label-selection",for:"height-partition"},he={class:"label-selection",for:"technical-floor"},be={class:"label-selection",for:"suspended-sign"},fe={class:"label-selection",for:"meeting-space"},ge={class:"label-selection",for:"ark"},ve={class:"content-selection label-space"},_e=j(()=>s("span",{class:"title-selection"},"Stand space:",-1)),ye={class:"label-selection",for:"reception-desk"},$e={class:"label-selection",for:"product-presentation"},De={class:"label-selection",for:"standard-tables-chairs"},Ie={class:"label-selection",for:"high-tables-chairs"},ke={class:"label-selection",for:"meeting-isolated"},we={class:"label-selection",for:"bar"},xe={class:"content-selection label-accessory"},Se=j(()=>s("span",{class:"title-selection"},"Accessory:",-1)),Te={class:"label-selection",for:"model"},Ee={class:"label-selection",for:"lino"},Le={class:"label-selection",for:"parquet"},Ce={class:"label-selection",for:"tv"},Ve={class:"label-selection",for:"touch-tv-pc"},Fe={class:"label-selection",for:"beverages"};function Me(t,e){return d(),p("div",de,[s("div",ue,[ce,s("label",pe,[s("input",{onInput:e[0]||(e[0]=a=>t.$emit("emitData","shed",!0)),class:"input-selection",type:"checkbox",name:"shed",id:"shed",value:"X"},null,32),i(" a shed ")]),s("label",me,[s("input",{onInput:e[1]||(e[1]=a=>t.$emit("emitData","partition",!0)),class:"input-selection",type:"checkbox",name:"height_partition",id:"height-partition",value:"X"},null,32),i(" height of partition ")]),s("label",he,[s("input",{onInput:e[2]||(e[2]=a=>t.$emit("emitData","floor",!0)),class:"input-selection",type:"checkbox",name:"technical_floor",id:"technical-floor",value:"X"},null,32),i(" technical floor ")]),s("label",be,[s("input",{onInput:e[3]||(e[3]=a=>t.$emit("emitData","sign",!0)),class:"input-selection",type:"checkbox",name:"suspended_sign",id:"suspended-sign",value:"X"},null,32),i(" tall suspended sign ")]),s("label",fe,[s("input",{onInput:e[4]||(e[4]=a=>t.$emit("emitData","meeting",!0)),class:"input-selection",type:"checkbox",name:"meeting_space",id:"meeting-space",value:"X"},null,32),i(" meeting space ")]),s("label",ge,[s("input",{onInput:e[5]||(e[5]=a=>t.$emit("emitData","ark",!0)),class:"input-selection",type:"checkbox",name:"ark",id:"ark",value:"X"},null,32),i(" ark ")])]),s("div",ve,[_e,s("label",ye,[s("input",{onInput:e[6]||(e[6]=a=>t.$emit("emitData","desk",!0)),class:"input-selection",type:"checkbox",name:"reception_desk",id:"reception-desk",value:"X"},null,32),i(" reception desk ")]),s("label",$e,[s("input",{onInput:e[7]||(e[7]=a=>t.$emit("emitData","product",!0)),class:"input-selection",type:"checkbox",name:"product_presentation",id:"product-presentation",value:"X"},null,32),i(" product presentation ")]),s("label",De,[s("input",{onInput:e[8]||(e[8]=a=>t.$emit("emitData","standard",!0)),class:"input-selection",type:"checkbox",name:"standard_tables_chairs",id:"standard-tables-chairs",value:"X"},null,32),i(" standard tables and chairs ")]),s("label",Ie,[s("input",{onInput:e[9]||(e[9]=a=>t.$emit("emitData","high",!0)),class:"input-selection",type:"checkbox",name:"high_tables_chairs",id:"high-tables-chairs",value:"X"},null,32),i(" high tables and chairs ")]),s("label",ke,[s("input",{onInput:e[10]||(e[10]=a=>t.$emit("emitData","isolated",!0)),class:"input-selection",type:"checkbox",name:"meeting_isolated",id:"meeting-isolated",value:"X"},null,32),i(" isolated meeting space ")]),s("label",we,[s("input",{onInput:e[11]||(e[11]=a=>t.$emit("emitData","bar",!0)),class:"input-selection",type:"checkbox",name:"bar",id:"bar",value:"X"},null,32),i(" bar ")])]),s("div",xe,[Se,s("label",Te,[s("input",{onInput:e[12]||(e[12]=a=>t.$emit("emitData","model",!0)),class:"input-selection",type:"checkbox",name:"model",id:"model",value:"X"},null,32),i(" model ")]),s("label",Ee,[s("input",{onInput:e[13]||(e[13]=a=>t.$emit("emitData","lino",!0)),class:"input-selection",type:"checkbox",name:"lino",id:"lino",value:"X"},null,32),i(" lino ")]),s("label",Le,[s("input",{onInput:e[14]||(e[14]=a=>t.$emit("emitData","parquet",!0)),class:"input-selection",type:"checkbox",name:"parquet",id:"parquet",value:"X"},null,32),i(" parquet floor ")]),s("label",Ce,[s("input",{onInput:e[15]||(e[15]=a=>t.$emit("emitData","tv",!0)),class:"input-selection",type:"checkbox",name:"tv",id:"tv",value:"X"},null,32),i(" TV ")]),s("label",Ve,[s("input",{onInput:e[16]||(e[16]=a=>t.$emit("emitData","touch",!0)),class:"input-selection",type:"checkbox",name:"touch_tv_pc",id:"touch-tv-pc",value:"X"},null,32),i(" touch TV + PC ")]),s("label",Fe,[s("input",{onInput:e[17]||(e[17]=a=>t.$emit("emitData","beverages",!0)),class:"input-selection",type:"checkbox",name:"beverages",id:"beverages",value:"X"},null,32),i(" fridge, coffee machine, drinks ")])])])}const qe=b(re,[["render",Me],["__scopeId","data-v-caa644e8"]]);const H=t=>(g("data-v-7a9a1b07"),t=t(),v(),t),Ue=H(()=>s("h3",{class:"label-title"},[i("More informations about your stand "),s("em",{class:"title-puce"},"(optional)")],-1)),je={type:"checkbox",id:"appear-container-add",ref:"addContainer"},Xe=H(()=>s("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"},null,-1)),Ne=[Xe],Oe={key:0,class:"label-box label-compagny label-anim-left first",for:"compagny"},Be={key:1,class:"label-box label-area label-anim-left second",for:"area"},Pe={key:2,class:"label-box label-budget label-anim-left third",for:"budget"},Ae={data(){return{checked:!1,compagny:null,area:null,budget:null}},methods:{addPlus(){const{addContainer:t}=this.$refs;t.checked?this.checked=!0:this.checked=!1},handleEmitDataSub(t,e){t&&e&&this.$emit("emitData",t,e)}}},Ye=Object.assign(Ae,{__name:"SuppplementForm",setup(t){return(e,a)=>(d(),p("div",{class:f(["supplement-content form-grid",{"open-supplement":e.checked}])},[Ue,s("label",{class:f(["appear-container-add button-add middle",{active:e.checked}]),for:"appear-container-add",onChange:a[0]||(a[0]=(...o)=>e.addPlus&&e.addPlus(...o))},[s("input",je,null,512),(d(),p("svg",{class:f([{across:e.checked},"icon-add"]),xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},Ne,2))],34),e.checked?(d(),p("label",Oe,[u(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.compagny=o),onInput:a[2]||(a[2]=o=>e.$emit("emitData","compagny",this.compagny)),class:"input-box",type:"text",name:"compagny",id:"compagny",ref:"compagnyInput",placeholder:"Your compagny"},null,544),[[c,e.compagny]])])):L("",!0),e.checked?(d(),p("label",Be,[u(s("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e.area=o),onInput:a[4]||(a[4]=o=>e.$emit("emitData","area",this.area)),class:"input-box",type:"number",name:"area",id:"area",min:"0",ref:"areaInput",placeholder:"Stand area (m²)"},null,544),[[c,e.area]])])):L("",!0),e.checked?(d(),p("label",Pe,[u(s("input",{"onUpdate:modelValue":a[5]||(a[5]=o=>e.budget=o),onInput:a[6]||(a[6]=o=>e.$emit("emitData","budget",this.budget)),class:"input-box",type:"number",name:"budget",id:"budget",min:"0",ref:"budgetInput",placeholder:"Your budget (in $)"},null,544),[[c,e.budget]])])):L("",!0),e.checked?(d(),U(qe,{key:3,class:"container-add",onEmitData:e.handleEmitDataSub,ref:"supsub"},null,8,["onEmitData"])):L("",!0)],2))}}),He=b(Ye,[["__scopeId","data-v-7a9a1b07"]]);const z=t=>(g("data-v-0e2aa2cd"),t=t(),v(),t),ze=z(()=>s("input",{class:"type-form",type:"text",name:"type",value:"BUSINESS CUSTOMER"},null,-1)),Re={class:"label-box label-email label-anim-left first",for:"email"},We={class:"label-box label-phone label-anim-down sixth",for:"phone"},Ke={class:"label-box label-name label-anim-right fifth",for:"name"},Je={class:"label-box label-exhibition-name label-anim-left second",for:"exhibition-name"},Qe={class:"label-box label-exhibition-date label-anim-up third",for:"exhibition-date"},Ge={class:"label-box label-city label-anim-right fourth",for:"city"},Ze={class:"label-box label-message",for:"message"},et=z(()=>s("input",{class:"input-submit input-box button appear",type:"submit",value:"Send"},null,-1)),tt={data(){return{formData:{email:null,phone:null,name:null,exhibitionName:null,exhibitionDate:null,city:null,message:null,compagny:null,area:null,budget:null,options:{shed:null,partition:null,floor:null,sign:null,meeting:null,ark:null,desk:null,product:null,standard:null,high:null,isolated:null,bar:null,model:null,lino:null,parquet:null,tv:null,touch:null,beverages:null}},errors:[]}},methods:{handleEmitData(t,e){const a=["compagny","area","budget"],o=["shed","partition","floor","sign","meeting","ark","desk","product","standard","high","isolated","bar","model","lino","parquet","tv","touch","beverages"];a.includes(t)&&(this.formData[t]=e),o.includes(t)&&(this.formData.options[t]=e)},async sendEmail(t,e,a,o,r,l,n,h,x,S,T,E){const y=document.getElementById("form"),{emailInput:$,nameInput:D,exhibitionNameInput:I,exhibitionDateInput:k,cityInput:V,messageInput:F}=this.$refs,W="service_kj8g0gs",K="template_28mphha",J="qH3WgmDhYRov4CSQq";if(this.errors=[],this.resetError($,D,I,k,V,F),e||(this.errors.push("Email"),$.classList.add("error")),o||(this.errors.push("Name"),D.classList.add("error")),r||(this.errors.push("Exhibition Name"),I.classList.add("error")),l||(this.errors.push("Exihibition Date"),k.classList.add("error")),n||(this.errors.push("City"),V.classList.add("error")),h||(this.errors.push("Message"),F.classList.add("error")),this.errors.length===0&&e&&o&&r&&l&&n&&h)try{await Y.sendForm(W,K,"#form",J),console.log("Success"),this.showText("success")}catch(Q){console.error("Erreur lors de l'envoi.",Q.text)}finally{y.reset(),this.formData={email:null,phone:null,name:null,exhibitionName:null,exhibitionDate:null,city:null,message:null,compagny:null,area:null,budget:null},this.resetError($,D,I,k,V,F),this.errors=[]}else this.showText("error"),console.error(`Les champs obligatoires sont manquants: ${this.errors.join(", ")}`)},resetError(t,e,a,o,r,l){const n=[t,e,a,o,r,l];n&&n.forEach(h=>{h.classList.remove("error")})},showText(t){const e=document.getElementById("success"),a=document.getElementById("error");t=="success"?e.classList.add("up","priority-plus"):a.classList.add("up","priority-plus"),setTimeout(()=>{e.classList.remove("up","priority-plus"),a.classList.remove("up","priority-plus")},2500)}}},st=Object.assign(tt,{__name:"FormProfessional",setup(t){return(e,a)=>(d(),p("form",{class:"form form-professional form-grid",id:"form",method:"post",onSubmit:a[7]||(a[7]=B(o=>e.sendEmail("Business customer",e.formData.email,e.formData.phone,e.formData.name,e.formData.exhibitionName,e.formData.exhibitionDate,e.formData.city,e.formData.message,e.formData.compagny,e.formData.area,e.formData.budget,e.formData.options),["prevent"]))},[ze,s("label",Re,[u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.formData.email=o),class:"input-box",type:"email",name:"email",id:"email",ref:"emailInput",placeholder:"Your mail *"},null,512),[[c,e.formData.email]])]),s("label",We,[u(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.formData.phone=o),class:"input-box",type:"tel",name:"phone",id:"phone",placeholder:"Your phone number"},null,512),[[c,e.formData.phone]])]),s("label",Ke,[u(s("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>e.formData.name=o),class:"input-box",type:"text",name:"name",id:"name",ref:"nameInput",placeholder:"Your name *"},null,512),[[c,e.formData.name]])]),s("label",Je,[u(s("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e.formData.exhibitionName=o),class:"input-box",type:"text",name:"exhibition_name",id:"exhibition-name",ref:"exhibitionNameInput",placeholder:"Exhibition name *"},null,512),[[c,e.formData.exhibitionName]])]),s("label",Qe,[u(s("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>e.formData.exhibitionDate=o),class:"input-box",type:"date",name:"exhibition_date",id:"exhibition-date",ref:"exhibitionDateInput"},null,512),[[c,e.formData.exhibitionDate]])]),s("label",Ge,[u(s("input",{"onUpdate:modelValue":a[5]||(a[5]=o=>e.formData.city=o),class:"input-box",type:"text",name:"city",id:"city",ref:"cityInput",placeholder:"City *"},null,512),[[c,e.formData.city]])]),s("label",Ze,[u(s("textarea",{"onUpdate:modelValue":a[6]||(a[6]=o=>e.formData.message=o),class:"input-box",name:"message",id:"message",ref:"messageInput",cols:"30",rows:"10",placeholder:"Your message *"},null,512),[[c,e.formData.message]])]),m(He,{class:"supplement",onEmitData:e.handleEmitData,ref:"sup"},null,8,["onEmitData"]),et],32))}}),at=b(st,[["__scopeId","data-v-0e2aa2cd"]]);const R=t=>(g("data-v-49aa7ff4"),t=t(),v(),t),ot=R(()=>s("input",{class:"type-form",type:"text",name:"type",value:"INDIVIDUAL CUSTOMER"},null,-1)),nt={class:"label-box label-email label-anim-left first",for:"email"},it={class:"label-box label-phone label-anim-up fifth",for:"phone"},lt={class:"label-box label-name label-anim-right fourth",for:"name"},rt={class:"label-box label-date label-anim-left second",for:"date"},dt={class:"label-box label-city label-anim-right third",for:"city"},ut={class:"label-box label-message",for:"message"},ct=R(()=>s("input",{class:"input-submit input-box button appear",type:"submit",value:"Send"},null,-1)),pt={data(){return{formData:{email:null,phone:null,name:null,date:null,city:null,message:null},errors:[]}},methods:{async sendEmail(t,e,a,o,r,l,n){const h=document.getElementById("form"),{emailInput:x,nameInput:S,dateInput:T,cityInput:E,messageInput:y}=this.$refs,$="service_kj8g0gs",D="template_28mphha",I="qH3WgmDhYRov4CSQq";if(this.errors=[],this.resetError(x,S,T,E,y),e||(this.errors.push("Email"),x.classList.add("error")),o||(this.errors.push("Name"),S.classList.add("error")),r||(this.errors.push("Date"),T.classList.add("error")),l||(this.errors.push("City"),E.classList.add("error")),n||(this.errors.push("Message"),y.classList.add("error")),this.errors.length===0&&e&&o&&r&&l&&n)try{await Y.sendForm($,D,"#form",I),console.log("Success"),this.showText("success")}catch(k){console.error("Erreur lors de l'envoi.",k.text)}finally{h.reset(),this.formData={email:null,phone:null,name:null,date:null,city:null,message:null},this.resetError(x,S,T,E,y),this.errors=[]}else this.showText("error"),console.error(`Les champs obligatoires sont manquants: ${this.errors.join(", ")}`)},resetError(t,e,a,o,r){const l=[t,e,a,o,r];l&&l.forEach(n=>{n.classList.remove("error")})},showText(t){const e=document.getElementById("success"),a=document.getElementById("error");t=="success"?e.classList.add("up","priority-plus"):a.classList.add("up","priority-plus"),setTimeout(()=>{e.classList.remove("up","priority-plus"),a.classList.remove("up","priority-plus")},2500)}}},mt=Object.assign(pt,{__name:"FormIndividual",setup(t){return(e,a)=>(d(),p("form",{class:"form form-individual form-grid",id:"form",method:"post",onSubmit:a[6]||(a[6]=B(o=>e.sendEmail("Individual customer",e.formData.email,e.formData.phone,e.formData.name,e.formData.date,e.formData.city,e.formData.message),["prevent"]))},[ot,s("label",nt,[u(s("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>e.formData.email=o),class:"input-box",type:"email",name:"email",id:"email",ref:"emailInput",placeholder:"Your mail *"},null,512),[[c,e.formData.email]])]),s("label",it,[u(s("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>e.formData.phone=o),class:"input-box",type:"tel",name:"phone",id:"phone",placeholder:"Your phone number"},null,512),[[c,e.formData.phone]])]),s("label",lt,[u(s("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>e.formData.name=o),class:"input-box",type:"text",name:"name",id:"name",ref:"nameInput",placeholder:"Your name *"},null,512),[[c,e.formData.name]])]),s("label",rt,[u(s("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>e.formData.date=o),class:"input-box",type:"date",name:"date",id:"date",ref:"dateInput"},null,512),[[c,e.formData.date]])]),s("label",dt,[u(s("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>e.formData.city=o),class:"input-box",type:"text",name:"city",id:"city",ref:"cityInput",placeholder:"City *"},null,512),[[c,e.formData.city]])]),s("label",ut,[u(s("textarea",{"onUpdate:modelValue":a[5]||(a[5]=o=>e.formData.message=o),class:"input-box",name:"message",id:"message",ref:"messageInput",cols:"30",rows:"10",placeholder:"Your message *"},null,512),[[c,e.formData.message]])]),ct],32))}}),ht=b(mt,[["__scopeId","data-v-49aa7ff4"]]);const X=t=>(g("data-v-65791a75"),t=t(),v(),t),bt=["checked"],ft={for:"type-customer",class:"label block-icon priority move-right color-light"},gt={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"icon-ind",viewBox:"0 0 16 16"},vt=X(()=>s("path",{d:"M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"},null,-1)),_t=[vt],yt={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"icon-pro",viewBox:"0 0 16 16"},$t=X(()=>s("path",{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"},null,-1)),Dt=X(()=>s("path",{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"},null,-1)),It=[$t,Dt],kt={class:"switch-ball"},wt={data(){return{checked:!1}},mounted(){document.querySelectorAll(".block-text").forEach(t=>{M(t)})},computed:{ball(){return{"ball-move":this.checked}},individual(){return{block:this.checked,"move-right":this.checked}},professional(){return{block:!this.checked,"move-right":!this.checked}}},methods:{changeMode(){const{switchInput:t,switchTextPro:e,switchTextInd:a}=this.$refs;t.checked?(this.checked=!0,M(a),this.$emit("switch-mode",this.checked)):(this.checked=!1,M(e),this.$emit("switch-mode",this.checked))}}},xt=Object.assign(wt,{__name:"SwitchForm",emits:["switch-mode"],setup(t){return(e,a)=>(d(),p(ee,null,[s("input",{class:"checkbox",ref:"switchInput",onChange:a[0]||(a[0]=(...o)=>e.changeMode&&e.changeMode(...o)),type:"checkbox",id:"type-customer",checked:e.checked},null,40,bt),s("label",{for:"type-customer",class:f(["label block-text move-right priority color-light",e.individual]),ref:"switchTextInd"}," Individual ",2),s("label",{for:"type-customer",class:f(["label block-text move-right priority color-light",e.professional]),ref:"switchTextPro"}," Professional ",2),s("label",ft,[m(Z,{name:"transition-icon",mode:"out-in"},{default:G(()=>[e.checked?(d(),p("svg",gt,_t)):(d(),p("svg",yt,It))]),_:1}),s("div",kt,[s("div",{id:"ball",class:f(["ball",e.ball])},null,2)])])],64))}}),St=b(xt,[["__scopeId","data-v-65791a75"]]);const N=t=>(g("data-v-7385c204"),t=t(),v(),t),Tt={class:"wrapper-contact middle"},Et=N(()=>s("h2",{class:"title-contact"},[s("div",{class:"title-important move-half-left"},"Contact"),i(" Us ")],-1)),Lt=N(()=>s("div",{id:"success",class:"popup-info middle"},"Sent",-1)),Ct=N(()=>s("div",{id:"error",class:"popup-info middle"},"Please fill in the necessary information.",-1)),Vt={data(){return{commit:!1}},methods:{actived(t){this.commit=t}},computed:{themeColor(){return{"theme-pro":!this.commit,"theme-ind":this.commit}}}},Ft=Object.assign(Vt,{__name:"Contact",setup(t){return(e,a)=>(d(),p("section",{class:f(["contact framework-x",e.themeColor])},[m(St,{onSwitchMode:e.actived},null,8,["onSwitchMode"]),s("div",Tt,[Et,e.commit?(d(),U(ht,{key:0})):(d(),U(at,{key:1}))]),Lt,Ct],2))}}),Mt=b(Ft,[["__scopeId","data-v-7385c204"]]);const qt=t=>(g("data-v-2e6e08e9"),t=t(),v(),t),Ut={class:"step-card"},jt={class:"title-step",ref:"titleCard"},Xt={class:"step-number"},Nt=qt(()=>s("hr",{class:"line-step line-between"},null,-1)),Ot={class:"text-step"},Bt={class:"text-step"},Pt={class:"wrapper-icon-card middle"},At=["src","alt"],Yt={beforeMount(){window.addEventListener("scroll",this.eventActive)},methods:{eventActive(){const{titleCard:t}=this.$refs;t&&ae(t,()=>{t.style.opacity="1",window.removeEventListener("scroll",this.eventActive)},100)}}},Ht=Object.assign(Yt,{__name:"Card",props:{title:String,number:String,firstText:String,secondText:String,file:String,ext:String,alt:String},setup(t){return(e,a)=>(d(),p("div",Ut,[s("h4",jt,[s("span",Xt,C(t.number),1),i(C(t.title),1)],512),Nt,s("p",Ot,C(t.firstText),1),s("p",Bt,C(t.secondText),1),s("div",Pt,[s("img",{class:"icon-card",src:te(se)("img/icons",t.file,t.ext),width:"75",height:"75",alt:"Icon of step "+t.alt},null,8,At)])]))}}),_=b(Ht,[["__scopeId","data-v-2e6e08e9"]]);const zt={class:"step wrapper-step framework-x"},Rt={__name:"Step",setup(t){return(e,a)=>(d(),p("section",zt,[m(_,{title:"Initial consultation",number:"1",firstText:"During our initial consultation, we carefully listen to your ideas, goals, and requirements.",secondText:"This conversation allows us to understand your expectations and lay the foundations for our collaboration.",file:"communicate",ext:"png",alt:"one"}),m(_,{title:"In-depth analysis",number:"2",firstText:"Our team conducts a thorough analysis of your specific needs, considering your industry, target audience, and aspirations for the event.",secondText:"This step serves as the groundwork for a perfectly tailored design.",file:"research",ext:"png",alt:"two"}),m(_,{title:"Custom proposal",number:"3",firstText:"We craft a customized proposal that includes visual concepts, detailed plans, material suggestions, and a transparent budget estimate.",secondText:"This proposal is adjusted based on your feedback until it precisely reflects your vision.",file:"draw",ext:"png",alt:"three"}),m(_,{title:"Validation & confirmation",number:"4",firstText:"Once the proposal meets your approval, we proceed with the final validation.",secondText:"This step marks the beginning of bringing your stand to life.",file:"valid",ext:"png",alt:"four"}),m(_,{title:"Expert implementation",number:"5",firstText:"Our experts meticulously implement every detail.",secondText:"From fabrication to installation, we ensure constant monitoring to guarantee that your stand comes to life in accordance with your expectations.",file:"expert",ext:"png",alt:"five"}),m(_,{title:"Delivery & guaranteed satisfaction",number:"6",firstText:"We ensure timely delivery and flawless installation at the event site.",secondText:"Your satisfaction is our priority, and we remain at your disposal for any necessary adjustments.",file:"delivery-time",ext:"png",alt:"six"})]))}},Wt=b(Rt,[["__scopeId","data-v-c45b6ed7"]]),Kt={class:"container-wrapper"},Qt={__name:"ContactView",setup(t){return(e,a)=>(d(),p("div",Kt,[m(q),m(Mt,{id:"contact-us"}),m(q),m(Wt,{id:"process"}),m(q)]))}};export{Qt as default};