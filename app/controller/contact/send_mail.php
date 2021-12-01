<?php
    
    require_once("../../config/MailHeader.php");

    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: POST');
    

    include_once('../../config/Database.php');
    include_once('../../models/Contact.php');


    // database and connect
    $contact = new Contact((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $result = $contact->read();

    
    $msg = $data->msg;
    $subject = $data->subject;
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            
            
           
            mail($email,$subject, $msg, $headers);
           
        }
    } 

    echo json_encode(array("success" => true));
    
    
?>