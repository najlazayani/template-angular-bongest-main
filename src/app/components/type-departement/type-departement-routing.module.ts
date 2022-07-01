import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutTypeDepartementComponent } from './ajout-type-departement/ajout-type-departement.component';
import { ListTypeDepartementComponent } from './list-type-departement/list-type-departement.component';
import { ModifierTypeDepartementComponent } from './modifier-type-departement/modifier-type-departement.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListTypeDepartementComponent
      },
       {
         path: 'ajout',
         component: AjoutTypeDepartementComponent
       },
       {
         path: 'modifier/:id',
       component: ModifierTypeDepartementComponent
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeDepartementRoutingModule { }
