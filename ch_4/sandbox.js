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