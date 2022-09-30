import { Foods } from './../../shared/models/food';
import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    return tag=="All"? this.getAll() : this.getAll().filter(food =>food.tags?.includes(tag));
  }


  getAllTag():Tag[]{
    return [
      {name:'All',count:14},
      {name:'FastFood',count:3},
      {name:'Pizza',count:1},
      {name:'Soup',count:4},
      {name:'Lunch',count:3},
      {name:'Hamburger',count:2},
      {name:'Fry',count:4},
      {name:'Dinner',count:4},
    ]
    
  }


  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Chicken Biryani',
        price:200,
        favorite: false,
        cookTime:'25-30',
        origins: ['Italy','Indian'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpeg',
        tags: ['FastFood','Pizza', 'lunch']
      },
      {
        id: 2,
        name: 'Burger',
        price:300,
        favorite: true,
        cookTime:'10-15',
        origins: ['Italy','Indian','US'],
        star: 4.0,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood','Pizza', 'lunch']
      },
      {
        id: 3,
        name: 'Dosa',
        price:100,
        favorite: true,
        cookTime:'15-20',
        origins: ['Italy','France','Indian'],
        star: 4.2,
        imageUrl: '/assets/food-3.jpeg',
        tags: ['Pizza', 'lunch','Dinner']
      },
      {
        id: 4,
        name: 'Noodles',
        price:150,
        favorite: true,
        cookTime:'15-20',
        origins: ['China','Japan'],
        star: 4.5,
        imageUrl: '/assets/food-4.jpeg',
        tags: ['FastFood','Pizza', 'lunch']
      },
      {
        id: 5,
        name: 'Paneer',
        price:250,
        favorite: false,
        cookTime:'15-20',
        origins: ['Indian'],
        star: 4.0,
        imageUrl: '/assets/food-5.jpeg',
        tags: ['lunch','Dinner']
      },
      {
        id: 6,
        name: 'Pizza',
        price:190,
        favorite: false,
        cookTime:'15-20',
        origins: ['Indian'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpeg',
        tags: ['FastFood','Pizza', 'lunch']
      },
      {
        id: 7,
        name: 'Sandwich',
        price:100,
        favorite: true,
        cookTime:'10-15',
        origins: ['Italy','US'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpeg',
        tags: ['FastFood','Pizza', 'lunch']
      },
      {
        id: 8,
        name: 'Rice',
        price:200,
        favorite: true,
        cookTime:'15-20',
        origins: ['Japan','Indian'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpeg',
        tags: ['FastFood','Pizza', 'lunch']
      }
    ];
  }
}
