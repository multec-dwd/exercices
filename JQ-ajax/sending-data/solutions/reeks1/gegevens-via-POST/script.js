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
            url: "naam-post.php",
            type: "POST",
            data: $('#form1').serialize(),
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
            url: "naam-post.php",
            type: "POST",
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