import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListParametresRoutingModule } from './list-parametres-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListParametresRoutingModule,
    SharedModule,
    FormsModule,
    NgbModal
  ]
})
export class ListParametresModule { }
