import { Component, OnInit, Input, OnChanges, AfterViewInit, AfterContentInit, ElementRef, ViewChild, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { createMask, InputmaskOptions } from '@ngneat/input-mask';

@Component({
  selector: 'app-input-number',
  templateUrl: './ngx-input-number.component.html',
  styleUrls: ['./ngx-input-number.component.sass']
})
export class NgxInputNumberComponent implements OnInit, OnChanges {

  constructor(
    private _ChangeDetectorRef: ChangeDetectorRef
  ) { }

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input() control!: FormControl
  @Input() negative!: any
  @Input() autofocus: any = false
  @Input() decimals: any
  @Input() max: any
  @Input() idForLabel: any = ""
  @Input() addClass: any = "form-control-sm"

  inputMask: InputmaskOptions<any> = {}

  placeholder = "0"

  loading = false

  ngAfterViewInit(): void {
    if( this.autofocus ){
      setTimeout(()=>{
        this.inputElement.nativeElement.focus();
      })
    }
  }

  ngAfterContentInit(): void {
  }

  render(){
    this._ChangeDetectorRef.detectChanges()

    this.inputMask = createMask({
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
      showMaskOnFocus: true,
      showMaskOnHover: false,
      onBeforePaste: ( pastedValue, opts ) =>{
        return pastedValue.replace( opts.groupSeparator!, "" )
      }
    })
    
    if( this.negative === false ){
      this.inputMask.allowMinus = false
    }
    if( this.decimals !== undefined ){
      this.inputMask.digits = this.decimals
      if( this.decimals > 0 ){
        this.placeholder = '0' + String(this.inputMask.radixPoint)
      }
      for( let x = 0; x < this.decimals; x++ ){
        this.placeholder += "0"
      }
    }
    if( this.max !== undefined ){
      this.inputMask.max = this.max
    }

    this.loading = false

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true

    setTimeout(() => {
      this.render()
    }, 0);
  }

}
