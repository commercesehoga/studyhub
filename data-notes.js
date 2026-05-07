/* ═══════════════════════════════════════════════════════════════
   DATA — NOTES  (data-notes.js)
   Edit this file to add/update/remove notes.
   Re-open index.html — changes apply instantly.
   ═══════════════════════════════════════════════════════════════
   Dependencies:  gd() helper defined in index.html
   Exports:       NOTES_DATA
═══════════════════════════════════════════════════════════════ */

const NOTES_DATA=[
  // ── BST — SAME SYLLABUS (one purchase = both Class 12 & CUET) ──
  {id:'n_bst_back',title:'BST Backbencher Notes',subject:'BST',
   groups:['class12','cuet'],sameSyllabus:true,subgroup:'commerce',type:'backbencher',
   difficulty:'beginner',pages:32,price:50,comingSoon:false,
   files:[{name:'BST Backbencher Notes',url:gd('1CDrOyMwHWa2mcozpu0PdMmUF2BQjl7cG'),dlId:'1CDrOyMwHWa2mcozpu0PdMmUF2BQjl7cG',forClass12:true,forCuet:true}]},
  {id:'n_bst_topper',title:'BST Topper Notes',subject:'BST',
   groups:['class12','cuet'],sameSyllabus:true,subgroup:'commerce',type:'topper',
   difficulty:'advanced',pages:50,price:50,comingSoon:false,
   files:[{name:'BST Topper Notes',url:gd('1jV6D66X79pNlWg96ZWIZo-ujTR-43Ky6'),dlId:'1jV6D66X79pNlWg96ZWIZo-ujTR-43Ky6',forClass12:true,forCuet:true}]},
  {id:'n_bst_digital',title:'BST Digital Notes',subject:'BST',
   groups:['class12','cuet'],sameSyllabus:true,subgroup:'commerce',type:'digital',
   difficulty:'intermediate',pages:38,price:20,comingSoon:true,files:[]},
  // ── ECO — DIFFERENT files for Class 12 vs CUET (4 files, 60 HP) ──
  {id:'n_eco_back',title:'ECO Backbencher Notes',subject:'ECO',
   groups:['class12','cuet'],sameSyllabus:false,multiFile:true,subgroup:'commerce',type:'backbencher',
   difficulty:'beginner',pages:120,price:60,comingSoon:false,
   files:[
     {id:'f1',name:'Macro Economics',url:gd('1uDeYgqMrgbQch_wXlAlV69IrpTQmgLF-'),dlId:'1uDeYgqMrgbQch_wXlAlV69IrpTQmgLF-',forClass12:true,forCuet:true,tag:'Macro'},
     {id:'f2',name:'Micro Economics',url:gd('1bTlvZ1VRjIznpc1uH7xRBU8ieNH5oWH0'),dlId:'1bTlvZ1VRjIznpc1uH7xRBU8ieNH5oWH0',forClass12:false,forCuet:true,tag:'Micro'},
     {id:'f3',name:'Indian Economy',url:gd('1TQfPOWQsRJK_78W58pOMUGENtmsUQv_q'),dlId:'1TQfPOWQsRJK_78W58pOMUGENtmsUQv_q',forClass12:true,forCuet:true,tag:'Indian'},
     {id:'f4',name:'Special Notes',url:gd('1V_WH1eNjBXKlEStwhmErHB7VQuYwgnFw'),dlId:'1V_WH1eNjBXKlEStwhmErHB7VQuYwgnFw',forClass12:true,forCuet:false,tag:'Special'}
   ],
   class12FileIds:['f1','f3','f4'],cuetFileIds:['f1','f2','f3']},
  {id:'n_eco_topper_macro',title:'ECO Macro Topper Notes',subject:'ECO',groups:['class12','cuet'],subgroup:'commerce',type:'topper',difficulty:'advanced',pages:60,price:50,comingSoon:true,files:[]},
  {id:'n_eco_topper_indian',title:'ECO Indian Economy Topper Notes',subject:'ECO',groups:['class12','cuet'],subgroup:'commerce',type:'topper',difficulty:'advanced',pages:55,price:50,comingSoon:true,files:[]},
  {id:'n_eco_topper_micro',title:'ECO Micro Topper Notes',subject:'ECO',groups:['cuet'],subgroup:'commerce',type:'topper',difficulty:'advanced',pages:50,price:50,comingSoon:true,files:[]},
  {id:'n_eco_digital',title:'ECO Digital Notes',subject:'ECO',groups:['class12','cuet'],subgroup:'commerce',type:'digital',difficulty:'intermediate',pages:40,price:20,comingSoon:true,files:[]},
  // ── ACC ──
  {id:'n_acc_topper',title:'ACC Topper Notes',subject:'ACC',groups:['cuet'],subgroup:'commerce',type:'topper',difficulty:'advanced',pages:60,price:50,comingSoon:true,files:[]},
  {id:'n_acc_digital',title:'ACC Digital Notes',subject:'ACC',groups:['class12'],subgroup:'commerce',type:'digital',difficulty:'intermediate',pages:50,price:20,comingSoon:true,files:[]},
  // ── Sciences ──
  {id:'n_che_hw',title:'Chemistry Handwritten Notes',subject:'CHE',groups:['class12','cuet'],subgroup:'science',type:'handwritten',difficulty:'advanced',pages:80,price:60,comingSoon:true,files:[]},
  {id:'n_phy_hw',title:'Physics Handwritten Notes',subject:'PHY',groups:['class12','cuet'],subgroup:'science',type:'handwritten',difficulty:'advanced',pages:90,price:60,comingSoon:true,files:[]},
  {id:'n_mat_hw',title:'Maths Handwritten Notes',subject:'MAT',groups:['class12','cuet'],subgroup:'science',type:'handwritten',difficulty:'advanced',pages:100,price:60,comingSoon:true,files:[]},
  {id:'n_bio_hw',title:'Biology Handwritten Notes',subject:'BIO',groups:['class12','cuet'],subgroup:'science',type:'handwritten',difficulty:'advanced',pages:85,price:60,comingSoon:true,files:[]},
  {id:'n_che_digital',title:'Chemistry Digital Notes',subject:'CHE',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:60,price:20,comingSoon:true,files:[]},
  {id:'n_phy_digital',title:'Physics Digital Notes',subject:'PHY',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:65,price:20,comingSoon:true,files:[]},
  {id:'n_mat_digital',title:'Maths Digital Notes',subject:'MAT',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:70,price:20,comingSoon:true,files:[]},
  {id:'n_bio_digital',title:'Biology Digital Notes',subject:'BIO',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:55,price:20,comingSoon:true,files:[]},
  {id:'n_che_ppt',title:'Chemistry PPT Notes',subject:'CHE',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:50,price:30,comingSoon:true,files:[]},
  {id:'n_phy_ppt',title:'Physics PPT Notes',subject:'PHY',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:55,price:30,comingSoon:true,files:[]},
  {id:'n_mat_ppt',title:'Maths PPT Notes',subject:'MAT',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:60,price:30,comingSoon:true,files:[]},
  {id:'n_bio_ppt',title:'Biology PPT Notes',subject:'BIO',groups:['class12','cuet'],subgroup:'science',type:'digital',difficulty:'intermediate',pages:48,price:30,comingSoon:true,files:[]},
  // ── Arts ──
  {id:'n_pol_digital',title:'Political Science Digital Notes',subject:'POL',groups:['class12','cuet'],subgroup:'arts',type:'digital',difficulty:'intermediate',pages:40,price:20,comingSoon:true,files:[]},
  {id:'n_pol_short',title:'Political Science Short Notes',subject:'POL',groups:['class12','cuet'],subgroup:'arts',type:'topper',difficulty:'intermediate',pages:50,price:50,comingSoon:true,files:[]},
  {id:'n_his_digital',title:'History Digital Notes',subject:'HIS',groups:['class12','cuet'],subgroup:'arts',type:'digital',difficulty:'intermediate',pages:45,price:20,comingSoon:true,files:[]},
  {id:'n_his_short',title:'History Short Notes',subject:'HIS',groups:['class12','cuet'],subgroup:'arts',type:'topper',difficulty:'intermediate',pages:55,price:50,comingSoon:true,files:[]},
  {id:'n_geo_digital',title:'Geography Digital Notes',subject:'GEO',groups:['class12','cuet'],subgroup:'arts',type:'digital',difficulty:'intermediate',pages:38,price:20,comingSoon:true,files:[]},
  {id:'n_geo_short',title:'Geography Short Notes',subject:'GEO',groups:['class12','cuet'],subgroup:'arts',type:'topper',difficulty:'intermediate',pages:45,price:50,comingSoon:true,files:[]},
  {id:'n_psy_digital',title:'Psychology Digital Notes',subject:'PSY',groups:['class12','cuet'],subgroup:'arts',type:'digital',difficulty:'intermediate',pages:35,price:20,comingSoon:true,files:[]},
  {id:'n_psy_short',title:'Psychology Short Notes',subject:'PSY',groups:['class12','cuet'],subgroup:'arts',type:'topper',difficulty:'intermediate',pages:42,price:50,comingSoon:true,files:[]},
  // ── Other ──
  {id:'n_eng_short',title:'English Short Notes',subject:'ENG',groups:['class12'],subgroup:'other',type:'topper',difficulty:'intermediate',pages:30,price:50,comingSoon:true,files:[]},
  {id:'n_eng_digital',title:'English Digital Notes',subject:'ENG',groups:['class12'],subgroup:'other',type:'digital',difficulty:'beginner',pages:25,price:20,comingSoon:true,files:[]},
  {id:'n_pe_back',title:'Physical Education Backbencher Notes',subject:'PE',groups:['class12'],subgroup:'other',type:'backbencher',difficulty:'beginner',pages:50,price:50,comingSoon:false,
   files:[{name:'Physical Education Notes',url:gd('1r3-2apCf4qaMBH47f0RKkrXwO7EcyoqY'),dlId:'1r3-2apCf4qaMBH47f0RKkrXwO7EcyoqY',forClass12:true,forCuet:false}]},
  {id:'n_pe_digital',title:'Physical Education Digital Notes',subject:'PE',groups:['class12'],subgroup:'other',type:'digital',difficulty:'beginner',pages:30,price:20,comingSoon:true,files:[]},
  // CUET only
  {id:'n_cuet_eng',title:'CUET English (4 Files)',subject:'ENG',groups:['cuet'],subgroup:'other',type:'topper',difficulty:'intermediate',pages:120,price:100,comingSoon:true,files:[],
   comingSoonNote:'Vocabulary + Grammar + Reading Ability + Reading Comprehension (notes + practice questions)'},
  {id:'n_cuet_gat',title:'CUET GAT (4 Files)',subject:'GAT',groups:['cuet'],subgroup:'other',type:'cuet',difficulty:'intermediate',pages:140,price:100,comingSoon:true,files:[],
   comingSoonNote:'Quantitative Aptitude + Numerical Aptitude + Reasoning + General Knowledge (notes + practice)'},
  {id:'n_cuet_pe',title:'CUET Physical Education Notes',subject:'PE',groups:['cuet'],subgroup:'other',type:'topper',difficulty:'intermediate',pages:80,price:80,comingSoon:true,files:[]},
];
