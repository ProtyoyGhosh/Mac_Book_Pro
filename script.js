let extraMemoryNumber = 0;
let secondaryStorage = 0;
let deliveryCost = 0;

// common function for memory part................
function updateMemory(isExtra) {
    let extraMemoryText = document.getElementById('extra-memory-cost');
    extraMemoryNumber = extraMemoryText.innerText;
    if (isExtra == true) {
        extraMemoryNumber = 180;
        console.log(extraMemoryNumber)
        if (extraMemoryNumber = 180) {
            extraMemoryText.innerText = extraMemoryNumber;
        }
    }
    else {
        extraMemoryNumber = 0;
        extraMemoryText.innerText = extraMemoryNumber;
    }
    calculateTotal();
}

//common function for storage part...................
function updateStorage(isIncreasing) {
    const extraStorageText = document.getElementById('extra-storage-cost');
    if (isIncreasing == true) {
        secondaryStorage = 100;
        if (secondaryStorage = 100) {
            extraStorageText.innerText = secondaryStorage;
        }
    }
    else if (isIncreasing == false) {
        secondaryStorage = 0;
        extraStorageText.innerText = secondaryStorage;
    }
    else {
        secondaryStorage = 180;
        if (secondaryStorage = 180) {
            extraStorageText.innerText = secondaryStorage;
        }
        else {
            secondaryStorage = 0;
            extraStorageText.innerText = secondaryStorage;
        }
    }
    calculateTotal();
}


// common function for delivery part...........
function updateDelivery(isCharged) {
    const deliveryChargeText = document.getElementById('delivery-charge-cost');
    if (isCharged == true) {
        deliveryCost = 20;
        if (deliveryCost = 20) {
            deliveryChargeText.innerText = deliveryCost;
        }
    }
    else {
        deliveryCost = 0;
        deliveryChargeText.innerText = deliveryCost;
    }
    calculateTotal();
}


// calculate total function...............
function getInputValue(product) {
    const productInput = document.getElementById(product);
    const productNumber = parseInt(productInput.innerText);
    return productNumber;
}

function calculateTotal() {
    const bestPrice = getInputValue('best-price');
    const memoryTotal = extraMemoryNumber;
    const secondaryStorageX = secondaryStorage;
    const deliveryTotal = deliveryCost;
    const subTotal = bestPrice + memoryTotal + secondaryStorageX + deliveryTotal;
    const finalTotal = bestPrice + memoryTotal + secondaryStorageX + deliveryTotal;

    document.getElementById('sub-total-price').innerText = subTotal;
    document.getElementById('final-price').innerText = finalTotal;

    // applying promo code for final price....................
    let couponCode = 'stevekaku';
    document.getElementById('coupon-submit').addEventListener('click', function () {
        const countPromo = parseFloat(((20 / 100) * subTotal).toFixed(2));
        console.log(countPromo);
        if (document.getElementById('coupon-input').value == couponCode) {
            document.getElementById('final-price').innerText = subTotal - countPromo;
        }
        else {
            alert('Please provide a valid Promo Code');
            couponCode = '';
        }
    })

}


// initial memory event handler.............
document.getElementById('initial-memory').addEventListener('click', function () {
    updateMemory(false)
})

// extra memory event handler..............
document.getElementById('extra-memory').addEventListener('click', function () {
    updateMemory(true)
})

// primary storage event handler............
document.getElementById('primary-storage').addEventListener('click', function () {
    updateStorage(false)
})

// secondary storage event handler................
document.getElementById('secondary-storage').addEventListener('click', function () {
    updateStorage(true)
})

// higher storage event handler................
document.getElementById('higher-storage').addEventListener('click', function () {
    updateStorage();
})

//no delivery cost event handler.............
document.getElementById('no-delivery-cost').addEventListener('click', function () {
    updateDelivery(false);
})

// pay delivery cost event handler...............
document.getElementById('pay-delivery-cost').addEventListener('click', function () {
    updateDelivery(true);
})

