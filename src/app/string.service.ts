import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(b:string): number
  {
   return b.split('').filter(char => char === char.toUpperCase()).length;   
  }


}
