// #1 Variables 

let myFavouriteHero = "Hulk";
let x = "50";
let h = "5"; y = "10;"
let z = (h + y)

// #2 VariablesAvanzadas

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
car1.finalPrice = {globalBasePrice + car1.basePrice};
car2.finalPrice = (globalBasePrice + car2.basePrice);
console.log(car1.finalPrice);
console.log(car2.finalPrice);


// #3 Operadores 
let pim = 5;
pim *= 10; 
console.log(pim);

let pam = 10;
pam %= 2;
console.log(pam); 

let pum = 15;
pum %= 9; 
console.log(pum); 

let p = 10; 
let j = 5; 
let i =("p" + "j"); 


// #4 Arrays

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avenger = avengers[0]; 
console.log(avenger); 

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; // No encuentro el método que sustituye

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length); 

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push(`Morty`, `Summer`);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop()
rickAndMortyCharacters.slice(0,4)

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; 
rickAndMortyCharacters.splice(1,1)



// #5 Condicionales

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if(number3 === number2 %= number1) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 *=5 === number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 *=5 === number1 && number1 *2 === number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 %=2 === number1 || number1 %=5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}


// #6 Bucles
for (var G = 0; G < 10; G++) {
console.log(G);
  }

for (let H = 0; H <= 9; H++) {
 if (H % 2 === 0) {
 console.log(i);
    }
  }

for (let D = 1; D <= 10; D++) { 
    if (D === 10) { console.log('Dormido!'); } 
    else { console.log('Intentando dormir 🐑'); } 
}
