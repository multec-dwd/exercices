/* jQuery validation
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser:true,
jquery:true,
devel:true
*/
var naam = false;
var email = false;
var paswoord = false;
var pw1 = "";
var pw2 = "";
var regexPw = /^[a-zA-Z]{1}.{6,}[1-9]{1}$/;
var tekst = "";

$(document).ready(function() {
    $("#naam").blur(function(e) {
        naam = controle(this);
    });
    $("#email").blur(function(e) {
        email = controle(this);
    });
    $("#paswoord1").blur(function(e) {
        paswoord = paswoordControle(this);
    });
    $("#paswoord2").blur(function(e) {
        paswoord = paswoordControle(this);
    });

    $('form').submit(function(e) {
        e.preventDefault();
        console.log("In form");
        if (naam === true && email === true && paswoord === true) {
            $('form').html("registratie is voltooid!");
        } else {
            if (naam === false) {
                tekst += "Naam is niet ingevuld.<br>";
            }
            if (email === false) {
                tekst += "Email is niet ingevuld. <br>";
            }
            if (paswoord === false) {
                tekst += "Paswoord is niet correct ingevuld ingevuld.";
            }
            console.log(tekst);
            $("#foutmelding").html(tekst);
            tekst = "";
        }
    });
});


function controle(e) {
    if ($(e).val() === "") {
        $(e).css("border-color", "red");
        return false;
    } else {
        $(e).css("border-color", "white");
        return true;
    }
}

function paswoordControle(e) {
    if (controle(e)) {
        console.log(regexPw.test($(e).val()));
        if (regexPw.test($(e).val())) {
            pw1 = $("#paswoord1").val();
            pw2 = $("#paswoord2").val();
            if (pw2 !== "") {
                if (pw1 === pw2) {
                    $(".paswoorden").css("border-color", "white");
                    return true;
                } else {
                    $(".paswoorden").css("border-color", "red");
                    return false;
                }
            }
        } else {
            $(".paswoorden").css("border-color", "red");
            return false;
        }
    }
    return false;
}