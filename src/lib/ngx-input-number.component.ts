import { Component, OnInit, Input, AfterViewInit, AfterContentInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-input-number',
  templateUrl: './ngx-input-number.component.html',
  styleUrls: ['./ngx-input-number.component.sass']
})
export class NgxInputNumberComponent implements OnInit {

  constructor() { }

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input() control!: FormControl
  @Input() negative!: any
  @Input() autofocus: any = false
  @Input() decimals: any
  @Input() max: any
  @Input() idForLabel: any = ""
  @Input() addClass: any = "form-control-sm"

  inputMask = createMask({
    allowMinus: true,
    alias: 'numeric',
    numericInput: false,
    inputType: "number",
    inputmode: "numeric",
    groupSeparator: ',',
    radixPoint : '.',
    digits: 2,
    digitsOptional: false,
    placeholder: '0',
    unmaskAsNumber: true,
    autoUnmask: true,
    showMaskOnFocus: false,
    showMaskOnHover: false,
  })

  placeholder = "0"

  ngAfterViewInit(): void {
    if( this.autofocus ){
      setTimeout(()=>{
        this.inputElement.nativeElement.focus();
      })
    }
  }

  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
    if( this.negative === false ){
      this.inputMask.allowMinus = false
    }
    if( this.decimals !== undefined ){
      this.inputMask.digits = this.decimals
      if( this.decimals > 0 ){
        this.placeholder += String(this.inputMask.radixPoint)
      }
      for( let x = 0; x < this.decimals; x++ ){
        this.placeholder += "0"
      }
    }
    if( this.max !== undefined ){
      this.inputMask.max = this.max
    }
  }

}
