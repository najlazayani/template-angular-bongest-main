import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierFamilleComponent }  from './modifier-famille.component';

const routes: Routes = [
  {
    path: '',
    component: ModifierFamilleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierFamilleRoutingModule { }
