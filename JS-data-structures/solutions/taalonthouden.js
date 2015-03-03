/* JavaScript basics - datatypes
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser: true,
devel: true
*/

//1: taal uitlezen uit de localstorage
//gebruik hiervoor getItem()

var taal = localStorage.getItem("taal");


//2: waarde van taal controleren (met if/switch)
//afhankelijk van waarde boodschap naar console

switch (taal) {
        case "NL":
            console.log("Welkom");
            break;
        case "FR":
            console.log("Bienvenue");
            break;
        case "EN":
            console.log("Welcome");
            break;
        default:
            console.log("Geen taal ingesteld");
            break;
}