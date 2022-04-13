import { Component, OnInit, Input, OnChanges, AfterViewInit, AfterContentInit, ElementRef, ViewChild, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { createMask, InputmaskOptions } from '@ngneat/input-mask';
import { inputConfigs, typesProvider } from './typesProvider';

@Component({
  selector: 'app-input-number',
  templateUrl: './ngx-input-number.component.html',
  styleUrls: ['./ngx-input-number.component.sass']
})
export class NgxInputNumberComponent implements OnInit, OnChanges {

  constructor(
    private _ChangeDetectorRef: ChangeDetectorRef,
    private readonly _typesProvider: typesProvider
  ) { }

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input() control!: FormControl
  @Input() negative!: any
  @Input() autofocus: any = false
  @Input() decimals: any
  @Input() max: any
  @Input() idForLabel: any = ""
  @Input() addClass: any = "form-control-sm"
  @Input() groupSeparator: any = this._typesProvider.config.groupSeparator
  @Input() radixPoint: any = this._typesProvider.config.radixPoint

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
      groupSeparator: this.groupSeparator,
      radixPoint : this.radixPoint,
      digits: 2,
      digitsOptional: false,
      placeholder: '0',
      unmaskAsNumber: true,
      autoUnmask: true,
      showMaskOnFocus: true,
      showMaskOnHover: false,
      onBeforePaste: ( pastedValue: any, opts ) =>{
        return pastedValue.replaceAll( opts.groupSeparator!, "" )
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
    console.log("ngOnInit this._typesProvider",this._typesProvider)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges this._typesProvider",this._typesProvider)
    this.loading = true

    setTimeout(() => {
      this.render()
    }, 0);
  }

}
