"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3237],{9754:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(5742),n=l(9960),r=l(7294),c=l(3750),m=l(9583),o=l(2585),s=l(5434),i=l(454);const x=[{id:"docs",label:r.createElement("div",{className:"flex items-center gap-2"},r.createElement(s.L8c,{className:"text-lg"})," Docs"),to:"./docs/getting-started/overview"},{id:"github",label:r.createElement("div",{className:"flex items-center gap-2"},r.createElement(m.hJX,{className:"text-lg"})," GitHub"),to:"https://github.com/dynamodb-toolbox/dynamodb-toolbox"},{id:"sponsor",label:r.createElement("div",{className:"flex items-center gap-2"},r.createElement(m.$0H,{className:"text-lg"})," Sponsor"),to:"https://github.com/sponsors/ThomasAribart"},{id:"contact",label:r.createElement("div",{className:"flex items-center gap-2"},r.createElement(i.CdM,{className:"text-lg"})," Contact"),to:"mailto:thomas.aribart@gmail.com"}],p=[{label:"Contact",to:"mailto:thomas.aribart@gmail.com"},{label:"@ThomasAribart",to:"https://x.com/aribartt"},{label:"@JeremyDaly",to:"https://x.com/jeremy_daly"},{label:"@TheHecticByte",to:"https://x.com/TheHecticByte"},{label:"Off-by-none (newsletter)",to:"https://offbynone.io/"}],d=()=>r.createElement(r.Fragment,null,r.createElement(a.Z,null,r.createElement("title",null,"DynamoDB-Toolbox | Lightweight and type-safe query builder for DynamoDB"),r.createElement("meta",{name:"description",content:"TODO."})),r.createElement("div",{className:"flex flex-col gap-12 md:gap-16"},r.createElement("div",{className:"flex flex-wrap py-2 px-4 items-center justify-center text-sm max-w-screen-xl mx-auto md:text-base md:self-end"},x.map((e=>{let{id:t,label:l,to:a}=e;const c=r.createElement("div",{className:"p-2 opacity-90 hover:opacity-100"},l);return r.createElement("div",{key:t,className:"hover:underline"},a.startsWith("http")||a.startsWith("mailto")?r.createElement("a",{href:a},c):r.createElement(n.Z,{to:a},c))}))),r.createElement("div",{className:"flex flex-col items-center gap-12 text-center px-4"},r.createElement("div",{className:"flex gap-2 lg:gap-4 items-center"},r.createElement("div",{className:"w-[40px] md:w-[60px] lg:w-[100px]"},r.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"120 205 1332 1027",enableBackground:"new 120 205 1332 1027"},r.createElement("title",null,"DynamoDB Toolbox"),r.createElement("g",{id:"Layer_1","data-name":"Layer 1"},r.createElement("rect",{x:"564.51",y:"375.11",width:"146.15",height:"828.26",fill:"#1a476f"}),r.createElement("path",{d:"M999.56,209.72H579.34a37.56,37.56,0,0,0-37.55,37.56V365.76H596.7V271.07A12.33,12.33,0,0,1,609,258.75H973.66a13,13,0,0,1,13,12.95v94.06h50.51V247.28A37.56,37.56,0,0,0,999.56,209.72Z",fill:"#1a476f"}),r.createElement("path",{d:"M596.58,445.71H231.77l-4.7,3.32L127.67,648V660.3l461-.15",fill:"#5294cf"}),r.createElement("path",{d:"M596.58,1134.21l-360.76,2-8.75-6.08L127.67,931.4V918.89l461,.16",fill:"#1f5b98"}),r.createElement("path",{d:"M618,931.05H127.67V648.16H618",fill:"#2d72b8"}),r.createElement("path",{d:"M606.32,344.89l-1.5,6.72-8.94,96,.7,1.43-8,199.11V931.05l8,199.12H444.74l.12.21-.45-.21L398.27,931.05V648.14L444.41,449l38.91-73.2h-25l-3.38-30.94-6.25,3.2-70,98,1,3-61.7,199.11V931.05l61.7,199.12H227.07l122,104.13H455.6l-.58-.8,3.28-30.13h25.53l16.56,30.93h106l-.08-.8.44-30.13h44.5",fill:"#1a476f"}),r.createElement("polyline",{points:"444.55 448.43 444.41 449.03 596.58 449.03 624.73 344.89 499.88 344.89 444.55 448.43",fill:"#2d72b8"}),r.createElement("polyline",{points:"380.2 448.43 454.92 344.89 349.09 344.89 227.07 449.03 379.61 449.03 379.81 448.43 380.2 448.43",fill:"#2d72b8"}),r.createElement("polygon",{points:"859.68 1234.3 687.63 1234.3 677.06 1130.39 859.68 1130.39 859.68 1234.3",fill:"#1a476f"}),r.createElement("polygon",{points:"617.97 1234.72 546.68 1234.72 541.67 1190.17 629.16 1181.68 617.97 1234.72",fill:"#1a476f"}),r.createElement("polygon",{points:"859.68 449.03 677.06 449.14 670.41 648.16 859.68 648.16 859.68 449.03",fill:"#5294cf"}),r.createElement("path",{d:"M859.68,931.05H670.41V648.16H859.68",fill:"#2d72b8"}),r.createElement("polygon",{points:"859.68 344.89 686.68 344.89 677.06 449.14 859.68 449.03 859.68 344.89",fill:"#2d72b8"}),r.createElement("polygon",{points:"859.68 1130.39 677.06 1130.39 670.41 931.05 859.68 931.05 859.68 1130.39",fill:"#1f5b98"}),r.createElement("rect",{x:"868.19",y:"374.93",width:"146.15",height:"828.26",transform:"translate(1882.19 1578.53) rotate(-179.98)",fill:"#1a476f"}),r.createElement("path",{d:"M990.28,660l461,.34V648l-99.32-199-4.7-3.31-364.81-.15",fill:"#5294cf"}),r.createElement("path",{d:"M990.17,918.89l460.95,0v12.51l-99.49,198.73-8.75,6.08-360.76-2.2",fill:"#1f5b98"}),r.createElement("path",{d:"M960.94,648l490.3.21-.12,282.89-490.3-.21",fill:"#2d72b8"}),r.createElement("path",{d:"M927.42,1203.19l44.49,0,.43,30.12-.08.81,106,0,16.57-30.93h25.53l3.27,30.13-.58.8,106.54,0,122-104.08-152.53-.06L1260.88,931,1261,648.1,1199.39,449l1-3-70-98-6.24-3.21-3.4,30.94h-25l38.88,73.21,46.05,199.14L1180.51,931l-46.22,199.1-.44.21.11-.21L982.12,1130l8-199.11L990.29,648l-7.88-199.12.71-1.43-8.91-96-1.49-6.72",fill:"#1a476f"}),r.createElement("polyline",{points:"1134.44 448.33 1079.15 344.77 954.31 344.72 982.41 448.87 1134.58 448.93 1134.44 448.33",fill:"#2d72b8"}),r.createElement("polyline",{points:"1198.79 448.36 1199.18 448.36 1199.39 448.96 1351.92 449.02 1229.95 344.84 1124.12 344.79 1198.79 448.36",fill:"#2d72b8"}),r.createElement("polygon",{points:"718.97 1234.03 891.03 1234.11 901.64 1130.2 719.02 1130.12 718.97 1234.03",fill:"#1a476f"}),r.createElement("polygon",{points:"960.69 1234.56 1031.97 1234.59 1037 1190.03 949.52 1181.51 960.69 1234.56",fill:"#1a476f"}),r.createElement("polygon",{points:"719.31 448.75 901.93 448.95 908.5 647.97 719.22 647.89 719.31 448.75",fill:"#5294cf"}),r.createElement("path",{d:"M719.22,647.89,908.5,648l-.12,282.89-189.28-.08",fill:"#2d72b8"}),r.createElement("polygon",{points:"719.35 344.62 892.35 344.69 901.93 448.95 719.31 448.75 719.35 344.62",fill:"#2d72b8"}),r.createElement("polygon",{points:"719.02 1130.12 901.64 1130.2 908.38 930.86 719.1 930.78 719.02 1130.12",fill:"#1f5b98"}),r.createElement("rect",{x:"127.79",y:"783.52",width:"1323.45",height:"4.7",fill:"#1a476f"}),r.createElement("path",{d:"M757.13,720l65.94.08a24.6,24.6,0,0,1,24.56,23.87l2.66,90a24.61,24.61,0,0,1-24.6,25.33l-68.64,0a24.61,24.61,0,0,1-24.59-24.61l0-90A24.61,24.61,0,0,1,757.13,720Z",fill:"#5294cf"}),r.createElement("circle",{cx:"791.45",cy:"766.23",r:"19.64",fill:"#1a476f"}),r.createElement("polygon",{points:"811.09 830.63 771.81 830.63 786.14 774.66 796.6 774.66 811.09 830.63",fill:"#1a476f"})))),r.createElement("h1",{className:"inline-block font-black text-4xl md:text-6xl lg:text-7xl"},r.createElement("span",{className:"inline-block text-transparent bg-clip-text bg-gradient-to-l bg-color-gradient"},"DynamoDB Toolbox"))),r.createElement("h2",{className:"font-light text-2xl max-w-md md:text-3xl lg:text-5xl lg:max-w-2xl"},r.createElement("b",{className:"text-transparent bg-clip-text bg-gradient-to-l bg-color-gradient"},"Lightweight")," ","and"," ",r.createElement("b",{className:"text-transparent bg-clip-text bg-gradient-to-r bg-color-gradient"},"type-safe")," ",r.createElement("span",{className:"text-underlined font-large"},"query builder")," ","for"," ",r.createElement("b",{className:"text-transparent bg-clip-text bg-gradient-to-r bg-color-gradient"},"DynamoDB")),r.createElement("div",{className:"flex flex-col items-center gap-3 text-center px-4"},r.createElement("p",{className:"text text-balance opacity-90 max-w-[500px] lg:text-xl lg:max-w-[600px]"},"For those who love"," ",r.createElement("a",{href:"https://aws.amazon.com/dynamodb/"},"DynamoDB")," ","but find the Document Client not that comfy \ud83d\udecb\ufe0f"),r.createElement("p",{className:"text opacity-90 max-w-[500px] lg:text-xl lg:max-w-[600px]"},r.createElement("b",null,"...we've got your back!")),r.createElement(n.Z,{to:"./docs/getting-started/overview",className:"py-2 px-4 bg-gradient-to-r bg-color-gradient rounded text-white uppercase font-extrabold"},"\ud83d\udc49 Get Started"))),r.createElement("div",{className:"flex flex-col items-center text-center"},r.createElement("div",null,r.createElement("p",{className:"text text-balance opacity-90 max-w-[500px] lg:text-xl lg:max-w-[600px]"},"DynamoDB-Toolbox is a light abstraction layer over the Document Client that"," ",r.createElement("b",null,"turns your DynamoDB journey into a \u2728 bliss \u2728"))),r.createElement("div",{className:"text-lg flex flex-col gap-12 p-8 max-w-[1200px] mx-auto md:flex-row"},r.createElement("div",{className:"flex-1 flex flex-col gap-8 items-center max-w-[400px]"},r.createElement(c.OvN,{className:"text-primary-light text-6xl"}),r.createElement("div",{className:"flex flex-col gap-1 text-center"},r.createElement("h3",{className:"uppercase text-xl font-black"},"Developer friendly"),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"DynamoDB-Toolbox does all the"," ",r.createElement("b",null,"heavy-lifting of crafting those complex DynamoDB")," ","requests for you. It makes your code"," ",r.createElement("b",null,"clearer"),", more ",r.createElement("b",null,"consise")," and"," ",r.createElement("b",null,"maintainable"),"."),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"Also, we absolutely LOVE TypeScript! If you do too, you're in the right place: We"," ",r.createElement("b",null,"push type-safety to the limit")," in everything we do \ud83d\ude42"))),r.createElement("div",{className:"flex-1 flex flex-col gap-8 items-center max-w-[400px]"},r.createElement(o.UtZ,{className:"text-primary-light text-6xl"}),r.createElement("div",{className:"flex flex-col gap-1 text-center"},r.createElement("h3",{className:"uppercase text-center text-xl font-black"},"Reliable"),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"At each interaction with DynamoDB, pushed and fetched items are validated against"," ",r.createElement("b",null,"schemas you define"),", guaranteeing the"," ",r.createElement("b",null,"consistency")," of your data and the"," ",r.createElement("b",null,"reliability")," of your code."),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"DynamoDB-Toolbox exposes rich schema syntax that supports a broad range of edge cases like ",r.createElement("b",null,"defaults"),", ",r.createElement("b",null,"composition"),","," ",r.createElement("b",null,"transformations")," and"," ",r.createElement("b",null,"polymorphism"),"."))),r.createElement("div",{className:"flex-1 flex flex-col gap-8 items-center max-w-[400px]"},r.createElement(o.MGj,{className:"text-primary-light text-6xl"}),r.createElement("div",{className:"flex flex-col gap-1 text-center"},r.createElement("h3",{className:"uppercase text-center text-xl font-black"},"Lightweight"),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"DynamoDB-Toolbox was designed with Serverless in mind. We believe that"," ",r.createElement("b",null,"bundle sizes matter"),"."),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"That's why we made our core features"," ",r.createElement("b",null,"ultra-lightweight"),", while keeping the rest ",r.createElement("i",null,"opt-in")," and ",r.createElement("b",null,"tree-shakable"),"."),r.createElement("p",{className:"text-sm dark:text-gray-200 leading-6"},"Our motto is simple:"," ",r.createElement("b",null,"Ship only what you use"),".")))))),r.createElement("div",{className:"navbar navbar--dark flex flex-col items-start justify-center py-10 text-sm shadow-xl shadow-black/10"},r.createElement("div",{className:"full-width"},r.createElement("div",{className:"flex justify-around md:justify-center gap-3"},p.map((e=>r.createElement("div",{key:e.to,className:"text-center"},e.to.startsWith("http")?r.createElement("a",{href:e.to,target:"_blank",rel:"noreferrer"},e.label):r.createElement(n.Z,{to:e.to},e.label))))),r.createElement("div",{className:"text-center opacity-20 mt-2"},"\xa9 ",(new Date).getFullYear()," DynamoDB-Toolbox"))))}}]);