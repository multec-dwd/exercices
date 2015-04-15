/* jQuery
Copyright (c) 2014 Dirly De Schrijver
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(document).ready(function() {
    console.log("in de jQuery functie");
    $("form").submit(function(event) {
        event.preventDefault();
        uitvoeren();
    });
});


function uitvoeren() {
    var waarde = $("#invoerveld").val();
    console.log("Waarde: " + waarde);
    $("body").append("<p>" + waarde + "</p>");
    $("#invoerveld").val("");
}