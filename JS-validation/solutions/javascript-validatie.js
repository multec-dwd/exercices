 /* JavaScript DOM - Popover
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
 /*jshint
browser:true,
devel:true
*/

 window.onload = function() {

     var form1 = document.getElementById('form1');

     form1.onsubmit = function(e) {
         e.preventDefault(); //voorkomt het versturen van het formulier, en dus ook het inladen van een nieuwe pagina

         var valid = true; //variabele bijhouden ter controle een of meer fouten (dan wordt waarde false)
         
         //loop form input elements, behalve de laatste (input type sumbit)
         for (var i = 0, j = form1.length - 1; i < j; i++) {
             var inputElement = form1[i];

             //controle of veld ingevuld (aantal karakters === 0?)
             if (inputElement.value.length === 0) {
                 showError(inputElement,"Dit veld is vereist.");
                 valid = false;
             }
             //indien wel ingevuld, ingevulde waarde controleren met regexp per veld
             else {
                 switch (inputElement.id) {
                     case 'geboortedatum':
                         //let op het uitroepteken voor de conditie - als de test false oplevert error toevoegen
                         if (!/^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{4}$/.test(inputElement.value)) {
                             showError(inputElement,'Geen geldige geboortedatum. Gebruik formaat dd/mm/jjjj.');
                             valid = false;
                         }
                         else showValid(inputElement);
                         break;
                     case 'telefoonnummer':
                         if (!validatePhoneNumber(inputElement.value)) {
                             showError(inputElement,'Geen geldig telefoonnummer.');
                             valid = false;
                         }
                         else showValid(inputElement);
                         break;
                     case 'huisnummer':
                         if (!/^[0-9]+[a-zA-Z]?$/.test(inputElement.value)) {
                             showError(inputElement,'Geen geldig huisnummer.');
                             valid = false;
                         }
                         else showValid(inputElement);
                         break;
                     case 'postcode':
                         if (!/^(B-)?[1-9]{1}[0-9]{3}$/.test(inputElement.value)) {
                             showError(inputElement,'Geen geldige postcode.');
                             valid = false;
                         }
                         else showValid(inputElement);
                         break;
                    default: showValid(inputElement);
                 }
             }
         }


         /*

         //verwijder huidige foutmeldingen
         var errors = document.getElementsByClassName("error");
         for (var i = 0, j = errors.length; i < j; i++) {
             form1.removeChild(errors[i]);
         }

         //loop form input elements, behalve de laatste (input type sumbit)
         for (i = 0, j = form1.length - 1; i < j; i++) {
             //console.dir(form1[i]);
             var invoerveld = form1[i];
             var error;

             //controle of veld ingevuld (aantal karakters === 0?)
             if (invoerveld.value.length === 0) {
                 //rand rood kleuren
                 invoerveld
                 //element foutmelding aanmaken
                 error = document.createElement('span');
                 error.className = 'error';
                 error.innerHTML = 'Dit veld is vereist.';
                 //foutmelding toevoegen aan form, vòòr het volgende element.
                 form1.insertBefore(error, invoerveld.nextSibling);
                 geldigFormulier = false;
             }
             //indien wel ingevuld, ingevulde waarde controleren met regexp per veld
             else {
                 switch (invoerveld.id) {
                     case 'geboortedatum':
                         //let op het uitroepteken voor de conditie - als de test false oplevert error toevoegen
                         if (!/^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{4}$/.test(invoerveld.value)) {
                             //rand rood kleuren
                             invoerveld.style.border = '1px solid #f00';
                             //element foutmelding aanmaken
                             error = document.createElement('span');
                             error.className = 'error';
                             error.innerHTML = 'Geen geldige geboortedatum. Gebruik formaat dd/mm/jjjj.';
                             //foutmelding toevoegen aan form, vòòr het volgende element.
                             form1.insertBefore(error, invoerveld.nextSibling);
                             geldigFormulier = false;
                         } else {
                             invoerveld.style = "";
                         }
                         break;
                     case 'telefoonnummer':
                         if (!validatePhoneNumber(invoerveld.value)) {
                             invoerveld.style.border = '1px solid #f00';
                             error = document.createElement('span');
                             error.className = 'error';
                             error.innerHTML = 'Geen geldig belgisch telefoonnummer.';
                             form1.insertBefore(error, invoerveld.nextSibling);
                             geldigFormulier = false;
                         } else {
                             invoerveld.style = "";
                         }
                         break;
                     case 'huisnummer':
                         if (!/^[0-9]+[a-zA-Z]?$/.test(invoerveld.value)) {
                             invoerveld.style.border = '1px solid #f00';
                             error = document.createElement('span');
                             error.className = 'error';
                             error.innerHTML = 'Geen geldig huisnummer.';
                             form1.insertBefore(error, invoerveld.nextSibling);
                             geldigFormulier = false;
                         } else {
                             invoerveld.style = "";
                         }
                         break;
                     case 'postcode':
                         if (!/^(B-)?[1-9]{1}[0-9]{3}$/.test(invoerveld.value)) {
                             invoerveld.style.border = '1px solid #f00';
                             error = document.createElement('span');
                             error.className = 'error';
                             error.innerHTML = 'Geen geldige postcode.';
                             form1.insertBefore(error, invoerveld.nextSibling);
                             geldigFormulier = false;
                         } else {
                             invoerveld.style = "";
                         }
                         break;
                    default: invoerveld.style = "";
                 }
             }
         }

        */
         if (valid) form1.submit(); //verstuurt formulier, nieuwe pagina wordt ingeladen


     };
 };

 function showError(inputElement, error) {
     inputElement.style.border = '1px solid #f00';
     var msgElement = inputElement.nextElementSibling; //span element
     msgElement.className = "error";
     msgElement.innerHTML = error;
 }

 function showValid(inputElement) {
     console.log(inputElement.id + " is valid ");
     inputElement.style.border = '1px solid #000';
     var msgElement = inputElement.nextElementSibling; //span element
     msgElement.className = "valid";
     msgElement.innerHTML = '\u2713';
 }

 function validatePhoneNumber(tel) {
     //details zie oefening validatie telefoonnummer
     tel = tel.replace(/[\. \/]/g, '');
     if (!isNaN(tel)) {
         if (tel.substr(0, 3) == '+32') return (tel.length < 13 && tel.length > 10) ? true : false;
         else return (tel.length < 11 && tel.length > 8) ? true : false;
     } else return false;
 }