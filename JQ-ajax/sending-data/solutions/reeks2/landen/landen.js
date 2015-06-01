/* jshint
devel: true,
browser: true,
jquery: true
*/

$(document).ready(function(){
    $('#land').keyup(function(){
        $.ajax({
            url: 'landen.php',
            type: 'POST',
            data: {land: $('#land').val()},
            dataType: 'json',
            success: function(data){
                console.log(data);
                var resultstring = '';
                $.each(data.landen, function(index, value){
                    resultstring += value + '<br>';
                });
                $('#resultaten').html(resultstring);
            }
        });
    });
});