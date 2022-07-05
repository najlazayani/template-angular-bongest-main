
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ImpressionComponent } from './impression/impression.component';
import { InputNumberVerguleComponent } from './input-number-vergule/input-number-vergule.component';

import { ListNavbarSocieteComponent } from './list-navbar-societe/list-navbar-societe.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ShowelementsComponent } from './showelements/showelements.component';
import { Spinner3Component } from './spinner3/spinner3.component';
import { Spinner2Component } from './spinner2/spinner2.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { UpdateElementModalComponent } from './update-element-modal/update-element-modal.component';
import { FiltreDateComponent } from './filtre-date/filtre-date.component';

import { SharedModule } from '../theme/shared/shared.module';
import { ComerceModule } from '../comerce/comerce.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { EmptyArrayComponent } from './empty-array/empty-array.component';
import { InputQuantiteVerguleComponent } from './input-quantite-vergule/input-quantite-vergule.component';
import { ControleAccesComponent } from './controle-acces/controle-acces.component';
import { ParametresSocietesModalComponent } from './parametres-societes-modal/parametres-societes-modal.component';
import { ParametresExercicesModalComponent } from './parametres-exercices-modal/parametres-exercices-modal.component';
import { AutoCompleteArticleComponent } from './auto-complete-article/auto-complete-article.component';
import { AutoCompleteClientComponent } from './auto-complete-client/auto-complete-client.component';
import { AutoCompleteTypeTierComponent } from './auto-complete-type-tier/auto-complete-type-tier.component';


import { FiltreDateButtonComponent } from './filtre-date/filtre-date-button/filtre-date-button.component';

import { AutoCompleteInputComponent } from './auto-complete-input/auto-complete-input.component';


@NgModule({
  declarations: [
    FiltreDateComponent,
    AutocompleteComponent,
    DeleteModalComponent,
    ImpressionComponent,
    InputNumberVerguleComponent,
    ListNavbarSocieteComponent,
    PaginationComponent,
    ShowelementsComponent,
    Spinner3Component,
    Spinner2Component,
    ToastNotificationComponent,
    UpdateElementModalComponent,
    EmptyArrayComponent,
    InputQuantiteVerguleComponent,
    ControleAccesComponent,
    ParametresSocietesModalComponent,
    ParametresExercicesModalComponent,
    AutoCompleteArticleComponent,
    AutoCompleteClientComponent,
    AutoCompleteTypeTierComponent,

    FiltreDateButtonComponent,
    AutoCompleteInputComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports:[
    FiltreDateComponent,
    AutocompleteComponent,
    DeleteModalComponent,
    ImpressionComponent,
    InputNumberVerguleComponent,
    ListNavbarSocieteComponent,
    PaginationComponent,
    ShowelementsComponent,
    Spinner3Component,
    Spinner2Component,
    ToastNotificationComponent,
    UpdateElementModalComponent,
    EmptyArrayComponent,
    InputQuantiteVerguleComponent,
    ControleAccesComponent,
    ParametresSocietesModalComponent,
    ParametresExercicesModalComponent,
    AutoCompleteArticleComponent,
    AutoCompleteClientComponent,
    AutoCompleteTypeTierComponent,

    FiltreDateButtonComponent,

    AutoCompleteInputComponent

  ],
  providers: [

  ]
})
export class SharedGlobalModule { }
