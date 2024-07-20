function setItem() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    if (name && address) {
        localStorage.setItem('name', name);
        localStorage.setItem('address', address);
        displayMessage('Data has been saved successfully.');
    } else {
        displayMessage('Please enter both name and address.');
    }
}

function getItem() {
    const name = localStorage.getItem('name');
    const address = localStorage.getItem('address');
    if (name && address) {
        displayMessage(`Name: ${name}<br>Address: ${address}`);
    } else {
        displayMessage('No data found in local storage.');
    }
}

function clearStorage() {
    localStorage.clear();
    displayMessage('All data has been cleared.');
}

function displayMessage(message) {
    const output = document.getElementById('output');
    output.innerHTML = message;
}
