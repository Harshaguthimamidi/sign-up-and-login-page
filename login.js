let checkPass = localStorage.getItem("LoginPersonInfo");
let other = JSON.parse(checkPass);
addEventListener("submit", verifyAccount);

function verifyAccount() {
  event.preventDefault();
  let checkPass = document.getElementById("password").value;
  let checkEmail = document.querySelector("#email").value;

  let details = other.filter(function (element) {
    
      return element.personEmail === checkEmail && element.personPassword===checkPass;
    });
    if(details.length>0 ){
      
        
        window.location.href="http://127.0.0.1:5500/homepage.html";
         
    }else{
    document.getElementById("notMatch").innerHTML = "password not correct";
    
    }
 
}
