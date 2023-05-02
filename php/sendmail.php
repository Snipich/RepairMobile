<?php
    $name = $_POST['modalName'];
    $email = $_POST['modalEmail'];
    $message = $_POST['modalTextarea']; 
    $phone = $_POST['modalPhone'];


    $subject = "=?utf-8?B?".base64_encode("Ремонт телефона")."?=";
    $headers ="From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("EMAIL", $subject,"Имя: ".$name.
    "<br>Номер телефона: ".$phone."\n". "<br>Сообщение: ".$message, $headers);

    header("Location: ../index.html");
    
?>