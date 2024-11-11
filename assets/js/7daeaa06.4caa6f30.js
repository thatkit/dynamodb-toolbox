"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9188],{1028:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=s(4848),r=s(8453),t=s(1470),l=s(9365);const i={title:"Parse",sidebar_custom_props:{sidebarActionType:"util"}},d="Parser",o={id:"schemas/actions/parse",title:"Parse",description:"Given an input of any type and a mode, validates that it respects the schema and applies transformations:",source:"@site/docs/4-schemas/16-actions/1-parse.md",sourceDirName:"4-schemas/16-actions",slug:"/schemas/actions/parse",permalink:"/docs/schemas/actions/parse",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Parse",sidebar_custom_props:{sidebarActionType:"util"}},sidebar:"tutorialSidebar",previous:{title:"anyOf",permalink:"/docs/schemas/anyOf/"},next:{title:"Format",permalink:"/docs/schemas/actions/format"}},c={},u=[{value:"Methods",id:"methods",level:2},{value:"<code>parse(...)</code>",id:"parse",level:3},{value:"<code>reparse(...)</code>",id:"reparse",level:3},{value:"<code>start(...)</code>",id:"start",level:3},{value:"<code>validate(...)</code>",id:"validate",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"parser",children:"Parser"})}),"\n",(0,a.jsxs)(n.p,{children:["Given an input of any type and a mode, validates that ",(0,a.jsx)(n.strong,{children:"it respects the schema"})," and applies transformations:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Parser } from 'dynamodb-toolbox/schema/actions/parse'\n\nconst validPokemon = pokemonSchema\n  .build(Parser)\n  .parse(pokemon)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The default mode is ",(0,a.jsx)(n.code,{children:"put"}),", but you can switch it to ",(0,a.jsx)(n.code,{children:"update"})," or ",(0,a.jsx)(n.code,{children:"key"})," if needed:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const validKey = pokemonSchema.build(Parser).parse(\n  key,\n  // Additional options\n  { mode: 'key' }\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In DynamoDB-Toolbox, parsing is done in ",(0,a.jsx)(n.strong,{children:"4 steps"}),":"]}),"\n",(0,a.jsx)(n.mermaid,{value:'flowchart LR\n  classDef mmddescription fill:none,stroke:none,font-style:italic\n  classDef mmdcontainer fill:#eee4,stroke-width:1px,stroke-dasharray:3,stroke:#ccc,font-weight:bold,font-size:large\n  classDef mmdspace fill:none,stroke:none,color:#0000\n\n  input(Input)\n  input:::mmddescription\n\n  subgraph Filling\n    space1( ):::mmdspace\n\n    defaults(Applies<br/><b>defaults</b>)\n    links(Applies<br/><b>links</b>)\n    fillDescr(...clones the item, adds<br/><b>defaults</b> and <b>links</b><br/>):::mmddescription\n\n    defaults --\x3e links\n  end\n\n  input .-> defaults\n\n  Filling:::mmdcontainer\n\n  subgraph Parsing\n    space2( ):::mmdspace\n\n    parsing(Throws an<br/><b>error</b> if invalid)\n    parsingDescr(...<b>validates</b> the item.):::mmddescription\n\n    links --\x3e parsing\n  end\n\n\n  Parsing:::mmdcontainer\n\n  subgraph Transforming\n    space3( ):::mmdspace\n\n    transform(Last <b>transforms</b>)\n    transformDescr(...<b>renames</b><br/>and <b>transforms</b>.):::mmddescription\n\n    parsing--\x3etransform\n  end\n\n  Transforming:::mmdcontainer\n\n  transformed("Transformed\'")\n  transformed:::mmddescription\n\n  transform .-> transformed'}),"\n",(0,a.jsx)(n.p,{children:"Note that:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Additional fields are omitted, but inputs are not mutated"}),"\n",(0,a.jsxs)(n.li,{children:["The mode ",(0,a.jsx)(n.code,{children:"defaults"})," and ",(0,a.jsx)(n.code,{children:"links"})," are applied by default"]}),"\n",(0,a.jsxs)(n.li,{children:["Transformations (i.e. ",(0,a.jsx)(n.code,{children:"savedAs"})," and ",(0,a.jsx)(n.code,{children:"transforms"}),") are applied by default"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{title:"Example",type:"note",children:[(0,a.jsxs)(n.p,{children:["Here are ",(0,a.jsx)(n.strong,{children:"step-by-step"})," parsing examples:"]}),(0,a.jsxs)(s,{className:"details-in-admonition",children:[(0,a.jsxs)("summary",{children:["\u261d\ufe0f ",(0,a.jsx)("b",{children:"Schema"})]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const now = () => new Date().toISOString()\n\nconst pokemonSchema = schema({\n  // key attributes\n  pokemonClass: string()\n    .key()\n    .transform(prefix('POKEMON'))\n    .savedAs('partitionKey'),\n  pokemonId: string().key().savedAs('sortKey'),\n\n  // timestamps\n  created: string().default(now),\n  updated: string()\n    .required('always')\n    .putDefault(now)\n    .updateDefault(now),\n\n  // other attributes\n  name: string().optional(),\n  level: number().default(1)\n}).and(prevSchema => ({\n  levelPlusOne: number().link<typeof prevSchema>(\n    ({ level }) => level + 1\n  )\n}))\n"})})]}),(0,a.jsxs)(s,{className:"details-in-admonition",children:[(0,a.jsxs)("summary",{children:["\ud83d\udd0e ",(0,a.jsxs)("b",{children:[(0,a.jsx)("code",{children:"'put'"})," mode"]})]}),(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"input",label:"Input",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n  "name": "Pikachu"\n}\n'})})}),(0,a.jsx)(l.A,{value:"defaulted",label:"Defaulted",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n+ "created": "2022-01-01T00:00:00.000Z",\n+ "modified": "2022-01-01T00:00:00.000Z",\n  "name": "Pikachu",\n+ "level": 1,\n}\n'})})}),(0,a.jsx)(l.A,{value:"linked",label:"Linked",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n  "created": "2022-01-01T00:00:00.000Z",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "Pikachu",\n  "level": 1,\n+ "levelPlusOne": 2,\n}\n'})})}),(0,a.jsx)(l.A,{value:"parsed",label:"Parsed",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n  "created": "2022-01-01T00:00:00.000Z",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "Pikachu",\n  "level": 1,\n  "levelPlusOne": 2,\n}\n+ Item is valid \u2705\n'})})}),(0,a.jsx)(l.A,{value:"transformed",label:"Transformed",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n- "pokemonClass": "pikachu",\n+ "partitionKey": "POKEMON#pikachu",\n- "pokemonId": "123",\n+ "sortKey": "123",\n  "created": "2022-01-01T00:00:00.000Z",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "Pikachu",\n  "level": 1,\n  "levelPlusOne": 2,\n}\n'})})})]})]}),(0,a.jsxs)(s,{className:"details-in-admonition",children:[(0,a.jsxs)("summary",{children:["\ud83d\udd0e ",(0,a.jsxs)("b",{children:[(0,a.jsx)("code",{children:"'key'"})," mode"]})]}),(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"input",label:"Input",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n}\n+ (Only key attributes are required)\n'})})}),(0,a.jsx)(l.A,{value:"defaulted",label:"Defaulted",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n}\n+ No default to apply \u2705\n'})})}),(0,a.jsx)(l.A,{value:"linked",label:"Linked",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n}\n+ No link to apply \u2705\n'})})}),(0,a.jsx)(l.A,{value:"parsed",label:"Parsed",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "pikachu",\n  "pokemonId": "123",\n}\n+ Item is valid \u2705\n'})})}),(0,a.jsx)(l.A,{value:"transformed",label:"Transformed",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n- "pokemonClass": "pikachu",\n+ "partitionKey": "POKEMON#pikachu",\n- "pokemonId": "123",\n+ "sortKey": "123",\n}\n'})})})]})]}),(0,a.jsxs)(s,{className:"details-in-admonition",children:[(0,a.jsxs)("summary",{children:["\ud83d\udd0e ",(0,a.jsxs)("b",{children:[(0,a.jsx)("code",{children:"'update'"})," mode"]})]}),(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"input",label:"Input",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "bulbasaur",\n  "pokemonId": "123",\n  "name": "PlantyDino",\n}\n'})})}),(0,a.jsx)(l.A,{value:"defaulted",label:"Defaulted",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "bulbasaur",\n  "pokemonId": "123",\n+ "modified": "2022-01-01T00:00:00.000Z",\n  "name": "PlantyDino",\n}\n'})})}),(0,a.jsx)(l.A,{value:"linked",label:"Linked",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "bulbasaur",\n  "pokemonId": "123",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "PlantyDino",\n}\n+ No updateLink to apply \u2705\n'})})}),(0,a.jsx)(l.A,{value:"parsed",label:"Parsed",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n  "pokemonClass": "bulbasaur",\n  "pokemonId": "123",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "PlantyDino",\n}\n+ Item is valid \u2705\n'})})}),(0,a.jsx)(l.A,{value:"transformed",label:"Transformed",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-diff",children:'{\n- "pokemonClass": "bulbasaur",\n+ "partitionKey": "POKEMON#bulbasaur",\n- "pokemonId": "123",\n+ "sortKey": "123",\n  "modified": "2022-01-01T00:00:00.000Z",\n  "name": "PlantyDino",\n}\n'})})})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"parse",children:(0,a.jsx)(n.code,{children:"parse(...)"})}),"\n",(0,a.jsx)("p",{style:{marginTop:"-15px"},children:(0,a.jsx)("i",{children:(0,a.jsx)("code",{children:"(input: unknown, options?: ParseValueOptions) => ParsingResults<SCHEMA>"})})}),"\n",(0,a.jsx)(n.p,{children:"Parses an input of any type:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const parsedValue = pokemonSchema.build(Parser).parse(input)\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can provide options as a second argument. Available options:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Option"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"fill"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.code,{children:"boolean"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.code,{children:"true"})}),(0,a.jsxs)(n.td,{children:["Whether to complete the input (with ",(0,a.jsx)(n.code,{children:"defaults"})," and ",(0,a.jsx)(n.code,{children:"links"}),") prior to validation or not."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"transform"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.code,{children:"boolean"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.code,{children:"true"})}),(0,a.jsxs)(n.td,{children:["Whether to transform the input (with ",(0,a.jsx)(n.code,{children:"savedAs"})," and ",(0,a.jsx)(n.code,{children:"transform"}),") after validation or not."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mode"})}),(0,a.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,a.jsx)(n.code,{children:"put"}),", ",(0,a.jsx)(n.code,{children:"key"})," or ",(0,a.jsx)(n.code,{children:"update"})]}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.code,{children:"put"})}),(0,a.jsxs)(n.td,{children:["The mode of the parsing: Impacts which ",(0,a.jsx)(n.code,{children:"default"})," and ",(0,a.jsx)(n.code,{children:"link"})," should be used, as well as requiredness during validation."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"parseExtension"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.em,{children:"(internal)"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsxs)(n.td,{children:["Dependency injection required to parse extended syntax (",(0,a.jsx)(n.code,{children:"$get"}),", ",(0,a.jsx)(n.code,{children:"$add"})," etc.) when using the ",(0,a.jsx)(n.code,{children:"update"})," mode (check example below)."]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{title:"Examples",type:"note",children:(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"put",label:"Put",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const pokemon = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  types: ['Electric'],\n  ...\n}\n\nconst validPokemon = pokemonSchema.build(Parser).parse(pokemon)\n"})})}),(0,a.jsx)(l.A,{value:"key",label:"Key",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const validKey = pokemonSchema\n  .build(Parser)\n  .parse({ pokemonId: 'pikachu1' }, { mode: 'key' })\n"})})}),(0,a.jsx)(l.A,{value:"update",label:"Update",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const validUpdate = pokemonSchema\n  .build(Parser)\n  .parse(\n    { pokemonId: 'bulbasaur1', customName: 'PlantyDino' },\n    { mode: 'update' }\n  )\n"})})}),(0,a.jsx)(l.A,{value:"update-extended",label:"Update (extended)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import {\n  $add,\n  parseUpdateExtension\n} from 'dynamodb-toolbox/entity/actions/update'\n\nconst validUpdate = pokemonSchema.build(Parser).parse(\n  // \ud83d\udc47 `$add` is an extension, so `parseExtension`  is needed\n  { pokemonId: 'pikachu1', customName: $add(1) },\n  { mode: 'update', parseExtension: parseUpdateExtension }\n)\n"})})})]})}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"TransformedValue"})," generic type (or ",(0,a.jsx)(n.code,{children:"ValidValue"})," if ",(0,a.jsx)(n.code,{children:"transform"})," is set to ",(0,a.jsx)(n.code,{children:"false"}),") to explicitly type an object as a parsing output object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { TransformedValue } from 'dynamodb-toolbox/schema'\n\nconst parsedKey: TransformedValue<\n  typeof pokemonSchema,\n  // \ud83d\udc47 Optional options\n  { mode: 'key' }\n  // \u274c Throws a type error\n> = { invalid: 'input' }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"reparse",children:(0,a.jsx)(n.code,{children:"reparse(...)"})}),"\n",(0,a.jsx)("p",{style:{marginTop:"-15px"},children:(0,a.jsx)("i",{children:(0,a.jsx)("code",{children:"(input: InputValue<SCHEMA>, options?: ParseValueOptions) => ParsingResults<SCHEMA>"})})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.a,{href:"#parse",children:(0,a.jsx)(n.code,{children:".parse"})}),", but with the input correctly typed (taking the mode into account) instead of ",(0,a.jsx)(n.code,{children:"unknown"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"pokemonSchema\n  .build(Parser)\n  // \u274c Throws a type error\n  .reparse({ invalid: 'input' })\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"InputValue"})," generic type (or ",(0,a.jsx)(n.code,{children:"ValidValue"})," if ",(0,a.jsx)(n.code,{children:"fill"})," is set to ",(0,a.jsx)(n.code,{children:"false"}),") to explicitly type an object as a parsing input object:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { InputValue } from 'dynamodb-toolbox/schema'\n\nconst keyInput: InputValue<\n  typeof pokemonSchema,\n  // \ud83d\udc47 Optional options\n  { mode: 'key' }\n  // \u274c Throws a type error\n> = { invalid: 'input' }\n"})}),"\n",(0,a.jsx)(n.h3,{id:"start",children:(0,a.jsx)(n.code,{children:"start(...)"})}),"\n",(0,a.jsx)("p",{style:{marginTop:"-15px"},children:(0,a.jsx)("i",{children:(0,a.jsx)("code",{children:"(input: unknown, options?: ParseValueOptions) => Generator<ParsingResults<SCHEMA>>"})})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.a,{href:"#parse",children:(0,a.jsx)(n.code,{children:".parse"})}),", but returns the underlying ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator",children:"Generator"})," to inspect the intermediate results of the parsing steps:"]}),"\n",(0,a.jsx)(n.admonition,{title:"Examples",type:"note",children:(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"complete",label:"Complete",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const parsingGenerator = pokemonSchema\n  .build(Parser)\n  .start(pokemon)\n\nconst defaultedPokemon = parsingGenerator.next().value\nconst linkedPokemon = parsingGenerator.next().value\nconst parsedPokemon = parsingGenerator.next().value\nconst transformedPokemon = parsingGenerator.next().value\n"})})}),(0,a.jsx)(l.A,{value:"transformed",label:"Transformed only",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const parsingGenerator = pokemonSchema\n  .build(Parser)\n  .start(pokemon, { fill: false })\n\n// \ud83d\udc47 No `fill` step\nconst parsedPokemon = parsingGenerator.next().value\nconst transformedPokemon = parsingGenerator.next().value\n"})})}),(0,a.jsx)(l.A,{value:"filled",label:"Filled only",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const parsingGenerator = pokemonSchema\n  .build(Parser)\n  .start(pokemon, { transform: false })\n\nconst defaultedPokemon = parsingGenerator.next().value\nconst linkedPokemon = parsingGenerator.next().value\nconst parsedPokemon = parsingGenerator.next().value\n// \ud83d\udc46 No `transform` step\n"})})})]})}),"\n",(0,a.jsx)(n.h3,{id:"validate",children:(0,a.jsx)(n.code,{children:"validate(...)"})}),"\n",(0,a.jsx)("p",{style:{marginTop:"-15px"},children:(0,a.jsx)("i",{children:(0,a.jsx)("code",{children:"(input: unknown, options?: ValidationOptions) => boolean"})})}),"\n",(0,a.jsxs)(n.p,{children:["Runs only the ",(0,a.jsx)(n.strong,{children:"parsing step"})," of the parsing workflow on the provided input. Returns ",(0,a.jsx)(n.code,{children:"true"})," if the input is valid, catches any parsing error and returns ",(0,a.jsx)(n.code,{children:"false"})," otherwise:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const isValid = pokemonSchema.build(Parser).validate(input)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that ",(0,a.jsx)(n.code,{children:".validate(...)"})," acts as a ",(0,a.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/advanced-types.html",children:"type guard"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"if (pokemonSchema.build(Parser).validate(input)) {\n  // \ud83d\ude4c Typed as `Pokemon`!\n  const { level, name } = input\n  ...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Available options:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Option"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Type"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"Default"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"mode"})}),(0,a.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,a.jsx)(n.code,{children:"put"}),", ",(0,a.jsx)(n.code,{children:"key"})," or ",(0,a.jsx)(n.code,{children:"update"})]}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.code,{children:"put"})}),(0,a.jsx)(n.td,{children:"The mode of the parsing: Impacts requiredness during validation."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"parseExtension"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:(0,a.jsx)(n.em,{children:"(internal)"})}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"-"}),(0,a.jsxs)(n.td,{children:["Dependency injection required to parse extended syntax (",(0,a.jsx)(n.code,{children:"$get"}),", ",(0,a.jsx)(n.code,{children:"$add"})," etc.) when using the ",(0,a.jsx)(n.code,{children:"update"})," mode (check example below)."]})]})]})]}),"\n",(0,a.jsx)(n.admonition,{title:"Examples",type:"note",children:(0,a.jsxs)(t.A,{children:[(0,a.jsx)(l.A,{value:"put",label:"Put",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const pokemon = {\n  pokemonId: 'pikachu1',\n  name: 'Pikachu',\n  types: ['Electric'],\n  ...\n}\n\nconst isValid = pokemonSchema.build(Parser).validate(pokemon)\n"})})}),(0,a.jsx)(l.A,{value:"key",label:"Key",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const isValid = pokemonSchema\n  .build(Parser)\n  .validate({ pokemonId: 'pikachu1' }, { mode: 'key' })\n"})})}),(0,a.jsx)(l.A,{value:"update",label:"Update",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const isValid = pokemonSchema\n  .build(Parser)\n  .validate(\n    { pokemonId: 'bulbasaur1', customName: 'PlantyDino' },\n    { mode: 'update' }\n  )\n"})})}),(0,a.jsx)(l.A,{value:"update-extended",label:"Update (extended)",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import {\n  $add,\n  parseUpdateExtension\n} from 'dynamodb-toolbox/entity/actions/update'\n\nconst isValid = pokemonSchema.build(Parser).validate(\n  // \ud83d\udc47 `$add` is an extension, so `parseExtension`  is needed\n  { pokemonId: 'pikachu1', customName: $add(1) },\n  { mode: 'update', parseExtension: parseUpdateExtension }\n)\n"})})})]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>l});s(6540);var a=s(8215);const r={tabItem:"tabItem_Ymn6"};var t=s(4848);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>v});var a=s(6540),r=s(8215),t=s(3104),l=s(6347),i=s(205),d=s(7485),o=s(1682),c=s(679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=p(e),[l,d]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[o,u]=m({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,c.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),f=(()=>{const e=o??x;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,t]),tabValues:t}}var j=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function g(e){let{className:n,block:s,selectedValue:a,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),c=e=>{const n=e.currentTarget,s=d.indexOf(n),r=i[s].value;r!==a&&(o(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...t,className:(0,r.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function k(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(k,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var a=s(6540);const r={},t=a.createContext(r);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);