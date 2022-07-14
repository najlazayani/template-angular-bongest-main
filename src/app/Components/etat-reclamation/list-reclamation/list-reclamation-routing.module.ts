import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReclamationComponent } from './list-reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: ListReclamationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListReclamationRoutingModule { }