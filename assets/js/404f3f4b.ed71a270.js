"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2096],{9322:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),n=t(8453);const o={title:"prefix",sidebar_custom_props:{code:!0}},i="Prefix",a={id:"schemas/transformers/prefix",title:"prefix",description:"Prefixes a string attribute value:",source:"@site/docs/4-schemas/17-transformers/2-prefix.md",sourceDirName:"4-schemas/17-transformers",slug:"/schemas/transformers/prefix",permalink:"/docs/schemas/transformers/prefix",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"prefix",sidebar_custom_props:{code:!0}},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/schemas/transformers/usage"},next:{title:"\ud83d\udca5 Error management",permalink:"/docs/error-management/"}},c={},d=[];function m(e){const r={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"prefix",children:"Prefix"})}),"\n",(0,s.jsx)(r.p,{children:"Prefixes a string attribute value:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { prefix } from 'dynamodb-toolbox/transformers/prefix'\n\nconst prefixedSchema = string().transform(prefix('PREFIX'))\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The default delimiter is ",(0,s.jsx)(r.code,{children:"#"}),", but you can override it:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import { prefix } from 'dynamodb-toolbox/transformers/prefix'\n\nconst prefixedSchema = string().transform(\n  prefix('PREFIX', { delimiter: '.' })\n)\n"})})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var s=t(6540);const n={},o=s.createContext(n);function i(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);