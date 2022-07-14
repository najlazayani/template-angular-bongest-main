import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutTypeCompteurComponent } from './ajout-type-compteur/ajout-type-compteur.component';
import { ListTypeCompteurComponent } from './list-type-compteur/list-type-compteur.component';
import { ModifierTypeCompteurComponent } from './modifier-type-compteur/modifier-type-compteur.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListTypeCompteurComponent
      },
       {
         path: 'ajout',
         component: AjoutTypeCompteurComponent
       },
       {
         path: 'modifier/:id',
       component:  ModifierTypeCompteurComponent
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCompteurRoutingModule { }
