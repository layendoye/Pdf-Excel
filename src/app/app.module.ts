import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfComponent } from './pdf/pdf.component';
import { TestComponent } from './test/test.component';
import { ExcelComponent } from './excel/excel.component';
import { TestExcelComponent } from './test-excel/test-excel.component';
import { LireExelComponent } from './lire-exel/lire-exel.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    TestComponent,
    ExcelComponent,
    TestExcelComponent,
    LireExelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
