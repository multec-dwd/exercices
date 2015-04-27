<?php
if(isset($_POST['naam']) && !empty($_POST['naam']))
{
    session_start();
    if(!isset($_SESSION['count'])){
        $_SESSION['count'] = 1;
    }
    else $_SESSION['count'] ++;
    
    echo '{"type":"success", "result":"Dag '
        . htmlspecialchars($_POST['naam'])
        .' voor de '
        . $_SESSION['count']
        .'e keer."}';
}
else echo '{"type":"error", "message":"Geef je naam mee via POST (bv. {naam:\'Jan\'} )."}';
?>