function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  // sets error into tagsof  id
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  // perform validation and if validation fails set the value of return val to false
  var name = document.forms['myForm']["fname"].value;
  if (name.length < 5) {
    seterror("name", "*length of name is too short");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("name", "*length of name cannot be zero");
    returnval = false;
  }
  var email = document.forms['myForm']["femail"].value;
  if (email.length > 15) {
    seterror("email", "length of email is to long");
    returnval = false;
  }
  var phone = document.forms['myForm']["fphone"].value;
  if (phone.length != 10) {
    seterror("phone", "*phone no should be of 10 digit");
    returnval = false;
  }
  var password = document.forms['myForm']["fpass"].value;
  if (password.length < 6) {
    seterror("pass", "*password should be of 6 characters long");
    returnval = false;
  }
  var cpassword = document.forms['myForm']["fcpass"].value;
  if (cpassword != password) {
    seterror("cpass", "*password and confim password should match");
    returnval = false;
  }
  return returnval;
}
