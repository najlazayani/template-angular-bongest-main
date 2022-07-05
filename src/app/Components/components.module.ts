
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbCollapseModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import { AjoutFamilleComponent } from './famille-equipement/ajout-famille/ajout-famille.component';
import { ListFamilleComponent } from './famille-equipement/list-famille/list-famille.component';
import { ModifierFamilleComponent } from './famille-equipement/modifier-famille/modifier-famille.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { SharedGlobalModule } from 'src/app/shared-global/shared-global.module';
import { AjoutParametresComponent } from './parametres/ajout-parametres/ajout-parametres.component';
import { ListParametresComponent } from './parametres/list-parametres/list-parametres.component';
import { ModifierParametresComponent } from './parametres/modifier-parametres/modifier-parametres.component';
import { ListReclamationComponent } from './etat-reclamation/list-reclamation/list-reclamation.component';
import { ModifierReclamationComponent } from './etat-reclamation/modifier-reclamation/modifier-reclamation.component';
import { AjoutReclamationComponent } from './etat-reclamation/ajout-reclamation/ajout-reclamation.component';

@NgModule({
  declarations: [
    AjoutReclamationComponent,
    ModifierReclamationComponent,
    ListReclamationComponent,
    AjoutParametresComponent,
    ModifierParametresComponent,
    ListParametresComponent,
    AjoutFamilleComponent,
    ListFamilleComponent,
    ModifierFamilleComponent,
    AjoutParametresComponent,
    ListParametresComponent,
    ModifierParametresComponent,
    ListReclamationComponent,
    ModifierReclamationComponent,
    AjoutReclamationComponent
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
