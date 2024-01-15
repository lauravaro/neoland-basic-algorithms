// #1Variables 

let myFavouriteHero = "Hulk";
let x = "50";
let h = "5"; y = "10;"
let z = (h + y)

// #2VariablesAvanzadas

const character = {name: "Jack Sparrow", age: "10"}; // no puedo reasignar un valor a "const"

let firstname = "Jon"; 
let lastname = "Snow"; 
let age = "24"; 
console.log(`Soy ${firstname} ${lastname}, tengo ${age} y me gustan los lobos`);

const toy1 = {name: `Buss myYear`, price: 19}; 
const toy2 = {name: `Rayo mcKing`, price: 29}; 
console.log(toy1.price + toy2.price);

let globalBasePrice = `10000`; 
const car1 = {name: `BMW m&m`, basePrice: 50000, finalPrice: 60000};
const car2 = {name: `Chevrolet Corbina`, basePrice: 70000, finalPrice: 80000};
globalBasePrice = `25000`; 
car1.finalPrice = (globalBasePrice + car1.basePrice);
car2.finalPrice = (globalBasePrice + car2.basePrice);
console.log(car1.finalPrice);
console.log(car2.finalPrice);




