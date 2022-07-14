import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTypeDepartementComponent } from './list-type-departement.component';

const routes: Routes = [
  {
    path: '',
    component: ListTypeDepartementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTypeDepartementRoutingModule { }
