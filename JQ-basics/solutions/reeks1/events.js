/* jQuery events
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(document).ready(function(e) {
    $("#active>a").click(function(e) {
        console.log("jQuery Events");
    });
});