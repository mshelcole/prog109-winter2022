// Defining a function to validate form 
function validateForm() {
    var validFirstname = false;
    var validLastname = false;
    var validUsername = false;
    var validPassword = false;
    var errorMessages = "";


    // Validate Firstname
    if (myContact.firstname.value == null ||
        myContact.firstname.value === "" ||
        myContact.firstname.value > 20)
        errorMessages += "<p> The firstname must be less than 20 characters</p>";
    else
        validateUsername = true;

    // Validate Lastname
    if (myContact.lastname.value == null ||
        myContact.lastname.value === "" ||
        myContact.lastname.value > 20)
        errorMessages += "<p> The lastname must be less than 20 characters</p>";
    else
        validateUsername = true;


    // Validate Username Required 12
    if (myContact.username.value.length > 12 ||
        myContact.username.value === null ||
        myContact.username.value === "")
        errorMessages += "<p> The username must be less than 12 characters and is required</p>";
    else
        validateUsername = true;

    // Validate Password 
    if (myContact.password.value.length > 7 ||
        myContact.password.value === null ||
        myContact.password.value === "")
        errorMessages += "<p> The password must be less than 7 characters and is required</p>";
    else
        validateUsername = true;

    document.getElementById("errorMessages").innerHTML = errorMessages
    return (validFirstname && validLastname && validateUsername && validatePassword);

}

