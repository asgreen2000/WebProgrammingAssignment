<?php
    $data = json_decode(file_get_contents("php://input"));
    header('Access-Control-Allow-Methods: POST');
    require_once('../../config/Header.php');
    require_once('../../models/Account.php');
    require_once('../../config/Database.php');
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($data->username) && isset($data->email)) {
            $account = new Account((new Database())->connect());
            $account->username = $data->username;
            $account->email = $data->email;
            if ($account->resetPassword())
                echo json_encode(array('message' => '', 'success' => true));
            else
                echo json_encode(array('message' => 'Username or email is incorrect', 'success' => false));
        }
    } else
        echo json_encode(array('message' => 'Please input your username and email', 'success' => false));
?>


