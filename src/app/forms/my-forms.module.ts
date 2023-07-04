import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ReactiveFormsComponent,
    TemplateDrivenComponent
  ]
})
export class MyFormsModule { }
