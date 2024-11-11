"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9948],{6760:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const o={title:"Usage"},a="Usage",r={id:"getting-started/usage/index",title:"Usage",description:"DynamoDB-Toolbox mainly exposes three classes:",source:"@site/docs/1-getting-started/3-usage/index.md",sourceDirName:"1-getting-started/3-usage",slug:"/getting-started/usage/",permalink:"/docs/getting-started/usage/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation/"},next:{title:"Usage",permalink:"/docs/tables/usage/"}},c={},l=[{value:"Instantiation",id:"instantiation",level:2},{value:"Methods vs Actions",id:"methods-vs-actions",level:2},{value:"Aborting an Action",id:"aborting-an-action",level:2},{value:"How do Actions work?",id:"how-do-actions-work",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"usage",children:"Usage"})}),"\n",(0,s.jsx)(n.p,{children:"DynamoDB-Toolbox mainly exposes three classes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83c\udfd7\ufe0f ",(0,s.jsx)(n.a,{href:"/docs/tables/usage/",children:"Tables"})," that describe the configuration of your DynamoDB Tables"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udc36 ",(0,s.jsx)(n.a,{href:"/docs/entities/usage/",children:"Entities"})," that categorize the items contained in your Tables"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udcd0 ",(0,s.jsx)(n.a,{href:"/docs/schemas/usage/",children:"Schemas"})," that list the attributes of your entities"]}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n  classDef mmddescription fill:none,stroke:none,font-style:italic\n  classDef mmdcontainer fill:#eee4,stroke-width:1px,stroke-dasharray:3,stroke:#ccc,font-weight:bold,font-size:large\n  classDef mmdspace fill:none,stroke:none,color:#0000\n\n  subgraph Tables\n    space1( ):::mmdspace\n    space2( ):::mmdspace\n    pokeTable(PokeTable<br/><i><small>Primary key,<br/>indexes...</small></i>)\n    space3( ):::mmdspace\n    tableDescription(...describe the<br/><b>DynamoDB<br/>configuration</b>.<br/>):::mmddescription\n  end\n\n  Tables:::mmdcontainer\n\n  subgraph Entities\n    space4( ):::mmdspace\n    pokemonEntity(PokemonEntity<br/><i><small>Pokemon items</small></i>)\n    space5( ):::mmdspace\n    trainerEntity(TrainerEntity<br/><i><small>Trainer items</small></i>)\n\n    pokeTable --\x3e pokemonEntity\n    pokeTable --\x3e trainerEntity\n\n    entitiesDescription(...categorize the <b>items</b><br/>contained in the Table.):::mmddescription\n  end\n\n\n  Entities:::mmdcontainer\n\n  subgraph Schemas\n    space6( ):::mmdspace\n    pokemonSchema(pokemonSchema<br/><i><small>Pokemon attributes</small></i>)\n    trainerSchema(trainerSchema<br/><i><small>Trainer attributes</small></i>)\n    levelSchema(levelSchema)\n    nameSchema(nameSchema)\n    otherSchemas(<small>...</small>):::mmddescription\n    hairStyleSchema(hairStyleSchema)\n    schemasDescription(...list <b>attributes</b><br/>of the Table entities.):::mmddescription\n\n    pokemonEntity--\x3epokemonSchema\n    trainerEntity--\x3etrainerSchema\n    pokemonSchema-- <i>level</i> attr. --\x3elevelSchema\n    pokemonSchema-- <i>name</i> attr. --\x3enameSchema\n    trainerSchema-- <i>name</i> attr. --\x3enameSchema\n    trainerSchema-- <i>hairStyle</i> attr. --\x3ehairStyleSchema\n    schemasDescription ~~~ hairStyleSchema\n  end\n\n  Schemas:::mmdcontainer"}),"\n",(0,s.jsx)(n.h2,{id:"instantiation",children:"Instantiation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Table } from 'dynamodb-toolbox/table'\nimport { Entity } from 'dynamodb-toolbox/entity'\nimport { schema } from 'dynamodb-toolbox/schema'\n\n// Define a Table\nconst PokeTable = new Table(...)\n\n// Define an entity\nconst PokemonEntity = new Entity({\n  // Assign it to a table\n  table: PokeTable,\n  // Specify its schema\n  schema: schema(...)\n  ...\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["An entity must belong to a Table, but the same Table can contain items from several entities. DynamoDB-Toolbox is designed with ",(0,s.jsx)(n.a,{href:"https://www.alexdebrie.com/posts/dynamodb-single-table/",children:"Single Tables"})," in mind, but works just as well with multiple tables, it'll still make your life much easier (batch gets and writes support multiple tables, so we've got you covered)."]}),"\n",(0,s.jsxs)(n.p,{children:["Once you have defined your ",(0,s.jsx)(n.code,{children:"Tables"})," and ",(0,s.jsx)(n.code,{children:"Entities"}),". You can start using them in combination with ",(0,s.jsx)(n.a,{href:"#methods-vs-actions",children:"Actions"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"methods-vs-actions",children:"Methods vs Actions"}),"\n",(0,s.jsxs)(n.p,{children:["Queries, updates, transactions, batch operations... DynamoDB has a ",(0,s.jsx)(n.strong,{children:"wide range of features"}),". Exposing all of them as distinct methods would ",(0,s.jsxs)(n.strong,{children:["bloat the ",(0,s.jsx)(n.code,{children:"Entity"})," and ",(0,s.jsx)(n.code,{children:"Table"})," classes"]}),". Class methods are not tree-shakable, and why bother bundling the code needed for a feature (which can be quite large) if you don't need it?"]}),"\n",(0,s.jsxs)(n.p,{children:["Instead, ",(0,s.jsx)(n.code,{children:"Tables"}),", ",(0,s.jsx)(n.code,{children:"Entities"})," and ",(0,s.jsx)(n.code,{children:"Schemas"})," have a single ",(0,s.jsx)(n.code,{children:".build"})," method which is exactly ",(0,s.jsx)(n.strong,{children:"1-line long"})," \ud83e\udd2f and acts as a gateway to perform ",(0,s.jsx)(n.a,{href:"#how-do-actions-work",children:"Actions"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { GetItemCommand } from 'dynamodb-toolbox/entity/actions/get'\n\nconst { Item } = await PokemonEntity.build(GetItemCommand)\n  .key(key)\n  .send()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["DynamoDB operations like the ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/get-item/",children:"GetItemCommand"})," are instances of actions, but DynamoDB-Toolbox also exposes utility actions, e.g. for ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/parse/",children:"parsing"}),", ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/format/",children:"formatting"})," or ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/spy/",children:"spying"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The syntax is a bit more verbose than a simple ",(0,s.jsx)(n.code,{children:"PokemonEntity.get(key)"}),", but it allows for ",(0,s.jsx)(n.strong,{children:"extensibility"}),", ",(0,s.jsx)(n.strong,{children:"better code-splitting"})," and ",(0,s.jsx)(n.strong,{children:"lighter bundles"})," while keeping an intuitive ",(0,s.jsx)(n.strong,{children:"entity-oriented"})," and ",(0,s.jsx)(n.strong,{children:"type-inheriting syntax"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Notice how the action is imported through a deep import, thanks to the ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/packages.html#subpath-exports",children:(0,s.jsx)(n.code,{children:"exports"})})," field of the ",(0,s.jsx)(n.code,{children:"package.json"}),"."]}),(0,s.jsx)(n.p,{children:"Although all classes and actions are exposed in the main entry path, we recommend using subpaths, and that's what we'll do in the rest of the documentation."})]}),"\n",(0,s.jsx)(n.h2,{id:"aborting-an-action",children:"Aborting an Action"}),"\n",(0,s.jsxs)(n.p,{children:["All the actions that use the DocumentClient (like the ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/get-item/",children:"GetItemCommand"}),") expose an asynchronous ",(0,s.jsx)(n.code,{children:".send()"})," method to perform the underlying operation."]}),"\n",(0,s.jsxs)(n.p,{children:["Any option provided to this method is passed to the DocumentClient. This includes the ",(0,s.jsx)(n.code,{children:"abortSignal"})," option mentioned in the ",(0,s.jsx)(n.a,{href:"https://github.com/aws/aws-sdk-js-v3?tab=readme-ov-file#abortcontroller-example",children:"AWS SDK documentation"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const abortController = new AbortController()\nconst abortSignal = abortController.signal\n\nconst { Item } = await PokemonEntity.build(GetItemCommand)\n  .key(key)\n  .send({ abortSignal })\n\n// \ud83d\udc47 Aborts the command\nabortController.abort()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-do-actions-work",children:"How do Actions work?"}),"\n",(0,s.jsxs)(n.p,{children:["There are three types of actions: ",(0,s.jsx)(n.a,{href:"/docs/tables/actions/scan/",children:"Table Actions"}),", ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/get-item/",children:"Entity Actions"})," and ",(0,s.jsx)(n.a,{href:"/docs/schemas/actions/parse",children:"Schema Actions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Each type of action is essentially a class that respectively accepts a ",(0,s.jsx)(n.code,{children:"Table"}),", ",(0,s.jsx)(n.code,{children:"Entity"})," or a ",(0,s.jsx)(n.code,{children:"Schema"})," as the first parameter of its constructor, with all other parameters being optional."]}),"\n",(0,s.jsxs)(n.p,{children:["For instance, here's the definition of a simple ",(0,s.jsx)(n.code,{children:"NameGetter"})," action that... well, gets the name of an ",(0,s.jsx)(n.code,{children:"Entity"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import {\n  Entity,\n  EntityAction\n} from 'dynamodb-toolbox/entity'\n\nexport class NameGetter<\n  ENTITY extends Entity = Entity\n> extends EntityAction<ENTITY> {\n  constructor(entity: ENTITY) {\n    super(entity)\n  }\n\n  get(): ENTITY['name'] {\n    return this.entity.name\n  }\n}\n\nconst pokeNameGetter = PokemonEntity.build(NameGetter)\n// => NameGetter<typeof PokemonEntity>\nconst pokemonEntityName = pokeNameGetter.get()\n// => \"POKEMON\"\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PokemonEntity.build"})," simply ",(0,s.jsxs)(n.strong,{children:["instanciates a ",(0,s.jsx)(n.em,{children:"new"})," action"]})," with ",(0,s.jsx)(n.code,{children:"PokemonEntity"})," as the constructor first parameter. Another way to do it would be:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const pokeNameGetter = new NameGetter(PokemonEntity)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Although, we find, this action-oriented syntax is ",(0,s.jsx)(n.strong,{children:"less readable"})," than the entity-oriented one, it leads to exactly the same result, so feel free to use it if you prefer!"]}),"\n",(0,s.jsxs)(n.p,{children:["Here's a comparison of both syntaxes on the ",(0,s.jsx)(n.a,{href:"/docs/entities/actions/get-item/",children:(0,s.jsx)(n.code,{children:"GetItemCommand"})})," action:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// \ud83d\udc47 Entity-oriented\nconst { Item } = await PokemonEntity.build(GetItemCommand)\n  .key({ pokemonId: 'pikachu1' })\n  .options({ consistent: true })\n  .send()\n\n// \ud83d\udc47 Action-oriented\nconst { Item } = await new GetItemCommand(\n  PokemonEntity,\n  { pokemonId: 'pikachu1' },\n  { consistent: true }\n).send()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);