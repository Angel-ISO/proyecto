//script funcionalidad de carrito y tienda
let myCartShop = []


function itemAlreadyInCart(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            return true
        }
    }
    return false
}

function updateQuantityAndPrice(cd) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            item.quantity += 1
            item.totalSum = item.price * item.quantity
        }
    }
}

function insertItemToCart(cd) {
    let cdInfo = {
        img: document.getElementById("img-" + cd).src,
        artist: document.getElementById("artist-" + cd).innerHTML,
        album: document.getElementById("album-" + cd).innerHTML,
        price: document.getElementById("price-" + cd).innerHTML,
        tag: cd,
        quantity: 1,
        totalSum: document.getElementById("price-" + cd).innerHTML
    }
    myCartShop.push(cdInfo);
}

function cartIsEmpty() {
    return myCartShop.length === 0
}

function addItemToCart(cd) {
    if (cartIsEmpty()) {
        insertItemToCart(cd);
    } else {
        if (itemAlreadyInCart(cd)) {
            updateQuantityAndPrice(cd);
        } else {
            insertItemToCart(cd);
        }
    }
    findTotal();
    findTotalCD();
    freeShippingCart();
}

function addButtonEventListeners(elementId) {
    document.getElementById("button-" + elementId)
        .addEventListener('click', function () {
            addItemToCart(elementId);
            updateDropdownContent(elementId)
        });
}

window.addEventListener('load', function () {
    for (const cdArtist of dataProducts) {
        addButtonEventListeners(cdArtist.tag)
    }
})

function findTotal() {
    let tot = 0;
    for (const item of myCartShop) {
        tot += parseInt(item.totalSum);
    }
    document.getElementById('totalPay').innerHTML = String(tot);
}


function findTotalCD() {
    let totCD = 0;
    for (const item of myCartShop) {
        totCD += item.quantity;
    }
    document.getElementById("totalCds").innerHTML = String(totCD);
}


function freeShippingCart() {
    let limitFreeShip = 259 - document.getElementById('totalPay').innerHTML
    let freeShippingText = ''
    if (limitFreeShip <= 0) {
        freeShippingText = 'Congratulation! You are entitled to free freight!'
    } else {
        freeShippingText = "Need to buy " + limitFreeShip + " kr more items cd to free freight!"
    }
    document.getElementById("freeShipmt").innerHTML = freeShippingText
}


function updateAlbumInCartWithNewValue(cd, newValue) {
    for (const item of myCartShop) {
        if (item.tag === cd) {
            item.quantity = newValue
            item.totalSum = item.price * item.quantity;
            updateDropdownContent(cd)
        }
    }
}

function addMore(cd) {
    let val = document.getElementById("inputQty-" + cd).value
    let newValue = parseInt(val)
    if (parseInt(newValue) <= 0) {
        checkNumberItem(cd)
    } else {
        updateAlbumInCartWithNewValue(cd, newValue)
    }
    findTotal()
    freeShippingCart()
    findTotalCD()
}

function removeItemFromArray(cd) {
    for (let i = 0; i < myCartShop.length; i++) {
        if (myCartShop[i].tag === cd) {
            myCartShop.splice(i, 1);
            updateDropdownContent(cd)
        }
    }
    findTotal()
    freeShippingCart()
    findTotalCD()
}