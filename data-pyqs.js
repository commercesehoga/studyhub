/* ═══════════════════════════════════════════════════════════════
   DATA — PYQS  (data-pyqs.js)
   Edit this file to add/update/remove previous year question papers.
   Re-open index.html — changes apply instantly.
   ═══════════════════════════════════════════════════════════════
   Exports: PYQS_DATA
═══════════════════════════════════════════════════════════════ */

const PYQS_DATA=[
  // ── CLASS 12 — FREE, redirect to CBSE site ──────────────────
  {id:'p_12_bst_25',title:'BST Class 12 PYQ 2025',subject:'BST',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Ch 1–12',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_eco_25',title:'ECO Class 12 PYQ 2025',subject:'ECO',group:'class12',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'All Chapters',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_acc_25',title:'ACC Class 12 PYQ 2025',subject:'ACC',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'All Chapters',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_mat_25',title:'Maths Class 12 PYQ 2025',subject:'MAT',group:'class12',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'All Chapters',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_amat_25',title:'Applied Maths Class 12 PYQ 2025',subject:'AMAT',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'All Chapters',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_eng_25',title:'English Class 12 PYQ 2025',subject:'ENG',group:'class12',year:2025,pyqType:'full',difficulty:'easy',hasSolutions:true,chapters:'All Chapters',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_cs_25',title:'Computer Science Class 12 PYQ 2025',subject:'CS',group:'class12',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'All Chapters',price:0,pdfUrl:'https://www.cbse.gov.in/cbsenew/question-paper.html'},
  {id:'p_12_phy_25',title:'Physics Class 12 PYQ 2025',subject:'PHY',group:'class12',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_che_25',title:'Chemistry Class 12 PYQ 2025',subject:'CHE',group:'class12',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_bio_25',title:'Biology Class 12 PYQ 2025',subject:'BIO',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_pol_25',title:'Political Science Class 12 PYQ 2025',subject:'POL',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_his_25',title:'History Class 12 PYQ 2025',subject:'HIS',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_geo_25',title:'Geography Class 12 PYQ 2025',subject:'GEO',group:'class12',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  // 2024 & 2023 — all free, telegram for files
  {id:'p_12_bst_24',title:'BST Class 12 PYQ 2024',subject:'BST',group:'class12',year:2024,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'Ch 1–12',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_eco_24',title:'ECO Class 12 PYQ 2024',subject:'ECO',group:'class12',year:2024,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_acc_24',title:'ACC Class 12 PYQ 2024',subject:'ACC',group:'class12',year:2024,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_bst_23',title:'BST Class 12 PYQ 2023',subject:'BST',group:'class12',year:2023,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Ch 1–12',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_12_eco_23',title:'ECO Class 12 PYQ 2023',subject:'ECO',group:'class12',year:2023,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'All Chapters',price:0,telegramOnly:true,pdfUrl:''},

  // ── CUET — HP-priced, real PDF links ────────────────────────
  // BST
  {id:'p_cuet_bst_25a',title:'CUET BST PYQ 2025 — Paper 1',subject:'BST',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/jH9ljBxL9bRa1bYfOwhe'},
  {id:'p_cuet_bst_25b',title:'CUET BST PYQ 2025 — Paper 2',subject:'BST',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/pBsDLpkkpvwkblA3ARqT'},
  {id:'p_cuet_bst_25c',title:'CUET BST PYQ 2025 — Paper 3',subject:'BST',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/5NNEBOJN5xRXXhJVapTu'},
  // ECO
  {id:'p_cuet_eco_25a',title:'CUET ECO PYQ 2025 — Paper 1',subject:'ECO',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/aj7nIdbf66qYI40IT6xu'},
  {id:'p_cuet_eco_25b',title:'CUET ECO PYQ 2025 — Paper 2',subject:'ECO',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/OXKdU4aq2ybRO0SDj8dO'},
  {id:'p_cuet_eco_25c',title:'CUET ECO PYQ 2025 — Paper 3',subject:'ECO',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/oXIlKbD7JBrjMCU3Bwog'},
  // ACC
  {id:'p_cuet_acc_25a',title:'CUET ACC PYQ 2025 — Paper 1',subject:'ACC',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/iRR4ueqKavTq2vF4cRlp'},
  {id:'p_cuet_acc_25b',title:'CUET ACC PYQ 2025 — Paper 2',subject:'ACC',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/KyLIuFLnIZfLK2BbKl0z'},
  {id:'p_cuet_acc_25c',title:'CUET ACC PYQ 2025 — Paper 3',subject:'ACC',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/MO3uqR59pvPDzaXIAQmA'},
  // Applied Maths
  {id:'p_cuet_amat_25a',title:'CUET Applied Maths PYQ 2025 — Paper 1',subject:'AMAT',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/cy98hFnpZ6km2X8yPn3b'},
  {id:'p_cuet_amat_25b',title:'CUET Applied Maths PYQ 2025 — Paper 2',subject:'AMAT',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/cy98hFnpZ6km2X8yPn3b'},
  // Maths
  {id:'p_cuet_mat_25a',title:'CUET Maths PYQ 2025 — Paper 1',subject:'MAT',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/7HwmgHOMJFxijZL7aAN7'},
  {id:'p_cuet_mat_25b',title:'CUET Maths PYQ 2025 — Paper 2',subject:'MAT',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/McKslm4VEWOAajM58oDB'},
  {id:'p_cuet_mat_25c',title:'CUET Maths PYQ 2025 — Paper 3',subject:'MAT',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/3uAvXQdoZuJeOgkw3As7'},
  // English
  {id:'p_cuet_eng_25a',title:'CUET English PYQ 2025 — Paper 1',subject:'ENG',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/s6J6Ily7bG0CX8ETzxj0'},
  {id:'p_cuet_eng_25b',title:'CUET English PYQ 2025 — Paper 2',subject:'ENG',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/M6OO2EcDr0QfDYP4Qo1R'},
  {id:'p_cuet_eng_25c',title:'CUET English PYQ 2025 — Paper 3',subject:'ENG',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/fXb3vcGtmSuNrKXrkn47'},
  // CS
  {id:'p_cuet_cs_25',title:'CUET CS PYQ 2025',subject:'CS',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:true,chapters:'Full Paper',price:10,pdfUrl:'https://www.selfstudys.com/sitepdfs/XJh3KkPv5AKBa3y7XYEp'},
  // Other CUET 2025 & all 2024/2023 — telegram only
  {id:'p_cuet_pol_25',title:'CUET Political Science PYQ 2025',subject:'POL',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_his_25',title:'CUET History PYQ 2025',subject:'HIS',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_geo_25',title:'CUET Geography PYQ 2025',subject:'GEO',group:'cuet',year:2025,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_gat_25',title:'CUET GAT PYQ 2025',subject:'GAT',group:'cuet',year:2025,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_bst_24',title:'CUET BST PYQ 2024',subject:'BST',group:'cuet',year:2024,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_eco_24',title:'CUET ECO PYQ 2024',subject:'ECO',group:'cuet',year:2024,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_acc_24',title:'CUET ACC PYQ 2024',subject:'ACC',group:'cuet',year:2024,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_gat_24',title:'CUET GAT PYQ 2024',subject:'GAT',group:'cuet',year:2024,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_bst_23',title:'CUET BST PYQ 2023',subject:'BST',group:'cuet',year:2023,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_eco_23',title:'CUET ECO PYQ 2023',subject:'ECO',group:'cuet',year:2023,pyqType:'full',difficulty:'moderate',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
  {id:'p_cuet_gat_23',title:'CUET GAT PYQ 2023',subject:'GAT',group:'cuet',year:2023,pyqType:'full',difficulty:'hard',hasSolutions:false,chapters:'Full Paper',price:0,telegramOnly:true,pdfUrl:''},
];
