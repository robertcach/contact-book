const saveContact = (dataBase, contact) => {
    dataBase.setItem(contact.id, JSON.stringify(contact));
    window.location.href = '/';
}

const loadContact = (dataBase, parentNode) => {
    let contactKeys = Object.keys(dataBase);

    for (key of contactKeys) {
        let contact = JSON.parse(dataBase.getItem(key));
        createContact(parentNode, contact, dataBase);
    }
}

const createContact = (parentNode, contact, dataBase) => {
    let divContact = document.createElement('div');

    let newContactName = document.createElement('h3');
    let newContactNumber = document.createElement('p');
    let newContactAddress = document.createElement('p');
    let deleteIcon = document.createElement('span');

    newContactName.innerHTML = contact.name;
    newContactNumber.innerHTML = contact.number;
    newContactAddress.innerHTML = contact.address;

    deleteIcon.innerHTML = 'delete_forever';

    divContact.classList.add('list');
    deleteIcon.classList.add('material-icons', 'icon');

    divContact.appendChild(newContactName);
    divContact.appendChild(newContactNumber);
    divContact.appendChild(newContactAddress);
    divContact.appendChild(deleteIcon);

    parentNode.appendChild(divContact);

    deleteIcon.onclick = () => {
        dataBase.removeItem(contact.id);
        window.location.href = '/';
    }
}