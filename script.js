let localStrVal = localStorage.getItem("registeredUsers")

let registeredUsers = [];

if (localStrVal) {
    registeredUsers = JSON.parse(localStrVal)
}

function registerUser() {
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let errorMassege = document.getElementById("errorMsg");

    let userobj = {
        name: userName,
        email: userEmail,
        password: userPassword
    }

    for (let i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].email == userEmail) {
            errorMassege.innerText = "Already registered this email"
            return;
        }
    }

    if (userName == "" || userEmail == "" || userPassword == "") {
        errorMassege.innerText = "Please fill all fields";
        return;
    }

    registeredUsers.push(userobj);

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    alert("Registered Successfully!")
    window.location.assign("Login.html");

};

function clearAll() {
    localStorage.clear();
}

function logInUser() {
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let errorMassege = document.getElementById("errorMsg");

    let currentUser = null

    if (userEmail == "" || userPassword == "") {
        errorMassege.innerText = "Please fill all fields";
        return;
    }

    for (let i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].email == userEmail && registeredUsers[i].password == userPassword) {
            currentUser = registeredUsers[i]
            alert("Loged in secssesfully")
            window.location.assign("Dashboard.html")
            return;
        }
    }
    errorMassege.innerText = "Invalid Password or Email!"

}




