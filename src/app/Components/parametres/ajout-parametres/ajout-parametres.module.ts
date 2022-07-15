//import { AjoutFamilleProduitRoutingModule } from './ajout-famille-produit-routing.module';
import { AjoutParametrestRoutingModule } from './ajout-parametres-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { SharedGlobalModule } from 'src/app/shared-global/shared-global.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AjoutParametrestRoutingModule,

    SharedGlobalModule
  ]
})
export class AjoutFamilleProduitModule { }
