4.//  function 
 
 
 
 
 
 
 
 
 
 var userList=[];
 
 
 function paynow(e){
    e.preventDefault();
    let form = documnet.getElementsById("payment_details")
    let fullname = form.fullname.value.trim();
    console.log(fullname)
let nickname = form.nickname.value.trim();
let emailAddress = form.emailAddress.value.trim();
let dob_year = form.dob_year.value.trim();
let gender_male = form.b1.value.trim();
let gender_female = form.b2.value.trim();
  
let card_number =form.cardNumber.value.trim();
let card_cvc = form.cardCvc.value.trim();

if(fullname == "" || emailAddress == "" || dob_year == "" || card_number == "" || card_cvc == ""){ 
    alert("Any field can not be left empty")
}

         
     

}