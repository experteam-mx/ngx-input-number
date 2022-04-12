import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxInputNumberComponent } from './ngx-input-number.component';
import { InputMaskModule } from '@ngneat/input-mask';

import { NgxInputNumberService } from './ngx-input-number.service';
import { inputConfigs } from './types';
import { INPUT_CONFIG_TOKEN } from './di';

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
  ],
  providers:[
    NgxInputNumberService
  ]
})
export class NgxInputNumberModule {
  static forRoot(config: inputConfigs ): ModuleWithProviders<NgxInputNumberModule> {
    return {
      ngModule: NgxInputNumberModule,
      providers: [{ provide: INPUT_CONFIG_TOKEN, useValue: config }],
    }
  }
}
