/** ************************************************************************ */
// -- Ways to Query the DOM

// const par = document.querySelector('p');
// const par = document.querySelector('.error');
//const par = document.querySelector('div.error');
//console.log(par);

// query multiple elements at once
//const pars = document.querySelectorAll('p');
//const errors = document.querySelectorAll('.error');

//console.log(pars, errors);
//console.log(pars[1], errors[0]);

/** ************************************************************************ */
// -- Other ways to Query the DOM
// get an element by ID
//const title = document.getElementById('page-title');
//console.log(title);

// get elements by their class name
//const errors = document.getElementsByClassName('error');
//console.log(errors);
//console.log(errors[0]);

// get elements by their tag name
//const paras = document.getElementsByTagName('p');
//console.log(paras);
//onsole.log(paras[1]);

/** ************************************************************************ */
// -- Adding & Changing Page Content

const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome';

const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//   console.log(p.innerText);
//   p.innerText = 'new text!';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is a new h2</h2>';

// content.innerHTML += '<h2>this is an h2 added to the content</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});