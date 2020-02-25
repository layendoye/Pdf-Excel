import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  pdfMake=pdfMake
  constructor() { }

  ngOnInit() {
  }
  generatePdf(){
    const documentDefinition = { content: [
      {
        table: {
          widths: [527],//ne pas depasser 500
          headerRows: 1,
          body: [
            [{text: "NOTE 34 : FICHE DE SYNTHESE DES PRINCIPAUX INDICATEURS FINANCIERS",style: 'enTete', bold: true,fontSize: 10,alignment: 'center',border: [false, false, false, false]}]
          ]
        }
      },
      {text:'',margin:[0, 0, 0, 10]},
      {
        table: {
          widths: [350, 50, 50, 50],//ne pas depasser 500
          headerRows: 1,
          body: [
            [
              {text: "(EN MILLIERS DE FRANCS)",margin:[0, 5, 0, 0],style: '',alignment: 'center',fontSize: 10},
              {text: 'Année N',style: '',margin:[0, 5, 0, 0],alignment: 'center',fontSize: 10},
              {text: 'Année N-1',style: '',margin:[0, 5, 0, 0],alignment: 'center',fontSize: 10},
              {text: 'Variation en %',style: '',alignment: 'center',fontSize: 10}
            ],
            [{text: "ANALYSE DE L'ACTIVITE",style: 'enTete' ,colSpan: 4,alignment: 'center'},{},{},{}],
            [{text: "SOLDES INTERMEDIAIRES DE GESTION",style: 'enTete2'},{text: "",style: 'enTete2'},{text: "",style: 'enTete2'},{text: "",style: 'enTete2'}],
            [
              {text: "CHIFFRE D'AFFAIRES",style: 'fsize'},
              {text: '13 810 782',style: 'fsize',alignment: 'right'},
              {text: '227 601 071',style: 'fsize',alignment: 'right'},
              {text: '-1548%',style: 'fsize',alignment: 'right'}
            ],
          ]
        }
      }
      ],//
      styles: this.getStyle()
    };
    this.pdfMake.createPdf(documentDefinition).open();
   }
   getStyle(){
     return {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        fsize:{
          fontSize: 8,
        },
        enTete:{
          fontSize: 8,
          fillColor: '#eeeeee',
        },
        enTete2:{
          fontSize: 8,
          bold: true,
          fillColor: '#bcbdbc',
        }
      } 
   }
}
