import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
type AOA = any[][];
@Component({
  selector: 'app-lire-exel',
  templateUrl: './lire-exel.component.html',
  styleUrls: ['./lire-exel.component.scss']
})
export class LireExelComponent implements OnInit {
  data;
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';
  constructor() { }

  ngOnInit() {
  }
  onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
		this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
		console.log(this.data);
		alert('look your console ')
		};
		reader.readAsBinaryString(target.files[0]);
  }
}
