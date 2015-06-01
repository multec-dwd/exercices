/* Ajax loading geolocation
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/

window.onload = function() {
    navigator.geolocation.getCurrentPosition(function(p) {
        var JSONgeolocation = '{"longitude":' + p.coords.longitude + ',"latitude":' + p.coords.latitude + '}';
        document.getElementById('geo').innerHTML = JSONgeolocation;
    });
};