<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Use PHP's built-in mail function to send an email
    $to = "lxarmas@gmail.com"; // Replace with your email address
    $headers = "From: $email";
    
    if (mail($to, $subject, $message, $headers)) {
        echo 'Message sent!';
    } else {
        echo 'Message could not be sent.';
    }
}
?>
