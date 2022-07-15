//import { ModifierTaxeRoutingModule } from './modifier-taxe-routing.module';
import { ModifierParametresComponent } from './modifier-parametres.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgModel } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifierParametresComponent,
    SharedModule
  ]
})
export class ModifierParametresModule { }
