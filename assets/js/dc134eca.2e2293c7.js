"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6369],{8467:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=s(4848),r=s(8453);const o={sidebar_position:5,title:"Projection Expressions"},i="Projection Expressions",a={id:"v0/projection-expressions/index",title:"Projection Expressions",description:"DynamoDB supports Projection Expressions that allow you to selectively return attributes when using the get, query or scan operations.",source:"@site/docs/6-v0/5-projection-expressions/index.md",sourceDirName:"6-v0/5-projection-expressions",slug:"/v0/projection-expressions/",permalink:"/docs/v0/projection-expressions/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Projection Expressions"},sidebar:"tutorialSidebar",previous:{title:"Filters & Conditions",permalink:"/docs/v0/filters-and-conditions/"},next:{title:"Custom Parameters and Clauses",permalink:"/docs/v0/custom-parameters/"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"projection-expressions",children:"Projection Expressions"})}),"\n",(0,n.jsxs)(t.p,{children:["DynamoDB supports ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ProjectionExpressions.html",children:"Projection Expressions"})," that allow you to selectively return attributes when using the ",(0,n.jsx)(t.code,{children:"get"}),", ",(0,n.jsx)(t.code,{children:"query"})," or ",(0,n.jsx)(t.code,{children:"scan"})," operations."]}),"\n",(0,n.jsxs)(t.p,{children:["The DynamoDB Toolbox provides a ",(0,n.jsx)(t.strong,{children:"Projection Builder"})," that allows you to generate ",(0,n.jsx)(t.code,{children:"ProjectionExpression"}),"s that automatically generates ",(0,n.jsx)(t.code,{children:"ExpressionAttributeNames"})," as placeholders to avoid reservered word collisions. The library allows you to work with both table attribute names and Entity aliases to specify projections."]}),"\n",(0,n.jsxs)(t.p,{children:["Read operations that provide an ",(0,n.jsx)(t.code,{children:"attributes"})," property accept an ",(0,n.jsx)(t.code,{children:"array"})," of attribute names and/or objects that specify the Entity as the key with an array of attributes and aliases."]}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve the ",(0,n.jsx)(t.code,{children:"pk"}),",",(0,n.jsx)(t.code,{children:"sk"}),",",(0,n.jsx)(t.code,{children:"name"})," and ",(0,n.jsx)(t.code,{children:"created"})," attributes for all items:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"MyTable.query(\n  // ...,\n  { attributes: ['pk', 'sk', 'name', 'created'] }\n)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve the ",(0,n.jsx)(t.code,{children:"user_id"}),",",(0,n.jsx)(t.code,{children:"status"}),", and ",(0,n.jsx)(t.code,{children:"created"})," attributes for the ",(0,n.jsx)(t.code,{children:"User"})," entity:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"MyTable.query(\n  // ...,\n  {\n    attributes: [{ User: ['user_id', 'status', 'created'] }]\n  }\n)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieve the ",(0,n.jsx)(t.code,{children:"pk"}),", ",(0,n.jsx)(t.code,{children:"sk"}),", and ",(0,n.jsx)(t.code,{children:"type"})," attributes for all items, the ",(0,n.jsx)(t.code,{children:"user_id"})," for the ",(0,n.jsx)(t.code,{children:"User"})," entity, and the ",(0,n.jsx)(t.code,{children:"status"})," and ",(0,n.jsx)(t.code,{children:"created"})," attributes for the the ",(0,n.jsx)(t.code,{children:"Order"})," entity:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"MyTable.query(\n  // ...\n  {\n    attributes: [\n      'pk',\n      'sk',\n      'type',\n      { User: ['user_id'] },\n      { Order: ['status', 'created'] }\n    ]\n  }\n)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When using the ",(0,n.jsx)(t.code,{children:"get"}),' method of an entity, the "entity" is assumed for the attributes. This lets you specify attributes and aliases without needing to use the object reference.']}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE:"})," When specifying entities in ",(0,n.jsx)(t.code,{children:"query"})," and ",(0,n.jsx)(t.code,{children:"scan"})," operations, it's possible that shared attributes will retrieve data for other matching entity types. However, the library attempts to return only the attributes specified for each entity when parsing the response."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);