import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutParametresComponent } from './ajout-parametres.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutParametresComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AjoutParametresRoutingModule { }
