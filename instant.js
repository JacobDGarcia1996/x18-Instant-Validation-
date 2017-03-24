function register(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").oninput=validateUsername();
  var passEntered = document.getElementById("pass").oninput=validatePassword();
}
function ValidateUsername(){

  if (userEntered.length>=6)
  {
  document.getElementById("usernameError").innerHTML="Username Acceptable.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-success");
document.getElementById("usernameGroup").classList.remove("has-error");
}

else
{//Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="Bad username.";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error")
  document.getElementById("usernameGroup").classList.remove("has-success");
}
}

function ValidatePassword () {
  if (passEntered =="password")
  {//Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error")
    document.getElementById("passwordGroup").classList.remove("has-success");
  }

  else
  {
  document.getElementById("passwordError").innerHTML="Password Approved.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  //Turn the password items red
  document.getElementById("passwordGroup").classList.add("has-success")
  document.getElementById("passwordGroup").classList.remove("has-error");
  }
}

}
