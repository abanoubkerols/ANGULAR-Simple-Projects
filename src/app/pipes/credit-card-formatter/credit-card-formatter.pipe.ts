import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {

  transform(cardNumber: string): string | undefined {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length';
    }

    if (!this.isAllNum(cardNumber)) {
      return 'Invalid characters';
    }

    return this.formatCardNumber(cardNumber);
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumLen = cardNumber.length
    const isMasterDiscoverVisaCardLen = 16
    const isAmericanExpressCardLen = 15

    if (cardNumLen === isAmericanExpressCardLen || cardNumLen === isMasterDiscoverVisaCardLen) {

      return true
    }

    return false

  }


  private isAllNum(cardNumber: string): boolean {
    const stringNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber.split('').filter((char) => stringNums.includes(char)).length;
    return totalValidCharacters == cardNumber.length

  }

  private formatCardNumber(cardNumber: string): string   {
    let str = cardNumber.match(/[\s\S]{1,4}/g)!!;
   
    return str.join('-');
  }
}
