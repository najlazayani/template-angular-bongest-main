import { ModifierTaxeRoutingModule } from './modifier-taxe-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifierTaxeRoutingModule,
    SharedModule
  ]
})
export class ModifierTaxeModule { }
