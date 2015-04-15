/* JavaScript DOM - Dom events en manipulatie
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/*jshint
browser:true,
devel:true
*/
var blokken = [];

document.onkeydown = function (e) {
    if (e.keyCode == 39) addBlok();
    else if (e.keyCode == 37) removeBlok();
};

function addBlok() {
    var blok = document.createElement("div");
    blok.className = "blok";
    blok.innerHTML = "JS";
    blokken.push(blok);

    document.body.appendChild(blok);
}

function removeBlok() {
    document.body.removeChild(blokken.pop());
}