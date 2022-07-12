import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutReclamationComponent } from './ajout-reclamation/ajout-reclamation.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { ModifierReclamationComponent } from './modifier-reclamation/modifier-reclamation.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListReclamationComponent
      },
      {
        path: 'ajout',
        component: AjoutReclamationComponent
      },
      {
        path: 'modifier/:id',
        component: ModifierReclamationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
