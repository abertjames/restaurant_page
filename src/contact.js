
const makeContactPage = () => {
    const addressCard = document.createElement('div');
    addressCard.classList.add('blurb');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '999-999-9999';

    const address = document.createElement('p');
    address.textContent = '1435 Flower St, Glendale, CA 91201';

    const locationImage = document.createElement('img');
    locationImage.src = "images/location_image.png";
    locationImage.alt = 'location image';
    locationImage.classList.add('imageCropper')


    addressCard.appendChild(phoneNumber);
    addressCard.appendChild(address);
    addressCard.appendChild(locationImage);

    return addressCard
}

const loadContactPage = () => {
    const content = document.getElementById('content');
    content.appendChild(makeContactPage());

    console.log('howdy')

}

export default loadContactPage;