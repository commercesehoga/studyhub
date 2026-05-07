/* ═══════════════════════════════════════════════════════════════
   DATA — MCQs  (data-mcqs.js)
   Edit this file to add/update/remove MCQ packs.
   Re-open index.html — changes apply instantly.
   ═══════════════════════════════════════════════════════════════
   Exports: MCQS_DATA
═══════════════════════════════════════════════════════════════ */

const MCQS_DATA=[
  {id:'mcq_bst_special',title:'Business Studies',subject:'BST',chapter:'CUET Special Pack',mcqType:'special',difficulty:'hard',count:500,tags:['CUET Freq','Memory Based','Conceptual'],price:50,pdfUrl:'',
   coverColor:'#4f6ef7',coverColor2:'#7c3aed',coverIcon:'📊',
   units:[
     {name:'Unit 1 — Nature & Significance of Management',url:'https://thunderstudy.github.io/commerce/unit1.pdf'},
     {name:'Unit 2 — Principles of Management',url:'https://thunderstudy.github.io/commerce/unit2.pdf'},
     {name:'Unit 3 — Business Environment',url:'https://thunderstudy.github.io/commerce/unit3.pdf'},
     {name:'Unit 4 — Planning',url:'https://thunderstudy.github.io/commerce/unit4.pdf'},
     {name:'Unit 5 — Organising',url:'https://thunderstudy.github.io/commerce/unit5.pdf'},
     {name:'Unit 6 — Staffing',url:'https://thunderstudy.github.io/commerce/unit6.pdf'},
     {name:'Unit 7 — Directing',url:'https://thunderstudy.github.io/commerce/unit7.pdf'},
     {name:'Unit 8 — Controlling',url:'https://thunderstudy.github.io/commerce/unit8.pdf'},
     {name:'Unit 9 — Financial Management',url:'https://thunderstudy.github.io/commerce/unit9.pdf'},
     {name:'Unit 10 — Financial Markets',url:'https://thunderstudy.github.io/commerce/unit10.pdf'},
     {name:'Unit 11 — Marketing Management',url:'https://thunderstudy.github.io/commerce/unit11.pdf'},
     {name:'Unit 12 — Consumer Protection',url:'https://thunderstudy.github.io/commerce/unit12.pdf'},
   ],
   includes:['500 CUET-pattern MCQs','All chapters covered','Memory-based & conceptual','Detailed answer key','PYQ-style questions']},

  {id:'mcq_eco_macro',title:'Macroeconomics',subject:'ECO',chapter:'Macro Special Pack',mcqType:'special',difficulty:'hard',count:400,tags:['CUET Freq','Conceptual','Numerical'],price:50,pdfUrl:'',
   coverColor:'#10b981',coverColor2:'#059669',coverIcon:'📈',
   units:[
     {name:'Unit 1 — Introduction to Macroeconomics',url:'https://thunderstudy.github.io/macro1/unit1.pdf'},
     {name:'Unit 2 — National Income Accounting',url:'https://thunderstudy.github.io/macro1/unit2.pdf'},
     {name:'Unit 3 — Money & Banking',url:'https://thunderstudy.github.io/macro1/unit3.pdf'},
     {name:'Unit 4 — Income Determination',url:'https://thunderstudy.github.io/macro1/unit4.pdf'},
     {name:'Unit 5 — Government Budget & Economy',url:'https://thunderstudy.github.io/macro1/unit5.pdf'},
   ],
   includes:['400 CUET-pattern MCQs','National Income, Money, Banking','Balance of Payments','Numerical + conceptual mix','Detailed answer key']},

  {id:'mcq_eco_micro',title:'Microeconomics',subject:'ECO',chapter:'Micro Special Pack',mcqType:'special',difficulty:'hard',count:350,tags:['CUET Freq','Conceptual','Numerical'],price:50,pdfUrl:'',
   coverColor:'#06b6d4',coverColor2:'#0891b2',coverIcon:'📉',
   units:[
     {name:'Unit 1 — Introduction to Microeconomics',url:'https://thunderstudy.github.io/micro/unit1.pdf'},
     {name:'Unit 2 — Consumer Behaviour & Demand',url:'https://thunderstudy.github.io/micro/unit2.pdf'},
     {name:'Unit 3 — Producer Behaviour & Supply',url:'https://thunderstudy.github.io/micro/unit3.pdf'},
     {name:'Unit 4 — Forms of Market & Price Determination',url:'https://thunderstudy.github.io/micro/unit4.pdf'},
   ],
   includes:['350 CUET-pattern MCQs','Consumer behaviour, Demand-Supply','Production & Cost, Market forms','Numerical + conceptual mix','Detailed answer key']},

  {id:'mcq_eco_indian',title:'Indian Economy',subject:'ECO',chapter:'Indian Economy Special Pack',mcqType:'special',difficulty:'moderate',count:300,tags:['CUET Freq','Static GK'],price:50,pdfUrl:'',
   coverColor:'#f97316',coverColor2:'#c2410c',coverIcon:'🇮🇳',
   units:[
     {name:'Unit 1 — Indian Economy on the Eve of Independence',url:'https://thunderstudy.github.io/indians/unit1.pdf'},
     {name:'Unit 2 — Indian Economy 1950–1990',url:'https://thunderstudy.github.io/indians/unit2.pdf'},
     {name:'Unit 3 — Liberalisation, Privatisation & Globalisation',url:'https://thunderstudy.github.io/indians/unit3.pdf'},
     {name:'Unit 4 — Poverty, Human Capital & Rural Development',url:'https://thunderstudy.github.io/indians/unit4.pdf'},
   ],
   includes:['300 CUET-pattern MCQs','Economic reforms 1991','Poverty, Human Capital, Agriculture','Infrastructure & Globalisation','Detailed answer key']},

  {id:'mcq_eng_special',title:'English',subject:'ENG',chapter:'CUET English Special Pack',mcqType:'special',difficulty:'moderate',count:400,tags:['CUET Freq','Reading','Grammar'],price:50,pdfUrl:'',
   coverColor:'#ec4899',coverColor2:'#be185d',coverIcon:'📝',
   externalUrl:'https://thunderstudy.github.io/english',
   includes:['400 CUET-pattern MCQs','Reading Comprehension passages','Vocabulary & Grammar','Rearrangement & Fill-in-blanks','Detailed answer key']},

  {id:'mcq_gat_special',title:'GAT — General Aptitude',subject:'GAT',chapter:'CUET GAT Special Pack',mcqType:'special',difficulty:'moderate',count:350,tags:['CUET Freq','Logical','Quant'],price:50,pdfUrl:'',
   coverColor:'#f59e0b',coverColor2:'#d97706',coverIcon:'🧠',
   externalUrl:'https://thunderstudy.github.io/gat',
   includes:['350 CUET-pattern MCQs','Quantitative & Numerical Aptitude','Logical & Analytical Reasoning','General Knowledge','Detailed answer key']},
];
