/* JavaScript basics - datatypes
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser: true,
devel: true
*/
var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

function testDay(day) {
    var test = false;

    for (var i = 0; i < days.length; i++) {
        if (day == days[i]) test = true;
    }


    if (test) {
        console.log((day == "sunday") ? "joepie" : "spijtig");
    } else {
        console.error("geen geldige dag");
    }
}

function isItSunday() {
    var dag = new Date();
    console.log((dag.getDay() === 0) ? "joepie" : "spijtig");
}