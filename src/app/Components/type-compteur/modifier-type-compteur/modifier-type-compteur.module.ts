//import { ModifierTypeDepartementRoutingModule } from './modifier-type-departement-routing.module';
import { ModifierTypeCompteurRoutingModule } from './modifier-type-compteur-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifierTypeCompteurRoutingModule,
    SharedModule
  ]
})
export class ModifierTypeCompteurModule { }
