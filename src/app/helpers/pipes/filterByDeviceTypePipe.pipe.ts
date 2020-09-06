import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDeviceType',
})
export class FilterByDeviceTypePipe implements PipeTransform {
  transform(items: any, select?: any): any {
    if (select !== 'All') {
      return select
        ? items.filter(
            (item: { deviceType: any }) => item.deviceType === select
          )
        : items;
    } else {
      return items;
    }
  }
}
