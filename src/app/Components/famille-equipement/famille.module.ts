import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FamilleRoutingModule } from './famille-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FamilleRoutingModule,
    SharedModule
  ]
})
export class FamilleModule { }
