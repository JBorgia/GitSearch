import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideApiUrl'
})
export class HideApiUrlPipe implements PipeTransform {

  transform(keys: any[], user): any {
    if (!keys || !user) {
      return keys;
    }
    return keys.filter(key => {
      return typeof user[key] !== 'string' || !user[key].includes('api');
    });
  }
}
