import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MethodServiceService {

  constructor() { }

  calculMethod(list:any[], critiria:string, value:any){
 
    let s =0;
    for (let i in list)
    {
      if(list[i][critiria]==value)
      {
          s++;
      }
    }
    return s;
  }
  
}
