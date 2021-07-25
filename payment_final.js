var final_total = 0;

function showCart() {

    let cart = JSON.parse(localStorage.getItem("shopping_bag"));
    // console.log(cart);

    for (let i = 0; i < cart.length; i++) {
        appendProducts(cart[i])
    }
}

showCart();

function appendProducts(el) {

    let prod_div = document.getElementById("Prod_row_1");
    prod_div.style.display = 'flex';
    prod_div.style.flexDirection = 'column';

    let singleProdDiv = document.createElement("div");
    singleProdDiv.style.display = 'flex';
    singleProdDiv.style.margin = '10px'
    // singleProdDiv.style.border = '1px solid black';
    singleProdDiv.style.alignItems = 'center';

    let prod_img = document.createElement('img');
    prod_img.src = el.img;
    prod_img.style.width = '20%';

    let prod_desc = document.createElement('div');
    prod_desc.append(el.title);
    prod_desc.style.width = '60%';
    prod_desc.style.textAlign = 'left';
    prod_desc.style.padding = "10px";

    let item_total = document.createElement('div');
    item_total.style.width = "20%";
    item_total.style.textAlign = 'right';
    item_total.style.padding = "10px";
    item_total.style.fontWeight = '900';

    let item_total_calculation = el.item_count * el.price;
    item_total.append(`$${item_total_calculation}`);
    final_total += item_total_calculation;

    singleProdDiv.append(prod_img, prod_desc, item_total);
    prod_div.append(singleProdDiv)

    var payment_amt = document.getElementById('total_amount');
    payment_amt.innerHTML = `$${final_total + 5}`;
}

var subtotal = document.getElementById('total_price');
subtotal.innerHTML = `$${final_total}`;
console.log(final_total);

var apply = document.getElementById('apply_btn')
apply.addEventListener('click', function () {

    var promocode = document.getElementById('promocode_text2').value;
    var payment_amt = document.getElementById('total_amount');
    var pay = document.createElement('span');
    
    console.log('clicked')
    console.log(promocode)
    if (promocode == "") {
        subtotal.innerHTML = `$${final_total}`;
        pay.append(final_total);
        console.log("******* ", final_total)
        payment_amt.innerHTML = `$${final_total + 5}`;
    }
    if (promocode == 'masai30') {
        var new_total = final_total - (final_total * 0.30);
        // subtotal.append(`$${final_total}`);
        // subtotal.style.textDecoration = 'linethrough';
        subtotal.innerHTML = ` $${new_total}`;
        pay.append(new_total);
        console.log("******* ", new_total)
        payment_amt.innerHTML = `$${new_total + 5}`;
    }
});



function validatePayment(e) {
    e.preventDefault();
    alert("Congratulation! Your order is successfully placed.");
    localStorage.removeItem('shopping_bag');
    window.location.href = "homepage.html"
}