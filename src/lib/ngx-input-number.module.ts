import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxInputNumberComponent } from './ngx-input-number.component';
import { InputMaskModule } from '@ngneat/input-mask';



@NgModule({
  declarations: [
    NgxInputNumberComponent
  ],
  imports: [
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxInputNumberComponent
  ]
})
export class NgxInputNumberModule { }
