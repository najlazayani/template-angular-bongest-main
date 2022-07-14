import { SharedModule } from 'src/app/theme/shared/shared.module';
//import { TransporteurRoutingModule } from './transporteur-routing.module';
import { TypePlatRoutingModule } from './type-plat-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TypePlatRoutingModule,
    SharedModule
  ]
})
export class TypePlatModule { }
