import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutParametresComponent } from './ajout-parametres/ajout-parametres.component';
import { ListParametresComponent } from './list-parametres/list-parametres.component';
import { ModifierParametresComponent } from './modifier-parametres/modifier-parametres.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListParametresComponent
      },
      {
        path: 'ajout',
        component: AjoutParametresComponent
      },
      {
        path: 'modifier/:id',
        component: ModifierParametresComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }
