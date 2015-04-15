/* jQuery animation
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/

$(document).ready(function() {
    $("div").mouseenter(function() {
        $(this).animate({
            height: "500px"
        });
    });

    $("div").mouseleave(function() {
        $(this).animate({
            height: "100px"
        });
    });
});