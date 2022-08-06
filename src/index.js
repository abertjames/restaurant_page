// console.log("Hello");

//import the page load function here 

import './style.css';

function component() {
    // const element = document.createElement('div');
 
    // element.innerHTML = "Hello";
    // element.classList.add('hello');
 
    // return element;

    const foodImage = document.createElement("img");
    foodImage.src = 'images/the-slim-s-diner.jpeg'
    return foodImage;
}
 
document.body.appendChild(component());
