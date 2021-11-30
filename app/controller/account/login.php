<?php
    $data = json_decode(file_get_contents("php://input"));
    if (isset($data->remember) && !$data->remember) {
        session_set_cookie_params(0);
    } else
        session_set_cookie_params(time() + 2592000);
    session_start();
    session_regenerate_id(true);
    header('Access-Control-Allow-Methods: POST');
    require_once('../../config/Header.php');
    require_once('../../models/Account.php');
    require_once('../../config/Database.php');
    
    if (isset($_SESSION) && isset($_SESSION['isLogin']) && $_SESSION['isLogin'] == true) {
        echo json_encode(array('isSuccess' => true, 'role' => $_SESSION['role']));
    } else {
        $account = new Account((new Database())->connect());
        $account->username = $data->username;
        $account->password = $data->password;

        $result = $account->validate();
        
        if ($account->validate()) {
            $_SESSION['isLogin'] = true;
            $_SESSION['role'] = $account->role;
            $_SESSION['username'] = $account->username;
            echo json_encode(array('isSuccess' => true, 'role' => $account->role));
        } else {
            echo json_encode(array('isSuccess' => false));
        }
    }
?>


