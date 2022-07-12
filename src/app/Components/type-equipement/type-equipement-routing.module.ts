import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutTypeequipementComponent } from './ajout-typeequipement/ajout-typeequipement.component';
import { ListTypeequipementComponent } from './list-typeequipement/list-typeequipement.component';
import { ModifierTypeequipementComponent } from './modifier-typeequipement/modifier-typeequipement.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListTypeequipementComponent
      },
      {
        path: 'ajout',
        component: AjoutTypeequipementComponent
      },
      {
        path: 'modifier/:id',
        component: ModifierTypeequipementComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipementRoutingModule { }
