// Defining a function to validate form
function validateForm() {
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validCountry = false;
    var validZipcode = false;
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var errorMessages = "";



    // Validate Firstname
    if (myContact.firstname.value === null ||
        myContact.firstname.value === "" ||
        myContact.firstname.value.length > 20 ||
        !myContact.firstname.value.match(letters))
        errorMessages += "<p> The firstname must be less than 20 characters and is required.  Only letters accepted</p>";
    else
        validFirstname = true;

    // Validate Lastname
    if (myContact.lastname.value === null ||
        myContact.lastname.value === "" ||
        myContact.lastname.value.length > 50 ||
        !myContact.lastname.value.match(letters))
        errorMessages += "<p> The lastname must be less than 50 characters and is required.  Only letters accepted</p>";
    else
        validLastname = true;

    // Validate Email
    if (myContact.email.value === null ||
        myContact.email.value === "" ||
        !myContact.email.value.match(mailformat))
        errorMessages += "<p> Invalid Email</p>";
    else
        validEmail = true;


    // Validate Phonenumber
    if (myContact.phone.value === null ||
        myContact.phone.value === "" ||
        myContact.phone.value.length > 15 ||
        !myContact.phone.value.match(numbers))
        errorMessages += "<p> The phone number must be less than 15 characters and is required.  Only numbers accepted</p>";
    else
        validPhone = true;

    // Validate Username Required 12
    if (myContact.username.value.length > 12 ||
        myContact.username.value === null ||
        myContact.username.value === "")
        errorMessages += "<p> The username must be less than 12 characters and is required</p>";
    else
        validUsername = true;

    // Validate Password 
    if (myContact.password.value.length > 7 ||
        myContact.password.value === null ||
        myContact.password.value === "")
        errorMessages += "<p> The password must be less than 7 characters and is required</p>";
    else
        validPassword = true;

    // Validate Address
    if (
        myContact.address.value === null ||
        myContact.address.value === "")
        errorMessages += "<p> Address is required</p>";
    else
        validAddress = true;

    //Validate City
    if (
        myContact.city.value === null ||
        myContact.city.value === "")
        errorMessages += "<p> City is required</p>";
    else
        validCity = true;

    //Validate State
    if (
        myContact.state.value === "000"
    )
        errorMessages += "<p> Select your state from the list</p>";
    else
        validState = true;


    //Validate Country

    if (
        myContact.country.value === "000")

        errorMessages += "<p> Select your country from the list</p>";
    else
        validCountry = true;

    //Validate Zip

    if (myContact.country.value === "000")
 	 errorMessages += "<p> Zipcode is required</p>";
        
    else if (myContact.zipcode.value.length != 5)
	errorMessages += "<p> Zipcode must be 5 characters</p>";
   
    else	
        validZipcode = true;



    document.getElementById("errorMessages").innerHTML = errorMessages
    return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode);

}
