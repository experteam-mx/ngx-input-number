import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxInputNumberComponent } from './ngx-input-number.component';
import { InputMaskModule } from '@ngneat/input-mask';



@NgModule({
  declarations: [
    NgxInputNumberComponent
  ],
  imports: [
    CommonModule,
    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxInputNumberComponent
  ]
})
export class NgxInputNumberModule { }
