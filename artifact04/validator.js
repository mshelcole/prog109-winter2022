
function validate(){
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var zipcode = document.getElementById("zipcode").value;
  
  var errorMessage = document.getElementById("errorMessage");
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;
  errorMessage.style.padding = "10px";
  
  var text;
  
  if(firstname === null ||
    firstname === "" ||
    firstname.length > 20 ||
    !firstname.match(letters)){
    text = "firstname must be less than 20 characters and is required.  Only letters accepted";
    errorMessage.innerHTML = text;
    return false;
  }
  
  if(lastname === null ||
    lastname === "" ||
    lastname.length > 50 ||
    !lastname.match(letters)){
    text = "lastname must be less than 50 characters and is required.  Only letters accepted";
    errorMessage.innerHTML = text;
    return false;
  }
  
   if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    errorMessage.innerHTML = text;
    return false;
  }
  
    if(phone === null ||
    phone === "" ||
    phone.length > 15 ||
    !phone.match(numbers)){
    text = "The phone number must be less than 15 character";
    errorMessage.innerHTML = text;
    return false;
  }
  
    if(username === null ||
    username === "" ||
    username.length > 12 ){
    text = "The username must be less than 12 characters and is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
    if(password === null ||
    password === "" ||
    password.length > 7 ){
    text = "The password must be less than 7 characters and is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
  
     if(address === null ||
    address === "" ){
    text = "Address is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
       if(city === null ||
    city === "" ){
    text = "City is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
      if(state === "000"  ){
    text = "State is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
        if(country === "000"  ){
    text = "Country is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
          if(country === "000"  ){
    text = "Country is required";
    errorMessage.innerHTML = text;
    return false;
  }
  
     
    if(country === 1  ||
    zipcode.length != 5 ){
    text = "Zipcode is required";
    errorMessage.innerHTML = text;
    return false;
              
  }
  
  
  
  alert("Form Submitted Successfully!");
  return true;
}
