/* jQuery animation
Copyright (c) 2014 Dirly De Schrijver
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(document).ready(function() {

    $("button").click(function() {
        console.log($(this).text());
        if ($(this).text() == "Up") {
            $("#slider").animate({
                top: "-=300px"
            }, 1000, "linear", function() {

                if ($("#slider").position().top == -1200) {
                    $("#slider").css("top", "-300px");
                }
                console.log($("#slider").position().top);
            });
        } else {
            $("#slider").animate({
                top: "+=300px"
            }, 1000, "linear", function() {
                console.log($("#slider").position().top);
                if ($("#slider").position().top === 0) {
                    $("#slider").css("top", "-900px");
                    console.log($("#slider").position().top + " top");
                }
            });
        }
    });
});