<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');


    // database and connect
    $account = new Account((new Database())->connect());

    $result = $account->read_customer();
    $accounts = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            $account = array(
                'id' => $id,
                'username' => $username,
                'password' => $password,
                "name" => $name,
                "email" => $email,
                "phoneNumber" => $phoneNumber,
            );
            array_push($accounts, $account);
        }
    } 

    echo json_encode($accounts);
?>
