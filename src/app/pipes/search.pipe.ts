import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('pipeValue', value);
    const searchKey = args[0]?.toLowerCase();
    const newArray = value?.filter((val: any) => {
      const key = val?.name?.toLowerCase();
      return key.includes(searchKey);
    });
    console.log('pipeValue new array', newArray);
    return newArray ? newArray : value;
  }

}
