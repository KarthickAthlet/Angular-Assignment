import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // console.log(value + ' ' + args);
    const sortType = (args[0] === 'ascending') ? true : false;
    if (value && args[0]) {
      value.sort((x, y) => {
        let comparision = 0;
        if (x?.id > y?.id) {
          comparision = sortType ? 1 : -1;
        } else if (x?.id < y?.id) {
          comparision = sortType ? -1 : 1;
        }
        return comparision;
      });
      // console.log(value + ' END ' + args);
    }
    return value;
  }

}
