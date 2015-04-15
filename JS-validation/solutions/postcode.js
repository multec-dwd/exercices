/* JavaScript Validation - postcode
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/

function valideerPostcode(postcode) {
    if (isNaN(postcode)) {
        //Postcode is geen getal, controle of postcode begint met B-
        if (postcode.substr(0, 2) == 'B-') {
            //Postcode begint met B-, controle of tweede deel postcode tussen 1000 en 9999
            if (Number(postcode.substr(2)) >= 1000 && Number(postcode.substr(2)) <= 9999) {
                //postcode is correct, formaat B-xxxx
                return true;
            } else {
                //postcode is fout
                return false;
            }
        }
    } else {
        //Postcode is een getal, controleer of getal >= 1000 && <=9999'
        if (Number(postcode) >= 1000 && Number(postcode) <= 9999) {
            //postcode is correct, formaat xxxx
            return true;
        } else {
            //postcode is fout
            return false;
        }
    }
}

function valideerPostcodeRegexp(postcode) {
    return /^(B-)?[1-9]{1}[0-9]{3}$/.test(postcode);
}