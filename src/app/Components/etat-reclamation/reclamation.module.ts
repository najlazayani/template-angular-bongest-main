import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReclamationRoutingModule } from './reclamation-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    SharedModule
  ]
})
export class ReclamationModule { }
