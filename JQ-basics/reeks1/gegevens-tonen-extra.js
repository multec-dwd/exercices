/* jQuery
Copyright (c) 2014 Dirly De Schrijver
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(document).ready(function() {
    $("input[name=invoer]").keydown(function(event) {
        console.log(event.keyCode);
        if (event.keyCode === 13) {

            $("#wrapper").append("<div>" + $("input[name=invoer]").val() + "</div>");
            $("input[name=invoer]").val("");
        }
        if (event.keyCode === 8 && $("input[name=invoer]").val() === "") {
            $("#wrapper").children().last().remove();
            //$("#wrapper div:last").remove();
        }

    });
});