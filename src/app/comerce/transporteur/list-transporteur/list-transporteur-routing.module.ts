<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTransporteurComponent } from './list-transporteur.component';

const routes: Routes = [
  {
    path: '',
    component: ListTransporteurComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTransporteurRoutingModule { }
=======
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { ListTransporteurComponent } from './list-transporteur.component';

  const routes: Routes = [
    {
      path: '',
      component: ListTransporteurComponent
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ListTransporteurRoutingModule { }
>>>>>>> 28e389574ef18da4f503dacb52abbe79f79a146b
