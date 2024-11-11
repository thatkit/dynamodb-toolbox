"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5850],{9625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(4848),a=n(8453),s=n(1470),o=n(9365);const i={title:"Format",sidebar_custom_props:{sidebarActionType:"util"}},l="EntityFormatter",d={id:"entities/actions/format/index",title:"Format",description:"Given a saved item, validates that it respects the schema of the Entity, applies transformations backward and hide hidden attributes:",source:"@site/docs/3-entities/4-actions/20-format/index.md",sourceDirName:"3-entities/4-actions/20-format",slug:"/entities/actions/format/",permalink:"/docs/entities/actions/format/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Format",sidebar_custom_props:{sidebarActionType:"util"}},sidebar:"tutorialSidebar",previous:{title:"ParsePaths",permalink:"/docs/entities/actions/parse-paths/"},next:{title:"Spy",permalink:"/docs/entities/actions/spy/"}},c={},u=[{value:"Methods",id:"methods",level:2},{value:"<code>format(...)</code>",id:"format",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"entityformatter",children:"EntityFormatter"})}),"\n",(0,r.jsxs)(t.p,{children:["Given a saved item, validates that it respects the schema of the ",(0,r.jsx)(t.code,{children:"Entity"}),", applies transformations backward and hide hidden attributes:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { EntityFormatter } from 'dynamodb-toolbox/entity/actions/format'\n\nconst formattedPikachu =\n  PokemonEntity.build(EntityFormatter).format(savedPikachu)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In DynamoDB-Toolbox, formatting is done in ",(0,r.jsx)(t.strong,{children:"2 steps"}),":"]}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart RL\n  classDef mmddescription fill:none,stroke:none,font-style:italic\n  classDef mmdcontainer fill:#eee4,stroke-width:1px,stroke-dasharray:3,stroke:#ccc,font-weight:bold,font-size:large\n  classDef mmdspace fill:none,stroke:none,color:#0000\n\n  transformed(Transformed')\n  transformed:::mmddescription\n\n  subgraph Transforming\n    space1( ):::mmdspace\n\n    transform(<b>Transforms</b> backward)\n    transformDescr(...<b>renames</b> and<br/><b>transforms</b> back.):::mmddescription\n  end\n\n  transformed .-> transform\n\n  Transforming:::mmdcontainer\n\n  subgraph Formatting\n    space2( ):::mmdspace\n\n    format(<b>Formats</b> the item)\n    formatDescr(...<b>omits</b> hidden attributes.):::mmddescription\n\n    transform----\x3eformat\n  end\n\n  Formatting:::mmdcontainer\n\n  formatted(Formatted')\n  formatted:::mmddescription\n\n  format .-> formatted"}),"\n",(0,r.jsx)(t.p,{children:"Note that:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Additional and ",(0,r.jsx)(t.code,{children:"hidden"})," fields are omitted, but inputs are not mutated"]}),"\n",(0,r.jsx)(t.li,{children:"The formatting throws an error if the saved item is invalid"}),"\n",(0,r.jsxs)(t.li,{children:["Transformations (i.e. ",(0,r.jsx)(t.code,{children:"savedAs"})," and ",(0,r.jsx)(t.code,{children:"transforms"}),") are applied backward"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This action is mostly a ",(0,r.jsxs)(t.strong,{children:["wrapper around the schema ",(0,r.jsx)(t.a,{href:"/docs/schemas/actions/format",children:(0,r.jsx)(t.code,{children:"Formatter"})})," action"]}),", so we highly recommend you read its dedicated documentation first."]})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"format",children:(0,r.jsx)(t.code,{children:"format(...)"})}),"\n",(0,r.jsx)("p",{style:{marginTop:"-15px"},children:(0,r.jsx)("i",{children:(0,r.jsx)("code",{children:"(savedItem: unknown, options?: FormatItemOptions) => FormattedItem<ENTITY>"})})}),"\n",(0,r.jsx)(t.p,{children:"Formats a saved item:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const formattedItem = PokemonEntity.build(EntityFormatter).format(savedItem)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can provide ",(0,r.jsx)(t.strong,{children:"formatting options"})," as a second argument. Available options:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Default"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"transform"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"true"})}),(0,r.jsxs)(t.td,{children:["Whether to transform back the input (with ",(0,r.jsx)(t.code,{children:"savedAs"})," and ",(0,r.jsx)(t.code,{children:"transform"}),") prior to formatting or not."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"partial"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"Allow every attribute (flat or deep) to be optional while formatting."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"attributes"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.code,{children:"Path<Entity>[]"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"-"}),(0,r.jsxs)(t.td,{children:["To specify a list of attributes to format (other attributes are omitted).",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"See the ",(0,r.jsx)(t.a,{href:"/docs/entities/actions/parse-paths/#paths",children:(0,r.jsx)(t.code,{children:"PathParser"})})," action for more details on how to write attribute paths."]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Examples",type:"note",children:(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"partial",label:"Partial",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const saved = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  ...\n}\n\n// \ud83d\ude4c Typed as `DeepPartial<Pokemon>`\nconst formatted = PokemonEntity\n  .build(EntityFormatter)\n  .format(saved, { partial: true })\n"})})}),(0,r.jsx)(o.A,{value:"attributes",label:"Attributes",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const saved = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  level: 42,\n  ...\n}\n\n// \ud83d\ude4c Typed as `Pick<Pokemon, 'name' | 'level'>`\nconst formatted = PokemonEntity\n  .build(EntityFormatter)\n  .format(saved, { attributes: ['name', 'level'] })\n"})})}),(0,r.jsx)(o.A,{value:"formatting-only",label:"Formatting only",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// \ud83d\udc47 Not transformed\nconst valid = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  level: 42,\n  ...\n}\n\n// \ud83d\udc47 Simply omits hidden attributes\nconst formatted = PokemonEntity\n  .build(EntityFormatter)\n  .format(valid, { transform: false })\n"})})})]})}),"\n",(0,r.jsxs)(t.p,{children:["You can use the ",(0,r.jsx)(t.code,{children:"FormattedItem"})," type to explicitly type an object as a formatting output object:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import type { FormattedItem } from 'dynamodb-toolbox/entity'\n\nconst formattedItem: FormattedItem<\n  typeof PokemonEntity,\n  // \ud83d\udc47 Optional options\n  { partial: false; attributes: 'name' | 'level' }\n  // \u274c Throws a type error\n> = { invalid: 'output' }\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(8215),s=n(3104),o=n(6347),i=n(205),l=n(7485),d=n(1682),c=n(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(d(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...t,...e}),(0,j.jsx)(v,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);