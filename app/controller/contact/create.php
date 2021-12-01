<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/Contact.php');


    // database and connect
    $contact = new Contact((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $contact->cName = $data->cName;
    $contact->email = $data->email;
    $contact->phoneNumber = $data->phoneNumber;

    if ($contact->validate()) {
        

        $exist = ($contact->exist());
        
        var_dump($exist->num_rows);

        if ($exist->num_rows > 0)
        {
            echo json_encode(
                array('message' => "Email has already existed!", 'sucess' => false)
            );
        }
        else {
            $result = $contact->create();
            if ($result)
                echo json_encode(
                    array('sucess' => $result, 'message' => "Created!")
                );
            else {
                echo json_encode(
                    array('sucess' => $result, 'message' => "Cannot create!")
                );
            }
        }
    }
    else {
        echo json_encode(array('message' => "Invalid email"));
    }
?>