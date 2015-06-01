<?php
//-------------CHECK IF naam VIA GET---------------//
if(isset($_GET["name"])){
	if(!empty($_GET["name"])){
		echo 'Welkom '.$_GET["name"];
	}
	else echo 'Naam is leeg';
}
else echo 'Geen naam verstuurd via GET';

?>