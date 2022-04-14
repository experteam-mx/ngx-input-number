import { Injectable, Optional, Inject, EventEmitter, Output } from '@angular/core';
import { INPUT_CONFIG_TOKEN } from './di';
import { inputConfigs } from './types';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NgxInputNumberService {

  changeEvent = new BehaviorSubject<boolean>(false);
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

  onChangeParams( config: inputConfigs ){
    if( config.groupSeparator ){
      this.groupSeparator = config.groupSeparator!
    }
    if( config.radixPoint ){
      this.radixPoint = config.radixPoint!
    }

    this.changeEvent.next( true )
  }

  getChangeEvent(){
    return this.changeEvent
  }
}
