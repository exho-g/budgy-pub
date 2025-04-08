import{r as k,z as U,g as V,k as $,o as v,b as e,e as C,u as D,C as Y,t as u,j as q,F as R,l as A,n as F,m as M,p as S,i as I,G as O,f as E,a as T,w as z,d as B,A as J,H as W,_ as G,J as H}from"./index-CucIGbwm.js";import{g as N}from"./useIconGetter-BffgHyQ9.js";import{W as K,f as Q}from"./dateUtils-2uGnRvca.js";import{_ as X}from"./Modal-CaqxKfcH.js";import{_ as P}from"./TextField-C8o01hcG.js";import{_ as Z}from"./SelectField-D-wuqGrB.js";const ee={class:"flex gap-2 justify-between items-center mb-8"},te={class:"text-center"},ae={class:"text-xs font-bold"},ne={key:0,class:"flex justify-center items-center h-32"},le={key:1,class:"text-center text-gray-500 mt-18"},oe={class:"text-center"},se={key:2,class:"list bg-base-100 rounded-box shadow-md dark:bg-gray-800"},ce={class:"flex gap-2 justify-between items-center w-full"},ue={class:"font-bold"},re={key:0,class:"text-warning inline-block ml-1"},ie={class:"items-end flex flex-col justify-center"},de={class:"text-xs text-blue-500"},me={class:"text-xs text-orange-500"},ge={__name:"Transactions",props:["account"],setup(s){const h=s,a=k([]),i=k(!0),x=k(null),f=k(null),c=k([]),w=(n,l=0)=>{const t=new Date;let d,g;if(n.type==="Credit"){const o=n.statementDay||1,m=new Date(t.getFullYear(),t.getMonth()+l,o);t.getDate()>=o?(d=new Date(m.getFullYear(),m.getMonth(),o+1),g=new Date(m.getFullYear(),m.getMonth()+1,o)):(d=new Date(m.getFullYear(),m.getMonth()-1,o+1),g=new Date(m.getFullYear(),m.getMonth(),o))}else{const o=new Date(t.getFullYear(),t.getMonth()+l,1);d=new Date(o.getFullYear(),o.getMonth(),1),g=new Date(o.getFullYear(),o.getMonth()+1,0)}return{startDate:d,endDate:g}},_=async()=>{c.value=await I("categories")},y=async(n=0)=>{if(!h.account)return;i.value=!0;const{startDate:l,endDate:t}=w(h.account,n);x.value=l,f.value=t,a.value=await O(h.account.id,x.value,f.value),a.value=a.value.map(d=>{var o;const g=(o=c.value)==null?void 0:o.find(m=>m.id===d.categoryId);return{...d,category:g}}),i.value=!1};U(()=>h.account,()=>{y()},{immediate:!0}),V(()=>{_(),y()});const b=k(0),p=()=>{b.value-=1,y(b.value)},r=()=>{b.value+=1,y(b.value)};return(n,l)=>(v(),$("div",null,[e("div",ee,[e("button",{class:"btn btn-secondary btn-sm btn-soft btn-circle",onClick:p},[C(D(Y))]),e("div",te,[l[0]||(l[0]=e("h2",{class:"text-secondary font-bold text-lg"},"Transactions",-1)),e("p",ae,u(x.value?x.value.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"")+" - "+u(f.value?f.value.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):""),1)]),e("button",{class:"btn btn-secondary btn-circle btn-soft btn-sm",onClick:r},[C(D(q))])]),i.value?(v(),$("div",ne,l[1]||(l[1]=[e("span",{class:"loading loading-spinner loading-lg"},null,-1)]))):a.value.length===0?(v(),$("div",le,[e("div",oe,[C(D(K),{size:"82",class:"inline-block text-gray-300"})]),l[2]||(l[2]=e("p",{class:"text-balance max-w-10/12 m-auto"}," No transactions found for the current date range. ",-1))])):(v(),$("ul",se,[(v(!0),$(R,null,A(a.value,t=>{var d,g;return v(),$("li",{class:F(["list-row",{"bg-green-50 dark:bg-green-800/30":t.isCCPay}]),key:t.id},[e("div",ce,[e("div",null,[e("p",ue,[e("span",{class:F({"text-green-500":((d=t.category)==null?void 0:d.type)=="Income","text-red-500":((g=t.category)==null?void 0:g.type)=="Expense"})},u(D(S)(t.amount)),3),t.isInstallment?(v(),$("span",re,"("+u(t.installmentPosition+"/"+t.installmentMonths)+" month"+u(t.installmentMonths>1?"s":"")+")",1)):M("",!0)]),e("p",{class:F(["text-xs",{"text-green-500 font-bold":t.isCCPay}])},u(t.label),3)])]),e("div",ie,[e("p",de,u(new Date(t.time).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})),1),e("p",me,u(t.category?`${t.category.name} (${t.category.type})`:""),1)])],2)}),128))]))]))}},ye={class:"mb-4"},be={class:"font-bold text-orange-500"},fe={class:"text-red-700"},ve={class:"text-red-700 text-xs"},he={__name:"Pay",props:{account:{type:Object,default:null}},emits:["refresh"],setup(s,{emit:h}){var y,b,p;const a=s,i=k([]),x=async()=>{i.value=await I("accounts")};V(()=>{x()});const f=h,c=k({time:Q(new Date),amount:parseFloat(((y=a.account)==null?void 0:y.balance)||0).toFixed(2),accountId:"",label:`Pay ${(b=a.account)==null?void 0:b.name}`,categoryId:null,isCCPay:!0,ccId:(p=a.account)==null?void 0:p.id,isInstallment:!1,installmentId:null,installmentMonths:0,installmentPosition:1});U(()=>a.account,r=>{r&&(c.value.amount=parseFloat(r.balance).toFixed(2)||0,c.value.ccId=r.id||null,c.value.label=`Pay ${r.name}`)});const w=E(()=>{var r,n;return[{label:"Out Source / Cash",value:""},...(n=(r=i.value)==null?void 0:r.filter(l=>{var t;return l.id!=((t=a.account)==null?void 0:t.id)}))==null?void 0:n.map(l=>({label:l.name+" / "+l.type+" ( "+S(l.type=="Debit"?l.amount:l.creditLimit-l.balance)+")",value:l.id}))]}),_=async()=>{var l;if(!c.value.amount||c.value.amount<=0){alert("Please enter a valid amount.");return}const r=JSON.parse(JSON.stringify(c.value)),n=await J(r);n.success?((l=document.querySelector("#accounts-pay-modal"))==null||l.close(),f("refresh")):console.error("Failed to save payment:",n.error)};return(r,n)=>(v(),T(X,{id:"accounts-pay-modal",modalTitle:"Pay Balance",isForm:"",submit:_,formButtonLabel:"Pay",closeLabel:"Cancel"},{default:z(()=>{var l,t,d,g;return[e("div",ye,[e("p",be,u((l=s.account)==null?void 0:l.name),1),e("p",fe,[n[4]||(n[4]=e("strong",null,"Balance:",-1)),B(" "+u(D(S)((t=s.account)==null?void 0:t.balance)),1)]),e("p",ve,[n[5]||(n[5]=e("strong",null,"Due Date:",-1)),B(" "+u((()=>{var m;const o=new Date;return o.setDate(((m=s.account)==null?void 0:m.statementDay)||1),o.setDate(o.getDate()+20),o.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})()),1)])]),C(P,{modelValue:c.value.label,"onUpdate:modelValue":n[0]||(n[0]=o=>c.value.label=o),label:"Label",placeholder:"Payment Label",required:""},null,8,["modelValue"]),C(P,{modelValue:c.value.time,"onUpdate:modelValue":n[1]||(n[1]=o=>c.value.time=o),label:"Payment Time",type:"datetime-local",required:""},null,8,["modelValue"]),C(P,{modelValue:c.value.amount,"onUpdate:modelValue":n[2]||(n[2]=o=>c.value.amount=o),modelModifiers:{number:!0},label:"Amount to Pay",type:"number",max:parseFloat((g=(d=s.account)==null?void 0:d.balance)==null?void 0:g.toFixed(2))||0,required:"",min:"1"},null,8,["modelValue","max"]),C(Z,{modelValue:c.value.accountId,"onUpdate:modelValue":n[3]||(n[3]=o=>c.value.accountId=o),options:w.value,label:"Account to Pay",required:""},null,8,["modelValue","options"])]}),_:1}))}},xe={class:"text-2xl text-primary dark:text-teal-400 font-black"},pe=["value"],De={class:"font-bold"},we={class:"font-bold text-red-500 dark:text-red-400"},_e={class:"flex justify-between bg-orange-500/10 -mx-4 mt-2 px-4 py-2 -mb-10 rounded-b-xl"},$e={class:"text-lg font-bold"},ke={class:"text-right"},Ce={class:"text-lg font-bold"},Fe={class:"text-center"},Se=["disabled"],Le={__name:"AmountCard",props:{account:{type:Object,default:null}},emits:["refresh"],setup(s){const h=()=>{var a;(a=document.querySelector("#accounts-pay-modal"))==null||a.showModal()};return(a,i)=>{var x,f,c,w,_,y,b,p,r,n,l,t,d,g,o,m;return v(),$("div",{class:F(["bg-white dark:bg-gray-700 rounded-xl shadow-xl z-[2] relative -mt-10 p-4 mb-12",{"shadow-orange-500/20 dark:shadow-orange-700/10":((x=s.account)==null?void 0:x.type)==="Credit","shadow-secondary/20 dark:shadow-secondary/10":((f=s.account)==null?void 0:f.type)==="Debit"}])},[e("p",null,[e("small",null,u(((c=s.account)==null?void 0:c.type)=="Credit"?"Remaining Credits":"Balance"),1)]),e("p",xe,u(D(S)(((w=s.account)==null?void 0:w.type)=="Credit"?((_=s.account)==null?void 0:_.creditLimit)-((y=s.account)==null?void 0:y.balance):(b=s.account)==null?void 0:b.amount)),1),((p=s.account)==null?void 0:p.type)==="Credit"?(v(),$(R,{key:0},[e("progress",{class:"progress progress-primary dark:bg-teal-500/30 dark:text-teal-200 w-full",value:((r=s.account)==null?void 0:r.balance)/((n=s.account)==null?void 0:n.creditLimit)*100||0,max:"100"},null,8,pe),e("p",De,[e("small",null,"Statement Date: "+u(new Date(new Date().setDate(((l=s.account)==null?void 0:l.statementDay)||1)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})),1)]),e("p",we,[e("small",null,"Due Date: "+u((()=>{var j;const L=new Date;return L.setDate(((j=s.account)==null?void 0:j.statementDay)||1),L.setDate(L.getDate()+20),L.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})})()),1)]),e("div",_e,[e("div",null,[i[1]||(i[1]=e("p",{class:"font-bold"},[e("small",null,"Credit Limit")],-1)),e("p",$e,u(D(S)((t=s.account)==null?void 0:t.creditLimit)),1)]),e("div",ke,[i[2]||(i[2]=e("p",{class:"font-bold"},[e("small",null,"Balance")],-1)),e("p",Ce,u(D(S)((d=s.account)==null?void 0:d.balance)),1)])]),e("div",Fe,[e("button",{disabled:!((g=s.account)!=null&&g.balance),class:F(["btn btn-circle btn-primary bg-linear-to-t from-teal-800 to-teal-500 outline-2 outline-offset-2 outline-primary btn-md text-white font-bold shadow-xl -mb-16 -mt-4 shadow-primary/50",{"grayscale-100":!((o=s.account)!=null&&o.balance)}]),onClick:h}," Pay ",10,Se)])],64)):M("",!0),(m=s.account)!=null&&m.balance?(v(),T(he,{key:1,account:s.account,onRefresh:i[0]||(i[0]=L=>a.$emit("refresh"))},null,8,["account"])):M("",!0)],2)}}},Pe={class:"relative -mx-5 -mt-2 p-5 min-h-48"},Me={class:"relative z-[2] max-w-10/12 h-full"},Ve={class:"w-14 h-12 bg-white dark:bg-gray-800 px-2 py-1 mb-2 rounded-md"},Ie=["src","alt"],Te={class:"text-white text-xl font-black"},je={class:"w-6/12 h-10/12 absolute top-6/12 right-5 -translate-y-6/12 z-[0]"},Be=["src","alt"],Ne={class:"border-2 border-dashed bg-gray-200 border-gray-300 rounded-xl p-2 mb-8 dark:bg-gray-800"},Ue={class:"italic"},Ee=W({__name:"View",setup(s){const h=H(),a=k(null),i=async()=>{a.value=await I("accounts",h.params.id)};return V(()=>{i()}),(x,f)=>(v(),T(G,{pageTitle:(a.value?a.value.type:"")+" Account",isSubNav:"",bg:"bg-gray-100 dark:bg-gray-900"},{default:z(()=>{var c,w,_,y,b,p,r,n;return[e("div",Pe,[e("div",Me,[e("div",Ve,[e("img",{src:D(N)((c=a.value)==null?void 0:c.cardType),alt:(w=a.value)==null?void 0:w.cardType,class:"w-full h-full object-contain"},null,8,Ie)]),e("h2",Te,u(((_=a.value)==null?void 0:_.name)||"Account"),1)]),e("div",{class:F(["w-full h-full bg-linear-to-r absolute top-0 left-0 z-[1]",{"from-secondary to-secondary/50":((y=a.value)==null?void 0:y.type)==="Debit","from-warning to-warning/50":((b=a.value)==null?void 0:b.type)==="Credit","from-gray-500 to-gray-500/50":!a.value}])},null,2),e("div",je,[e("img",{src:D(N)((p=a.value)==null?void 0:p.bank),alt:(r=a.value)==null?void 0:r.bank,class:"w-full h-full object-contain"},null,8,Be)])]),C(Le,{account:a.value,onRefresh:i},null,8,["account"]),e("div",Ne,[f[0]||(f[0]=e("p",{class:"font-bold text-xs"},"Note:",-1)),e("p",Ue,u(((n=a.value)==null?void 0:n.comment)||"--"),1)]),C(ge,{account:a.value},null,8,["account"])]}),_:1},8,["pageTitle"]))}});export{Ee as default};
