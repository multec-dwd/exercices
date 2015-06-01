/* Ajax loading JSON
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
devel: true,
browser: true,
jquery: true
*/
$(document).ready(function () {
    $.ajax({
        url: "weer.json",
        dataType: "json",
        success: function (weer) {
            // console.log(weer);
            var htmlString = "";
            $.each(weer, function (i, dag) {
                htmlString += "<h2>Voorspelling voor " + dag.datum + "</h2>";
                htmlString += "<ul>";
                htmlString += "<li>Min: " + dag.min + "</li>";
                htmlString += "<li>Max: " + dag.max + "</li>";
                htmlString += "</ul>";
            });
            $(document.body).append(htmlString);
        },
        error: function (err) {
            console.dir(err);
        }
    });
});