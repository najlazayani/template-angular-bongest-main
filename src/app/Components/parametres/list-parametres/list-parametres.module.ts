//import { ListFamilleProduitRoutingModule } from './list-famille-produit-routing.module';
import { ListParametresRoutingModule } from './list-parametres-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListParametresRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ListParametresModule { }
