<?php

    if(isset($_POST['submit']) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $addressFrom = $_POST['email'];
        $message = $_POST['message'];

        $addressTo = "francis6797@outlook.com";

        $headers = "From: ".$addressFrom;
        $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;


        mail($addressTo, $subject, $txt, $headers);
        header("Location: index.php?mailsend");
    })