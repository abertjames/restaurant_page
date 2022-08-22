
const makeContactPage = () => {
    const addressCard = document.createElement('div');
    addressCard.classList.add('blurb');

    const phone = document.createElement('div');
    phone.classList.add('contactInfo');
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '999-999-9999';
    const phoneIcon = document.createElement('img');
    phoneIcon.src = 'icons/phone.svg';
    phoneIcon.classList.add('icon');
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNumber);

    const home = document.createElement('div');
    home.classList.add('contactInfo');
    const address = document.createElement('p');
    address.textContent = '1435 Flower St, Glendale, CA 91201';
    const homeIcon = document.createElement('img');
    homeIcon.src = 'icons/home.svg';
    homeIcon.classList.add('icon');
    home.appendChild(homeIcon);
    home.appendChild(address);

    const locationImage = document.createElement('img');
    locationImage.src = "images/location_image.png";
    locationImage.alt = 'location image';
    locationImage.classList.add('imageCropper')


    // addressCard.appendChild(phoneNumber);
    // addressCard.appendChild(address);
    addressCard.appendChild(phone);
    addressCard.appendChild(home);
    addressCard.appendChild(locationImage);

    return addressCard
}

const loadContactPage = () => {
    const mainContent = document.getElementById('main');
    // mainContent.classList.add('menu');
    mainContent.innerHTML = '';
    // mainContent.innerText = '';
    mainContent.appendChild(makeContactPage());

    const bkgImg = document.getElementById('backgroundImage');
    bkgImg.src = 'images/jack-rabbit-slims-REG-web_864x.webp';
    bkgImg.alt = 'uma dancing';
}

export default loadContactPage;