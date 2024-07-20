"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6775),i=n(1980),u=n(7392),p=n(12);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=k({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=i??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var h=n(2389);const y="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==s&&(c(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function S(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},6184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const s={title:"set",sidebar_custom_props:{code:!0}},i="Set",u={unversionedId:"schemas/set/index",id:"schemas/set/index",title:"set",description:"Defines a set attribute. Sets can contain numbers, strings, or binaries:",source:"@site/docs/4-schemas/9-set/index.md",sourceDirName:"4-schemas/9-set",slug:"/schemas/set/",permalink:"/docs/schemas/set/",draft:!1,tags:[],version:"current",frontMatter:{title:"set",sidebar_custom_props:{code:!0}},sidebar:"tutorialSidebar",previous:{title:"binary",permalink:"/docs/schemas/binary/"},next:{title:"list",permalink:"/docs/schemas/list/"}},p={},c=[{value:"Options",id:"options",level:2},{value:"<code>.required()</code>",id:"required",level:3},{value:"<code>.hidden()</code>",id:"hidden",level:3},{value:"<code>.key()</code>",id:"key",level:3},{value:"<code>.savedAs(...)</code>",id:"savedas",level:3},{value:"<code>.default(...)</code>",id:"default",level:3},{value:"<code>.link&lt;Schema&gt;(...)</code>",id:"linkschema",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set"},"Set"),(0,r.kt)("p",null,"Defines a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes"},(0,r.kt)("strong",{parentName:"a"},"set attribute")),". Sets can contain ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/number/"},(0,r.kt)("inlineCode",{parentName:"a"},"numbers")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/string/"},(0,r.kt)("inlineCode",{parentName:"a"},"strings")),", or ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/binary/"},(0,r.kt)("inlineCode",{parentName:"a"},"binaries")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { set } from 'dynamodb-toolbox/attributes/set';\nimport { string } from 'dynamodb-toolbox/attributes/string';\n\nconst pokeTypeSchema = string().enum('fire', ...)\n\nconst pokemonSchema = schema({\n  ...\n  pokeTypes: set(pokeTypeSchema),\n});\n\ntype FormattedPokemon = FormattedItem<typeof PokemonEntity>;\n// => {\n//   ...\n//   pokeTypes: Set<'fire' | ...>\n// }\n")),(0,r.kt)("p",null,"Set elements must respect some constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They cannot be ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," or always required"),(0,r.kt)("li",{parentName:"ul"},"They cannot be ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," (tagging the ",(0,r.kt)("inlineCode",{parentName:"li"},"set")," itself as ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," is enough)"),(0,r.kt)("li",{parentName:"ul"},"They cannot have ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"links"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u274c Raises a type AND a run-time error\nconst strSet = set(string().optional())\nconst strSet = set(string().hidden())\nconst strSet = set(string().key())\nconst strSet = set(string().default('foo'))\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"required"},(0,r.kt)("inlineCode",{parentName:"h3"},".required()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string | undefined"))),(0,r.kt)("p",null,"Tags the attribute as ",(0,r.kt)("strong",{parentName:"p"},"required")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"). Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,'"atLeastOnce" ',(0,r.kt)("i",null,"(default)")),": Required"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"always"'),": Always required (including updates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"never"'),": Optional")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Equivalent\nconst pokeTypesSchema = set(pokeTypeSchema).required()\nconst pokeTypesSchema = set(\n  pokeTypeSchema,\n  // Options can be provided as 2nd argument\n  { required: 'atLeastOnce' }\n)\n\n// shorthand for `.required(\"never\")`\nconst pokeTypesSchema = set(pokeTypeSchema).optional()\nconst pokeTypesSchema = set(..., { required: 'never' })\n")),(0,r.kt)("h3",{id:"hidden"},(0,r.kt)("inlineCode",{parentName:"h3"},".hidden()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Skips the attribute when formatting items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokeTypesSchema = set(pokeTypeSchema).hidden()\nconst pokeTypesSchema = set(..., { hidden: true })\n")),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},".key()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Tags the attribute as needed to compute the primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: The method also sets the `required` property to \"always\"\n// (it is often the case in practice, you can still use `.optional()` if needed)\nconst pokeTypesSchema = set(pokeTypeSchema).key()\nconst pokeTypesSchema = set(..., {\n  key: true,\n  required: 'always'\n})\n")),(0,r.kt)("h3",{id:"savedas"},(0,r.kt)("inlineCode",{parentName:"h3"},".savedAs(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string"))),(0,r.kt)("p",null,"Renames the attribute during the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokeTypesSchema = set(pokeTypeSchema).savedAs('pt')\nconst pokeTypesSchema = set(..., { savedAs: 'pt' })\n")),(0,r.kt)("h3",{id:"default"},(0,r.kt)("inlineCode",{parentName:"h3"},".default(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"ValueOrGetter<Set<ELEMENTS>>"))),(0,r.kt)("p",null,"Specifies default values for the attribute. There are three kinds of defaults:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"putDefault"),": Applied on put actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/put-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"PutItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateDefault"),": Applied on update actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/update-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyDefault"),": Overrides other defaults on ",(0,r.kt)("a",{parentName:"li",href:"#key"},"key")," attributes (ignored otherwise)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," method is a shorthand that acts as ",(0,r.kt)("inlineCode",{parentName:"p"},"keyDefault")," on key attributes and ",(0,r.kt)("inlineCode",{parentName:"p"},"putDefault")," otherwise:"),(0,r.kt)("admonition",{title:"Examples",type:"note"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"put-update",label:"Put/Update",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const now = () => new Date().toISOString()\n\nconst timestampsSchema = set(string())\n  .default(() => new Set([now()]))\n  .updateDefault(() => $add(now()))\n// \ud83d\udc47 Similar to\nconst timestampsSchema = set(string())\n  .putDefault(() => new Set([now()]))\n  .updateDefault(() => $add(now()))\n// \ud83d\udc47 ...or\nconst timestampsSchema = set({\n  defaults: {\n    key: undefined,\n    put: () => new Set([now()]),\n    update: () => $add(now())\n  }\n})\n"))),(0,r.kt)(o.Z,{value:"key",label:"Key",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const defaultSpecifiers = new Set(['POKEMON'])\n\nconst specifiersSchema = set(string())\n  .key()\n  .default(defaultSpecifiers)\n// \ud83d\udc47 Similar to\nconst specifiersSchema = set(string())\n  .key()\n  .keyDefault(defaultSpecifiers)\n// \ud83d\udc47 ...or\nconst specifiersSchema = set({\n  defaults: {\n    key: defaultSpecifiers,\n    // put & update defaults are not useful in `key` attributes\n    put: undefined,\n    update: undefined\n  },\n  key: true,\n  required: 'always'\n})\n"))))),(0,r.kt)("h3",{id:"linkschema"},(0,r.kt)("inlineCode",{parentName:"h3"},".link<Schema>(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"Link<SCHEMA, Set<ELEMENTS>>"))),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#default"},(0,r.kt)("inlineCode",{parentName:"a"},".default(...)"))," but allows deriving the default value from other attributes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/defaults-and-links/"},"Defaults and Links")," for more details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokemonSchema = schema({\n  pokeTypeList: list(pokeTypeSchema)\n}).and(prevSchema => ({\n  pokeTypeSet: set(pokeTypeSchema).link<typeof prevSchema>(\n    // \ud83d\ude4c Correctly typed!\n    item => new Set(item.pokeTypeList)\n  )\n}))\n")))}m.isMDXComponent=!0}}]);