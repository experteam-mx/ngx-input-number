import { Component, OnInit, Input, OnChanges, AfterViewInit, AfterContentInit, ElementRef, ViewChild, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup, FormControl } from "@angular/forms";
import { createMask, InputmaskOptions } from '@ngneat/input-mask';

import { inputConfigs, typesProvider } from './typesProvider';
import { NgxInputNumberService } from './ngx-input-number.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './ngx-input-number.component.html',
  styleUrls: ['./ngx-input-number.component.sass']
})
export class NgxInputNumberComponent implements OnInit, OnChanges {

  constructor(
    private _ChangeDetectorRef: ChangeDetectorRef,
    private readonly _typesProvider: typesProvider,
    private _NgxInputNumberService: NgxInputNumberService,
  ) { }

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input() control!: FormControl
  @Input() negative!: any
  @Input() autofocus: any = false
  @Input() decimals: any
  @Input() max: any
  @Input() idForLabel: any = ""
  @Input() tabIndex: any
  @Input() addClass: any = "form-control-sm"
  @Input() groupSeparator: any
  @Input() radixPoint: any
  @Input() lblKeyInvalid: any
  lblKeyInvalidRender: any

  inputMask: InputmaskOptions<any> = {}
  imask: any

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

    this.lblKeyInvalidRender = this._NgxInputNumberService.lblKeyInvalid

  //   this.inputMask = createMask({
  //     allowMinus: this._NgxInputNumberService.negative,
  //     alias: 'numeric',
  //     numericInput: false,
  //     inputType: "number",
  //     inputmode: "numeric",
  //     groupSeparator: this._NgxInputNumberService.groupSeparator,
  //     radixPoint : this._NgxInputNumberService.radixPoint,
  //     max : this._NgxInputNumberService.max,
  //     digits: this._NgxInputNumberService.decimals,
  //     digitsOptional: true,
  //     // placeholder: '0',
  //     unmaskAsNumber: true,
  //     autoUnmask: true,
  //     showMaskOnFocus: false,
  //     showMaskOnHover: false,
  //     onBeforePaste: ( pastedValue: any, opts ) =>{
  //       return pastedValue.replaceAll( opts.groupSeparator!, "" )
  //     },
  //     onKeyValidation: ( key, result ) => {
  //       if( !result ){
  //         this.inputElement.nativeElement.classList.add("key-invalid")
  //         setTimeout(
  //           ()=>{
  //             this.inputElement.nativeElement.classList.remove("key-invalid")
  //           },
  //           1000
  //         )
  //       }
  //     },
  //     onKeyDown: (event: any,buffer, caretPos) => {
  //       // if( event.target.value === 0 && event.key != "Tab" ){
  //       //   this.control.setValue( null )
  //       // }
  //       if( event.target.value === 0 && (event.key == "Backspace" || event.key == "Delete") ){
  //         this.control.setValue( null )
  //       }
  //     },
  //     // onBeforeWrite: (event, buffer, caretPos, opts) => {
  //     //   let caret = caretPos
  //     //   console.log("caret",caret)
  //     //   setTimeout(
  //     //     () => {
  //     //       // console.log("event",event)
  //     //       // console.log("this.inputElement.nativeElement.value",this.inputElement.nativeElement.value)

  //     //       if( event.type != "checkval" && this.inputElement.nativeElement.value === "" ){
  //     //         this.control.setValue( null )
  //     //       }else if( event.type == "_checkval" && this.control.value != this.inputElement.nativeElement.value ){
  //     //         console.log("caret-a",caret)
  //     //         // this.control.setValue( this.inputElement.nativeElement.value )
  //     //       }
  //     //     },
  //     //     0
  //     //   )
        
  //     //   // if( event.type == "keydown" && (event.key == "Backspace" || event.key == "Delete") ){
  //     //   // }
  //     //   return {}
  //     // }
  //   })
    
  //   if( this.negative !== undefined ){
  //     this.inputMask.allowMinus = this.negative
  //   }
  //   if( this.max !== undefined ){
  //     this.inputMask.max = this.max
  //   }
    
  //   if( this.groupSeparator !== undefined ){
  //     this.inputMask.groupSeparator = this.groupSeparator
  //   }
  //   if( this.radixPoint !== undefined ){
  //     this.inputMask.radixPoint = this.radixPoint
  //   }

  //   if( this.decimals !== undefined ){
  //     this.inputMask.digits = this.decimals
  //   }



  //   // if( Number(this.inputMask.digits)! > 0 ){
  //   //   this.placeholder = '0' + String(this.inputMask.radixPoint)
  //   // }
  //   // for( let x = 0; x < Number(this.inputMask.digits)!; x++ ){
  //   //   this.placeholder += "0"
  //   // }

  //   this.loading = false

    this.imask = {
      mask: Number,
      scale: this._NgxInputNumberService.decimals,
      thousandsSeparator: this._NgxInputNumberService.groupSeparator,
      padFractionalZeros: true,
      normalizeZeros: true,
      radix: this._NgxInputNumberService.radixPoint,
      max: this._NgxInputNumberService.max,
      min: this._NgxInputNumberService.negative ? -999999999999999999999999999999999 : 0,
    }

    if( this.lblKeyInvalid !== undefined ){
      this.lblKeyInvalidRender = this.lblKeyInvalid
    }

    if( this.negative !== undefined ){
      this.imask.min = this.negative ? -999999999999999999999999999999999 : 0
    }

    if( this.max !== undefined ){
      this.imask.max = this.max
    }
    
    if( this.groupSeparator !== undefined ){
      this.imask.thousandsSeparator = this.groupSeparator
    }
    if( this.radixPoint !== undefined ){
      this.imask.radix = this.radixPoint
    }

    if( this.decimals !== undefined ){
      this.imask.scale = this.decimals
    }
  }

  ngOnInit(): void {
    this._NgxInputNumberService.getChangeEvent().subscribe(
      ( configs )=>{
        if( configs ){
        //   this.loading = true

        //   setTimeout(() => {
            this.render()
        //   }, 0);
        }
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.loading = true

    // setTimeout(() => {
      this.render()
    // }, 0);
  }

  prevValue: any = ""
  onKeydown(e: any){
    this.prevValue = this.control.value
  }
  onKeyup(e: any){
    if( e.target.value == "" ){
      this.control.setValue("")
    }

    let scapeKeys: any[] = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Escape",
      "Backspace",
      "Delete",
      ".",
      ",",
      "-",
    ]
    if(
      !scapeKeys.includes(e.key)
      &&
      this.prevValue === this.control.value
    ){
      this.inputElement.nativeElement.classList.add("key-invalid")
      setTimeout(
        ()=>{
          this.inputElement.nativeElement.classList.remove("key-invalid")
        },
        1000
      )
    }
  }
}
