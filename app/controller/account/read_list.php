<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');


    // database and connect
    $account = new Account((new Database())->connect());

    $result = $account->read_customer();
    echo json_encode($result);
?>
