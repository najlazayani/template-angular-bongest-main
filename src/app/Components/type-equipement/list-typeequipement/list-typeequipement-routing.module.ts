import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTypeequipementComponent } from './list-typeequipement.component';

const routes: Routes = [
  {
    path: '',
    component: ListTypeequipementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListTypeequipementRoutingModule { }
