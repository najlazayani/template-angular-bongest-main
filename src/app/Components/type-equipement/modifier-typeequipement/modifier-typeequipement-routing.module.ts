import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierTypeequipementComponent } from './modifier-typeequipement.component';

const routes: Routes = [
  {
    path: '',
    component: ModifierTypeequipementComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModifierTypeequipementRoutingModule { }
