<?php

    session_start();
    include_once('../../config/Header.php');
    header('Access-Control-Allow-Methods: POST');
    
    include_once('../../config/Database.php');
    include_once('../../models/Account.php');
    
    $account = new Account((new Database())->connect());

    $data = json_decode(file_get_contents("php://input"));


    $account->username = $data->username;
    $account->password = $data->password;



    $result = $account->validate();
    if ($result->num_rows > 0) {
        
       
        while($row = $result->fetch_assoc()) {
            extract($row);
            $user = array(
                'id' => $id,
                'pName' => $username,
                'src' => $password,
                "srcDetail" => $email ,
                "alt" => $name,
                "price" => $phoneNumber,
                "role" => $role
            );
        }

        $_SESSION['user'] = $user;
        $_SESSION['log'] = true;
        $result2 = array();
        array_push($result2, $user);
        
        echo (json_encode(array('user' => $user, 'isSuccess' => true)));
    }
    else
        echo (json_encode(array('user' => null, 'isSuccess' => false)));
?>


