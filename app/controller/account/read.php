<?php

    session_start();
    include_once('../../config/Header.php');
    include_once('../../config/Database.php');
    include_once('../../models/Account.php');

    if (isset($_SESSION['role']) && $_SESSION['role'] == 'Admin')    
    {
        $account = new Account((new Database())->connect());

        $result = $account->readAll();

        $users = array();
        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                extract($row);
                $product = array(
                    'id' => $id,
                    'username' => $username,
                    'password' => $password,
                    "name" => $name,
                    "email" => $email,
                    "phonenumber" => $phonenumber,
                    "role" => $role
                );
                array_push($products, $product);
            }
        } 
    }
    else {
        echo (json_encode(array('users' => array(), 'message' => "Not allowed to fetch user data")));
    }
    
    

?>


