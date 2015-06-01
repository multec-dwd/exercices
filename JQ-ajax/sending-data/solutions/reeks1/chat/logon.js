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