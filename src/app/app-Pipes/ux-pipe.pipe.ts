import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxPipe'
})
export class UxPipePipe implements PipeTransform {
  

  transform(value:any, limit:number) {
    if(value.length > 5){
      return value.substr(0,limit) + "...";
    }
    else{
      return value
    }
  }

}
