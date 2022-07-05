import { AjoutTypeCompteurRoutingModule } from './ajout-type-compteur-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

// Importing Colorpicker module from Syncfusion ej2-angular-inputs package.
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs'

@NgModule({
  declarations: [],
  imports: [

    CommonModule,
    AjoutTypeCompteurRoutingModule
  ]
})
export class AjoutTypeCompteurModule { }
