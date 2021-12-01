<?php
    session_start();
    include_once('../../config/Header.php');
    include_once('../../config/Database.php');
    include_once('../../models/Account.php');

    if (isset($_SESSION['isLogin']) && $_SESSION['isLogin'] == true)    
    {
        $account = new Account((new Database())->connect());
        $account->username = $_SESSION['username'];
        $user = $account->read();

        echo json_encode(array('user' => ($user ? $user : array()), 'success' => true));
    } else {
        echo json_encode(array('success' => false, 'message' => "Error"));
    }
?>


