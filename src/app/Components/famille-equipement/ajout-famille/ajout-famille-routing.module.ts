import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutFamilleComponent } from './ajout-famille.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutFamilleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutFamilleRoutingModule { }
