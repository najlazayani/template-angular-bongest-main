import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutTypeDepartementComponent } from './ajout-type-departement.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutTypeDepartementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutTypeDepartementRoutingModule { }
