import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutFamilleProduitComponent } from './ajout-famille-produit.component';
const routes: Routes = [
  {
    path: '',
    component: AjoutFamilleProduitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutFamilleProduitRoutingModule { }
