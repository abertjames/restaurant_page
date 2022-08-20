const createMenuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('Five Dollar Shake', 'Milk, choice of vanilla, chocolate, or strawberry icecream', '$5'));
    menu.appendChild(createMenuItem('fart', 'lard', '$8'));

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
    mainContent.innerHTML = '';
    mainContent.appendChild(createMenuPage());
}

export default loadMenuPage;