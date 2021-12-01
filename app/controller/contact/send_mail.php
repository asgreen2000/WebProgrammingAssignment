<?php
    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: POST');
    

    include_once('../../config/Database.php');
    include_once('../../models/Contact.php');


    // database and connect
    $contact = new Contact((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $result = $contact->read();


    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            
            mail($email,"news letter", $data->msg);
        }
    } 

    echo json_encode(array("success" => true));
    
    
?>