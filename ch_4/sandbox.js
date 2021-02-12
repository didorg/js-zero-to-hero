// object literals

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  //regular function
  login: function(){
    console.log('I logged in');
  },
  // still a regular function
  logout(){
    console.log('I logged out');
  },
  // still a regular function
  logBlogs(){
    // console.log(this); 
    //'this' inside regular functions refer inside this object
    // 'this' out of the object, or in arrow functions, is global
    console.log('this user has written these blogs:');
    this.blogs.forEach(blog => console.log(blog))
  }
};
console.log(`My name is ${user.name} and I am ${user.age}`)
user.login();
user.logout();
user.logBlogs();

/** ************************************************************************ */
// Primitive vs Reference Types

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(' --- Primitive Types --- ');
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
console.log(' --- Reference Types --- ');
userOne = { name: 'ryu', age: 30 };
userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);