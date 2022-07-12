import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { ListTaxeRoutingModule } from './list-taxe-routing.module';
import { ListTypeCompteurRoutingModule } from '../../type-compteur/list-type-compteur/list-type-compteur-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListTypeCompteurRoutingModule,
    SharedModule,
    FormsModule,
    NgbModal
  ]
})
export class ListTypePlatModule{}
