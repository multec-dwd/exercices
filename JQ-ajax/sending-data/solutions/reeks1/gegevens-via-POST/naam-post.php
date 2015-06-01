<?php
//-------------CHECK IF naam VIA POST---------------//
if(isset($_POST["name"])){
	if(!empty($_POST["name"])){
		echo 'Welkom '.$_POST["name"];
	}
	else echo 'Naam is leeg';
}
else echo 'Geen naam verstuurd via POST';

?>