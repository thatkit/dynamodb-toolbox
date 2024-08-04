"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=l,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(86010);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(87462),l=t(67294),r=t(86010),o=t(12466),u=t(76775),i=t(91980),s=t(67392),c=t(50012);function d(e){return function(e){var n;return(null==(n=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}function p(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,u.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[o,u]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,s]=h({queryString:t,groupId:a}),[d,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),k=(()=>{const e=i??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),f(e)}),[s,f,r]),tabValues:r}}var k=t(72389);const y="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==u&&(d(n),i(a))},m=e=>{var n;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}null==(n=t)||n.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":u===n})}),t??n)})))}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y)},l.createElement(v,(0,a.Z)({},e,n)),l.createElement(g,(0,a.Z)({},e,n)))}function S(e){const n=(0,k.Z)();return l.createElement(N,(0,a.Z)({key:String(n)},e))}},90208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var a=t(87462),l=(t(67294),t(3905)),r=t(74866),o=t(85162);const u={title:"nul",sidebar_custom_props:{code:!0}},i="Null",s={unversionedId:"schemas/null/index",id:"schemas/null/index",title:"nul",description:"Defines a null attribute:",source:"@site/docs/4-schemas/5-null/index.md",sourceDirName:"4-schemas/5-null",slug:"/schemas/null/",permalink:"/docs/schemas/null/",draft:!1,tags:[],version:"current",frontMatter:{title:"nul",sidebar_custom_props:{code:!0}},sidebar:"tutorialSidebar",previous:{title:"any",permalink:"/docs/schemas/any/"},next:{title:"boolean",permalink:"/docs/schemas/boolean/"}},c={},d=[{value:"Options",id:"options",level:2},{value:"<code>.required()</code>",id:"required",level:3},{value:"<code>.hidden()</code>",id:"hidden",level:3},{value:"<code>.key()</code>",id:"key",level:3},{value:"<code>.savedAs(...)</code>",id:"savedas",level:3},{value:"<code>.default(...)</code>",id:"default",level:3},{value:"<code>.link&lt;Schema&gt;(...)</code>",id:"linkschema",level:3},{value:"<code>.enum(...)</code>",id:"enum",level:3},{value:"<code>.transform(...)</code>",id:"transform",level:3}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"null"},"Null"),(0,l.kt)("p",null,"Defines a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes"},(0,l.kt)("strong",{parentName:"a"},"null attribute")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// `null` is a reserved keyword \ud83e\udd37\u200d\u2642\ufe0f\nimport { nul } from 'dynamodb-toolbox/attributes/nul';\n\nconst pokemonSchema = schema({\n  ...\n  nullValue: nul(),\n});\n\ntype FormattedPokemon = FormattedItem<typeof PokemonEntity>;\n// => {\n//   ...\n//   nullValue: null\n// }\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Not very useful on itself, ",(0,l.kt)("inlineCode",{parentName:"p"},"nul")," is more likely to be used in conjunction with ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/anyOf/"},(0,l.kt)("inlineCode",{parentName:"a"},"anyOf"))," to define ",(0,l.kt)("strong",{parentName:"p"},"nullable")," attributes:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const pokemonSchema = schema({\n  ...\n  nullableString: anyOf(string(), nul()),\n});\n"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"required"},(0,l.kt)("inlineCode",{parentName:"h3"},".required()")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"string | undefined"))),(0,l.kt)("p",null,"Tags the attribute as ",(0,l.kt)("strong",{parentName:"p"},"required")," (at root level or within ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"). Possible values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("code",null,"'atLeastOnce' ",(0,l.kt)("i",null,"(default)")),": Required (starting value)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'always'"),": Always required (including updates)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"'never'"),": Optional")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Equivalent\nconst nullishSchema = nul()\nconst nullishSchema = nul().required()\nconst nullishSchema = nul({ required: 'atLeastOnce' })\n\n// shorthand for `.required('never')`\nconst nullishSchema = nul().optional()\nconst nullishSchema = nul({ required: 'never' })\n")),(0,l.kt)("h3",{id:"hidden"},(0,l.kt)("inlineCode",{parentName:"h3"},".hidden()")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"boolean | undefined"))),(0,l.kt)("p",null,"Skips the attribute when formatting items:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const nullishSchema = nul().hidden()\nconst nullishSchema = nul({ hidden: true })\n")),(0,l.kt)("h3",{id:"key"},(0,l.kt)("inlineCode",{parentName:"h3"},".key()")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"boolean | undefined"))),(0,l.kt)("p",null,"Tags the attribute as needed to compute the primary key:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: The method also sets the `required` property to 'always'\n// (it is often the case in practice, you can still use `.optional()` if needed)\nconst nullishSchema = nul().key()\nconst nullishSchema = nul({\n  key: true,\n  required: 'always'\n})\n")),(0,l.kt)("h3",{id:"savedas"},(0,l.kt)("inlineCode",{parentName:"h3"},".savedAs(...)")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"string"))),(0,l.kt)("p",null,"Renames the attribute during the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step")," (at root level or within ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const nullishSchema = nul().savedAs('_n')\nconst nullishSchema = nul({ savedAs: '_n' })\n")),(0,l.kt)("h3",{id:"default"},(0,l.kt)("inlineCode",{parentName:"h3"},".default(...)")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"ValueOrGetter<null>"))),(0,l.kt)("p",null,"Specifies default values for the attribute. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/defaults-and-links/"},"Defaults and Links")," for more details:"),(0,l.kt)("admonition",{title:"Examples",type:"note"},(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"put",label:"Put",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const nullishSchema = nul().default(null)\n// \ud83d\udc47 Similar to\nconst nullishSchema = nul().putDefault(null)\n// \ud83d\udc47 ...or\nconst nullishSchema = nul({\n  defaults: {\n    key: undefined,\n    put: null,\n    update: undefined\n  }\n})\n"))),(0,l.kt)(o.Z,{value:"key",label:"Key",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const nullishSchema = nul().key().default(null)\n// \ud83d\udc47 Similar to\nconst nullishSchema = nul().key().keyDefault(null)\n// \ud83d\udc47 ...or\nconst nullishSchema = nul({\n  defaults: {\n    key: null,\n    // put & update defaults are not useful in `key` attributes\n    put: undefined,\n    update: undefined\n  },\n  key: true,\n  required: 'always'\n})\n"))),(0,l.kt)(o.Z,{value:"update",label:"Update",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const isUpdatedSchema = nul().updateDefault(null)\n// \ud83d\udc47 Similar to\nconst isUpdatedSchema = nul({\n  defaults: {\n    key: undefined,\n    put: undefined,\n    update: null\n  }\n})\n"))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Although they are not very useful, ",(0,l.kt)("inlineCode",{parentName:"p"},"nul")," is a primitive, and as such inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},".default")," options.")),(0,l.kt)("h3",{id:"linkschema"},(0,l.kt)("inlineCode",{parentName:"h3"},".link<Schema>(...)")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"Link<SCHEMA, null>"))),(0,l.kt)("p",null,"Similar to ",(0,l.kt)("a",{parentName:"p",href:"#default"},(0,l.kt)("inlineCode",{parentName:"a"},".default(...)"))," but allows deriving the default value from other attributes. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/defaults-and-links/"},"Defaults and Links")," for more details:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const pokemonSchema = schema({\n  boolean: boolean()\n}).and(prevSchema => ({\n  nullIfTrue: nul()\n    .optional()\n    .link<typeof prevSchema>(\n      // \ud83d\ude4c Correctly typed!\n      ({ boolean }) => (boolean ? null : undefined)\n    )\n}))\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Although they are not very useful, ",(0,l.kt)("inlineCode",{parentName:"p"},"nul")," is a primitive, and as such inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},".link")," options.")),(0,l.kt)("h3",{id:"enum"},(0,l.kt)("inlineCode",{parentName:"h3"},".enum(...)")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"null[]"))),(0,l.kt)("p",null,"Provides a finite range of possible values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const nullishSchema = nul().enum(null)\n\n// \ud83d\udc47 Equivalent to `.enum(null).default(null)`\nconst nullishSchema = nul().const(null)\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"For type inference reasons, the ",(0,l.kt)("inlineCode",{parentName:"p"},"enum")," option is only available as a method and not as a constructor property.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Although they are not very useful, ",(0,l.kt)("inlineCode",{parentName:"p"},"nul")," is a primitive, and as such inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},".enum")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".const")," options.")),(0,l.kt)("h3",{id:"transform"},(0,l.kt)("inlineCode",{parentName:"h3"},".transform(...)")),(0,l.kt)("p",{style:{marginTop:"-15px"}},(0,l.kt)("i",null,(0,l.kt)("code",null,"Transformer<null>"))),(0,l.kt)("p",null,"Allows modifying the attribute values during the ",(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step"),"."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Although it is not very useful, ",(0,l.kt)("inlineCode",{parentName:"p"},"nul")," is a primitive, and as such inherits from the ",(0,l.kt)("inlineCode",{parentName:"p"},".transform")," option.")))}m.isMDXComponent=!0}}]);