<?php
    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: POST');
    // header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');


    // database and connect
    $db = (new Database())->connect();
    $account = new Account($db);
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $account->username = $data->username;
    $account->password = $data->password;
    $account->name = $data->name;
    $account->email = $data->email;
    $account->phonenumber = $data->phonenumber;

    $result = $account->create();

    if ($result)
        echo json_encode(
            array('message' => 'success')
        );
    else {
        echo json_encode(
            array('message' => 'fail')
        );
    }



    $db->close();
?>