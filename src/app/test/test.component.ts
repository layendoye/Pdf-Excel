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
    const data=[]
    const documentDefinition = { content: [
      this.note34(data)
    ],styles: this.getStyle()
    };
    this.pdfMake.createPdf(documentDefinition).open();
  }
  note34(data){
    const ligne5=[
      ["SOLDES INTERMEDIAIRES DE GESTION","","",""]
    ]
    const tab6_14=[
      ["CHIFFRE D'AFFAIRES",13810782,227601071,-1548],
      ["MARGE COMMERCIALE",'','',''],
      ["VALEUR AJOUTEE",13810782,227601071,-1548],
      ["EXCEDENT BRUT D'EXPLOITATION",13810782,227601071,-1548],//9
      ["RESULTAT D'EXPLOITATION",13810782,227601071,-1548],//10
      ["RESULTAT FINANCIER",13810782,227601071,-1548],//11
      ["RESULTAT DES ACTIVITES ORDINAIRES",13810782,227601071,-1548],//12
      ["RESULTAT HORS ACTIVITES ORDINAIRES",13810782,227601071,-1548],//13
      ["RESULTAT NET",13810782,227601071,-1548],//14
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
    return[
      {
        table: {
          widths: [527],
          headerRows: 1,
          body: [
            [{text: "NOTE 34 : FICHE DE SYNTHESE DES PRINCIPAUX INDICATEURS FINANCIERS",style: 'enTete', bold: true,fontSize: 10,alignment: 'center',border: [false, false, false, false]}]
          ]
        }
      },
      {text:'',margin:[0, 0, 0, 10]},
      {
        table: {
          widths: [350, 50, 50, 50],
          headerRows: 1,
          body: [
            [
              {text: "(EN MILLIERS DE FRANCS)",margin:[0, 4, 0, 0],alignment: 'center',bold: true,fontSize: 9},
              {text: 'Année N',margin:[0, 4, 0, 0],alignment: 'center',bold: true,fontSize: 9},
              {text: 'Année N-1',margin:[0, 4, 0, 0],alignment: 'center',bold: true,fontSize: 9},
              {text: 'Variation en %',alignment: 'center',bold: true,fontSize: 9}
            ],
            ...this.makeTitleSection("ANALYSE DE L'ACTIVITE"),
            ...this.makeGrRow(ligne5),
            ...this.makeSimpleRow(tab6_14),
            ...this.makeGrRow(ligne15),
            ...this.makeSimpleRow(tab16_18),
            ...this.makeGrRow(ligne19),
            ...this.makeSimpleRow(tab20_29),
            ...this.makeGrRow(ligne30),
            ...this.makeSimpleRow(ligne31),
            ...this.makeGrRow(ligne32),
            ...this.makeTitleSection("ANALYSE DE LA RENTABILITE"),
            ...this.makeGrRow(ligne34),
            ...this.makeSimpleRow(ligne35),
            ...this.makeTitleSection("ANALYSE DE LA STRUCTURE FINANCIERE"),
            ...this.makeSimpleRow(tab37_38),
            ...this.makeGrRow(ligne39),
            ...this.makeSimpleRow(ligne40),
            ...this.makeGrRow(ligne41),
            ...this.makeSimpleRow(tab42_43),
            ...this.makeGrRow(ligne44),
            ...this.makeSimpleRow(tab45_46),
            ...this.makeGrRow(tab47_49),//3
            ...this.makeSimpleRow(ligne50),
            ...this.makeTitleSection("ANALYSE DE LA VARIATION DE LA TRESORERIE"),
            ...this.makeSimpleRow(tab52_54),
            ...this.makeGrRow(ligne55),
            ...this.makeTitleSection("FINANCIER NET ANALYSE DE LA VARIATION DE L’ENDETTEMENT FINANCIER NET"),
            ...this.makeSimpleRow(tab57_58),
            ...this.makeGrRow(ligne59)
          ]
        }
      }
    ]  
  }

  getStyle(){
     return {
        fsize:{
          fontSize: 6.5,
        },
        enTete:{
          fontSize: 6.5,
          fillColor: '#eeeeee',
        },
        enTete2:{
          fontSize: 6.5,
          bold: true,
          fillColor: '#bcbdbc',
        },
        gris:{
          fillColor: '#bcbdbc'
        }
      } 
  }
  makeGrRow(table){
    let element:any=[]
    table.forEach(cel => {
      let cellule3=""
      if(cel[3]!=""){        
        cellule3=(cel[3]).toString()+"%";
      }
      element.push([
        {text: cel[0],style: 'enTete2'},
        {text: this.numStr(cel[1],' '),style: 'enTete2',alignment: 'right'},
        {text: this.numStr(cel[1],' '),style: 'enTete2',alignment: 'right'},
        {text: cellule3,style: 'enTete2',alignment: 'right'}])
    })
    return element
  }
  makeSimpleRow(table){
    let element:any=[]
    table.forEach(cel => {
      if(cel[3]!="/"){
        let cellule3=""
        if(cel[3]!="")        
          cellule3=(cel[3]).toString()+"%";
      
        element.push([
          {text: cel[0],style: 'fsize'},
          {text: this.numStr(cel[1],' '),style: 'fsize',alignment: 'right'},
          {text: this.numStr(cel[2],' '),style: 'fsize',alignment: 'right'},
          {text: cellule3,style: 'fsize',alignment: 'right'}
        ])
      }
      else
      element.push([
        {text: cel[0],style: 'fsize'},
        {text: this.numStr(cel[1],' '),style: 'fsize',alignment: 'right'},
        {text: this.numStr(cel[2],' '),style: 'fsize',alignment: 'right'},
        {canvas: [{ type: 'line', x1: -5, y1: 7, x2: 55, y2: -2, lineWidth: 1 }],style: 'gris'}
      ])
      
    });    
    return element
  }
  makeTitleSection(titre){
    return [
      [{text: titre,style: 'enTete',colSpan: 4,alignment: 'center'},{},{},{}]
    ]
  }
  numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    var c = '',
    d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }
}
