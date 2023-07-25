import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent implements OnInit {

  @Input() creditCardNumber = ''

  private readonly = false

  @Input() set isReadOnly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadOnlyCCnum(this.creditCardNumber) : this.creditCardNumber
    this.readonly = value
  }

  get isReadonly() {
    return this.readonly
  }

  private formatReadOnlyCCnum(ccNum : string):string{
    const parts = ccNum.match(/[\s\S]{1,4}/g) || []
    const onlyLast4shown = parts.map((part , index)=>{
      if(index ===parts.length -1){
        return part
      }

      return 'xxxx'

    })

    return onlyLast4shown.join('-')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
