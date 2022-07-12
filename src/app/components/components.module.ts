
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedGlobalModule } from '../shared-global/shared-global.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


import { AjoutTypeDepartementComponent } from './type-departement/ajout-type-departement/ajout-type-departement.component';
import { ListTypeDepartementComponent } from './type-departement/list-type-departement/list-type-departement.component';
import { ModifierTypeDepartementComponent } from './type-departement/modifier-type-departement/modifier-type-departement.component';
import { ListTaxeComponent } from './taxe/list-taxe/list-taxe.component';
import { AjoutTaxeComponent } from './taxe/ajout-taxe/ajout-taxe.component';
import { ModifierTaxeComponent } from './taxe/modifier-taxe/modifier-taxe.component';
import { AjoutTypeCompteurComponent } from './type-compteur/ajout-type-compteur/ajout-type-compteur.component';
import { ListTypeCompteurComponent } from './type-compteur/list-type-compteur/list-type-compteur.component';
import { ModifierTypeCompteurComponent } from './type-compteur/modifier-type-compteur/modifier-type-compteur.component';
import { AjoutFamilleProduitComponent } from './famille-produit/ajout-famille-produit/ajout-famille-produit.component';
import { ListFamilleProduitComponent } from './famille-produit/list-famille-produit/list-famille-produit.component';
import { ModifierFamilleProduitComponent } from './famille-produit/modifier-famille-produit/modifier-famille-produit.component';
import { ListTypePlatComponent } from './type-plat/list-type-plat/list-type-plat.component';
//import { PopupTransporteurComponent } from './popups/popup-transporteur/popup-transporteur.component';
//import { ListTypeDepartementComponent } from '../components/typeDepartement/list-type-departement/list-type-departement.component';

@NgModule({
  declarations: [
    AjoutTypeDepartementComponent,
    ListTypeDepartementComponent,
    ModifierTypeDepartementComponent,
    ListTaxeComponent,
    AjoutTaxeComponent,
    ModifierTaxeComponent,
    AjoutTypeCompteurComponent,
    ListTypeCompteurComponent,
    ModifierTypeCompteurComponent,
    AjoutFamilleProduitComponent,
    ListFamilleProduitComponent,
    ModifierFamilleProduitComponent,
    ListTypePlatComponent
    //PopupTransporteurComponent,
    //ListTypeDepartementComponent,
  ],
  imports: [
    CommonModule,
    SharedGlobalModule,
    SharedModule,
    NgbTabsetModule,
    NgbAccordionModule, NgbCollapseModule
  ],
  exports:[

  ]
})
export class ComponentsModule { }
