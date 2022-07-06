import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutFamilleProduitComponent } from './ajout-famille-produit/ajout-famille-produit.component';
import { ListFamilleProduitComponent } from './list-famille-produit/list-famille-produit.component';
import { ModifierFamilleProduitComponent } from './modifier-famille-produit/modifier-famille-produit.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListFamilleProduitComponent
      },
      {
        path: 'ajout',
        component: AjoutFamilleProduitComponent
      },
      {
        path: 'modifier/:id',
        component: ModifierFamilleProduitComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilleProduitRoutingModule { }
