import { ListFamilleRoutingModule } from './list-famille-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListFamilleRoutingModule,
    SharedModule,
    FormsModule,
    NgbModal
  ]
})
export class ListFamilleModule { }
