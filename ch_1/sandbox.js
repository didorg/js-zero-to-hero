// --- common String methods ---

let email = 'adam@javascript.com';
//let result = email.lastIndexOf('p');
//let result = email.slice(0,5);
//let result = email.substr(5,12);
//let result = email.replace('m', 'w');
//let result = email.replace('m', 'w');

// --- template strings ---
const title = 'Best reads of 2021';
const author = 'Adam P';
const likes = 300;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way

// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);
/** ************************************************************* **/

// --- Numbers ---
let radius = 10;
let pi = 3.14;
// console.log(radius, pi);
// math operators  +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// order of operation - B I D M A S
// let result = 5 * (10 - 3)**2;
// console.log(result);

// shorthands
//let likes = 10;

// likes = likes + 1;
// likes++;
// likes = likes + 10;
// likes += 10;
// likes *= 2;
// likes /= 2;
// console.log(likes);

// NaN - not a number
// console.log(5 / 'hello');
// console.log(5 * 'hello');

//let result = 'the blog has ' + likes + ' likes.';
//console.log(result);
/** ************************************************************* **/

// --- Arrays --- 

let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// array length
// console.log(ninjas.length);

// --- array methods
// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken');
result = ninjas.pop();

console.log(result);
console.log(ninjas);
/** ************************************************************* **/

// --- booleans & comparisons ---
let age = 25;

// loose comparison (different types can still be equal)
// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');