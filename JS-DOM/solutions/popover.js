/* JavaScript DOM - Popover
Copyright (c) 2015 Jan Klaas Van Den Meersche - jan.klaas.van.den.meersche@ehb.be
*/
/*jshint
browser:true,
devel:true
*/
var popoverBG;
var popover;

function showPopover(){
	//maak popoverBG
	popoverBG = document.createElement('div');
	popoverBG.className = 'popoverBG';
	document.body.appendChild(popoverBG);
	//maak popover
	popover = document.createElement('div');
	popover.className = 'popover';
	popover.innerHTML = '<header><h2>Popover</h2></header><p>Sluit de pop-over <a href="#" onclick="removePopover()">hier</a></p>';
	document.body.appendChild(popover);
	//voeg click toe aan popoverBG
	popoverBG.onclick = removePopover;
}

function removePopover()
{
	document.body.removeChild(popoverBG);
	document.body.removeChild(popover);
}

window.onload = function(){
	document.getElementById('popLink').onclick = showPopover;
};