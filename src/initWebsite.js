import loadBlurb from "./blurb";
import loadMenuPage from "./menu"
import loadContactPage from "./contact";

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    // restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Jack Rabbit Slim's";
  
    header.appendChild(restaurantName);
    header.appendChild(createNavBar());
  
    return header;
}

const createNavBar = () =>  {
    const navBar = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    // homeButton.classList.add('button');
    // add button functionality event listener here 
    homeButton.addEventListener('click', () =>{
        loadBlurb();
    })
    
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    // menuButton.classList.add('button');
    menuButton.addEventListener('click', () => {
        loadMenuPage();
    })


    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    // contactButton.classList.add('button');
    contactButton.addEventListener('click', () => {
        loadContactPage();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
  
    return navBar;
}

const createMainContent = () => {
    const mainContent = document.createElement('main');
    mainContent.classList.add('blurb');
    mainContent.setAttribute('id', 'main');
    return mainContent
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const credit = document.createElement("p");
    credit.textContent = `Copyright \u00A9 ${new Date().getFullYear()} abertjames`;

    footer.appendChild(credit);

    return footer
}

const createBackgroundImage = () => {
    const bkgImg = document.createElement('img');
    bkgImg.src = 'images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp';
    bkgImg.alt = 'jack rabbit slim'

    bkgImg.classList.add('bkgImg');

    return bkgImg
}





////////////////////////////////////////////////////////

const initializeWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createMainContent());
    content.appendChild(createHeader());
    // content.appendChild(createBlurb());
    content.appendChild(createFooter());

    content.appendChild(createBackgroundImage());
    loadBlurb();
    // loadMenuPage();
}

export default initializeWebsite;