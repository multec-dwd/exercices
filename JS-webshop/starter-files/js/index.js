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

    var productForms = document.forms;
    for (var i = 0, j = productForms.length; i < j; i++) {
        productForms[i].onsubmit = addProduct;
    }

};

var addProduct = function(e) {
    e.preventDefault();
    var product = {
        id: e.target.parentElement.parentElement.dataset.productId,
        name: e.target.parentElement.parentElement.dataset.productName,
        price: Number(e.target.parentElement.parentElement.dataset.productPrice),
        amount: Number(e.target[0].value)
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
};