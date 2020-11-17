<?php
$encoding = "utf-8";

$name = $_POST['name'];
$email = $_POST['email'];
$country = $_POST['country'];
$message = $_POST['message'];

$formcontent = "From:$name \r\n Message:$message \r\n Land:$country";
$recipient = "mort108v@stud.kea.dk";
$subject = "Kontaktformular IHS";
$mailheader = "From: $email \n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Tak for beskeden! KEA 2020";
?>


<!--

<form method="post" action="http://nobisnet.dk/cgi-bin/FormMail.pl" accept-charset="ISO-8859-1" onsubmit="var originalCharset = document.charset; document.charset = 'ISO-8859-1'; window.onbeforeunload = function () {document.charset=originalCharset;};">
Navn <br />
<input name="realname" /> <br />
E-mail <br />
<input name="email" /> <br />
Meddelelse <br />
<textarea cols="40" rows="10" name="Message"></textarea> <br />

<input type="submit" value="Send" />
<input type="hidden" name="recipient" value="mail@example.com" />
<input type="hidden" name="subject" value="Subject" />
<input type="hidden" name="redirect" value="http://www.example.com/tak.html" /> <input type="hidden" name="missing_fields_redirect" value="http://www.example.com/fejl.html" />
<input type="hidden" name="required" value="realname,email,Message" /> </form>-->
