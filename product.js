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
let cart_btn = document.getElementById("add_to_bag");
let remove_count = document.getElementById("remove_count");
let add_count = document.getElementById("add_count");
let product_count = document.getElementById("product_count");

// Image changing
let img_1 = document.getElementById("img_1");
let img_2 = document.getElementById("img_2");
let main_img = document.getElementById("main_img");

img_1.addEventListener("click", function () {
    main_img.src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-1_525x525.jpg?v=1623217977";
  });

  img_2.addEventListener("click", function () {
    main_img.src = "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-2_525x525.jpg?v=1623217977";
  });



cart_btn.addEventListener("click", function () {
    window.location.href = "new.html";
  });

  remove_count.addEventListener("click", function () {
    count = count-1;
    if (count < 0) {
        product_count.innerHTML = 0;
        count = count+1;
    } else {
        product_count.innerHTML = count;
    }
    
  });

  add_count.addEventListener("click", function () {
    count = count+1;
    if (count < 0) {
        product_count.innerHTML = 0;
    } else {
        product_count.innerHTML = count;
    }
  });




