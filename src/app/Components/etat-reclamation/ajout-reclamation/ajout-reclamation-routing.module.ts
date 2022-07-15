import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutReclamationComponent } from './ajout-reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutReclamationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutReclamationRoutingModule { }
