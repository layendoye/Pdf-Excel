import { Component, OnInit } from '@angular/core';
import * as Excel from "exceljs/dist/exceljs.min.js";
import * as ExcelProper from "exceljs";
import * as fs from 'file-saver';
let workbook: ExcelProper.Workbook = new Excel.Workbook();
@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {
  public workbook=workbook
  constructor() { }

  ngOnInit() {
  }
  getExcel(){
    const data = [
      [2007, 1, "Volkswagen ", "Volkswagen Passat", 1267, 10],
      [2007, 1, "Toyota ", "Toyota Rav4", 819, 6.5],
      [2007, 1, "Toyota ", "Toyota Avensis", 787, 6.2],
      [2007, 1, "Volkswagen ", "Volkswagen Golf", 720, 5.7],
      [2007, 1, "Toyota ", "Toyota Corolla", 491, 5.4]
    ];
    //https://www.ngdevelop.tech/export-to-excel-in-angular-6/
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet('Car Data'); //nouvelle feuille
    // le titre
    let titleRow = worksheet.addRow(["Car Sell Report"]);//le titre 
    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };
    worksheet.mergeCells('A1:D2');//fusionner les cellules

    worksheet.addRow([]);//une ligne vide
    // on ajoute une ligne et on y ajout la date
    let subTitleRow = worksheet.addRow(['Date : '+new Date().toUTCString()]); 
    worksheet.mergeCells('A4:D4');
    //Add Header Row
    let headerRow = worksheet.addRow(["Year", "Month", "Make", "Model", "Quantity", "Pct"]);//une ligne et les colonnes
    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {//pour chaque cellules de l'entete
       cell.fill = {
         type: 'pattern',
         pattern: 'solid',
         fgColor: { argb: 'FFFFFF00' },
         bgColor: { argb: 'FF0000FF' }
       }
       cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }//pour la bordure
    });
    data.forEach(d => {
       let row = worksheet.addRow(d);//pour chaque l element on cree une ligne avec de colonne ex: [2007, 1, "Volkswagen ", "Volkswagen Passat", 1267, 10]
       let qty = row.getCell(5);//la celulle 5
       let color = 'FF99FF99';
       if (+qty.value < 500) {//+qty pour le convertir en int 
         color = 'FF9999'
       }
       qty.fill = {
         type: 'pattern',
         pattern: 'solid',
         fgColor: { argb: color }
       }
    }
    );
    let worksheet2 = workbook.addWorksheet('Car Data 2');
    workbook.xlsx.writeBuffer().then((data) => {
       let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
       fs.saveAs(blob, 'CarData.xlsx');
    });
  }
}
