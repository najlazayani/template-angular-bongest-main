import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListTaxeRoutingModule } from './list-taxe-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListTaxeRoutingModule,
    SharedModule,
    FormsModule,
    NgbModal
  ]
})
export class ListTaxeModule{}
