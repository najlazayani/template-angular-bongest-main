import { ModifierFamilleProduitRoutingModule } from './modifier-famille-produit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModifierFamilleProduitRoutingModule,
    SharedModule
  ]
})
export class ModifierFamilleProduitModule { }
