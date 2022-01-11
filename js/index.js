const contactName = document.querySelector('.name');
const contactNumber = document.querySelector('.number');
const contactAddress = document.querySelector('.address');

const btnAddContact = document.querySelector('.btn-add-contact');

const listContact = document.queryCommandIndeterm('.contact-list');

const dataBase = window.localStorage;

btnAddContact.onclick = () => {
    let contact = {
        id: Math.random(1, 100),
        name: contactName.value,
        number: contactNumber.value,
        address: contactAddress.value,
    }
    saveContact();
}