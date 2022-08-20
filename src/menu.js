const createMenuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('Five Dollar Shake', 'Milk, choice of vanilla, chocolate, or strawberry icecream', '$5'));
    menu.appendChild(createMenuItem('Cheese Burger', 'Beef patty, lettuce, tomato, cheddar cheese', '$10'));
    menu.appendChild(createMenuItem('Pizza', 'margherita cheese, tomato sauce, with or without pepperoni','$12'));

    return menu
}

const createMenuItem = (itemName, ingredients, price) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const foodItem = document.createElement('h2');
    foodItem.textContent = itemName;

    const specifics = document.createElement('div');
    specifics.classList.add('specifics');

    const foodIngredients = document.createElement('p');
    foodIngredients.textContent = ingredients;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;

    specifics.appendChild(foodIngredients);
    specifics.appendChild(foodPrice);


    menuItem.appendChild(foodItem);
    // menuItem.appendChild(foodIngredients);
    // menuItem.appendChild(foodPrice);
    menuItem.appendChild(specifics);

    return menuItem
}



const loadMenuPage = () => {
    const mainContent = document.getElementById('main');
    // mainContent.innerHTML = '';
    mainContent.innerText = '';

    mainContent.appendChild(createMenuPage());
}

export default loadMenuPage;