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
    homeButton.addEventListener('click', (e) =>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadBlurb();
    })
    
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenuPage();
    })


    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContactPage();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
  
    return navBar;
}

const setActiveButton = (button) => { 
    const buttonList = Array.from(document.querySelectorAll('button'));

    buttonList.forEach((button) => {
        if (button.classList.contains('active')){
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
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

const createBackgroundImage = (source, alternate) => {
    const bkgImg = document.createElement('img');
    bkgImg.setAttribute('id', 'backgroundImage');
    bkgImg.classList.add('bkgImg');

    bkgImg.src = source;
    bkgImg.alt = alternate;

    return bkgImg
}





////////////////////////////////////////////////////////

const initializeWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createMainContent());
    content.appendChild(createHeader());
    content.appendChild(createFooter());

    content.appendChild(createBackgroundImage('images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp','jack rabbit slim'));

    loadBlurb();
    setActiveButton(document.querySelector('button'));
    // homeButton.classList.add('active');
    // loadContactPage();
}

export {initializeWebsite, createBackgroundImage};