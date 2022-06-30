import { Pipe, PipeTransform } from '@angular/core';
import { provideRoutes } from '@angular/router';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, searchword: any): any {
    return value.filter((prod:any)=>{
      return prod.name.toLowerCase().indexOf(searchword.toLowerCase()) > -1 
    });
  }

}
