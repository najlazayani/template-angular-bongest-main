import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifierReclamationComponent } from './modifier-reclamation.component';

const routes: Routes = [
  {
    path: '',
    component: ModifierReclamationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModifierReclamationRoutingModule { }
