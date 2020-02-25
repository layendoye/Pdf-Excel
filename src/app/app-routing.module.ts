import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfComponent } from './pdf/pdf.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'pdf', component: PdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
