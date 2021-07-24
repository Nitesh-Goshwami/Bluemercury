/* Products Data */
var productsData = [
    {
        name: 'RMS BEAUTY',
        desc: 'Back2brow Brow Powder',
        price: 22,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-light-816248022212-1_600x600_crop_center.jpg?v=1624896973',
    },
    {
        name: 'DR. BARBARA STRUM',
        desc: 'Darker Skin Tones Discovery Kit',
        price: 110,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-lightmedium-5035832105635-1_600x600_crop_center.jpg?v=1626725428'
    },
    {
        name: 'CHANTECAILLE',
        desc: 'Limmited Edition Lip Veil',
        price: 49,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011552-1_600x600_crop_center.jpg?v=1626296817'
    },
    {
        name: 'SKYN ICELAND',
        desc: 'Hydro Cool Brightening Face Mask',
        price: 14,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035204628-1_600x600_crop_center.jpg?v=1625845843'
    },
    {
        name: 'LEGOLOGY',
        desc: 'Air-Lite Daily Lift for Legs',
        price: 65,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-6oz-5060367410008-1_525x525.jpg?v=1624638493'
    },
    {
        name: 'TOM FORD',
        desc: 'Hyaluronic Energizing Mist',
        price: 50,
        image: 'https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-888066081870-1_525x525.jpg?v=1626725435'
    }
]

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

function slideshowBestSellers() {
    let slide_img = document.getElementById('slide-img');
    let img = document.createElement('img');

    let best_sellers_arr = ['https://cdn.shopify.com/s/files/1/0283/0185/2747/files/earn-redeem-july-hero-des.jpg?v=1626210704', 'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/m61-cooling-eye-gel-hero-des.jpg?v=1626212604', 'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Dr.Barbara-Sturm-hp-hero-des.jpg?v=1625759244', 'https://cdn.shopify.com/s/files/1/0283/0185/2747/files/suyb-fabienne-hero-des.jpg?v=1626106125'];

    img.src = best_sellers_arr[0];
    img.style.width = '100%';
    slide_img.append(img);
    let i = 1;
    setInterval(function () {
        img.src = best_sellers_arr[i % best_sellers_arr.length];
        img.style.width = '100%';
        i++;
        slide_img.append(img);
    }, 3000);


    let dots = document.getElementById('dots-slide');
    let dot_div = document.createElement('div');
    dot_div.style.display = 'inline-block';

   /* for (let i = 0; i < best_sellers_arr.length; i++) {
        let dot = document.createElement("div");
        dot.style.display = 'inline-block';
        dot.style.border = '2px solid #12284C'
        dot.style.width = '5px';
        dot.style.height = '5px';
        dot.style.borderRadius = '5px';
        dot.style.margin = '10px';
        dot_div.append(dot);
    }
    dots.append(dot_div);
*/
/*
    setInterval(function () {
        img.src = best_sellers_arr[i % best_sellers_arr.length];
        img.style.width = '100%';
        i++;
        if (i == best_sellers_arr.length) {
            dots.innerHTML = ""
        }
        let dot = document.createElement("div");
        dot.style.display = 'inline-block';
        dot.style.border = '2px solid #12284C'
        dot.style.width = '5px';
        dot.style.height = '5px';
        dot.style.borderRadius = '5px';
        dot.style.margin = '10px';
            
        dot.style.backgroundColor = '#12284c';
        dot_div.append(dot);
        dots.append(dot_div);
        slide_img.append(img);
    }, 3000);*/
}

slideshowOffer();
slideshowBestSellers();


/**********************************
New Arrivals js part
 **********************************/
var startIndex = 0;
let prod_div = document.getElementById('products'); // DOM part

function productShow(startIndex, numOfProd) {

    console.log("startIndex first: ", startIndex)
    prod_div.innerHTML = null;
    //startIndex %= numOfProd;
    var i = startIndex;
    var count = 0;
    //while (count < numOfProd) {
    for (var i = 0; i < numOfProd; i++) {
        console.log("************ ", i)
        //console.log(productsData[i]);

        let div = document.createElement('div'); // Div for single products 

        let img = document.createElement('img');
        img.src = productsData[i].image;
        /*img.style.width = '100%';*/

        let p_name = document.createElement('p');
        p_name.innerHTML = productsData[i].name;

        let p_desc = document.createElement('p');
        p_desc.innerHTML = productsData[i].desc;

        let p_price = document.createElement('p');
        p_price.innerHTML = "$" + productsData[i].price;

        div.append(img, p_name, p_desc, p_price);
        div.style.display = 'inline-block';
        prod_div.append(div);
        console.log(prod_div)
        /*i++;
        count++;*/
    }
    //startIndex += i;
    console.log("startIndex last: ", startIndex);
    //lastIndex = startIndex;
}
var lastIndex = 0;
var numOfProd = 4;
productShow(0, numOfProd);

var next = document.querySelector('.next-btn');
next.addEventListener('click', nextSlide);

function nextSlide() {
    next.style.width = '100px';
    //console.log(startIndex)
    console.log("clicked");
    productShow(lastIndex, numOfProd);
}