// --- structures that change the control flow --

// --- for loops
const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// -- while loops
//let i = 0;
// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

let i = 5;
while(i > 2){
  console.log('loop: ', i);
  i--;
}

// -- do while loops
//let i = 5
do{
  console.log('val of i is: ', i);
  i++;
} while(i < 5);