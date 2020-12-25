import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  constructor() { }
  getItemName(){
    return ["pen","iphone 10","levis jeans" ];
  }
  getItemCategory(){
    return ["Stationary","Electronics","apperals"];
  }
  getItemPrice(){
    return [100,100000,1500];
  }
}
