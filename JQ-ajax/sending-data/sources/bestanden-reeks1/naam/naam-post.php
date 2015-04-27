<?php
//-------------CHECK IF naam VIA POST---------------//
if(isset($_POST["name"])){
	if(!empty($_POST["name"])){
		echo '{"success":"Welkom '.$_POST["name"].'"}';
	}
	else echo '{"error":"Naam is leeg"}';
}
else echo '{"error":"Geen naam verstuurd via POST"}';


?>