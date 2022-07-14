import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListTypeDepartementRoutingModule } from './list-type-departement-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListTypeDepartementRoutingModule,
    SharedModule,
    FormsModule,
    NgbModal
  ]
})
export class ListTypeDepartementModule{}
