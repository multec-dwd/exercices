/* JavaScript Validation - postcode
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/

function valideerTelefoonnummer(tel) {
    //vervang punten spaties en slashes door lege string
    tel = tel.replace(/[\. \/]/g, '');
    //controle of andere karakters dan cijfers (of +) in string
    if (!isNaN(tel)) {
        //controle of eerste 3 karakters gelijk aan +32
        if (tel.substr(0, 3) == '+32') {
            //controle of lengte 11 of 12, zo ja correct, anders fout
            return (tel.length < 13 && tel.length > 10) ? true : false;
        }
        //controle of lengte 9 of 10, zo ja correct, anders fout
        else return (tel.length < 11 && tel.length > 8) ? true : false;
    }
    //indien andere waarden dan cijfers
    else return false;
}