// NavBar Slide start

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
  // NavBar Slide End

//   Add to bag

// Counting products
var count = 1;
let cart_btn = document.querySelector("#add_to_bag");
let remove_count = document.getElementById("remove_count");
let add_count = document.getElementById("add_count");
let product_count = document.getElementById("product_count");

// Image changing
let img_1 = document.getElementById("img_1");
let img_2 = document.getElementById("img_2");
let main_img = document.getElementById("main_img");

img_1.addEventListener("click", function () {
    main_img.src = current_prod[0].img;
  });

img_2.addEventListener("click", function () {
  main_img.src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-2_525x525.jpg?v=1623217977";
});

cart_btn.addEventListener("click", function () {
  if (count != 0) {
    current_prod[0].item_count = count;
    localStorage.setItem('current_selected_prod', JSON.stringify(current_prod))
    // console.log(current_prod);
    
    /****************25/07/21 12:57 am changes made from here ****************************/
    // window.location.href = 'cart.html' // If anything goes wrong, uncomment this line and delete every below line of this block

    let shopping_bag;
    if (localStorage.getItem("shopping_bag") == null) {
      localStorage.setItem("shopping_bag", JSON.stringify(current_prod));
    } else {
      var temp_bag = JSON.parse(localStorage.getItem("shopping_bag"));
      console.log(temp_bag);

      var flag = 0;
      for (let i = 0; i < temp_bag.length; i++) {
        if (temp_bag[i].prod_id_num == current_prod[0].prod_id_num) {
          temp_bag[i].item_count = current_prod[0].item_count;
          console.log("We are here.");
          flag = 1;
          break;
        }
      }
      if (flag) {
        localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
        console.log("Here because of same id")
      } else {
        temp_bag.push(current_prod[0]);
        localStorage.setItem("shopping_bag", JSON.stringify(temp_bag));
      }
    }
  }
});

  remove_count.addEventListener("click", function () {
    count = count - 1;
    
    if (count <= 0) {
      cart_btn.setAttribute('style', 'opacity: 0.5 ; cursor: not-allowed');
    } else {
      cart_btn.removeAttribute('style');
    }


    if (count < 0) {
      product_count.innerHTML = 0;
      count = count+1;
    } else {
      product_count.innerHTML = count;
    }
    // console.log("Decrease: ", count)
  });

  add_count.addEventListener("click", function () {
    count = count + 1;
    
    if (count < 0) {
      product_count.innerHTML = 0;
    } else {
      cart_btn.removeAttribute('style')
      product_count.innerHTML = count;
    }

    // console.log("Increase: ", count)
  });


/************** MORE CHANGES DONE BELOW *************/

var current_prod = JSON.parse(localStorage.getItem('current_selected_prod'));
// console.log("Product Page", current_prod);

document.title = `${current_prod[0].name} ${current_prod[0].title}`;

document.getElementById('img_1').src = current_prod[0].img;
document.getElementById('main_img').src = current_prod[0].img;
document.getElementById('main_img').setAttribute('style', 'width: 500px;')

// console.log(current_prod[0].price)

var title_name = document.getElementById('prod-company-name');
title_name.innerHTML = current_prod[0].name;

var add_price = document.getElementById("dynamic-price");
add_price.innerHTML = "$" + current_prod[0].price;

var add_title = document.getElementById('prod-title-name');
add_title.innerHTML = current_prod[0].title;

var page_navigator = document.getElementById('page_navigator-span');
page_navigator.innerHTML = current_prod[0].title;

cart_btn.append(current_prod[0].price);

// Sign-up button change

function changeAccount() {
  let signup_btn = document.getElementById("login_change");
  let check_user = JSON.parse(localStorage.getItem("current_user"));

  if (check_user.length != 0) {
    signup_btn.innerHTML = `<i class="fa fa-user-circle"></i> Account`;
    signup_btn.addEventListener("click", () => {
      window.location.href = "myaccount.html";
    });
  } else {
    signup_btn.innerHTML = `<i class="fa fa-user-circle"></i> Sign in/up`;
    signup_btn.addEventListener("click", () => {
      window.location.href = "login.html"
    });
  }
}

changeAccount();