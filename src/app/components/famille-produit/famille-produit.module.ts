import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FamilleProduitRoutingModule } from './famille-produit-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FamilleProduitRoutingModule,
    SharedModule
  ]
})
export class FamilleProduitModule { }
