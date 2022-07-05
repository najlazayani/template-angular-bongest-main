import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierTaxeComponent } from './modifier-taxe.component';
const routes: Routes = [
  {
    path: '',
    component: ModifierTaxeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierTaxeRoutingModule { }
