const makeContact = () => {
    const addressCard = document.createElement('div');
    addressCard.classList.add('addressCard');


    return addressCard
}

function loadContactPage () {
    const content = document.getElementById('content');
    content.appendChild(makeContact());
}

export default loadContactPage;