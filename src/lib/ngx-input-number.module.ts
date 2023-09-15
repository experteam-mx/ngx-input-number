import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxInputNumberComponent } from './ngx-input-number.component';

import { inputConfigsHelp, typesProvider, defaultTypesProvider } from './typesProvider';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { IMaskModule } from 'angular-imask';

const maskConfig: Partial<IConfig> = {
};

@NgModule({
  declarations: [
    NgxInputNumberComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    IMaskModule
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
