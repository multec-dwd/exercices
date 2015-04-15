/* JavaScript basics - datatypes
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser: true,
devel: true
*/
var products;

window.onload = function() {
    if (!localStorage.getItem("products")) products = [];
    else products = JSON.parse(localStorage.getItem("products"));


    if (products.length > 0) {
        var htmlString = '';
        for (var i = 0, j = products.length; i < j; i++) {
            var product = products[i];
            var amountInput = document.createElement("input");
            console.dir(amountInput);
            amountInput.class = "input-small";
            amountInput.type = "number";
            amountInput.setAttribute("value",product.amount);
            amountInput.min= 1;
            amountInput.step = 1;
            amountInput.required = true;
            amountInput.onchange = changeProduct;
            htmlString += '<tr>';
            htmlString += '<td class="id">' + product.id + '</td>';
            htmlString += '<td class="title">' + product.name + '</td>';
            htmlString += '<td class="price">' + product.price + '€</td>';
            htmlString += '<td class="qty">';
            htmlString += amountInput.outerHTML;
            htmlString += '</td>';
            htmlString += '<td class="total">' + product.price * product.amount + '</td>';
            htmlString += '<td class="close"><a href="#" class="remove"><i class="fa fa-times"></i></a>';
            htmlString += '</td>';
            htmlString += "</tr>";
        }

        var productTableBody = document.getElementsByClassName("cart-table")[0].children[1];
        productTableBody.innerHTML = htmlString;
    }
    
};


var changeProduct = function(e) {
    var product = {
        id: e.target.parentElement.parentElement.dataset.productId,
        name: e.target.parentElement.parentElement.dataset.productName,
        price: Number(e.target.parentElement.parentElement.dataset.productPrice),
        amount: Number(e.target[0].value)
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
};