<?php
$name = $_POST['name'];
$email = $_POST['email'];
$country = $_POST['country'];
$message = $_POST['message'];

$formcontent = "From: $name \n Message: $message";
$recipient = "mort108v@stud.kea.dk";
$subject = "Kontaktformular IHS";
$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Tak for beskeden! KEA 2020";
?>
