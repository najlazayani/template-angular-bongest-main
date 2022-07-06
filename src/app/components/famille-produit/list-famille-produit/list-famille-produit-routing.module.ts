import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFamilleProduitComponent } from './list-famille-produit.component';
const routes: Routes = [
  {
    path: '',
    component: ListFamilleProduitComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFamilleProduitRoutingModule { }
