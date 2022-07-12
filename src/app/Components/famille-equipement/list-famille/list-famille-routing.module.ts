import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFamilleComponent } from './list-famille.component';

const routes: Routes = [
  {
    path: '',
    component: ListFamilleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListFamilleRoutingModule { }
