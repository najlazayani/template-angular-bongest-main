
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedGlobalModule } from '../shared-global/shared-global.module';
import { SharedModule } from '../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';


import { AjoutTypeDepartementComponent } from './type-departement/ajout-type-departement/ajout-type-departement.component';
import { ListTypeDepartementComponent } from './type-departement/list-type-departement/list-type-departement.component';
import { ModifierTypeDepartementComponent } from './type-departement/modifier-type-departement/modifier-type-departement.component';
//import { PopupTransporteurComponent } from './popups/popup-transporteur/popup-transporteur.component';
//import { ListTypeDepartementComponent } from '../components/typeDepartement/list-type-departement/list-type-departement.component';

@NgModule({
  declarations: [
    AjoutTypeDepartementComponent,
    ListTypeDepartementComponent,
    ModifierTypeDepartementComponent,
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
