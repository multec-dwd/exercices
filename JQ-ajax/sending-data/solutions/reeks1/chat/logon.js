/* Ajax - chat app
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
devel: true,
browser: true,
jquery: true
*/
$(document).ready(function(){
    $('#loginForm').submit(function(e){
        e.preventDefault();
        if($('#name').val() !== ''){
            localStorage.setItem('name',$('#name').val());
            document.location.href = 'chat.html';
            return false;
        }
    });
});