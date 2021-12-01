<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/Contact.php');


    // database and connect
    $contact = new Contact((new Database())->connect());

    $result = $contact->read();
    $contacts = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            $contact = array(
                'id' => $id,
                'email' => $email,
                'cName' => $cName,
                "phoneNumber" => $phoneNumber,
            );
            array_push($contacts, $contact);
        }
    } 

    echo json_encode($contacts);
?>