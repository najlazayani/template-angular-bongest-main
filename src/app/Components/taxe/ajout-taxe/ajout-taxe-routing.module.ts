import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutTaxeComponent } from './ajout-taxe.component';

const routes: Routes = [
  {
    path: '',
    component:AjoutTaxeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutTaxeRoutingModule { }
