import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTaxeComponent } from './list-taxe.component';
const routes: Routes = [
  {
    path: '',
    component: ListTaxeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTaxeRoutingModule { }
