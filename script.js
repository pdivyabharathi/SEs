var hr = document.querySelector("#line")
function formValidation(){
  
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var error = document.getElementById("error");
    var name_format = /^[A-Za-z]+$/ 
    var mail_format = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var  at_pos = email.indexOf("@");
    var last_dot_pos = email.lastIndexOf(".");
    var dot_pos = email.indexOf(".");
    var text;
    if(!name.match(name_format)){
      text = "Please Enter valid first Name";
      error.innerHTML = text;
      error.style.height = 35;
      hr.classList.add("visible");
      return false;
    }
  
      if(name.length <= 2){
        text = "Please Enter valid first Name";
        error.innerHTML = text;
        error.style.height = 35;
        hr.classList.add("visible");
        return false;
      }
   
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error.innerHTML = text;
      error.style.height = 35;
      hr.classList.add("visible");
      return false;
    }
    if(/^0[0-9].*$/.test(phone)){
      text = "Please Enter valid Phone Number";
      error.innerHTML = text;
      error.style.height = 35;
      hr.classList.add("visible");
      return false;
    }
    if(!email.match(mail_format) && (at_pos < 1 && dot_pos <1 && ( last_dot_pos - at_pos < 2 ))){
      text="You have entered an invalid email address!"
      error.innerHTML = text;
      error.style.height = 35;
      hr.classList.add("visible");
      return false;
  }
    alert("Form Submitted Successfully! ");
    return true;
  }