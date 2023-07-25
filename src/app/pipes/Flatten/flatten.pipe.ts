import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten'
})
export class FlattenPipe implements PipeTransform {


  
  transform(value: any[]): any[] {
    return this.flattenArray(value)
  }


  flattenArray(arr: any[]): any[] {
    let results: any[] = []
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        results.push(...this.flattenArray(val))
      } else {
        results.push(val)
      }
    })

    return results
  }
}
