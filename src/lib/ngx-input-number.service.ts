import { Injectable, Optional, Inject } from '@angular/core';
import { INPUT_CONFIG_TOKEN } from './di';
import { inputConfigs } from './types';

@Injectable({
  providedIn: 'root'
})
export class NgxInputNumberService {

  groupSeparator = ','
  radixPoint = '.'

  constructor(
    @Optional() @Inject(INPUT_CONFIG_TOKEN)
    private readonly config: inputConfigs | null,
  ) {
    if( config != null ){
      this.groupSeparator = config.groupSeparator!
      this.radixPoint = config.radixPoint!
    }
  }

  changeParams( config: inputConfigs ){
    if( config.groupSeparator ){
      this.groupSeparator = config.groupSeparator!
    }
    if( config.radixPoint ){
      this.radixPoint = config.radixPoint!
    }
  }
}
