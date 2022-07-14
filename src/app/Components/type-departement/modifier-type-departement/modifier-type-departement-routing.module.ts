import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierTypeDepartementComponent } from './modifier-type-departement.component';

const routes: Routes = [
  {
    path: '',
    component: ModifierTypeDepartementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierTypeDepartementRoutingModule { }
