
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
//import { ListTypeDepartementComponent } from '../components/typeDepartement/list-type-departement/list-type-departement.component';

@NgModule({
  declarations: [
    AjoutTransporteurComponent,
    ListTransporteurComponent,
    ModifierTransporteurComponent,
    PopupTransporteurComponent,
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
export class ComerceModule { }
