"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2488],{4381:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=a(4848),t=a(8453),s=a(1470),l=a(9365);const o={title:"Type Inference"},i="Type Inference",d={id:"schemas/type-inference/index",title:"Type Inference",description:"DynamoDB-Toolbox exposes several generic types to infer custom types from your schemas.",source:"@site/docs/4-schemas/4-type-inference/index.md",sourceDirName:"4-schemas/4-type-inference",slug:"/schemas/type-inference/",permalink:"/docs/schemas/type-inference/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Type Inference"},sidebar:"tutorialSidebar",previous:{title:"Custom Validation",permalink:"/docs/schemas/custom-validation/"},next:{title:"any",permalink:"/docs/schemas/any/"}},c={},u=[{value:"Writes",id:"writes",level:2},{value:"Reads",id:"reads",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"type-inference",children:"Type Inference"})}),"\n",(0,r.jsxs)(n.p,{children:["DynamoDB-Toolbox exposes several generic types to ",(0,r.jsx)(n.strong,{children:"infer custom types"})," from your schemas."]}),"\n",(0,r.jsxs)(n.p,{children:["Which one you should use depends on your usage context, for instance, whether it\u2019s within a ",(0,r.jsx)(n.a,{href:"#writes",children:"write"})," or a ",(0,r.jsx)(n.a,{href:"#reads",children:"read"})," operation."]}),"\n",(0,r.jsx)(n.h2,{id:"writes",children:"Writes"}),"\n",(0,r.jsx)(n.p,{children:"For write operations, DynamoDB-Toolbox exposes the following generic types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ValidValue"}),": A valid schema item"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"InputValue"}),": Similar to ",(0,r.jsx)(n.code,{children:"ValidValue"}),", but with defaulted and linked attributes optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TransformedValue"}),": A valid schema item after transformation"]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:'flowchart LR\n  classDef mmddescription fill:none,stroke:none\n  classDef mmdcontainer fill:#eee4,stroke-width:1px,stroke-dasharray:3,stroke:#ccc,font-weight:bold,font-size:large\n\n  InputValue["<b>InputValue</b>"]\n\n  subgraph Fill[ ]\n    FillDescription["<b>Fill</b>"]:::mmddescription\n    fillDescr(+ defaults<br/>+ links):::mmddescription\n  end\n  Fill:::mmdcontainer\n\n  ValidValue["<b>ValidValue</b>"]\n\n  InputValue.-FillDescription\n  FillDescription.->ValidValue\n\n  subgraph Transform[ ]\n    TransformDescription["<b>Transform</b>"]:::mmddescription\n    transformDescr(+ renaming<br/>+ transforms):::mmddescription\n  end\n  Transform:::mmdcontainer\n\n  TransformedValue["<b>TransformedValue</b>"]\n\n  ValidValue.-TransformDescription\n  TransformDescription.->TransformedValue\n'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type {\n  InputValue,\n  ValidValue,\n  TransformedValue\n} from 'dynamodb-toolbox/schema'\n\ntype Input = InputValue<typeof pokemonSchema>\ntype Valid = ValidValue<typeof pokemonSchema>\ntype Transformed = TransformedValue<typeof pokemonSchema>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, those generics use the ",(0,r.jsx)(n.code,{children:"put"})," write mode, but you can switch to the ",(0,r.jsx)(n.code,{children:"key"})," or ",(0,r.jsx)(n.code,{children:"update"})," modes with the ",(0,r.jsx)(n.code,{children:"mode"})," option. This impacts which the presence and requiredness of attributes:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ValidKey = ValidValue<\n  typeof pokemonSchema,\n  { mode: 'key' }\n>\ntype ValidUpdate = ValidValue<\n  typeof pokemonSchema,\n  { mode: 'update' }\n>\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Example",type:"note",children:[(0,r.jsxs)(n.p,{children:["Here are ",(0,r.jsx)(n.strong,{children:"step-by-step"})," examples:"]}),(0,r.jsxs)(a,{className:"details-in-admonition",children:[(0,r.jsxs)("summary",{children:["\u261d\ufe0f ",(0,r.jsx)("b",{children:"Schema"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const now = () => new Date().toISOString()\n\nconst pokemonSchema = schema({\n  // key attributes\n  pokemonClass: string()\n    .key()\n    .transform(prefix('POKEMON'))\n    .savedAs('partitionKey'),\n  pokemonId: string().key().savedAs('sortKey'),\n\n  // timestamps\n  created: string().default(now),\n  updated: string()\n    .required('always')\n    .putDefault(now)\n    .updateDefault(now),\n\n  // other attributes\n  name: string().optional(),\n  level: number().default(1)\n}).and(prevSchema => ({\n  levelPlusOne: number().link<typeof prevSchema>(\n    ({ level }) => level + 1\n  )\n}))\n"})})]}),(0,r.jsxs)(a,{className:"details-in-admonition",children:[(0,r.jsxs)("summary",{children:["\ud83d\udd0e ",(0,r.jsxs)("b",{children:[(0,r.jsx)("code",{children:"'put'"})," mode"]})]}),(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"input",label:"InputValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n  "name": "Pikachu"\n}\n'})})}),(0,r.jsx)(l.A,{value:"valid",label:"ValidValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n+ "created": "2022-01-01T00:00:00.000Z",\n+ "modified": "2022-01-01T00:00:00.000Z",\n  "name": "Pikachu",\n+ "level": 1,\n+ "levelPlusOne": 2,\n}\n'})})}),(0,r.jsx)(l.A,{value:"transformed",label:"TransformedValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n- "pokemonClass": "pikachu",\n+ "partitionKey": "POKEMON#pikachu",\n- "pokemonId": "123",\n+ "sortKey": "123",\n  "created": "2022-01-01T00:00:00.000Z",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "Pikachu",\n  "level": 1,\n  "levelPlusOne": 2,\n}\n'})})})]})]}),(0,r.jsxs)(a,{className:"details-in-admonition",children:[(0,r.jsxs)("summary",{children:["\ud83d\udd0e ",(0,r.jsxs)("b",{children:[(0,r.jsx)("code",{children:"'key'"})," mode"]})]}),(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"input",label:"InputValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n}\n+ (Only key attributes are required)\n'})})}),(0,r.jsx)(l.A,{value:"valid",label:"ValidValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n}\n'})})}),(0,r.jsx)(l.A,{value:"transformed",label:"TransformedValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n- "pokemonClass": "pikachu",\n+ "partitionKey": "POKEMON#pikachu",\n- "pokemonId": "123",\n+ "sortKey": "123",\n}\n'})})})]})]}),(0,r.jsxs)(a,{className:"details-in-admonition",children:[(0,r.jsxs)("summary",{children:["\ud83d\udd0e ",(0,r.jsxs)("b",{children:[(0,r.jsx)("code",{children:"'update'"})," mode"]})]}),(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"input",label:"InputValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "bulbasaur",\n  "pokemonId": "123",\n  "name": "PlantyDino",\n}\n'})})}),(0,r.jsx)(l.A,{value:"valid",label:"ValidValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "bulbasaur",\n  "pokemonId": "123",\n+ "modified": "2022-01-01T00:00:00.000Z",\n  "name": "PlantyDino",\n}\n'})})}),(0,r.jsx)(l.A,{value:"transformed",label:"TransformedValue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'{\n- "pokemonClass": "bulbasaur",\n+ "partitionKey": "POKEMON#bulbasaur",\n- "pokemonId": "123",\n+ "sortKey": "123",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "PlantyDino",\n}\n'})})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"reads",children:"Reads"}),"\n",(0,r.jsx)(n.p,{children:"For read operations, DynamoDB-Toolbox exposes the following generic types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ReadValue"}),": A valid schema item (differs from ",(0,r.jsx)(n.code,{children:"ValidValue"})," as options are different, see below)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FormattedValue"}),": Similar to ",(0,r.jsx)(n.code,{children:"ReadValue"}),", but with ",(0,r.jsx)(n.code,{children:"hidden"})," attributes omitted"]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:'flowchart RL\n  classDef mmddescription fill:none,stroke:none\n  classDef mmdcontainer fill:#eee4,stroke-width:1px,stroke-dasharray:3,stroke:#ccc,font-weight:bold,font-size:large\n\n  TransformedValue["<b>TransformedValue</b>"]\n\n  subgraph Transform[ ]\n    TransformDescription["<b>Transform</b><br/>(backward)"]:::mmddescription\n    fillDescr("+ renaming<br/>+ transforms<br/>(backward)"):::mmddescription\n  end\n  Transform:::mmdcontainer\n\n  ReadValue["<b>ReadValue</b>"]\n\n  TransformedValue.-TransformDescription\n  TransformDescription.->ReadValue\n\n  subgraph Format[ ]\n    FormatDescription["<b>Format</b>"]:::mmddescription\n    transformDescr(+ omits hidden<br/>attributes):::mmddescription\n  end\n  Format:::mmdcontainer\n\n  FormattedValue["<b>FormattedValue</b>"]\n\n  ReadValue.-FormatDescription\n  FormatDescription.->FormattedValue\n'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import type {\n  ReadValue,\n  FormattedValue\n} from 'dynamodb-toolbox/schema'\n\ntype Read = ReadValue<typeof pokemonSchema>\ntype Formatted = FormattedValue<typeof pokemonSchema>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, those generics return complete items, but you can filter attributes and/or apply ",(0,r.jsx)(n.code,{children:"Partial"})," (deeply) with the ",(0,r.jsx)(n.code,{children:"attributes"})," and ",(0,r.jsx)(n.code,{children:"partial"})," options:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type Filtered = FormattedValue<\n  typeof pokemonSchema,\n  { attributes: 'level' | 'name' | 'deep.attr[0].path' }\n>\ntype Partial = FormattedValue<\n  typeof pokemonSchema,\n  { partial: true }\n>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var r=a(8215);const t={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>v});var r=a(6540),t=a(8215),s=a(3104),l=a(6347),o=a(205),i=a(7485),d=a(1682),c=a(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=h({queryString:a,groupId:t}),[f,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),x=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=a(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(4848);function j(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,a=i.indexOf(n),t=o[a].value;t!==r&&(d(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,t.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function V(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...n,...e}),(0,y.jsx)(g,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,y.jsx)(V,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var r=a(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);