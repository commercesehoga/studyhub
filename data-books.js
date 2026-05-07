/* ═══════════════════════════════════════════════════════════════
   DATA — BOOKS  (data-books.js)
   Edit this file to add/update/remove books.
   Re-open index.html — changes apply instantly.
   ═══════════════════════════════════════════════════════════════
   Dependencies:  gd() helper defined in index.html
   Exports:       BOOKS_DATA, CUET_BOOKS_DATA, BUNDLES
═══════════════════════════════════════════════════════════════ */

const BOOKS_DATA=[
  {id:'b_bst_sp',title:'BST Sample Paper 2025',subject:'BST',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8dTFxYyqdwbqjonH2gABF1n4p2QRGo6XYf8Qis4XlyH72kIyj7Hf9i3NRpeVklcgMdzdbN3eNHSZMkVJ2gUTnWy3fCA2iD6xf1HdFP3j76DAE-GT2gv4vYTf2Notl3BcVqoI58STzbyiNAbVleQPsPI6M8BWJvwK5kB4MdycR6Ges-MqxJe-_PNGg4qLU/s320/photo_6334467078567431810_w.jpg',
   seriesName:'One Book',icon:'📊',color:'#4f6ef7',color2:'#7c3aed',hot:true,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'2400+',rating:'4.9',pages:'180+',
   reviews:[
     {name:'Ananya S.',stars:5,text:'Scored 96% in boards! BST sample papers covered every question type perfectly.',avatar:'A'},
     {name:'Rahul M.',stars:5,text:'The topper answer sheets alone are worth it. Understood exactly how to write answers.',avatar:'R'},
     {name:'Priya K.',stars:5,text:'5 PYQs + 5 sample papers in one book. Saved so much time before exams!',avatar:'P'}
   ],
   fileId:'1DLmycEFTEg7vcBqtlxLgV9ALNNdJBiUb',
   files:[{name:'BST Sample Papers 2025',url:gd('1DLmycEFTEg7vcBqtlxLgV9ALNNdJBiUb'),dlId:'1DLmycEFTEg7vcBqtlxLgV9ALNNdJBiUb'}],
   contents:['5 Full Sample Papers','5 Year PYQs with Answers','Imp Dates & Formula Sheet','Topper Answer Sheets','50 Most Imp Questions','Chapter-wise Mindmaps']},

  {id:'b_eco_sp',title:'ECO Sample Paper 2025',subject:'ECO',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl8RNsWToiA_hBCl_BGTExTZ93KaFvHMaaEp2KMrGOpnHgW65pNf3F6SmJNul3E40Cci1QFk5MHMgG3nFjeqiAsjmaVbVbqdnOmWrdrqaudSk6BHQ_2srnYXnXLuv_t4Qw9A77myjZEA66tqCfLeiGH0VxZMVvv36txsheaVIFzUvboNP1WTNaiDJZBZPW/s320/photo_6334467078567431827_y.jpg',
   seriesName:'One Book',icon:'📈',color:'#10b981',color2:'#059669',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'2100+',rating:'4.8',pages:'175+',
   reviews:[
     {name:'Sneha R.',stars:5,text:'Economics was my weakest subject. After this book I scored 92%. Highly recommend!',avatar:'S'},
     {name:'Arjun T.',stars:5,text:'The formula sheet and important dates saved me in the last 2 days before exam.',avatar:'A'},
     {name:'Meera V.',stars:4,text:'Good coverage of both macro and micro. Mindmaps are very helpful for revision.',avatar:'M'}
   ],
   fileId:'1yuMvgUK5WirZD7YLlaKDmBAT8kSuDCTF',
   files:[{name:'Economics Sample Papers 2025',url:gd('1yuMvgUK5WirZD7YLlaKDmBAT8kSuDCTF'),dlId:'1yuMvgUK5WirZD7YLlaKDmBAT8kSuDCTF'}],
   contents:['5 Full Sample Papers','5 Year PYQs with Answers','Imp Dates & Formula Sheet','Topper Answer Sheets','50 Most Imp Questions','Chapter-wise Mindmaps']},

  {id:'b_acc_sp',title:'ACC Sample Paper 2025',subject:'ACC',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKfybuzy1nQuXqAZleNwWgN5ijciGPjNkXWxv9coLJnJrPfthtVcqOZ1jV2fcrvvxAEYGrHxI8lBQgJp5vy1xAOSueIVJ4hondJvxiQIB7DzOuWa-JLlyGk0-1B4pLguuMC2AP7CdIS6awb2hMJEAPFIdZ4ZkTr_LG65LDaADDpZZtMTXkvE-_evfaUR9R/s320/photo_6052869020978973973_y.jpg',
   seriesName:'One Book',icon:'📒',color:'#06b6d4',color2:'#0891b2',hot:true,price:100,comingSoon:false,
   difficulty:'Hard',studentsCount:'1900+',rating:'4.9',pages:'200+',
   reviews:[
     {name:'Kavya M.',stars:5,text:'Accountancy is tough but this book made it so simple. Scored 95 in boards!',avatar:'K'},
     {name:'Dev P.',stars:5,text:'Every important journal entry type is covered. The topper sheets show exactly what examiners want.',avatar:'D'},
     {name:'Riya S.',stars:5,text:'Best ACC prep material I found. 50 imp questions were spot on for my exam.',avatar:'R'}
   ],
   fileId:'1YtMFhtJiRhMUrsW_aNUxPLO5ZsOBD-4I',
   files:[{name:'Accountancy Sample Papers 2025',url:gd('1YtMFhtJiRhMUrsW_aNUxPLO5ZsOBD-4I'),dlId:'1YtMFhtJiRhMUrsW_aNUxPLO5ZsOBD-4I'}],
   contents:['5 Full Sample Papers','5 Year PYQs with Answers','Imp Dates & Formula Sheet','Topper Answer Sheets','50 Most Imp Questions','Chapter-wise Mindmaps']},

  {id:'b_mat_sp',title:'Maths Sample Papers 2025',subject:'MAT',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAR01v96gJen_AO5Nc0j3LvLmPQSA0MRK3UNEsTYZOEDFCl-JBiu2-FnVSDCKmWNV4k24GKNY7_reZLEJ7iO8bCFXkv-yxUKr4l8ztsSL6t7yFBTqNgz_YZ1cQ3q76ff47hzkdJdS3B3BKWN1JKGZzoYTNNNUchvzdoGeqWJbWSGSGuLoIdWYLHmLm0_9M/s320/photo_6084659406831291790_y%20(1).jpg',
   seriesName:'One Book',icon:'📐',color:'#f97316',color2:'#c2410c',hot:false,price:100,comingSoon:false,
   difficulty:'Hard',studentsCount:'2200+',rating:'4.8',pages:'230+',
   reviews:[
     {name:'Aashi T.',stars:5,text:'Maths was my nightmare. This book with 5 sample papers changed everything. Got 91!',avatar:'A'},
     {name:'Karan M.',stars:5,text:'The formula sheet is incredibly well organized. Used it every day before exam.',avatar:'K'},
     {name:'Divya R.',stars:4,text:'50 most important questions were very accurately selected. Most came in actual exam.',avatar:'D'}
   ],
   fileId:'1ax2PhTqJ5Pd8Boo8_eMm6EzCX1MFI38O',
   files:[{name:'Mathematics Sample Papers 2025',url:gd('1ax2PhTqJ5Pd8Boo8_eMm6EzCX1MFI38O'),dlId:'1ax2PhTqJ5Pd8Boo8_eMm6EzCX1MFI38O'}],
   contents:['5 Full Sample Papers','5 Year PYQs with Answers','Imp Formula Sheet','Topper Answer Sheets','50 Most Imp Questions','Mindmaps']},

  {id:'b_amat_sp',title:'Applied Maths Boards Pro',subject:'AMAT',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgy3rdefhnGkQvpTr82dlygRd0z-tNCqoUCHQS_qK4iBHjwYe8rK1ElBAkrROaaoqsF-hPkXI5N4lmtK2OMlSQ5mWkn95fbtGIVK2pzgv-Uh5F6YGI6NYW0nX7W9MvyB3DirLosG-lfc6oayCHtM5ZqEXrNqawf08ZpoqVbGzDD24YG3FKh2xDQtjRk5CNw/s320/photo_6122813864769425242_y.jpg',
   seriesName:'Boards Pro',icon:'🔢',color:'#f97316',color2:'#c2410c',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'900+',rating:'4.7',pages:'150+',
   reviews:[
     {name:'Rishi P.',stars:5,text:'Applied Maths has very less study material available. This book covered everything perfectly.',avatar:'R'},
     {name:'Sakshi M.',stars:4,text:'Sample papers are well structured. Important questions section is very relevant.',avatar:'S'},
     {name:'Nikhil V.',stars:5,text:'Got 95 in Applied Maths. The PYQ section helped me understand the exam pattern.',avatar:'N'}
   ],
   fileId:'1cyisocoFyYZXaceziC8nvj4pXmcUPJg9',
   files:[{name:'Applied Maths Boards Pro',url:gd('1cyisocoFyYZXaceziC8nvj4pXmcUPJg9'),dlId:'1cyisocoFyYZXaceziC8nvj4pXmcUPJg9'}],
   contents:['Detailed Notes','Sample Papers','Previous Year Questions','Imp Questions','Imp Topics']},

  {id:'b_his_sp',title:'History Boards Killer',subject:'HIS',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhL3vsKcFxgxCaq9V-6k8L_PLGEowMqb6uV_hAOohQI-YtVJobPqszUsjeJOxnD5G-H2bCFuIjr8XCvSDFzlYyD5UTkZ5oWya6OtH0UDb9anx1pgtNGi2NW9zD4p0FrGaBy9UnFgutvtYl1XdaLXJcRleGRu-6YI2W3xfo0rayp6Abz83MCG76whx1_oP8C/s320/photo_4940627101547695096_y.jpg',
   seriesName:'Boards Killer',icon:'📜',color:'#d97706',color2:'#92400e',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'1200+',rating:'4.8',pages:'190+',
   reviews:[
     {name:'Pallavi S.',stars:5,text:'History has so much to memorize. This book with short notes made it manageable. Scored 90!',avatar:'P'},
     {name:'Aryan K.',stars:5,text:'Top 50 case studies were exactly what I needed. 3 came directly in my board exam.',avatar:'A'},
     {name:'Ishaan R.',stars:4,text:'The topper guide explains how to write long answers. Improved my marks significantly.',avatar:'I'}
   ],
   fileId:'11upgGG2uvS0uH5Qku2fK_N9uxRbnpBQ7',
   files:[{name:'History Boards Killer',url:gd('11upgGG2uvS0uH5Qku2fK_N9uxRbnpBQ7'),dlId:'11upgGG2uvS0uH5Qku2fK_N9uxRbnpBQ7'}],
   contents:['Imp Topics & Questions','Top 50 MCQs + Questions','Top 50 Case Studies','VBQ Questions','Short Notes','3 Sample Papers with Answers','3 PYQs with Answers','Topper Answer Sheet','Topper Guide']},

  {id:'b_geo_sp',title:'Geography Boards Killer',subject:'GEO',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj35ftL7t_qoDucmdABcQmVc8K5iXcVH5ec7wNhNFlGj_svtA-jTMUN9J5TKD6JcOnaZFPJ4b59rOEysh-b1ijRONUcyCuje-WEmLfq9IADT8HkI0EH_EryyPzFeNYWepRxwdWlIclVurtXztmULvLv6zDdSVKnuOdb255GMFScWVCaIZxV11DDlFGiEfTS/s320/photo_4920531370476506095_y%20(1).jpg',
   seriesName:'Boards Killer',icon:'🌏',color:'#0ea5e9',color2:'#0369a1',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'1100+',rating:'4.7',pages:'185+',
   reviews:[
     {name:'Tanvi M.',stars:5,text:'Geography maps and case studies are perfectly covered. Got 92 in boards!',avatar:'T'},
     {name:'Rohan S.',stars:4,text:'VBQ section was very helpful. These types of questions always confuse me but not anymore.',avatar:'R'},
     {name:'Kriti P.',stars:5,text:'Short notes before exam were a lifesaver. Revised entire geo in one night.',avatar:'K'}
   ],
   fileId:'1Qr-lS5doyEK7_MFqUO3w8iT2Brr02O66',
   files:[{name:'Geography Boards Killer',url:gd('1Qr-lS5doyEK7_MFqUO3w8iT2Brr02O66'),dlId:'1Qr-lS5doyEK7_MFqUO3w8iT2Brr02O66'}],
   contents:['Imp Topics & Questions','Top 50 MCQs + Questions','Top 50 Case Studies','VBQ Questions','Short Notes','3 Sample Papers with Answers','3 PYQs with Answers','Topper Answer Sheet','Topper Guide']},

  {id:'b_pol_sp',title:'Political Science Boards Killer',subject:'POL',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ9IGdsfoCyqUpioAjJQFVtn22ckDt1K7gEpFAuy7o7papDZsKFqofPqN2Jwy_mD-yMM1VVx6n-KbnM_v2gDiZbUTnfUdNg6dLv2j8JvL6-LFFxXhZrTOsY-jH7GIxEUIJYgHTTmk_0nSisQ4YqbeD0Wm_QWWxkjpx5ZdZ4ol-Q5nic4dxP1iuGhg5M-ta/s320/photo_4951850989258476381_y.jpg',
   seriesName:'Boards Killer',icon:'🏛️',color:'#8b5cf6',color2:'#6d28d9',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'1000+',rating:'4.7',pages:'180+',
   reviews:[
     {name:'Aishwarya T.',stars:5,text:'Pol science has tricky case studies. This book prepared me for every type. Got 88!',avatar:'A'},
     {name:'Manan K.',stars:5,text:'The topper answer sheet shows perfect presentation. Examiner loved my answers.',avatar:'M'},
     {name:'Diya S.',stars:4,text:'Top 50 MCQs were very relevant for CUET too. Double benefit!',avatar:'D'}
   ],
   fileId:'11hpGbHXtm6oshtr_MH3jiqMfbflDxB0N',
   files:[{name:'Political Science Boards Killer',url:gd('11hpGbHXtm6oshtr_MH3jiqMfbflDxB0N'),dlId:'11hpGbHXtm6oshtr_MH3jiqMfbflDxB0N'}],
   contents:['Imp Topics & Questions','Top 50 MCQs + Questions','Top 50 Case Studies','VBQ Questions','Short Notes','3 Sample Papers with Answers','3 PYQs with Answers','Topper Answer Sheet','Topper Guide']},

  {id:'b_eng_sp',title:'English Boards Killer',subject:'ENG',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_Wka7UooZOYDdJjZ0hBdG4VM61oq1PjKyrvT1Nj1v5hPMv8qJkN8U3AIpVs9esJ6lCoOyRZ5md47wxztOeCL2sTvjGP7fyh5Wbyhbiawt4ZjIboWPRfArhoTmsP6vKCHRGpT2z2reiyvGf0IO3EVcEAAaKGvasyjE2M3g0nsgBvUPJeSVhRpky3B7_rUy/s320/photo_6113973954490862805_y.jpg',
   seriesName:'Boards Killer',icon:'📝',color:'#ec4899',color2:'#be185d',hot:false,price:100,comingSoon:false,
   difficulty:'Easy',studentsCount:'1600+',rating:'4.8',pages:'165+',
   reviews:[
     {name:'Shreya M.',stars:5,text:'English writing section improved so much after seeing topper answer formats. Got 95!',avatar:'S'},
     {name:'Kabir R.',stars:5,text:'The reading comprehension tips and sample papers are exactly what you need.',avatar:'K'},
     {name:'Zara K.',stars:4,text:'Very well structured. Covers literature + writing both very thoroughly.',avatar:'Z'}
   ],
   fileId:'16_XgTuIXNpJ7jkpJT_ckSd6-Qa9yg8Ff',
   files:[{name:'English Boards Killer',url:gd('16_XgTuIXNpJ7jkpJT_ckSd6-Qa9yg8Ff'),dlId:'16_XgTuIXNpJ7jkpJT_ckSd6-Qa9yg8Ff'}],
   contents:['Imp Topics & Questions','Top 50 MCQs + Questions','Top 50 Case Studies','VBQ Questions','Short Notes','3 Sample Papers with Answers','3 PYQs with Answers','Topper Answer Sheet','Topper Guide']},

  {id:'b_art_sp',title:'Arts/Painting Boards Pro',subject:'ART',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfpu8ccshXQ5XKvjhmhA2K4_eJUPlEn6mqy6S9Jyixj8AiNf2KNv-3yv4-SBUfxum0zRbp6zERg9u3wED9no8hx1Kkydk4a5YigbIXDklfpG3Ak6dZTgzFQnV6f2eqjfwGdxYHmdveyiXhd7B1PKsovSysWfx11JxJ-33fXwyw7VnT7kiv4skA6BM7r-PV/s320/photo_4967569225237072796_y.jpg',
   seriesName:'Boards Pro',icon:'🎨',color:'#a855f7',color2:'#7c3aed',hot:false,price:100,comingSoon:false,
   difficulty:'Easy',studentsCount:'600+',rating:'4.6',pages:'140+',
   reviews:[
     {name:'Anushka P.',stars:5,text:'Very rare to find good study material for Arts/Painting. This is exactly what I needed!',avatar:'A'},
     {name:'Sarthak M.',stars:4,text:'Previous year questions section helped me understand the exam pattern clearly.',avatar:'S'},
     {name:'Nandini R.',stars:5,text:'Important topics are well highlighted. Made my preparation so much more focused.',avatar:'N'}
   ],
   fileId:'1xWpUAkiiaMJ25qBrU1jA4VAG6R06Qc0-',
   files:[{name:'Arts/Painting Boards Pro',url:gd('1xWpUAkiiaMJ25qBrU1jA4VAG6R06Qc0-'),dlId:'1xWpUAkiiaMJ25qBrU1jA4VAG6R06Qc0-'}],
   contents:['Detailed Notes','Sample Papers','Previous Year Questions','Imp Questions','Imp Topics']},

  {id:'b_psy_sp',title:'Psychology Boards Pro',subject:'PSY',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG3yLTmzK9pF5k7KJGlVmFP_EsBoAwwkVk1iZJ86j_7kKzIU0IlxNZSmVL_yFLqV7Skb5nrNiLVdH24hNlXcrYJxy7B7f0tRriejZuhOBwQ_DA1TIlF3wiJ4LJzYowr5ufJqsciIvpy3fQXaBFmWWWClS1MheYXiCND9kHFOSHlR6WnWqZODOi9anv7_e/s1280/photo_6129893465521851821_y.jpg',
   seriesName:'Boards Pro',icon:'🧠',color:'#a855f7',color2:'#7c3aed',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'750+',rating:'4.7',pages:'155+',
   reviews:[
     {name:'Ruhani S.',stars:5,text:'Psychology theories are so hard to remember. This book made it systematic. Got 91!',avatar:'R'},
     {name:'Vihaan M.',stars:5,text:'Case study based questions are perfectly covered. Exactly what boards ask.',avatar:'V'},
     {name:'Ishita K.',stars:4,text:'Important questions selection is very accurate. Almost everything came in my exam.',avatar:'I'}
   ],
   fileId:'1rZRdrl47BgAhzFIi_7-vawg0MS1Q-K5V',
   files:[{name:'Psychology Boards Pro',url:gd('1rZRdrl47BgAhzFIi_7-vawg0MS1Q-K5V'),dlId:'1rZRdrl47BgAhzFIi_7-vawg0MS1Q-K5V'}],
   contents:['Detailed Notes','Sample Papers','Previous Year Questions','Imp Questions','Imp Topics']},

  {id:'b_pe_sp',title:'PE Boards Dominator 2025',subject:'PE',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZEbhOqMj2wJP2wfO0rP8zRTj3QHMOS7SJVpxNEywWqXnBm1Ozd9Q07GafMbQjIC11BwLfg-hr20owBFwz2P7kbmqxLDYroYC9ksGI44Z9ONRmWyxdYhnltCI6035nl-15o33JcPvvR4E_6JaS-Auv6IrIkQca7KGgk0shG6C23F6h_GmmzOrkVxeBRzh6/s320/photo_6057485470872046814_y%20(1).jpg',
   seriesName:'Boards Dominator',icon:'🏃',color:'#ef4444',color2:'#b91c1c',hot:false,price:100,comingSoon:false,
   difficulty:'Easy',studentsCount:'1500+',rating:'4.8',pages:'160+',
   reviews:[
     {name:'Amit K.',stars:5,text:'PE is an easy scoring subject and this book makes it even easier. Got full marks!',avatar:'A'},
     {name:'Nisha T.',stars:5,text:'The cheatsheet for last minute revision is absolutely brilliant. Covered everything.',avatar:'N'},
     {name:'Rohit S.',stars:4,text:'Great collection of PYQs. The mindmap helps remember all topics quickly.',avatar:'R'}
   ],
   fileId:'14bVO8Y1gt4EihTCVjlcaCajEcBDdCqZw',
   files:[{name:'Physical Education Boards Dominator',url:gd('14bVO8Y1gt4EihTCVjlcaCajEcBDdCqZw'),dlId:'14bVO8Y1gt4EihTCVjlcaCajEcBDdCqZw'}],
   contents:['Chapterwise PYQs','Most Imp Questions & Topics','Most Repeated Questions','5 Full PYQs with Answers','5 Full Sample Papers','Last Minute Cheatsheet','Mindmap','Topper Answer Sheet']},

  {id:'b_che_sp',title:'Chemistry Boards Dominator',subject:'CHE',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3zdoZXa-PzfTrACJBVETKyl2jiRZZc5XuQr6twE2d2E_5474_QnyIewfLohhFDCY8tPkLTEaMPvLThmG9lX_1fSzOoeuPkcCcYfIXennmjpxKU9NNQUkNK_JUZmotKWZPmb8r6CgM1VP-_hWaX_hLb3hCcIL46YOqXSj7ki74y2VJETpfL1Pya5zzkkeN/s320/photo_4922813557183810432_y%20(1).jpg',
   seriesName:'Boards Dominator',icon:'🧪',color:'#14b8a6',color2:'#0f766e',hot:false,price:100,comingSoon:false,
   difficulty:'Hard',studentsCount:'1800+',rating:'4.7',pages:'220+',
   reviews:[
     {name:'Pooja R.',stars:5,text:'Chemistry was killing me. This book with chapterwise PYQs turned it around. Scored 88!',avatar:'P'},
     {name:'Siddharth K.',stars:5,text:'The formula cheatsheet is a lifesaver. Revised entire chemistry in 2 days.',avatar:'S'},
     {name:'Anjali M.',stars:4,text:'Very detailed coverage. The topper answer sheet shows exactly how to present answers.',avatar:'A'}
   ],
   fileId:'16GgFo4HwLvfoHCLzk2cWjfxFPZZ2IykR',
   files:[{name:'Chemistry Boards Dominator',url:gd('16GgFo4HwLvfoHCLzk2cWjfxFPZZ2IykR'),dlId:'16GgFo4HwLvfoHCLzk2cWjfxFPZZ2IykR'}],
   contents:['Chapterwise PYQs','Most Imp Questions & Topics','Most Repeated Questions','5 Full PYQs with Answers','5 Full Sample Papers','Last Minute Cheatsheet','Mindmap','Topper Answer Sheet']},

  {id:'b_phy_sp',title:'Physics Boards Dominator',subject:'PHY',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvFFJ4N1UwHrvgWE75eTELbBrrmF1Ky7GmTUlUOOLfOZiGt0wlATHMo85QAK2WAj1mcEnSoyJ_MXJ_JReV8OSI2ClsU3-PXHnLVjQFDnlSl8EFJsOQHOuXkri3D3EXPxfkdo58Mu24xm8IgLyr_-F47WaYIjz1xL597wxgEUR9brobyQVvc2prMKmm_cpE/s320/photo_4909327286859926962_y%20(2).jpg',
   seriesName:'Boards Dominator',icon:'⚛️',color:'#6366f1',color2:'#4338ca',hot:false,price:100,comingSoon:false,
   difficulty:'Hard',studentsCount:'2000+',rating:'4.8',pages:'240+',
   reviews:[
     {name:'Vikram S.',stars:5,text:'Physics felt impossible before this. The PYQ analysis showed me exactly what to focus on.',avatar:'V'},
     {name:'Tanya R.',stars:5,text:'Mindmap for each chapter is so well made. Revised entire syllabus in 3 days!',avatar:'T'},
     {name:'Harsh M.',stars:4,text:'Most repeated questions section is gold. Almost all of them came in my exam.',avatar:'H'}
   ],
   fileId:'1zJV7il3sqD9O7p9aOQrfMYvjX9EhgeRU',
   files:[{name:'Physics Boards Dominator',url:gd('1zJV7il3sqD9O7p9aOQrfMYvjX9EhgeRU'),dlId:'1zJV7il3sqD9O7p9aOQrfMYvjX9EhgeRU'}],
   contents:['Chapterwise PYQs','Most Imp Questions & Topics','Most Repeated Questions','5 Full PYQs with Answers','5 Full Sample Papers','Last Minute Cheatsheet','Mindmap','Topper Answer Sheet']},

  {id:'b_bio_sp',title:'Biology Boards Dominator',subject:'BIO',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2NG-GJgvlux2UCJzFExgAI8TJYK8vMfJ40cJ5tiODMKA4ypK7kGeSsF4fK_Gv1SDjCE26QCxAbv9w5WN3m4HULF-kM7q8Zn1mh4lN6PTeBVEePTCqPy0t-bbHMDWsa7-u7RsuRDOHxU4QyPHCr9xm47N99PbQ2dwju4mKKaXpJlH9iit3_rJmxcf2k9u1/s320/photo_4927446211988491220_y%20(1).jpg',
   seriesName:'Boards Dominator',icon:'🔬',color:'#22c55e',color2:'#15803d',hot:false,price:100,comingSoon:false,
   difficulty:'Moderate',studentsCount:'1700+',rating:'4.8',pages:'210+',
   reviews:[
     {name:'Simran K.',stars:5,text:'Biology scoring became so easy with this. Got 97 in boards! The topper guide is amazing.',avatar:'S'},
     {name:'Aditya P.',stars:5,text:'Chapterwise PYQs made revision super efficient. Knew exactly what was important.',avatar:'A'},
     {name:'Neha G.',stars:4,text:'Very comprehensive. Diagrams and answer patterns from topper sheets helped a lot.',avatar:'N'}
   ],
   fileId:'1EXBsqPsHAg6ArnOmc_SsbgVv1gz8gixr',
   files:[{name:'Biology Boards Dominator',url:gd('1EXBsqPsHAg6ArnOmc_SsbgVv1gz8gixr'),dlId:'1EXBsqPsHAg6ArnOmc_SsbgVv1gz8gixr'}],
   contents:['Chapterwise PYQs','Most Imp Questions & Topics','Most Repeated Questions','5 Full PYQs with Answers','5 Full Sample Papers','Last Minute Cheatsheet','Mindmap','Topper Answer Sheet']},

  {id:'b_eco_topper',title:'Economics Boards Topper',subject:'ECO',group:'class12',type:'sample',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0wY4XOOV_DSMCycFNORGVu99Uc8OlW09-SQCGlbzNE2BwnqJtbstOkxqhgD0lg1bUK71aesf-83er1F516Nzr-kdL6GjEoD-2HeyrvQQMOw5e3FA82JyWdQWmDJ73DZjderxcFDNG19ucnmLpbYPT-NeXCT_Ub7g1XR8w-FkR6MGAsmJuRoEVSCzW5dbX/s1024/photo_6129401245089861200_y.jpg',
   seriesName:'Boards Topper Special',icon:'📈',color:'#10b981',color2:'#059669',hot:true,price:150,comingSoon:false,
   difficulty:'Advanced',studentsCount:'3100+',rating:'5.0',pages:'500+',
   multiFile:true,
   reviews:[
     {name:'Shreya T.',stars:5,text:'5 sets covering everything from basics to topper tricks. Got 98 in boards and 99%ile in CUET ECO!',avatar:'S'},
     {name:'Aryan V.',stars:5,text:'The NCERT underline set by Thunderstudy is genius. Saved 40 hours of self reading.',avatar:'A'},
     {name:'Kavya R.',stars:5,text:'Best Economics resource available anywhere. The exam strategy in Set 5 is priceless.',avatar:'K'}
   ],
   files:[
     {id:'s1',name:'Set 1 — Basic Learning',desc:'Easy Notes + IMP Questions + Formula + Dates',url:gd('1QwHf_DP_xdFX5YqYHJkWP6X6oJIzIKBZ'),dlId:'1QwHf_DP_xdFX5YqYHJkWP6X6oJIzIKBZ'},
     {id:'s2',name:'Set 2 — Advanced Learning',desc:'Detail Notes + Sample Paper + PYQs + Mindmap',url:gd('1OxMeTyfxU2WgMK9IP4NQgsLLi49scL5k'),dlId:'1OxMeTyfxU2WgMK9IP4NQgsLLi49scL5k'},
     {id:'s3',name:'Set 3 — Topper Toolkit',desc:'Tricks + Chapterwise PYQs + Topper Answer Sheet',url:gd('1GLYyA7_YDTtQ3oIL-Dq1yU4EvAWNpeyD'),dlId:'1GLYyA7_YDTtQ3oIL-Dq1yU4EvAWNpeyD'},
     {id:'s4',name:'Set 4 — NCERT by Thunderstudy',desc:'Complete NCERT Underline & Highlights',url:gd('1ZIgJyH16aIgCH7hhpmySLxUcx7qAk-ud'),dlId:'1ZIgJyH16aIgCH7hhpmySLxUcx7qAk-ud'},
     {id:'s5',name:'Set 5 — Final Booster',desc:'Rapid Revision + Expected Questions + Exam Strategy',url:gd('1G_v8Xpt02FlkjcNU8ga9slbXqdFMP-VA'),dlId:'1G_v8Xpt02FlkjcNU8ga9slbXqdFMP-VA'}
   ],
   contents:['Set 1: Easy Notes + IMP Questions + Formula + Indian Economy All Dates & Graph','Set 2: Detail Notes + Sample Paper + PYQs + Mindmap','Set 3: Trick to Solve Fast + Chapterwise PYQs + Topper Answer Sheet','Set 4: Complete NCERT Underline by Thunderstudy','Set 5: Rapid Revision + Expected Qs + Case Studies + Exam Strategy']},

  {id:'b_amat_qb',title:'Applied Maths QB Boards Pro',subject:'AMAT',group:'class12',type:'qbank',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk4WqeNv26BPfRvkHNHP5k0H5E8vkH_1ueqM1Bscb-7GO-4UCzbnyXwrOZ-0yxuu6KO63DWjk8bru-Nw0jihvorIJP5nusfmJIb_YjBDxg5nXk3RYPumAMj5EeXqFN49J5yQC4HCxr6XDOLWjLnuzQULtpREK6LVUo54PfYv8FVhFxUNYJvqupAs-dO8B8/s320/photo_6127641665708166166_w.jpg',
   seriesName:'Boards Pro QB',icon:'🔢',color:'#f97316',color2:'#c2410c',hot:false,price:150,comingSoon:false,
   difficulty:'Hard',studentsCount:'800+',rating:'4.7',pages:'400+',
   reviews:[
     {name:'Rohan A.',stars:5,text:'5000+ questions is no joke. Practiced every type and nothing surprised me in the exam.',avatar:'R'},
     {name:'Prachi S.',stars:4,text:'Chapterwise PYQ questions helped me identify my weak areas quickly.',avatar:'P'},
     {name:'Aarav K.',stars:5,text:'Best question bank for Applied Maths. Got 97 in boards after practicing from this.',avatar:'A'}
   ],
   fileId:'1Y9thVXD0tJiRYTIEaPwl-4GSxgp7Cg_x',
   files:[{name:'Applied Maths Question Bank',url:gd('1Y9thVXD0tJiRYTIEaPwl-4GSxgp7Cg_x'),dlId:'1Y9thVXD0tJiRYTIEaPwl-4GSxgp7Cg_x'}],
   contents:['5000+ Questions','PYQ Questions Chapterwise','Multiple Choice Questions','All Difficulty Levels']},

  {id:'b_eng_qb',title:'English QB Boards Pro',subject:'ENG',group:'class12',type:'qbank',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMc2LamZPi3YPH8HK9CcMTauhqEhyphenhyphennYb8-3zyNRf7WBJaaDxSrNt6pp-0A2pQpCZU2rALE1TDjGdbzx2anCBGTGp0VWS1AwG2_fdqX8NIxUVbvr47b_TbjwUOpkmkwccHYUQZ4Xl0ueWTLt6-SgD8KA7Ba7bdm_io9_OV3txGr1thucA9E6OboNLFmdCnC/s320/photo_6129893465521851791_y.jpg',
   seriesName:'Boards Pro QB',icon:'📝',color:'#ec4899',color2:'#be185d',hot:false,price:150,comingSoon:false,
   difficulty:'Moderate',studentsCount:'950+',rating:'4.7',pages:'380+',
   reviews:[
     {name:'Ananya P.',stars:5,text:'English writing and grammar questions are so well organized. Scored 98 in boards!',avatar:'A'},
     {name:'Siddharth R.',stars:4,text:'MCQ section for reading comprehension is very useful. Improved my speed a lot.',avatar:'S'},
     {name:'Riya M.',stars:5,text:'The PYQ chapterwise section made it clear what CBSE actually tests. Very targeted.',avatar:'R'}
   ],
   fileId:'15bKikJ7edZZfoNVatIDg47_fRz0rJ-Uv',
   files:[{name:'English Question Bank',url:gd('15bKikJ7edZZfoNVatIDg47_fRz0rJ-Uv'),dlId:'15bKikJ7edZZfoNVatIDg47_fRz0rJ-Uv'}],
   contents:['5000+ Questions','PYQ Questions Chapterwise','Multiple Choice Questions','All Difficulty Levels']},

  {id:'b_mat_qb',title:'Maths QB Boards Pro',subject:'MAT',group:'class12',type:'qbank',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNEeEfN_MAO1FYm_c_IRoOAnAPGwQT4oViNu1h1cHvuAjX-rOeQjQSnVbeSWfcmt2mIZh19mH2PpV1mssfMQBUxhRNcPTojhBjA0AoKzONYOG3R6HIfWGzqSDUGtR4T2Ok9JB2YCuklbI6ab_tlxOdidv2FyTj30JceH1PO_MPGxLsGncJgoVWVQ2qkVU1/s320/photo_6134015448715038443_y.jpg',
   seriesName:'Boards Pro QB',icon:'📐',color:'#f97316',color2:'#c2410c',hot:true,price:150,comingSoon:false,
   difficulty:'Hard',studentsCount:'2800+',rating:'4.9',pages:'450+',
   reviews:[
     {name:'Aashi M.',stars:5,text:'Best Maths QB ever. 5000+ questions covering every topic. Got 99 in boards!',avatar:'A'},
     {name:'Dev R.',stars:5,text:'The difficulty levels are perfectly graded. Started easy and worked up to hard questions.',avatar:'D'},
     {name:'Tara S.',stars:5,text:'Cracked JEE Mains too after practicing from this. The question variety is incredible.',avatar:'T'}
   ],
   fileId:'1HfMiPdvMgpxmHcAdZw1TxNGQQFH2UzcN',
   files:[{name:'Mathematics Question Bank',url:gd('1HfMiPdvMgpxmHcAdZw1TxNGQQFH2UzcN'),dlId:'1HfMiPdvMgpxmHcAdZw1TxNGQQFH2UzcN'}],
   contents:['5000+ Questions','PYQ Questions Chapterwise','Multiple Choice Questions','All Difficulty Levels']},

  {id:'b_eco_qb',title:'Economics QB Boards Pro',subject:'ECO',group:'class12',type:'qbank',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZdtFST6kNeF9Xq_wHI6CuzFSGLBTzrkVSwE_4g52F0eKQGJYWDZUhiBN2ef_1hoNaGcupj08b2PCyHxPyswEvQMo008gI12H71TkBbsiyOoh8euH8qraIehac16s_N7yl05B_XZYz7ubtL_bATiDgBm90qqDIJaheKZr0eZGfR3UAs38wKwcpCHXr9udF/s320/photo_6147654443781000447_y.jpg',
   seriesName:'Boards Pro QB',icon:'📈',color:'#10b981',color2:'#059669',hot:true,price:150,comingSoon:false,
   difficulty:'Hard',studentsCount:'2500+',rating:'4.9',pages:'420+',
   reviews:[
     {name:'Sneha K.',stars:5,text:'Economics QB is a must for CUET prep too. 400+ CUET-style MCQs in this. Got 99%ile!',avatar:'S'},
     {name:'Parth M.',stars:5,text:'Macro + Micro + Indian Economy all covered chapterwise. Nothing left out.',avatar:'P'},
     {name:'Meera T.',stars:5,text:'The conceptual MCQs are exactly what CUET asks. Perfect dual preparation.',avatar:'M'}
   ],
   fileId:'1VOAPLdWcmhVSesANZywwNXIhiSbUat4-',
   files:[{name:'Economics Question Bank',url:gd('1VOAPLdWcmhVSesANZywwNXIhiSbUat4-'),dlId:'1VOAPLdWcmhVSesANZywwNXIhiSbUat4-'}],
   contents:['5000+ Questions','PYQ Questions Chapterwise','Multiple Choice Questions','All Difficulty Levels']},

  {id:'b_ip_qb',title:'Information Practices QB',subject:'IP',group:'class12',type:'qbank',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8ZtnrCYC0M2B3PmDQGjKLlJQv13Et9nVNuEYAGItXxGBTffhOZKAEOZWFtU_8OZQayX5tstSISByOXoDDicocMx45Ku6Q9fAlpe5-ZhYa5Qu2l6xgz1t7Xd92sRbqNx7jzp-YNvHaZPOKQtu3YSLZ-s2pW-w9EOCwjYpJUbg0Tt3dT1Zi-K90mrVPrUoO/s320/photo_6179387659323641953_w.jpg',
   seriesName:'Boards Pro QB',icon:'💻',color:'#6366f1',color2:'#4338ca',hot:false,price:150,comingSoon:false,
   difficulty:'Moderate',studentsCount:'700+',rating:'4.6',pages:'350+',
   reviews:[
     {name:'Lakshay T.',stars:5,text:'IP practical + theory both well covered. The SQL and Python MCQs are very accurate.',avatar:'L'},
     {name:'Priya V.',stars:4,text:'Chapterwise PYQs helped me understand CBSE pattern for IP. Very useful.',avatar:'P'},
     {name:'Kunal S.',stars:5,text:'Got 95 in IP boards. The networking and database sections are perfectly organized.',avatar:'K'}
   ],
   fileId:'1cLUEPvnCLnvAGX5Em2OFpf1l7ypYnoWt',
   files:[{name:'Information Practices Question Bank',url:gd('1cLUEPvnCLnvAGX5Em2OFpf1l7ypYnoWt'),dlId:'1cLUEPvnCLnvAGX5Em2OFpf1l7ypYnoWt'}],
   contents:['5000+ Questions','PYQ Questions Chapterwise','Multiple Choice Questions','All Difficulty Levels']},

  {id:'b_cs_qb',title:'Computer Science QB',subject:'CS',group:'class12',type:'qbank',
   coverImg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcZJkF-dzTtH1eYdjQRemqwWR1bANAU-XR2vPgaVyLvZzBvhbGoIqYU89G7A-0sdYUv3HGMqHphkeXtjNrCfLeUfRyiZIHlNspqMDPtYvCprO5NxpDI0L489XRH8ubCH21xjZ9LqMyWjs_TDmhX7izbAM9X6eowBooc1gt_SttoNk3DyFv905-_Q1j7E-_/s320/photo_6179387659323641980_w.jpg',
   seriesName:'Boards Pro QB',icon:'🖥️',color:'#6366f1',color2:'#4338ca',hot:false,price:150,comingSoon:false,
   difficulty:'Hard',studentsCount:'850+',rating:'4.7',pages:'400+',
   reviews:[
     {name:'Aarav S.',stars:5,text:'CS theory + practical questions both are excellent. Python and OOP sections are very strong.',avatar:'A'},
     {name:'Riya P.',stars:4,text:'The data structures and algorithms MCQs are very well crafted. Got 94 in boards.',avatar:'R'},
     {name:'Dhruv M.',stars:5,text:'Best CS question bank for CBSE. Covers every chapter with the right difficulty balance.',avatar:'D'}
   ],
   fileId:'1pfCh-qOH9cTRMNFvsvjybqQTXifiyAqB',
   files:[{name:'Computer Science Question Bank',url:gd('1pfCh-qOH9cTRMNFvsvjybqQTXifiyAqB'),dlId:'1pfCh-qOH9cTRMNFvsvjybqQTXifiyAqB'}],
   contents:['5000+ Questions','PYQ Questions Chapterwise','Multiple Choice Questions','All Difficulty Levels']},
];

/* ─── CUET BOOKS ─────────────────────────────────────────────── */
const CUET_BOOKS_DATA=[
  {id:'cb_bst',title:'CUET BST Complete Book',subject:'BST',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/bst.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/bst.html',
   color:'#4f6ef7',color2:'#7c3aed',icon:'📊',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_eco',title:'CUET ECO Complete Book',subject:'ECO',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/eco.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/eco.html',
   color:'#10b981',color2:'#059669',icon:'📈',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_acc',title:'CUET ACC Complete Book',subject:'ACC',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/acc.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/acc.html',
   color:'#06b6d4',color2:'#0891b2',icon:'📒',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_pol',title:'CUET Political Science Complete Book',subject:'POL',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/pol.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/pol.html',
   color:'#8b5cf6',color2:'#6d28d9',icon:'🏛️',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_his',title:'CUET History Complete Book',subject:'HIS',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/his.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/his.html',
   color:'#d97706',color2:'#92400e',icon:'📜',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_geo',title:'CUET Geography Complete Book',subject:'GEO',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/geo.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/geo.html',
   color:'#0ea5e9',color2:'#0369a1',icon:'🌏',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_mat',title:'CUET Maths Complete Book',subject:'MAT',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/mat.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/mat.html',
   color:'#f97316',color2:'#c2410c',icon:'📐',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_eng',title:'CUET English Complete Book',subject:'ENG',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/eng.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/eng.html',
   color:'#ec4899',color2:'#be185d',icon:'📝',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
  {id:'cb_gat',title:'CUET GAT Complete Book',subject:'GAT',
   coverUrl:'https://commercesehoga.github.io/studyhub/cuet/gat.png',
   pageUrl:'https://commercesehoga.github.io/studyhub/cuet/gat.html',
   color:'#f59e0b',color2:'#d97706',icon:'🧠',price:120,
   contents:['PYQs (2022–2025)','Full Notes','Practice Papers','Sample Papers','Mindmaps','Important Questions']},
];

/* ─── BUNDLES ─────────────────────────────────────────────────── */
const BUNDLES=[
  {id:'bun_commerce12',title:'Commerce Class 12 Bundle',desc:'BST + ECO + ACC Sample Papers',books:['b_bst_sp','b_eco_sp','b_acc_sp'],normalPrice:300,bundlePrice:250,icon:'📦'},
  {id:'bun_science12',title:'Science Class 12 Bundle',desc:'PHY + CHE + BIO Boards Dominator',books:['b_phy_sp','b_che_sp','b_bio_sp'],normalPrice:300,bundlePrice:250,icon:'🔬'},
  {id:'bun_arts12',title:'Arts Class 12 Bundle',desc:'HIS + GEO + POL Boards Killer',books:['b_his_sp','b_geo_sp','b_pol_sp'],normalPrice:300,bundlePrice:250,icon:'🏛️'},
  {id:'bun_qb_main',title:'QB Mega Bundle',desc:'Maths + Economics + English QB',books:['b_mat_qb','b_eco_qb','b_eng_qb'],normalPrice:450,bundlePrice:400,icon:'📚'},
];
