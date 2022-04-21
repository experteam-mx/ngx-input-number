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
  lblKeyInvalid = 'Please enter a valid amount'
  negative: any = true
  max: any = undefined
  decimals = 2

  constructor(
    @Optional() @Inject(INPUT_CONFIG_TOKEN)
    private readonly config: inputConfigs | null,
  ) {
    if( config != null ){
      this.groupSeparator = config.groupSeparator!
      this.radixPoint = config.radixPoint!
      this.lblKeyInvalid = config.lblKeyInvalid!
      this.negative = config.negative!
      this.max = config.max!
      this.decimals = config.decimals!
    }
  }

  onChangeParams( config: inputConfigs ){
    if( config.groupSeparator ){
      this.groupSeparator = config.groupSeparator
    }
    if( config.radixPoint ){
      this.radixPoint = config.radixPoint
    }
    if( config.lblKeyInvalid ){
      this.lblKeyInvalid = config.lblKeyInvalid
    }
    if( config.negative !== undefined ){
      this.negative = config.negative
    }
    if( config.max ){
      this.max = config.max!
    }
    if( config.decimals ){
      this.decimals = config.decimals
    }

    this.changeEvent.next( true )
  }

  getChangeEvent(){
    return this.changeEvent
  }
}
