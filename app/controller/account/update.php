<?php
    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: POST');
    session_start();

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $db = (new Database())->connect();
        $account = new Account($db);
        $account->read();
        $data = json_decode(file_get_contents("php://input"));

        $account->username = $data->username;
        $account->password = $data->password;
        $account->name = $data->name;
        $account->email = $data->email;
        $account->phonenumber = $data->phone;
        echo json_encode(array('success' => $account->update()));
        echo $account->id;
        $db->close();
    }
?>