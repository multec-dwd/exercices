<?php
//-------------CHECK IF naam VIA GET---------------//
if(isset($_GET["name"])){
	if(!empty($_GET["name"])){
		echo '{"success":"Welkom '.$_GET["name"].'"}';
	}
	else echo '{"error":"Naam is leeg"}';
}
else echo '{"error":"Geen naam verstuurd via GET"}';

?>