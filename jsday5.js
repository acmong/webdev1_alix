var phoneBook = [];

function addContact(userName, userNumber) {
    var contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };
    phoneBook.push(contactObject);
    alert("Contact added, phonebook updated");
}

function submitContact() {
    var userNameInput = document.getElementById("userName").value;
    var userNumberInput = document.getElementById("userNumber").value;

    if (userNameInput === "" || userNumberInput === "") {
        alert("Both fields are required.");
    } else {
        addContact(userNameInput, userNumberInput);
        document.getElementById("userName").value = "";
        document.getElementById("userNumber").value = "";
    }
}

function viewContacts() {
    var contactsList = document.getElementById("contactsList");
    contactsList.innerHTML = "";
    
    if (phoneBook.length === 0) {
        contactsList.innerHTML = "No contacts in the phonebook.";
    } else {
        for (var i = 0; i < phoneBook.length; i++) {
            var contact = phoneBook[i];
            var contactInfo = "Name: " + contact.contactName + ", Phone Number: " + contact.contactNumber;
            var contactDiv = document.createElement("div");
            contactDiv.textContent = contactInfo;
            contactsList.appendChild(contactDiv);
        }
    }
}