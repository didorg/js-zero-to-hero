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

// --- else if statements
const password = 'p@ssword123456';

if(password.length >= 12){
  console.log('that password is mighty strong');
} else if(password.length >= 8){
  console.log('that password is long enough');
} else {
  console.log('password should be at least 8 characters long');
}

// --- switch statements ---
const grade = 'D';

switch(grade){
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got a B!');
    break;
  case 'C':
    console.log('you got a C!');
    break;
  case 'D':
    console.log('you got a D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}