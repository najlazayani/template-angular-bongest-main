import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutTypeCompteurComponent } from './ajout-type-compteur.component';
const routes: Routes = [
  {
    path: '',
    component: AjoutTypeCompteurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutTypeCompteurRoutingModule { }
