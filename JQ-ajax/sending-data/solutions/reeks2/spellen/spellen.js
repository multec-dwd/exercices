/* Ajax - loading XML
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
devel: true,
browser: true,
jquery: true
*/
$(function () {

    $.ajax({
        url: 'spellen.xml',
        dataType: 'xml',
        success: onSuccess,
        error: function (err) {
            console.error('Fout: ', err);
        }
    });
});

function onSuccess(data) {
    var table = '<table>';
    //loop elk spel
    $(data).find('spel').each(function () {
        var $this = $(this);
        var row = '<tr>';
        row += '<td><img src="images/' + $this.find('img').text() + '"/></td>'; //td met afbeelding
        row += '<td><h2>' + $this.find('naam').text() + '</h2></td>'; //td met naam spel
        row += '<td>' + $this.attr('min') + '</td>'; //td met min spelers
        row += '<td>' + $this.attr('max') + '</td>'; //td met mac spelers
        row += '</tr>';
        table += row;
    });
    table += '</table>';
    $(document.body).append($(table));
}