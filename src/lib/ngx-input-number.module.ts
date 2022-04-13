import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxInputNumberComponent } from './ngx-input-number.component';
import { InputMaskModule } from '@ngneat/input-mask';

import { inputConfigsHelp, typesProvider, defaultTypesProvider } from './typesProvider';

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
  ]
})
export class NgxInputNumberModule {
  static forRoot(config: inputConfigsHelp = {} ): ModuleWithProviders<NgxInputNumberModule> {
    return {
      ngModule: NgxInputNumberModule,
      providers: [
        config.config || {
          provide: typesProvider,
          useClass: defaultTypesProvider
        }
      ],
    }
  }
}
