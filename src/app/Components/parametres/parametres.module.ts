import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParametresRoutingModule } from './parametres-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParametresRoutingModule,
    SharedModule
  ]
})
export class ParametresModule { }
