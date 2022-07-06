import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierFamilleProduitComponent } from './modifier-famille-produit.component';
const routes: Routes = [
  {
    path: '',
    component: ModifierFamilleProduitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierFamilleProduitRoutingModule { }
