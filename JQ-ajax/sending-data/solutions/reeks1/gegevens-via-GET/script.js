/* Ajax - sending data by GET
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
devel: true,
browser: true,
jquery: true
*/

//* OPLOSSING v.1
$(document).ready(function () {

    $('#form1').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: "naam-get.php?name=" + $('#name').val(),
            success: function (data) {
                $(document.body).append(data);
            }
        });

    });

});
//*/

/* OPLOSSING v.2
$(document).ready(function () {

    $('#form1').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: "naam-get.php",
            type: "GET",
            data: {
                "name": $('#name').val()
            },
            success: function (data) {
                $(document.body).append(data);
            }
        });

    });

});
//*/

/* OPLOSSING v.3
$(document).ready(function () {

    $('#form1').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: "naam-get.php",
            type: "GET",
            data: $('#form1').serialize(),
            success: function (data) {
                $(document.body).append(data);
            }
        });

    });

});
//*/