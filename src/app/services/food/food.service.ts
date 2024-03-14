import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAllFoodByTag(tag:string): Foods[] {
    // if(tag=='all'){
    //   return this.getAll();

    // }else{
    //   return this.getAll().filter(food =>food.tags?.includes(tag));
    // }

    //you can write statement is very simple
    return tag=='All'?this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
  }

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllTag():Tag[]{
    return [
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Hanburger',count:1},
      {name:'Fry',count:1},
      {name:'soup',count:1},
    ];
  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'pizza pepperoni',
        cooktime:'10-20',
        price:100,
        favorite:true,
        origins:['italy','All'],
        star:4.5,
        imageUrl:'assets/one.jpeg',
        tags:['FastFood','Pizza']

      },
      {
        id:2,
        name:'burger',
        cooktime:'25-35',
        price:120,
        favorite:false,
        origins:['italy','indian'],
        star:4.9,
        imageUrl:'assets/two.jpeg',
        tags:['Hanburger','Lunch']

      },
      {
        id:3,
        name:'momos',
        cooktime:'20-40',
        price:80,
        favorite:true,
        origins:['italy','ukraine'],
        star:4.5,
        imageUrl:'assets/three.jpeg',
        tags:['FastFood','Lunch']

      },
      {
        id:4,
        name:'nooodles',
        cooktime:'10-25',
        price:75,
        favorite:false,
        origins:['china','India'],
        star:3.5,
        imageUrl:'assets/four.jpeg',
        tags:['FastFood','Lunch']

      },
      {
        id:5,
        name:'samosa',
        cooktime:'10-15',
        price:60,
        favorite:true,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/five.jpeg',
        tags:['FastFood','Fry']

      },
      {
        id:6,
        name:'pasta',
        cooktime:'10-20',
        price:95,
        favorite:true,
        origins:['italy'],
        star:4.5,
        imageUrl:'assets/six.jpeg',
        tags:['FastFood','SlowFood']

      },
      {
        id:7,
        name:'chole bhature',
        cooktime:'10-30',
        price:49,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/seven.jpeg',
        tags:['SlowFood']

      },
      {
        id:8,
        name:'soup',
        cooktime:'5-10',
        price:30,
        favorite:true,
        origins:['indian','china','s-korea'],
        star:4.5,
        imageUrl:'assets/eight.jpeg',
        tags:['soup']

      },
      {
        id:9,
        name:'panner masala',
        cooktime:'30-40',
        price:105,
        favorite:false,
        origins:['italy','india','america'],
        star:4.2,
        imageUrl:'assets/nine.jpeg',
        tags:['dinner','lunch']

      },
      {
        id:10,
        name:'fish kari',
        cooktime:'10-30',
        price:150,
        favorite:true,
        origins:['italy','indian','all country'],
        star:4.7,
        imageUrl:'assets/ten.jpeg',
        tags:['FastFood','lunch','Fry']

      }
    ]
  }
}
