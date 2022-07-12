import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListTaxeComponent } from './list-taxe.component';
import { ListTypePlatComponent } from './list-type-plat.component';
const routes: Routes = [
  {
    path: '',
    component: ListTypePlatComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTypePlatRoutingModule { }
