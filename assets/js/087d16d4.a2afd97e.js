"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8859],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),m=a(31682),u=a(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,m.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,m]=g({queryString:a,groupId:n}),[d,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),y(e)}),[m,y,o]),tabValues:o}}var f=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=m[a].value;n!==i&&(d(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:p},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},r.createElement(h,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(N,(0,n.A)({key:String(t)},e))}},27308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=a(58168),r=(a(96540),a(15680)),o=a(11470),l=a(19365);const i={title:"Format",sidebar_custom_props:{sidebarActionType:"util"}},s="Formatter",m={unversionedId:"schemas/actions/format",id:"schemas/actions/format",title:"Format",description:"Given a saved item, validates that it respects the schema and formats it:",source:"@site/docs/4-schemas/16-actions/2-format.md",sourceDirName:"4-schemas/16-actions",slug:"/schemas/actions/format",permalink:"/docs/schemas/actions/format",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Format",sidebar_custom_props:{sidebarActionType:"util"}},sidebar:"tutorialSidebar",previous:{title:"Parse",permalink:"/docs/schemas/actions/parse"},next:{title:"Usage",permalink:"/docs/schemas/transformers/usage"}},u={},d=[{value:"Methods",id:"methods",level:2},{value:"<code>format(...)</code>",id:"format",level:3},{value:"<code>start(...)</code>",id:"start",level:3},{value:"<code>validate(...)</code>",id:"validate",level:3}],p={toc:d},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"formatter"},"Formatter"),(0,r.yg)("p",null,"Given a saved item, validates that ",(0,r.yg)("strong",{parentName:"p"},"it respects the schema")," and formats it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { Formatter } from 'dynamodb-toolbox/schema/actions/format'\n\nconst formattedPikachu = pokemonSchema\n  .build(Formatter)\n  .format(savedPikachu)\n")),(0,r.yg)("p",null,"In DynamoDB-Toolbox, formatting is done in ",(0,r.yg)("strong",{parentName:"p"},"2 steps"),":"),(0,r.yg)("mermaid",{value:"flowchart RL\n  classDef mmddescription fill:none,stroke:none,font-style:italic\n  classDef mmdcontainer fill:#eee4,stroke-width:1px,stroke-dasharray:3,stroke:#ccc,font-weight:bold,font-size:large\n  classDef mmdspace fill:none,stroke:none,color:#0000\n\n  transformed(Transformed')\n  transformed:::mmddescription\n\n  subgraph Transforming\n    space1( ):::mmdspace\n\n    transform(<b>Transforms</b> backward)\n    transformDescr(...<b>renames</b> and<br/><b>transforms</b> back.):::mmddescription\n  end\n\n  transformed .-> transform\n\n  Transforming:::mmdcontainer\n\n  subgraph Formatting\n    space2( ):::mmdspace\n\n    format(<b>Formats</b> the item)\n    formatDescr(...<b>omits</b> hidden attributes.):::mmddescription\n\n    transform----\x3eformat\n  end\n\n  Formatting:::mmdcontainer\n\n  formatted(Formatted')\n  formatted:::mmddescription\n\n  format .-> formatted"}),(0,r.yg)("p",null,"Note that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Additional and ",(0,r.yg)("inlineCode",{parentName:"li"},"hidden")," fields are omitted, but inputs are not mutated"),(0,r.yg)("li",{parentName:"ul"},"The formatting throws an error if the saved item is invalid"),(0,r.yg)("li",{parentName:"ul"},"Transformations (i.e. ",(0,r.yg)("inlineCode",{parentName:"li"},"savedAs")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"transforms"),") are applied (backward) by default")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"format"},(0,r.yg)("inlineCode",{parentName:"h3"},"format(...)")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,(0,r.yg)("code",null,"(savedValue: unknown, options?: FormatValueOptions) => FormattedValue<SCHEMA>"))),(0,r.yg)("p",null,"Formats a saved item:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const formattedValue = pokemonSchema.build(Formatter).format(savedValue)\n")),(0,r.yg)("p",null,"You can provide ",(0,r.yg)("strong",{parentName:"p"},"formatting options")," as a second argument. Available options:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"transform")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to transform back the input (with ",(0,r.yg)("inlineCode",{parentName:"td"},"savedAs")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"transform"),") prior to formatting or not.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"format")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"true")),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to format the input (hide ",(0,r.yg)("inlineCode",{parentName:"td"},"hidden")," attributes) after transformation.",(0,r.yg)("br",null),(0,r.yg)("br",null),"No effect if ",(0,r.yg)("inlineCode",{parentName:"td"},"transform")," is set to ",(0,r.yg)("inlineCode",{parentName:"td"},"false"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"partial")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"boolean")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"false")),(0,r.yg)("td",{parentName:"tr",align:null},"Allow every attribute (flat or deep) to be optional while formatting.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"attributes")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Path<Schema>[]")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"To specify a list of attributes to format (other attributes are omitted).",(0,r.yg)("br",null),(0,r.yg)("br",null),"See the ",(0,r.yg)("a",{parentName:"td",href:"/docs/entities/actions/parse-paths/"},(0,r.yg)("inlineCode",{parentName:"a"},"PathParser"))," action for more details on how to write attribute paths.")))),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"partial",label:"Partial",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transformed = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu'\n}\n\n// \ud83d\ude4c Typed as `DeepPartial<FormattedPokemon>`\nconst formatted = pokemonSchema\n  .build(Formatter)\n  .format(transformed, { partial: true })\n"))),(0,r.yg)(l.A,{value:"attributes",label:"Attributes",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transformed = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  level: 42,\n  ...\n}\n\n// \ud83d\ude4c Typed as `Pick<FormattedPokemon, 'name' | 'level'>`\nconst formatted = pokemonSchema\n  .build(Formatter)\n  .format(transformed, { attributes: ['name', 'level'] })\n"))),(0,r.yg)(l.A,{value:"formatting-only",label:"Formatting only",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// \ud83d\udc47 Not transformed\nconst valid = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  level: 42,\n  ...\n}\n\n// \ud83d\udc47 Only omits hidden attributes\nconst formatted = pokemonSchema\n  .build(Formatter)\n  .format(valid, { transform: false })\n"))),(0,r.yg)(l.A,{value:"transform-only",label:"Transform only",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transformed = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  level: 42,\n  ...\n}\n\n// \ud83d\udc47 Keeps hidden attributes\nconst valid = pokemonSchema\n  .build(Formatter)\n  .format(transformed, { format: false })\n"))))),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"FormattedValue")," type to explicitly type an object as a formatting output object:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import type { FormattedValue } from 'dynamodb-toolbox/format'\n\nconst formattedValue: FormattedValue<\n  typeof pokemonSchema,\n  // \ud83d\udc47 Optional options\n  { partial: false; attributes: 'name' | 'level' }\n  // \u274c Throws a type error\n> = { invalid: 'output' }\n")),(0,r.yg)("h3",{id:"start"},(0,r.yg)("inlineCode",{parentName:"h3"},"start(...)")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,(0,r.yg)("code",null,"(input: unknown, options?: FormatValueOptions) => Generator<FormattingResults<SCHEMA>>"))),(0,r.yg)("p",null,"Similar to ",(0,r.yg)("a",{parentName:"p",href:"#format"},(0,r.yg)("inlineCode",{parentName:"a"},".format")),", but returns the underlying ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator"},"Generator")," to inspect the intermediate results of the formatting steps:"),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"complete",label:"Complete",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const formattingGenerator = pokemonSchema\n  .build(Formatter)\n  .start(pokemon)\n\nconst transformedPokemon = formattingGenerator.next().value\nconst formattedPokemon = formattingGenerator.next().value\n"))),(0,r.yg)(l.A,{value:"formatting-only",label:"Formatting only",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const formattingGenerator = pokemonSchema\n  .build(Formatter)\n  .start(pokemon, { transform: false })\n\n// \ud83d\udc47 No `transform` step\nconst formattedPokemon = formattingGenerator.next().value\n"))))),(0,r.yg)("h3",{id:"validate"},(0,r.yg)("inlineCode",{parentName:"h3"},"validate(...)")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,(0,r.yg)("code",null,"(input: unknown) => boolean"))),(0,r.yg)("p",null,"Runs only the ",(0,r.yg)("strong",{parentName:"p"},"transform step")," of the formatting workflow on the provided input. Returns ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," if the input is valid, catches any parsing error and returns ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," otherwise:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const isValid = pokemonSchema\n  .build(Formatter)\n  .validate(input)\n")),(0,r.yg)("p",null,"Note that ",(0,r.yg)("inlineCode",{parentName:"p"},".validate(...)")," acts as a ",(0,r.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html"},"type guard"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"if (pokemonSchema.build(Formatter).validate(input)) {\n  // \ud83d\ude4c Typed as `TransformedPokemon`!\n  const { level, name } = input\n  ...\n}\n")))}g.isMDXComponent=!0}}]);