function addme() {
    const contact = {
        fName: document.getElementById("fname").value,
        lName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    }

    document.getElementById("json-value").innerHTML = JSON.stringify(contact);
}