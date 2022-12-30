// Add your code here

function submitData(name, email) {

    const userData = {
        name: name,
        email: email,
    }

    const userObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };

    return fetch("http://localhost:3000/users", userObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            addElement(object.id);
            addElement(object.name);
            addElement(object.email);
        })
        .catch(function (error) {
            alert("Error!");
            addElement(error.message);
        });
}

function addElement(element) {
    const p = document.createElement('p');
    p.innerHTML = element;
    document.body.appendChild(p);
}