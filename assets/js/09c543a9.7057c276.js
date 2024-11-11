"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8935],{5865:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),a=s(8453);const r={title:"Usage"},i="Schema",o={id:"schemas/usage/index",title:"Usage",description:"A Schema is a list of attributes that describe the items of an Entity:",source:"@site/docs/4-schemas/1-usage/index.md",sourceDirName:"4-schemas/1-usage",slug:"/schemas/usage/",permalink:"/docs/schemas/usage/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Spy",permalink:"/docs/entities/actions/spy/"},next:{title:"Defaults & Links",permalink:"/docs/schemas/defaults-and-links/"}},c={},d=[{value:"Attribute Types",id:"attribute-types",level:2},{value:"Fine-Tuning Attributes",id:"fine-tuning-attributes",level:2},{value:"Warm vs Frozen",id:"warm-vs-frozen",level:2},{value:"Updating Schemas",id:"updating-schemas",level:2},{value:"<code>and(...)</code>",id:"and",level:3},{value:"<code>pick(...)</code>",id:"pick",level:3},{value:"<code>omit(...)</code>",id:"omit",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"schema",children:"Schema"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"Schema"})," is a list of attributes that describe the items of an ",(0,t.jsx)(n.a,{href:"/docs/entities/usage/",children:(0,t.jsx)(n.code,{children:"Entity"})}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { schema } from 'dynamodb-toolbox/schema'\nimport { string } from 'dynamodb-toolbox/attributes/string'\nimport { number } from 'dynamodb-toolbox/attributes/number'\n\nconst pokemonSchema = schema({\n  pokemonId: string().key(),\n  level: number().default(1),\n  pokeType: string()\n    .enum('fire', 'water', 'grass')\n    .optional()\n})\n\nconst PokemonEntity = new Entity({\n  ...,\n  schema: pokemonSchema\n})\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Schemas always start with a ",(0,t.jsx)(n.strong,{children:"root object"}),", listing ",(0,t.jsx)(n.a,{href:"#attribute-types",children:(0,t.jsx)(n.strong,{children:"attributes"})})," by their names."]}),"\n",(0,t.jsx)(n.h2,{id:"attribute-types",children:"Attribute Types"}),"\n",(0,t.jsxs)(n.p,{children:["Schema attributes can be imported by their ",(0,t.jsx)(n.strong,{children:"dedicated exports"}),", or through the ",(0,t.jsx)(n.code,{children:"attribute"})," or ",(0,t.jsx)(n.code,{children:"attr"})," shorthands. For instance, those declarations output the same attribute:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// \ud83d\udc47 More tree-shakable\nimport { string } from 'dynamodb-toolbox/attributes/string'\n\nconst nameAttr = string()\n\n// \ud83d\udc47 Less tree-shakable, but single import\nimport {\n  attribute,\n  attr\n} from 'dynamodb-toolbox/attributes'\n\nconst nameAttr = attribute.string()\nconst nameAttr = attr.string()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Available attribute types are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/any/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"any"})})})," - Contains any value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/null/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"null"})})})," - Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"null"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/boolean/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"boolean"})})})," - Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"booleans"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/number/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"number"})})}),": Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"numbers"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/string/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"string"})})}),": Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"strings"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/binary/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"binary"})})}),": Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"binaries"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/set/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"set"})})}),": Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"sets"})," of either ",(0,t.jsx)(n.code,{children:"number"}),", ",(0,t.jsx)(n.code,{children:"string"}),", or ",(0,t.jsx)(n.code,{children:"binary"})," elements"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/list/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"list"})})}),": Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"lists"})," of elements of any type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/map/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"map"})})}),": Contains ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"maps"}),", i.e. a finite list of key-value pairs, values being child attributes of any type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/record/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"record"})})}),": Contains a different kind of ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"maps"})," - Records differ from ",(0,t.jsx)(n.code,{children:"maps"})," as they have a non-explicit (potentially infinite) range of keys, but with a single value type"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/schemas/any/",children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"anyOf"})})}),": Contains a finite ",(0,t.jsx)(n.strong,{children:"union"})," of possible attributes"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["DynamoDB-Toolbox attribute types closely mirror the capabilities of DynamoDB. See the ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes",children:"DynamoDB documentation"})," for more details."]})}),"\n",(0,t.jsx)(n.p,{children:"Note that some attribute types can be defined with other attributes. For instance, here's a list of string:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const nameAttr = string()\nconst namesAttr = list(nameAttr)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Schemas are a standalone feature of DynamoDB-Toolbox (you can use them separately to ",(0,t.jsx)(n.a,{href:"/docs/schemas/actions/parse",children:"parse"})," and ",(0,t.jsx)(n.a,{href:"/docs/schemas/actions/format",children:"format"})," data for instance) and might even be moved into a separate library one day."]})}),"\n",(0,t.jsx)(n.h2,{id:"fine-tuning-attributes",children:"Fine-Tuning Attributes"}),"\n",(0,t.jsxs)(n.p,{children:["You can update attribute properties by using ",(0,t.jsx)(n.strong,{children:"dedicated methods"})," or by providing ",(0,t.jsx)(n.strong,{children:"option objects"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The former provides a ",(0,t.jsx)(n.strong,{children:"slick devX"})," with autocomplete and shorthands, while the latter theoretically requires ",(0,t.jsx)(n.strong,{children:"less compute time and memory usage"})," (although it should be negligible):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Using methods\nconst pokemonName = string().required('always')\n// Using options\nconst pokemonName = string({ required: 'always' })\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Attribute methods do not mute the origin attribute, but ",(0,t.jsx)(n.strong,{children:"return a new attribute"})," (hence the impact in memory usage)."]})}),"\n",(0,t.jsxs)(n.p,{children:["The output of an attribute method ",(0,t.jsx)(n.strong,{children:"is also an attribute"}),", so you can ",(0,t.jsx)(n.strong,{children:"chain methods"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const pokeTypeAttr = string()\n  .required('always')\n  .enum('fire', 'water', 'grass')\n  .savedAs('t')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"warm-vs-frozen",children:"Warm vs Frozen"}),"\n",(0,t.jsxs)(n.p,{children:["Prior to being wrapped in a ",(0,t.jsx)(n.code,{children:"schema"})," declaration, attributes are called ",(0,t.jsx)(n.strong,{children:"warm:"})," They are ",(0,t.jsx)(n.strong,{children:"not validated"})," (at run-time) and can be used to build other schemas. By inspecting their types, you can see that they are prefixed with ",(0,t.jsx)(n.code,{children:"$"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const $nameSchema = string().required('always')\n// => $StringAttribute\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once ",(0,t.jsx)(n.strong,{children:"frozen"}),", validation is applied and building methods are stripped:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const nameSchema = $nameSchema.freeze()\n// => StringAttribute\n\nnameSchema.required\n// => 'always'\nnameSchema.required('never')\n// => \u274c 'required' is not a function\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Wrapping attributes in a ",(0,t.jsx)(n.code,{children:"schema"})," declaration ",(0,t.jsx)(n.strong,{children:"freezes them"})," under the hood:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const pokemonSchema = schema({ name: $nameSchema })\n// => Schema<{ name: StringAttribute }>\n\npokemonSchema.attributes.name.required\n// => 'always'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The main takeaway is that ",(0,t.jsx)(n.strong,{children:"warm schemas can be composed"})," while ",(0,t.jsx)(n.strong,{children:"frozen schemas cannot"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const pokemonSchema = schema({\n  // \ud83d\udc4d No problemo\n  pokemonName: $nameSchema,\n  ...\n});\n\nconst pokedexSchema = schema({\n  // \u274c Not possible\n  pokemon: pokemonSchema,\n  ...\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"updating-schemas",children:"Updating Schemas"}),"\n",(0,t.jsxs)(n.p,{children:["As we've just seen, once frozen, schemas ",(0,t.jsx)(n.strong,{children:"cannot be updated"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["However, you can use them to build ",(0,t.jsx)(n.strong,{children:"new schemas"})," with the following methods:"]}),"\n",(0,t.jsx)(n.h3,{id:"and",children:(0,t.jsx)(n.code,{children:"and(...)"})}),"\n",(0,t.jsx)("p",{style:{marginTop:"-15px"},children:(0,t.jsx)("i",{children:(0,t.jsx)("code",{children:"(attr: $NEW_ATTR | (Schema<OLD_ATTR> => $NEW_ATTR)) => Schema<OLD_ATTR & NEW_ATTR>"})})}),"\n",(0,t.jsxs)(n.p,{children:["Allows ",(0,t.jsx)(n.strong,{children:"extending"})," a schema with ",(0,t.jsx)(n.strong,{children:"new attributes"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const extendedSchema = baseSchema.and({\n  newAttribute: string(),\n  ...\n})\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["In case of naming conflicts, new attributes ",(0,t.jsx)(n.strong,{children:"override"})," the previous ones."]})}),"\n",(0,t.jsxs)(n.p,{children:["The method also accepts functions that return a (warm) schema. In this case, the previous schema is provided as an argument (which is particularly useful for building ",(0,t.jsx)(n.a,{href:"/docs/schemas/defaults-and-links/#links",children:"Links"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const extendedSchema = mySchema.and(prevSchema => ({\n  newAttribute: string(),\n  ...\n}))\n"})}),"\n",(0,t.jsx)(n.h3,{id:"pick",children:(0,t.jsx)(n.code,{children:"pick(...)"})}),"\n",(0,t.jsx)("p",{style:{marginTop:"-15px"},children:(0,t.jsx)("i",{children:(0,t.jsx)("code",{children:"(...attrNames: ATTR_NAMES[]) => Schema<Pick<ATTR, ATTR_NAMES>>"})})}),"\n",(0,t.jsxs)(n.p,{children:["Produces a ",(0,t.jsx)(n.strong,{children:"new schema"})," by keeping only certain ",(0,t.jsx)(n.strong,{children:"attributes"})," of the original schema:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const picked = pokemonSchema.pick('name', 'pokemonLevel')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Due to the potential disruptive nature of this method on ",(0,t.jsx)(n.a,{href:"/docs/schemas/defaults-and-links/#links",children:"links"}),", they are ",(0,t.jsx)(n.strong,{children:"reset"})," in the process:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const nameSchema = schema({\n  firstName: string(),\n  lastName: string(),\n  completeName: string().link(({ firstName, lastName }) =>\n    [firstName, lastName].join(' ')\n  )\n})\n\nconst picked = nameSchema.pick('lastName', 'completeName')\n\npicked.attributes.completeName.links.put\n// => undefined\n"})}),"\n",(0,t.jsx)(n.h3,{id:"omit",children:(0,t.jsx)(n.code,{children:"omit(...)"})}),"\n",(0,t.jsx)("p",{style:{marginTop:"-15px"},children:(0,t.jsx)("i",{children:(0,t.jsx)("code",{children:"(...attrNames: ATTR_NAMES[]) => Schema<Omit<ATTR, ATTR_NAMES>>"})})}),"\n",(0,t.jsxs)(n.p,{children:["Produces a ",(0,t.jsx)(n.strong,{children:"new schema"})," by removing certain ",(0,t.jsx)(n.strong,{children:"attributes"})," out of the original schema:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const omitted = pokemonSchema.omit('name', 'pokemonLevel')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Due to the potential disruptive nature of this method on ",(0,t.jsx)(n.a,{href:"/docs/schemas/defaults-and-links/#links",children:"links"}),", they are ",(0,t.jsx)(n.strong,{children:"reset"})," in the process:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const nameSchema = schema({\n  firstName: string(),\n  lastName: string(),\n  completeName: string().link(({ firstName, lastName }) =>\n    [firstName, lastName].join(' ')\n  )\n})\n\nconst omitted = nameSchema.omit('firstName')\n\nomitted.attributes.completeName.links.put\n// => undefined\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);