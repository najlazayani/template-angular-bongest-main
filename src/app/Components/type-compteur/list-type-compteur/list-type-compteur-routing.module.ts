import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTypeCompteurComponent } from './list-type-compteur.component';
const routes: Routes = [
  {
    path: '',
    component: ListTypeCompteurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTypeCompteurRoutingModule { }
