/* jQuery css manipulation
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/

$(document).ready(function() {
    //console.log("in de jQuery functie");
    $(".kleur").click(function() {
        var kleur = $(this).text();

        if (kleur == "rood") {
            $("#box").css("color", "red");
        } else if (kleur == "groen") {
            $("#box").css("color", "green");
        } else if (kleur == "blauw") {
            $("#box").css("color", "blue");
        }
    });

});