import { SharedModule } from 'src/app/theme/shared/shared.module';
//import { TransporteurRoutingModule } from './transporteur-routing.module';
import { TaxeRoutingModule } from './taxe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaxeRoutingModule,
    SharedModule
  ]
})
export class TaxeModule { }
