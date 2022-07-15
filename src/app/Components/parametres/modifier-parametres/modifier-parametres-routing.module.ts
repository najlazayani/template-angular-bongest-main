import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ModifierTaxeComponent } from './modifier-taxe.component';
import { ModifierParametresComponent } from './modifier-parametres.component';
const routes: Routes = [
  {
    path: '',
    component: ModifierParametresComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierParametresRoutingModule { }
