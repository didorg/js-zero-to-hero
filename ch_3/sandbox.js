// --- function declarations &  Expressions 

// function declaration
/* function greet(){
  console.log('hello there');
} */

// function expression
//Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them

/* const speak = function(){
  console.log('good day!');
}; */
// greet();
// greet();
//speak();

// arguments & parameters
const speak = function(name = 'luigi', time = 'night'){
  console.log(`good ${time}, ${name}!`);
};

// speak('mario', 'morning');
// speak();
speak('shaun');

/************************  Arrow Functions ***********************/

// regular function

// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }
const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }
const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]  + products[i] * tax;
  }
  return total;
}

console.log(greet());
console.log(bill([10,15,30], 0.2));
/************************  **************** ***********************/
