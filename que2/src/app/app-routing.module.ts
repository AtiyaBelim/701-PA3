import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductinsertComponent } from './productinsert/productinsert.component';
const routes: Routes = [
  {path: 'productinsert',component:ProductinsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
