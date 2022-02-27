// global variables
const taxRate = 0.18;
const shippingPrice = 15.0;
const products = document.querySelector('.products')

//local storage
window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    calculateCartTotal();
});

//capturing
products.addEventListener('click',(e)=>{

    let productQuantity = e.target.parentElement.parentElement.querySelector('#product-quantity')

    if (e.target.classList.contains('fa-minus') || e.target == productQuantity.parentElement.firstElementChild) {
        if (productQuantity.innerText > 1) {
            productQuantity.innerText--;
            calcProductTotal(productQuantity)
        }else{
            if (confirm('Product will be removed!')) {
                productQuantity.parentElement.parentElement.parentElement.remove()
                calculateCartTotal();
            }
        }

    } else if(e.target.className == 'fas fa-plus' || e.target == productQuantity.parentElement.lastElementChild) {
        // console.log('plus clicked');
        productQuantity.innerText++;
        calcProductTotal(productQuantity);
    } else if (e.target.classList.contains('remove-product')) {
        // console.log('remove clicked');
        if (confirm('Product will be removed!')) {
            productQuantity.parentElement.parentElement.parentElement.remove()
            calculateCartTotal();
        }
        
    } else{
        console.log(e.target);
    }
})


// myfuncs
function calcProductTotal(productQuantity) {
    let productPrice = productQuantity.parentElement.parentElement.querySelector('strong')

    let productTotalPriceDiv = productQuantity.parentElement.parentElement.querySelector('.product-line-price')

    productTotalPriceDiv.innerText = ((productPrice.innerText) * (productQuantity.innerText)).toFixed(2)

    calculateCartTotal();
}


function calculateCartTotal() {
    let productTotalPriceDivs = document.querySelectorAll('.product-line-price');

    let subtotal = 0;
    productTotalPriceDivs.forEach(eachproductTotalPriceDiv => {
        subtotal += parseFloat(eachproductTotalPriceDiv.innerText) 
    });

    let tax = localStorage.getItem('taxRate') * subtotal

    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem('shippingPrice')) : 0)

    let cartTotal = subtotal + tax + shipping


    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = tax.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
}
