import { SharedModule } from 'src/app/theme/shared/shared.module';
//import { TransporteurRoutingModule } from './transporteur-routing.module';
//import { TypeDepartementRoutingModule } from './type-departement-routing.module';
import { TypeCompteurRoutingModule } from './type-compteur-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TypeCompteurRoutingModule,
    SharedModule,

  ]
})
export class TypeCompteurModule { }
