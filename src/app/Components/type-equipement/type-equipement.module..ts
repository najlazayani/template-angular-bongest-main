import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipementRoutingModule } from './type-equipement-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EquipementRoutingModule,
    SharedModule
  ]
})
export class EquipementModule { }
