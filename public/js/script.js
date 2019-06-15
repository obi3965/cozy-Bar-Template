
window.onload = function(){
    document.querySelector('#MessageBox').onsubmit = validateMessageBox;
    document.getElementById("myForm").onsubmit = validate;
}

//***************************start of my subscribe validation*********************************/
// first example
function validate(){
    let subscribeEmail = document.getElementById("email");

  let regExpression = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

console.log(subscribeEmail)
  
if (regExpression.test(subscribeEmail)) {
  
  document.getElementById('error').innerHTML = "your email is valid";
  localStorage.setItem("user email", subscribeEmail)
} else {
  document.getElementById('error').innerHTML = "your email is not valid";
  return false;
  
}

}





//***************************validation of my message box in the footer ********************************/

function validateMessageBox(){

    let message_name =  document.querySelector('#messageName');
    let message_box =  document.querySelector('#messageText');
    
    if(message_name.value.trim() == "" ){
        document.getElementById('errorsMessage').innerHTML = "please write your name";
        
        message_name.focus();
        return false;
    } else if(message_box.value.length <= 15 || message_box.value.length >= 200){
        document.getElementById('errorsMessage').innerHTML = "must be between 15 and 200 charicters";
        
        message_box.focus();
        return false;
    }else{
        localStorage.setItem("messagetext", message_box.value)
        localStorage.setItem("message", message_name.value);
        return true;
    }
}








 //*****************start of my contact form validation**************************/

//  document.contact.username.focus();//our first field name is username
//  document.contact.onsubmit = function(){
//      var x = this;
//      var name = x.username.value;
//      var age = x.userage.value;
//      var pass = x.userpass.value;
//      var repass = x.userrepass.value;
//      var patt_pass = /^[A-Za-a0-9]{6,10}$/;
//      var email = x.useremail.value;
//      var patt_email =  /(.+)@(.+){2,}\.(.+){2,}$/;
     
    
    
     
//      if(name.trim() == ""){
//         alert("enter name");
//          x.username.focus();
//          return false;
//      }
 
//      else if(age<18 || age>80){
//          alert('enter age');
//          x.userage.focus();
//          return false;
//      }
//      else if(pass.trim() == ""){
//          alert('enter pass');
//          x.userpass.focus();
//          return false;
//      }
 
//      else if(patt_pass.test(pass) ==""){
//          alert('enter valid pass');
//          x.userpass.focus();
//          return false;
//      }
//     else if(repass!=pass){
//         alert('password dosnt/ match');
//         x.userrepass.focus();
//         return false;
//     }
 
    
//     else if(email.trim()== ""){
//         alert("enter email");
//         x.useremail.focus();
//         return false;
//     }
 
//     else if(patt_email.test(email) ==false){
//      alert("enter valid email");
//      x.useremail.focus();
//      return false;
//  }
 
//  else if(x.gender[0].checked==false && x.gender[1].checked==false){
//      alert("enter your gender")
//      x.gender[0].focus();
//      return false;
//  }
 
//  else if(x.terms.checked==false){
//      alert("choose your terms")
//      x.terms.focus();
//      return false;
//  }
//  else if(x.message.value.trim()==""){
//      alert("add your comments");
//      x.add.focus();
//      return false;
//  }
//   else{
//       return true;
     //  alert('thanks' + name)
//   }
//  }
 
 //**************************END OF MY CONTACT FORM VALIDATION***************************//


 let n = 100
//  for(i = 0; i <= n; i++){
//   console.log(n)
//  }

for(i = 0; i <= log(n); i++){
    console.log(n)
   }