import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'orderBy',
})


export class OrderByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(obj: any, orderFields: any): any {
    orderFields.forEach(function(currentField) {
        var orderType = 'ASC';

        if (currentField[0] === '-') {
            currentField = currentField.substring(1);
            orderType = 'DESC';
        }

        obj.sort(function(a, b) {
            if (orderType === 'ASC') {
                if (a[currentField] < b[currentField]) return -1;
                if (a[currentField] > b[currentField]) return 1;
                return 0;
            } else {
                if (a[currentField] < b[currentField]) return 1;
                if (a[currentField] > b[currentField]) return -1;
                return 0;
            }
        });

    });
    return obj;
}
}
