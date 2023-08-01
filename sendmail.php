<?php
if(!empty($_POST["send"])) {
	$name = $_POST["name"];
  $comment = $_POST["comment"];
	$contact = $_POST["contact"];
	$toEmail = "pilingfornepal@gmail.com";
  
	$mailHeaders = "Name: " . $name .
	"\r\n Comment: ". $comment . 
	"\r\n Contact: ". $contact . 
	"\r\n Message: " . $userMessage . "\r\n";

	if(mail($toEmail, $name, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	}
}
?>