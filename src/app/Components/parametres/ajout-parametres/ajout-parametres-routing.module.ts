import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AjoutFamilleProduitComponent } from './ajout-famille-produit.component';
import { AjoutParametresComponent } from './ajout-parametres.component';
const routes: Routes = [
  {
    path: '',
    component: AjoutParametresComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutParametrestRoutingModule { }
