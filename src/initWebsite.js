function createHeader(){
    const header = document.createElement('header');
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    // restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Jack Rabbit Slim's";
  
    header.appendChild(restaurantName);
    header.appendChild(createNavBar());
  
    return header;
}

function createNavBar() {
    const navBar = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    // homeButton.classList.add('button');
    // add button functionality event listener here 
    
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    // menuButton.classList.add('button');


    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    // contactButton.classList.add('button');

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
  
    return navBar;
}

function createBlurb() {
    const blurb = document.createElement('main');
    blurb.classList.add('blurb');

    const imgCropper = document.createElement('div');
    imgCropper.classList.add('imageCropper');

    const coverPhoto = document.createElement('img');
    coverPhoto.src = 'images/uma_menu_2.png';
    coverPhoto.alt = 'uma';
    coverPhoto.classList.add('coverPhoto')

    function writeParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph
    }

    blurb.appendChild(writeParagraph('The best five dollar shakes money can buy'));
    blurb.appendChild(writeParagraph('Established 1982'));
    imgCropper.appendChild(coverPhoto);
    blurb.appendChild(imgCropper);
    blurb.appendChild(writeParagraph('The next best thing to a time machine!'));

    return blurb
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const credit = document.createElement("p");
    // credit.textContent = `Copyright © ${new Date().getFullYear()} abertjames`;
    credit.textContent = `Copyright \u00A9 ${new Date().getFullYear()} abertjames`;

    footer.appendChild(credit);

    return footer
}

function createBackgroundImage(){
    const bkgImg = document.createElement('img');
    bkgImg.src = 'images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp';
    bkgImg.alt = 'jack rabbit slim'

    bkgImg.classList.add('bkgImg');

    return bkgImg
}







function initializeWebsite(){
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createBlurb());
    content.appendChild(createFooter());

    content.appendChild(createBackgroundImage());

    console.log("hello");
}

export default initializeWebsite;