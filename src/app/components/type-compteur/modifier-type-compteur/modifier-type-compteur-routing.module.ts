import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierTypeCompteurComponent } from './modifier-type-compteur.component';
const routes: Routes = [
  {
    path: '',
    component: ModifierTypeCompteurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierTypeCompteurRoutingModule { }
