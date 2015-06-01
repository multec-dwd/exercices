/* Ajax loading text
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(function() {

    $.ajax({
        url: 'data.txt',
        success: function(data) {
            $('#changeMe').text(data);
        },
        error: function(err) {
            console.error('Fout: ', err);
        }
    });

});