const newElement = document.createElement('div');

document.body.appendChild(newElement);

newElement.style.backgroundColor = 'green';
newElement.textContent = 'Im here!!!'
newElement.style.height = '100px';
newElement.style.width = '100px';

//-----------------------------------------------------------------------------

const key = 'abc';
const value = '123';

const cookieValue = `${key} = ${value}`;
const encodeValue = encodeURIComponent(cookieValue);

// document.cookie = 

console.log(cookieValue);
console.log(encodeValue);

//----------------------------------------------------------------------------------

window.localStorage.setItem('key', 'value');

const example = window.localStorage.getItem('key');
console.log(example);