import { Component, OnInit } from '@angular/core';
import * as Excel from "exceljs/dist/exceljs.min.js";
import * as ExcelProper from "exceljs";
import * as fs from 'file-saver';
@Component({
  selector: 'app-test-excel',
  templateUrl: './test-excel.component.html',
  styleUrls: ['./test-excel.component.scss']
})
export class TestExcelComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  getExcel(){
    const data=[]
    let workbook = new Excel.Workbook();
    this.note34(workbook,data)
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'ETATS FINANCIERS.xlsx');
   });
  }
  note34(workbook,data){
    
    const ligne5=[
      ["SOLDES INTERMEDIAIRES DE GESTION","","",""]
    ]
    let tab6_14=[
      ["CHIFFRE D'AFFAIRES",13810782,227601071,-15.48],//6
      ["MARGE COMMERCIALE",'','','/'],//7
      ["VALEUR AJOUTEE",13810782,227601071,-15.48],//8
      ["EXCEDENT BRUT D'EXPLOITATION",13810782,227601071,-15.48],//9
      ["RESULTAT D'EXPLOITATION",13810782,227601071,-15.48],//10
      ["RESULTAT FINANCIER",13810782,227601071,-15.48],//11
      ["RESULTAT DES ACTIVITES ORDINAIRES",13810782,227601071,-15.48],//12
      ["RESULTAT HORS ACTIVITES ORDINAIRES",13810782,227601071,-15.48],//13
      ["RESULTAT NET",13810782,227601071,-15.48],//14
    ]
    const ligne15=[
      ["DETERMINATION DE LA CAPACITE D'AUTOFINANCEMENT","","",""]
    ]
    const tab16_18=[
      ["EBE",-283770,76628330,"/"],
      ["+VALEUR COMPTABLES DES CESSIONS COURANTES D'IMMOBILISATION(COMPTE 654)",'','','/'],
      ["-PRODUIT DES CESSIONS COURANTES D'IMMOBILISATION (compte 754)","","","/"],
    ]
    const ligne19=[
      ["=CAPACITE D'AUTOFINANCEMENT D'EXPLOITATION",-283770,76628330,27104]
    ]
    const tab20_29=[
      ["+REVENUS FINANCIERS",-19387,9278289,"/"],
      ["+GAINS DE CHANGE",22804,0,'/'],
      ["+TRANSFERT DE CHARGE FINANCIERES","","","/"],
      ["+PRODUIT HAO",-283770,76628330,"/"],
      ["+TRANSFERT DE CHARGES HAO",'','','/'],
      ["-FRAIS FINANCIERS","","","/"],
      ["-PERTES DE CHANGE",-283770,76628330,"/"],
      ["-AUTRES CHARGES HAO",'','','/'],
      ["-PARTICIPATION","","","/"],
      ["-IMPOTS SUR LES RESULTATS","","","/"],
    ]
    const ligne30=[
      ["=CAPACITE D'AUTOFINANCEMENT GLOBALE(C.A.F.G)",-824668,75908383,9305]
    ]
    const ligne31=[
      ["-DISTRIBUTIONS DE DIVIDENDES OPEREES DURANT L'EXERCICE","","","/"]
    ]
    const ligne32=[
      ["=AUTOFINANCEMENT",-824668,75908383,9305]
    ]
    const ligne34=[
      ["RENTABILITE ECONOMIQUE = RESULTAT D'EXPLOITATION (a)/CAPITAUX PROPRES+DETTES FINANCIERES",-824668,75908383,9305]
    ]
    const ligne35=[
      ["RENTABILITE FINANCIERE + RESULTAT NET/CAPITAUX PROPRES",-824668,75908383,9305]
    ]
    const tab37_38=[
      ["CAPITAUX PROPRES ET RESSOURCES ASSIMILEES",-283770,76628330,100],
      ["+DETTES FINANCIERES* ET AUTRES RESSOURCES ASSIMILEES(b)",'','',100],
    ]
    const ligne39=[
      ["=RESSOURCES STABLES",-824668,75908383,9305]
    ]
    const ligne40=[
      ["-ACTIF IMMOBILISE(b)",-824668,75908383,9305]
    ]
    const ligne41=[
      ["=FOND DE ROULEMENT(1)",-824668,75908383,9305]
    ]
    const tab42_43=[
      ["ACTIF CIRCULANT D'EXPLOITATION(b)",-824668,75908383,9305],
      ["-PASSIF CIRCULANT D'EXPLOITATION(b)",-824668,75908383,9305],
    ]
    const ligne44=[
      ["=BESOIN DE FINANCEMENT D'EXPLOTATION(2)",-824668,75908383,9305]
    ]
    const tab45_46=[
      ["ACTIF CIRCULANT HAO(b)",-824668,75908383,9305],
      ["-PASSIF CIRCULANT HAO(b)",-824668,75908383,9305]
    ]
    const tab47_49=[
      ["=BESOIN DE FINANCEMENT HAO(3)",-824668,75908383,9305],
      ["BESOIN DE FINANCEMENT GLOBAL(4)=(2)+(3)",-824668,75908383,9305],
      ["TRESORERIE NETTE(5)=(1)-(4)",-824668,75908383,9305]
    ]
    const ligne50=[
      ["CONTROLE:TRESORERIE NETTE(TRESORERIE-ACTIF)-(TRESORERIE-PASSIF)",-824668,75908383,9305]
    ]
    const tab52_54=[
      ["FLUX DE TRESORERIE DES ACTIVITES OPERATIONNELLES",-824668,75908383,9305],
      ["-FLUX DE TRESORERIE DES ACTIVITES D'INVESTISSEMENT",-824668,75908383,9305],
      ["+FLUX DE TRESORERIE DES ACTIVITES DE FINANCEMENT",-824668,75908383,9305]
    ]
    const ligne55=[
      ["= VARIATION DE LA TRESORERIE NETTE DE LA PERIODE",-824668,75908383,9305]
    ]
    const tab57_58=[
      ["ENDETTEMENT FINANCIER BRUT(DETTES FINANCIERS*+TRESORERIE-PASSIF)",-824668,75908383,9305],
      ["-TRESORERIE-ACTIF",-824668,75908383,9305]
    ]
    const ligne59=[
      ["= VARIATION DE LA TRESORERIE NETTE DE LA PERIODE",-824668,75908383,9305]
    ]
    let worksheet = workbook.addWorksheet('NOTE 34'); //nouvelle feuille
    
    let titleRow = worksheet.addRow(["NOTE 34 : FICHE DE SYNTHESE DES PRINCIPAUX INDICATEURS FINANCIERS"]);//le titre 
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 10, bold: true };
    worksheet.mergeCells('A1:D1');//fusionner les cellules
    const cellsTitre=worksheet.getCell('A1:D1')
    cellsTitre.fill = { type: 'pattern', pattern: 'solid',fgColor: { argb: 'eeeeee' },bgColor: { argb: 'eeeeee' }}
    cellsTitre.alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.addRow([]);//une ligne vide ligne 2
    worksheet.mergeCells('A2:D2');
    let enTete=worksheet.addRow(['(EN MILLIERS DE FRANCS)','Année N','Année N-1','Variation en %'])//ligne 3
    enTete.eachCell((cell, number) => {
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
      cell.font = { name: 'Comic Sans MS', family: 4, size: 10, bold: true };
    })
    this.makeTitleSection("ANALYSE DE L'ACTIVITE",worksheet,4)//ligne 4
    this.makeGrRow(ligne5,worksheet)
    this.makeSimpleRow(tab6_14,worksheet);
    this.makeGrRow(ligne15,worksheet)
    this.makeSimpleRow(tab16_18,worksheet)
    this.makeGrRow(ligne19,worksheet)
    this.makeSimpleRow(tab20_29,worksheet)
    this.makeGrRow(ligne30,worksheet)
    this.makeSimpleRow(ligne31,worksheet)
    this.makeGrRow(ligne32,worksheet)
    this.makeTitleSection("ANALYSE DE LA RENTABILITE",worksheet,33)
    this.makeGrRow(ligne34,worksheet)
    this.makeSimpleRow(ligne35,worksheet)
    this.makeTitleSection("ANALYSE DE LA STRUCTURE FINANCIERE",worksheet,36)
    this.makeSimpleRow(tab37_38,worksheet)
    this.makeGrRow(ligne39,worksheet)
    this.makeSimpleRow(ligne40,worksheet)
    this.makeGrRow(ligne41,worksheet)
    this.makeSimpleRow(tab42_43,worksheet)
    this.makeGrRow(ligne44,worksheet)
    this.makeSimpleRow(tab45_46,worksheet)
    this.makeGrRow(tab47_49,worksheet)
    this.makeSimpleRow(ligne50,worksheet)
    this.makeTitleSection("ANALYSE DE LA VARIATION DE LA TRESORERIE",worksheet,51)
    this.makeSimpleRow(tab52_54,worksheet)
    this.makeGrRow(ligne55,worksheet)
    this.makeTitleSection("FINANCIER NET ANALYSE DE LA VARIATION DE L’ENDETTEMENT FINANCIER NET",worksheet,56)
    this.makeSimpleRow(tab57_58,worksheet)
    this.makeGrRow(ligne59,worksheet)
    worksheet.getColumn('A').width = 75;
    worksheet.getColumn('B').width = 10;
    worksheet.getColumn('C').width = 10;
    worksheet.getColumn('D').width = 14;
    
  }
  makeGrRow(table,worksheet){
    table.forEach(col=>{
      const ligne=worksheet.addRow([col[0],col[1],col[2],col[3]]);
      ligne.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
        cell.font = { name: 'Comic Sans MS', family: 4, size: 8, bold: true };
        cell.fill = { type: 'pattern', pattern: 'solid',fgColor: { argb: 'bcbdbc' },bgColor: { argb: 'bcbdbc' }}
        cell.numFmt = '### ### ###'
      })
      const lastCell=ligne.getCell(4)
      if(lastCell.value &&lastCell.value>0)
        lastCell.value=lastCell.value/100
      lastCell.numFmt = '0%';
    })
  }
  makeSimpleRow(table,worksheet){
    table.forEach(col=>{
      const ligne=worksheet.addRow([col[0],col[1],col[2],col[3]]);
      ligne.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
        cell.font = { name: 'Comic Sans MS', family: 4, size: 8};
        cell.numFmt = '### ### ###'
      })
      const lastCell=ligne.getCell(4)
      lastCell.numFmt = '0%';
      if(lastCell.value &&lastCell.value>0)
        lastCell.value=lastCell.value/100
      else if(lastCell.value=="/"){
        lastCell.value=''
        lastCell.border = {
          diagonal: {up: true, down: false, style:'thin', color: {argb:'080808'}},
          top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }};
        lastCell.fill = { type: 'pattern', pattern: 'solid',fgColor: { argb: 'bcbdbc' },bgColor: { argb: 'bcbdbc' }}
      }
    })
  }
  makeTitleSection(titre,worksheet,numeroLigne){
    worksheet.addRow([titre]);
    const plage='A'+numeroLigne+':D'+numeroLigne;
    worksheet.mergeCells(plage);
    const ligne=worksheet.getCell(plage)
    ligne.fill = { type: 'pattern', pattern: 'solid',fgColor: { argb: 'eeeeee' },bgColor: { argb: 'eeeeee' }}
    ligne.alignment = { vertical: 'middle', horizontal: 'center' }
    ligne.font = { name: 'Comic Sans MS', family: 4, size: 8, bold: true };
    ligne.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure

  }
}
