/* Slideshow function */

function slideshowOffer() {

    let slide_text = document.getElementById('slide-text');
    let p = document.createElement('p');

    let announcement_msg = ['Earn up to $100! Receive $20 for every $100 you spend.', 'Free shipping for bluerewards members >', 'Free samples with all orders >', 'Free gifts with purchase. Browse now >'];

    p.innerHTML = announcement_msg[0];
    p.style.textAlign = 'center';
    p.style.textTransform = 'uppercase'
    slide_text.append(p);
    let i = 1;
    setInterval(function () {
        p.innerHTML = announcement_msg[i % announcement_msg.length];
        p.style.textAlign = 'center';
        p.style.textTransform = 'uppercase';
        i++;
        slide_text.append(p);
    }, 5000);

}
slideshowOffer();



const user_data = [
    {
        email,
      password,
    },
  ];
  
  if (localStorage.getItem("user_data") == null) {
    localStorage.setItem("user_data", JSON.stringify(user_data));
  }
  function check(e) {
    e.preventDefault();
  
    const form = document.getElementById("login");
  
    const email = form.email.value;
    const password = form.password.value;
  
    const admins = JSON.parse(localStorage.getItem("user_data"));
  
    for (let i = 0; i < admins.length; i++) {
      let u = admins[i].email;
      let p = admins[i].password;
      if (u === email && p === password) {
        window.location.href = "myaccount.html";
        break;
      } else {
          alert("invalid Credentials");
          break;
      }
    }
  }