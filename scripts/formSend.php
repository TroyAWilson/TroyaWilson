<?php
if(!isset($POST['submit']))
{
  echo "error, you need to submit the form!";
}
$name =$_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

// Validation
if(empty($name)||empty($visitor_email))
{
  echo "Name and email are mandatory!";
  exit;
}

$email_from = 'troyaustynwilson@gmail.com';
$email_subject ="New Form Submission";
$email_body ="You have recieved a message from the user $name \n".
        "email address: $visitor_email \n".
        "Here is the message: $message \n".

$to ="troyaustynwilson@gmail.com";
$headers ="From: $email_from \r\n";

// Sends email
mail($to,$email_subject,$email_body,$headers);
?>
