
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedGlobalModule } from '../shared-global/shared-global.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


import { AjoutTransporteurComponent } from './transporteur/ajout-transporteur/ajout-transporteur.component';
import { ListTransporteurComponent } from './transporteur/list-transporteur/list-transporteur.component';
import { ModifierTransporteurComponent } from './transporteur/modifier-transporteur/modifier-transporteur.component';
import { PopupTransporteurComponent } from './popups/popup-transporteur/popup-transporteur.component';
import { ListFamilleComponent } from '../Components/famille-equipement/list-famille/list-famille.component';
import { AjoutReclamationComponent } from '../Components/etat-reclamation/ajout-reclamation/ajout-reclamation.component';
import { ModifierReclamationComponent } from '../Components/etat-reclamation/modifier-reclamation/modifier-reclamation.component';
import { ListReclamationComponent } from '../Components/etat-reclamation/list-reclamation/list-reclamation.component';
import { AjoutParametresComponent } from '../Components/parametres/ajout-parametres/ajout-parametres.component';
import { ModifierParametresComponent } from '../Components/parametres/modifier-parametres/modifier-parametres.component';
import { ListParametresComponent } from '../Components/parametres/list-parametres/list-parametres.component';
import { AjoutFamilleComponent } from '../Components/famille-equipement/ajout-famille/ajout-famille.component';
import { ModifierFamilleComponent } from '../Components/famille-equipement/modifier-famille/modifier-famille.component';
import { AjoutTypeCompteurComponent } from '../components/type-compteur/ajout-type-compteur/ajout-type-compteur.component';
import { ListTypeCompteurComponent } from '../components/type-compteur/list-type-compteur/list-type-compteur.component';
import { ModifierTypeCompteurComponent } from '../components/type-compteur/modifier-type-compteur/modifier-type-compteur.component';
import { AjoutFamilleProduitComponent } from '../components/famille-produit/ajout-famille-produit/ajout-famille-produit.component';
import { ModifierFamilleProduitComponent } from '../components/famille-produit/modifier-famille-produit/modifier-famille-produit.component';
import { ListFamilleProduitComponent } from '../components/famille-produit/list-famille-produit/list-famille-produit.component';
import { AjoutTaxeComponent } from '../components/taxe/ajout-taxe/ajout-taxe.component';
import { ModifierTaxeComponent } from '../components/taxe/modifier-taxe/modifier-taxe.component';
import { ListTaxeComponent } from '../components/taxe/list-taxe/list-taxe.component';
import { AjoutTypeDepartementComponent } from '../components/type-departement/ajout-type-departement/ajout-type-departement.component';
import { ModifierTypeDepartementComponent } from '../components/type-departement/modifier-type-departement/modifier-type-departement.component';
import { ListTypeDepartementComponent } from '../components/type-departement/list-type-departement/list-type-departement.component';
import { ListTypePlatComponent } from '../components/type-plat/list-type-plat/list-type-plat.component';
import { AjoutTypeequipementComponent } from '../Components/type-equipement/ajout-typeequipement/ajout-typeequipement.component';
import { ListTypeequipementComponent } from '../Components/type-equipement/list-typeequipement/list-typeequipement.component';
import { ModifierTypeequipementComponent } from '../Components/type-equipement/modifier-typeequipement/modifier-typeequipement.component';
//import { ListTypeDepartementComponent } from '../components/typeDepartement/list-type-departement/list-type-departement.component';

@NgModule({
  declarations: [
    AjoutTransporteurComponent,
    ListTransporteurComponent,
    ModifierTransporteurComponent,
    PopupTransporteurComponent,
    //ListTypeDepartementComponent,
    AjoutReclamationComponent,
    ModifierReclamationComponent,
    ListReclamationComponent,

    AjoutParametresComponent,
    ModifierParametresComponent,
    ListParametresComponent,

    AjoutFamilleComponent,
    ListFamilleComponent,
    ModifierFamilleComponent,


    AjoutTypeCompteurComponent,
    ListTypeCompteurComponent,
    ModifierTypeCompteurComponent,

    AjoutFamilleProduitComponent,
    ModifierFamilleProduitComponent,
    ListFamilleProduitComponent,

    AjoutTaxeComponent,
    ModifierTaxeComponent,
    ListTaxeComponent,

    AjoutTypeDepartementComponent,
    ModifierTypeDepartementComponent,
    ListTypeDepartementComponent,

    ListTypePlatComponent,




    AjoutTypeequipementComponent,
    ListTypeequipementComponent,
    ModifierTypeequipementComponent



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
export class ComerceModule { }
