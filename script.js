'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //destructing in the function
  //The order doesn't have to match
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time, address}) {
    console.log(this.starterMenu[starterIndex]);
    console.log(time);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`your pasta has ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//spread
const arr = [1,2, ...[3,4]];

//rest
const [a,b, ...others] = [1,2,3,4,5];

const [pizza, , risotto, ...otherFoods] =[...restaurant.mainMenu, ...restaurant.starterMenu];

//Object
const {sat, ...weekdays} = restaurant.openingHours;

//function
const add = function(...numbers) {
  let result = 0;
  numbers.forEach(num => result+=num);
  console.log(result);
}

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x = [23,5,7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//nullish coalescing operator
//nullish: null and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
const arr = [7,8,9];

//spread arr
const newArr = [1,2,...arr];

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

//Iterables: array, string, map, set
const str = 'Jonas';
const letters= [...str, 'S.'];
/*
const ing = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];

restaurant.orderPasta(...ing);
*/
/*
//ES 2018 works with object
//this is shallow copy
const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Guisepe'};
newRestaurant.openingHours.fri.open = 99;
console.log(newRestaurant);
console.log(restaurant);
*/
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  time: '22:30',
  address: 'lel',
})

let [first, ,second] = restaurant.categories;

[first, second] = [second, first]; // switch the italian and vegetarian

//Receive 2 returns
console.log(restaurant.order(2,0));

const nested = [2, 4, [5,6]];
let [i, ,[j,k]] = nested;

//Default values
const [a=1,b=1,c=1] = [8,9];


const {name, openingHours, categories} = restaurant;

//set a local name
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

//Default values
const {menu = [],starterMenu: starters = []} = restaurant;

//Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14};

//don't have declaration const or let
{a,b} = obj; <- can't work because js expects block
({a, b} = obj); //<- use parenthesis

//nested object
const {fri: {open: o, close: c}} = openingHours
*/
