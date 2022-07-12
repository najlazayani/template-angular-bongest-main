import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutFamilleComponent } from './ajout-famille/ajout-famille.component';
import { ListFamilleComponent } from './list-famille/list-famille.component';
import { ModifierFamilleComponent } from './modifier-famille/modifier-famille.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListFamilleComponent
      },
      {
        path: 'ajout',
        component: AjoutFamilleComponent
      },
      {
        path: 'modifier/:id',
        component: ModifierFamilleComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilleRoutingModule { }
