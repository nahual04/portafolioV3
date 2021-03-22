<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $header = 'From: ' . $email . "  \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Este mensaje fue enviado por: " . $name . " \r\n"; 
    $message .= "email: " . $email . " \r\n"; 
    $message .= "Mensaje: " . $_POST['message'] . " \r\n"; 

    $para = 'robelci.manuel@gmail.com';
    $asunto = 'Correo desde el portafolio web';

    mail($para, $asunto, utf8_decode($message), $header);
    // echo("Correo enviado");
?>
