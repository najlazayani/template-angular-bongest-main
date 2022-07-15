import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTypePlatComponent}  from './list-type-plat/list-type-plat.component';

const routes: Routes = [
   {
    path: '',
    children: [
      {
        path: 'list',
        component: ListTypePlatComponent
      },
      //  {
      //    path: 'ajout',
      //    component: AjoutTypeDepartementComponent
      //  },
      //  {
      //    path: 'modifier/:id',
      //  component: ModifierTypeDepartementComponent
      //  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypePlatRoutingModule { }
