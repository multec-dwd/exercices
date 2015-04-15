/* JavaScript Validation - postcode
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/* jshint
browser: true
*/
var popoverBG;
var popover;

function showPopover() {
    //maak popoverBG
    popoverBG = document.createElement('div');
    popoverBG.className = 'popoverBG';
    document.body.appendChild(popoverBG);
    //maak popover
    popover = document.createElement('div');
    popover.className = 'popover';
    popover.innerHTML = '<header><h2>Voorwaarden</h2></header>' + '<section>' + ' <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis ligula lorem, consequat eget, tristique nec, auctor quis, purus. Vivamus ut sem. Fusce aliquam nunc vitae purus. Aenean viverra malesuada libero. Fusce ac quam. Donec neque. Nunc venenatis enim nec quam. Cras faucibus, justo vel accumsan aliquam, tellus dui fringilla quam, in condimentum augue lorem non tellus. Pellentesque id arcu non sem placerat iaculis. Curabitur posuere, pede vitae lacinia accumsan, enim nibh elementum orci, ut volutpat eros sapien nec sapien. Suspendisse neque arcu, ultrices commodo, pellentesque sit amet, ultricies ut, ipsum. Mauris et eros eget erat dapibus mollis. Mauris laoreet posuere odio. Nam ipsum ligula, ullamcorper eu, fringilla at, lacinia ut, augue. Nullam nunc.</p>' + '<p>Sed et lectus in massa imperdiet tincidunt. Praesent neque tortor, sollicitudin non, euismod a, adipiscing a, est. Mauris diam metus, varius nec, faucibus at, faucibus sollicitudin, lectus. Nam posuere felis ac urna. Vestibulum tempor vestibulum urna. Nullam metus. Vivamus ac purus. Nullam interdum ullamcorper libero. Morbi vehicula imperdiet justo. Etiam mollis fringilla ante. Donec et dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam mi libero, luctus nec, blandit ac, rutrum ac, lectus.</p>' + '</section>' + '<form><input type="checkbox" id="voorwaarden"><label for="voorwaarden">Ik aanvaard de voorwaarden.</label><br>' + '<input type="checkbox" id="nieuwsbrief"><label for="nieuwsbrief">Ik wil de nieuwsbrief ontvangen.</label></form>' + '<p><a href="#" onclick="removePopover()">Nee, bedankt</a><br><a href="#" onclick="submitForm()">Verzend het formulier</a></p>';
    document.body.appendChild(popover);
    //voeg click toe aan popoverBG
    popoverBG.onclick = removePopover;
}

function removePopover() {
    document.body.removeChild(popoverBG);
    document.body.removeChild(popover);
}

function submitForm() {
    //controle voorwaarden aanvaard
    if (!document.getElementById('voorwaarden').checked) {
        popover.innerHTML += '<p style="color: #f00; margin-top: -50px;">U moet de voorwaarden aanvaarden</p>';
    } else {
        document.getElementById('form1').submit();
    }
}

window.onload = function() {
    document.getElementById('form1').onsubmit = function(e) {
        e.preventDefault();
        showPopover();
    };
};