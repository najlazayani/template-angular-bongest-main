import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutTypeequipementComponent } from './ajout-typeequipement.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutTypeequipementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutTypeequipementRoutingModule { }
