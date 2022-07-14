import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutTaxeComponent } from './ajout-taxe/ajout-taxe.component';
import { ListTaxeComponent } from './list-taxe/list-taxe.component';
import { ModifierTaxeComponent } from './modifier-taxe/modifier-taxe.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListTaxeComponent
      },
       {
         path: 'ajout',
         component: AjoutTaxeComponent
       },
       {
         path: 'modifier/:id',
       component: ModifierTaxeComponent
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxeRoutingModule { }
