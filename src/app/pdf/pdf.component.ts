import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  pdfMake=pdfMake
  //https://github.com/ngdevelop-tech/angular-8-export-pdf/blob/master/src/app/app.component.ts
  //https://www.ngdevelop.tech/angular-8-export-to-pdf-using-pdfmake/
  //http://pdfmake.org/playground.html
  constructor() { }

  ngOnInit() {
  }
  generatePdf(){
    const documentDefinition = { content: [
        {
            text: 'RESUME',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            margin: [0, 0, 0, 20]
        },
        {
            columns: [
              [{
                  text: 'this.resume.name',
                  style: 'name'
                },
                {
                  text: 'this.resume.address'
                },
                {
                  text: 'Email : ' + 'this.resume.email',
                },
                {
                  text: 'Contant No : ' + 'this.resume.contactNo',
                },
                {
                  text: 'GitHub: ' + 'this.resume.socialProfile',
                  link: 'this.resume.socialProfile',
                  color: 'blue'
                }
              ]
            ]
        },
        {
            text: 'Skills',
            style: 'header'
        },
        {
            text: 'Experience',
            style: 'header'
        },
        {
            table: {
              widths: ['*'],
              body: [
                [{
                  columns: [
                  [{
                    text: 'experience.jobTitle',
                    style: 'jobTitle'
                  },
                  {
                    text: 'experience.employer',
                  },
                  {
                    text: 'experience.jobDescription',
                  }],
                  {
                    text: 'Experience : ' + 'experience.experience' + ' Months',
                    alignment: 'right'
                  }
                ]
              }]
            ]}
        },
        {
            text: 'Education',
            style: 'header'
        },
        {
          table: {
            widths: [350, 50, 50, 50],//ne pas depasser 500
            body: [
              [{
                text: 'Degree',
                style: 'tableHeader1'
              },
              {
                text: 'College',
                style: 'tableHeader'
              },
              {
                text: 'Passing Year',
                style: 'tableHeader'
              },
              {
                text: 'Result',
                style: 'tableHeader'
              },
              ]
            ]
          }
        }
      ],
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
        }
        ,jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },tableHeader: {
          bold: true,
        },tableHeader1: {
          bold: true,
          widths:'15px'
        }
      } 
   }
}
