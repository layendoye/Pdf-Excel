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
    //let workbook = new Workbook(); //https://www.ngdevelop.tech/export-to-excel-in-angular-6/ voir la note (In Linux, It is not able to find...)
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('NOTE 34'); //nouvelle feuille
    // le titre ligne 1
    let titleRow = worksheet.addRow(["NOTE 34 : FICHE DE SYNTHESE DES PRINCIPAUX INDICATEURS FINANCIERS"]);//le titre 
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 10, bold: true };
    worksheet.mergeCells('A1:D1');//fusionner les cellules
    const cellsTitre=worksheet.getCell('A1:D1')
    cellsTitre.fill = { type: 'pattern', pattern: 'solid',fgColor: { argb: 'eeeeee' },bgColor: { argb: 'eeeeee' }}
    cellsTitre.alignment = { vertical: 'middle', horizontal: 'center' }
    // titre
    worksheet.addRow([]);//une ligne vide ligne 2
    worksheet.mergeCells('A2:D2');
    let enTete=worksheet.addRow(['(EN MILLIERS DE FRANCS)','Année N','Année N-1','Variation en %'])//ligne 3
    enTete.eachCell((cell, number) => {
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
      cell.font = { name: 'Comic Sans MS', family: 4, size: 10, bold: true };
    })
    
    this.makeTitleSection("ANALYSE DE L'ACTIVITE",worksheet,4)//ligne 4
    const ligne5=[
      ["SOLDES INTERMEDIAIRES DE GESTION","","",""]
    ]
    this.makeGrRow(ligne5,worksheet)
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
    this.makeSimpleRow(tab6_14,worksheet);
    
    workbook.xlsx.writeBuffer().then((data) => {
       let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
       fs.saveAs(blob, 'CarData.xlsx');
    });
  }
  makeGrRow(table,worksheet){
    table.forEach(col=>{
      const ligne=worksheet.addRow([col[0],col[1],col[2],col[3]]);
      ligne.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
        cell.font = { name: 'Comic Sans MS', family: 4, size: 8, bold: true };
        cell.fill = { type: 'pattern', pattern: 'solid',fgColor: { argb: 'bcbdbc' },bgColor: { argb: 'bcbdbc' }}
      })
      ligne.getCell(4).numFmt = '0%';
    })
  }
  makeSimpleRow(table,worksheet){
    table.forEach(col=>{
      const ligne=worksheet.addRow([col[0],col[1],col[2],col[3]]);
      ligne.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
        cell.font = { name: 'Comic Sans MS', family: 4, size: 8};
      })
      const lastCell=ligne.getCell(4)
      lastCell.numFmt = '0%';
      
      if(lastCell.value=="/"){
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
