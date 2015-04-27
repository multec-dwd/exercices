<?php
if(isset($_POST['land']) && !empty($_POST['land']))
{
	$regex = '/'. $_POST['land'] . '/i';
	$xml = simplexml_load_file("landen.xml");
	$result = '{"landen" : [  ';
	foreach($xml->children() as $child)
	{
		if(preg_match($regex, $child))
		{
			$result .= '"'.$child.'", ';
		}
	}
	$result = substr($result, 0, -2);
	$result .= '  ]}';
	echo $result;
}
?>