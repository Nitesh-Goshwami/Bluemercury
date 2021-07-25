/* Slideshow function */

function slideshowOffer() {
  let slide_text = document.getElementById("slide-text");
  let p = document.createElement("p");

  let announcement_msg = [
    "Earn up to $100! Receive $20 for every $100 you spend.",
    "Free shipping for bluerewards members >",
    "Free samples with all orders >",
    "Free gifts with purchase. Browse now >",
  ];

  p.innerHTML = announcement_msg[0];
  p.style.textAlign = "center";
  p.style.textTransform = "uppercase";
  slide_text.append(p);
  let i = 1;
  setInterval(function () {
    p.innerHTML = announcement_msg[i % announcement_msg.length];
    p.style.textAlign = "center";
    p.style.textTransform = "uppercase";
    i++;
    slide_text.append(p);
  }, 5000);
}
slideshowOffer();

function store(e) {
  e.preventDefault();
  let form = document.getElementById("form");

  let email = form.email.value;
  let first_name = form.first_name.value;
  let last_name = form.last_name.value;
  let password = form.password.value;
  let birthday = form.birthday.value;

  let user = {
    email,
    first_name,
    last_name,
    password,
    birthday,
  };

  if (
    (first_name.length > 0) & (last_name.length > 0) &&
    password.length > 0 &&
    birthday.length > 0 &&
    email.length > 0
  ) {
      window.location.href = "Login.html";
  
  } else {
    alert("Please fill all the Credentials");
  }

  let arr;
  arr = localStorage.getItem("user_data"); //locations
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("user_data"));
  }

  arr.push(user);
  localStorage.setItem("user_data", JSON.stringify(arr));
}
