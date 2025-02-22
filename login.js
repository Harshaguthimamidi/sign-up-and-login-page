let checkPass = localStorage.getItem("LoginPersonInfo");
let other = JSON.parse(checkPass);
addEventListener("submit", verifyAccount);

function verifyAccount(event) {
  event.preventDefault();
  let checkPass = document.getElementById("password").value;
  let checkEmail = document.querySelector("#email").value;

  let details = other.filter(function (element) {
    return (
      element.personEmail === checkEmail && element.personPassword === checkPass
    );
  });
  if (details.length > 0) {
    window.location.href = "http://127.0.0.1:5500/homepage.html";
  } else {
    document.getElementById("notMatchEmail").innerHTML =
      "Email ID not exist create an account!";
    document.getElementById("notMatchPassword").innerHTML = "Invalid password!";
  }
}
function signupPage() {
  
  window.location.href = "http://127.0.0.1:5500/signup.html";
}
function showPass() {
  const imgChange = document.getElementById("eye");
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    imgChange.src = "images/j.png";
  
  
    const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    
    
    const small="abcdefghijklmnopqrstuvwxyz"
    let input=document.getElementById("password").value
    let smallLetter=small.split("");
    let word=input.split("")
for(let k=0;k<word.length;k++){
    for(let i=0;i<=alphabet.length;i++){
      
    if(word[k]===alphabet[i] || !isNaN(word[k]))
    {
     alert(word[k]);
     break;                                                                           
    } 
    else{
      
    }
    }
  } 
  for(let p=0;p<word.length;p++){

  for(let s=0;s<small.length;s++){

   if( smallLetter[s]===word[p])
    {
     alert("one small letter need",word[p]);
     break;
    } 
}}
  } else {
    passwordInput.type = "password";
    imgChange.src = "images/i.png";
  }
}

