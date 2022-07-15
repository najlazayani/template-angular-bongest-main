import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListFamilleProduitComponent } from './list-famille-produit.component';
import { ListParametresComponent } from './list-parametres.component';
const routes: Routes = [
  {
    path: '',
    component:  ListParametresComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListParametresRoutingModule { }
