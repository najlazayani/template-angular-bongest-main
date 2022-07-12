import { ModifierFamilleRoutingModule } from './modifier-famille-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifierFamilleRoutingModule,
    SharedModule
  ]
})
export class ModifierFamilleModule { }
