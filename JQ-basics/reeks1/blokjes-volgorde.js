/* jQuery events & append
Copyright (c) 2014 Dirly De Schrijver
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(document).ready(function() {
    $("div").click(function() {
        $(this).appendTo("body");
    });
});