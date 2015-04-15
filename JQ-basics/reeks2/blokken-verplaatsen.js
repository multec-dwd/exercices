/* jQuery
Copyright (c) 2014 Dirly De Schrijver
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/

var eersteElementTop = 0;
var eersteElementLeft = 0;
var tweedeElementTop = 0;
var tweedeElementLeft = 0;
var naamDiv = "";

$(document).ready(function() {
    $("div").click(function() {
        if (naamDiv === "") {
            naamDiv = $(this).attr("id");
            console.log("naam: " + naamDiv);
            $(this).css("backgroundColor", "darkgray");
        } else if (naamDiv == $(this).attr("id")) {
            $(this).css("backgroundColor", "lightgray");
            naamDiv = "";
        } else {
            console.log("begin animatie");
            eersteElementTop = $("#" + naamDiv).css("top");
            eersteElementLeft = $("#" + naamDiv).css("left");
            tweedeElementTop = $(this).css("top");
            tweedeElementLeft = $(this).css("left");
            $(this).animate({
                top: eersteElementTop,
                left: eersteElementLeft
            }, {
                duration: 200,
                queue: false
            });
            $("#" + naamDiv).animate({
                top: tweedeElementTop,
                left: tweedeElementLeft
            }, {
                duration: 200,
                queue: false
            });
            $("#" + naamDiv).css("backgroundColor", "lightgray");
            naamDiv = "";
        }
    });
});