<?php

$myemail = 'tristan.secord@hotmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['phone']) || 
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

require 'vendor/autoload.php';

$sendgrid = new SendGrid('PhysiotherapyOnLakeshore', 'Penny2!!', array("turn_off_ssl_verification" => true));
$to = 'physiotherapyonlakeshore@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email    = new SendGrid\Email();
$email->addTo('tristan.secord@hotmail.com')
      ->setFrom('physiotherapyonlakeshore@gmail.com')
      ->setSubject('Test')
      ->setText('Owl are you doing?')->
      ->setHtml('<strong>%how% are you doing?</strong>');
$response = $sendgrid->send($email);
var_dump($response);
?>