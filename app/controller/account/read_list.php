<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');
    session_start();

    if (isset($_SESSION['role']) && isset($_SESSION['isLogin']) && $_SESSION['role'] == 'Admin' && $_SESSION['isLogin'] == true) {
        $account = new Account((new Database())->connect());
        $result = $account->read_customer();
        echo json_encode($result);
    } else {
        echo json_encode(array());
    }
?>
