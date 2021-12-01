<?php
    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: POST');
    header('Content-Type: application/json');
    session_start();

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');

    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_SESSION['isLogin']) && $_SESSION['isLogin'] == true) {
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
        $db->close();
    }
?>