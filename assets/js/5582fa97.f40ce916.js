"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6775),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var k=n(2389);const y="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":o===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},6073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={title:"binary",sidebar_custom_props:{code:!0}},s="Binary",u={unversionedId:"schemas/binary/index",id:"schemas/binary/index",title:"binary",description:"Defines a binary attribute:",source:"@site/docs/4-schemas/8-binary/index.md",sourceDirName:"4-schemas/8-binary",slug:"/schemas/binary/",permalink:"/docs/schemas/binary/",draft:!1,tags:[],version:"current",frontMatter:{title:"binary",sidebar_custom_props:{code:!0}},sidebar:"tutorialSidebar",previous:{title:"string",permalink:"/docs/schemas/string/"},next:{title:"set",permalink:"/docs/schemas/set/"}},c={},d=[{value:"Options",id:"options",level:2},{value:"<code>.required()</code>",id:"required",level:3},{value:"<code>.hidden()</code>",id:"hidden",level:3},{value:"<code>.key()</code>",id:"key",level:3},{value:"<code>.savedAs(...)</code>",id:"savedas",level:3},{value:"<code>.default(...)</code>",id:"default",level:3},{value:"<code>.link&lt;Schema&gt;(...)</code>",id:"linkschema",level:3},{value:"<code>.enum(...)</code>",id:"enum",level:3},{value:"<code>.transform(...)</code>",id:"transform",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"binary"},"Binary"),(0,r.kt)("p",null,"Defines a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes"},(0,r.kt)("strong",{parentName:"a"},"binary attribute")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { binary } from 'dynamodb-toolbox/attributes/binary';\n\nconst pokemonSchema = schema({\n  ...\n  hash: binary(),\n});\n\ntype FormattedPokemon = FormattedItem<typeof PokemonEntity>;\n// => {\n//   ...\n//   hash: Uint8Array\n// }\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"required"},(0,r.kt)("inlineCode",{parentName:"h3"},".required()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string | undefined"))),(0,r.kt)("p",null,"Tags the attribute as ",(0,r.kt)("strong",{parentName:"p"},"required")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"). Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,'"atLeastOnce" ',(0,r.kt)("i",null,"(default)")),": Required"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"always"'),": Always required (including updates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"never"'),": Optional")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Equivalent\nconst hashSchema = binary().required()\nconst hashSchema = binary({\n  required: 'atLeastOnce'\n})\n\n// shorthand for `.required(\"never\")`\nconst hashSchema = binary().optional()\nconst hashSchema = binary({ required: 'never' })\n")),(0,r.kt)("h3",{id:"hidden"},(0,r.kt)("inlineCode",{parentName:"h3"},".hidden()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Skips the attribute when formatting items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const hashSchema = binary().hidden()\nconst hashSchema = binary({ hidden: true })\n")),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},".key()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Tags the attribute as needed to compute the primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: The method also sets the `required` property to \"always\"\n// (it is often the case in practice, you can still use `.optional()` if needed)\nconst hashSchema = binary().key()\nconst hashSchema = binary({\n  key: true,\n  required: 'always'\n})\n")),(0,r.kt)("h3",{id:"savedas"},(0,r.kt)("inlineCode",{parentName:"h3"},".savedAs(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string"))),(0,r.kt)("p",null,"Renames the attribute during the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const hashSchema = binary().savedAs('h')\nconst hashSchema = binary({ savedAs: 'h' })\n")),(0,r.kt)("h3",{id:"default"},(0,r.kt)("inlineCode",{parentName:"h3"},".default(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"ValueOrGetter<Uint8Array>"))),(0,r.kt)("p",null,"Specifies default values for the attribute. There are three kinds of defaults:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"putDefault"),": Applied on put actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/put-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"PutItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateDefault"),": Applied on update actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/update-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyDefault"),": Overrides other defaults on ",(0,r.kt)("a",{parentName:"li",href:"#key"},"key")," attributes (ignored otherwise)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," method is a shorthand that acts as ",(0,r.kt)("inlineCode",{parentName:"p"},"keyDefault")," on key attributes and ",(0,r.kt)("inlineCode",{parentName:"p"},"putDefault")," otherwise:"),(0,r.kt)("admonition",{title:"Examples",type:"note"},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"put",label:"Put",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bin = new Uint8Array([1, 2, 3])\n\nconst hashSchema = binary().default(bin)\n// \ud83d\udc47 Similar to\nconst hashSchema = binary().putDefault(bin)\n// \ud83d\udc47 ...or\nconst hashSchema = binary({\n  defaults: {\n    key: undefined,\n    put: bin,\n    update: undefined\n  }\n})\n\n// \ud83d\ude4c Getters also work!\nconst hashSchema = binary().default(() => bin)\n"))),(0,r.kt)(i.Z,{value:"key",label:"Key",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bin = new Uint8Array([1, 2, 3])\n\nconst hashSchema = binary().key().default(bin)\n// \ud83d\udc47 Similar to\nconst hashSchema = binary().key().keyDefault(bin)\n// \ud83d\udc47 ...or\nconst hashSchema = binary({\n  defaults: {\n    key: bin,\n    // put & update defaults are not useful in `key` attributes\n    put: undefined,\n    update: undefined\n  },\n  key: true,\n  required: 'always'\n})\n"))),(0,r.kt)(i.Z,{value:"update",label:"Update",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const bin = new Uint8Array([1, 2, 3])\n\nconst hashSchema = binary().updateDefault(bin)\n// \ud83d\udc47 Similar to\nconst hashSchema = binary({\n  defaults: {\n    key: undefined,\n    put: undefined,\n    update: bin\n  }\n})\n"))))),(0,r.kt)("h3",{id:"linkschema"},(0,r.kt)("inlineCode",{parentName:"h3"},".link<Schema>(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"Link<SCHEMA, Uint8Array>"))),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#default"},(0,r.kt)("inlineCode",{parentName:"a"},".default(...)"))," but allows deriving the default value from other attributes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/defaults-and-links/"},"Defaults and Links")," for more details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const encoder = new TextEncoder()\n\nconst pokemonSchema = schema({\n  name: string()\n}).and(prevSchema => ({\n  nameHash: binary().link<typeof prevSchema>(\n    // \ud83d\ude4c Correctly typed!\n    item => encoder.encode(item.name)\n  )\n}))\n")),(0,r.kt)("h3",{id:"enum"},(0,r.kt)("inlineCode",{parentName:"h3"},".enum(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"Uint8Array[]"))),(0,r.kt)("p",null,"Provides a finite range of possible values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const binA = new Uint8Array([1, 2, 3])\nconst binB = new Uint8Array([4, 5, 6])\n\nconst hashSchema = binary().enum(binA, binB, ...)\n\n// \ud83d\udc47 Equivalent to `.enum(binA).default(binA)`\nconst hashSchema = binary().const(binA)\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For type inference reasons, the ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," option is only available as a method and not as a constructor property.")),(0,r.kt)("h3",{id:"transform"},(0,r.kt)("inlineCode",{parentName:"h3"},".transform(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"Transformer<Uint8Array>"))),(0,r.kt)("p",null,"Allows modifying the attribute values during the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"var PREFIX = new Uint8Array([1, 2, 3])\n\nconst prefix = {\n  parse: (input: Uint8Array) => {\n    const concat = new Uint8Array(\n      PREFIX.length + input.length\n    )\n    concat.set(PREFIX)\n    concat.set(input, PREFIX.length)\n\n    return concat\n  },\n  format: (saved: Uint8Array) => saved.slice(PREFIX.length)\n}\n\n// Prefixes the value\nconst hashSchema = binary().transform(prefix)\nconst hashSchema = binary({ transform: prefix })\n")),(0,r.kt)("p",null,"DynamoDB-Toolbox exposes ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/transformers/usage"},"on-the-shelf transformers"),", so feel free to use them!"))}m.isMDXComponent=!0}}]);