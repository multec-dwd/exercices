/* Ajax loading XML
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
$(function() {

    $.ajax({
        url: 'catalogus.xml',
        dataType: 'xml',
        success: onSuccess,
        error: function(err) {
            console.error('Fout: ', err);
        }
    });

});

function onSuccess(xml) {

    var htmlstring = '';

    $(xml).find('album').each(function() {

        htmlstring += '<div class="album">';
        htmlstring += '<img src="' + $(this).find('img').attr('src') + '"/>';
        htmlstring += '<p class="title">' + $(this).find('title').text() + '</p>';
        htmlstring += '<p class="artist">' + $(this).find('artist').text() + '</p>';
        htmlstring += '</div>';

    });

    $(document.body).append($(htmlstring));
}