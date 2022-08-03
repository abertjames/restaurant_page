console.log("Hello");

//import the page load function here 

import './style.css';

function component() {
    const element = document.createElement('div');
 
    element.innerHTML = "Hello";
    element.classList.add('hello');
 
    return element;
}
 
document.body.appendChild(component());