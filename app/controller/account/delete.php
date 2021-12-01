<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/Account.php');

    if (isset($_SESSION['role']) && isset($_SESSION['isLogin']) && $_SESSION['role'] == 'Admin' && $_SESSION['isLogin'] == true) {
        // database and connect
        $account = new Account((new Database())->connect());
        
        // input data
        $account->id = isset($_GET['id']) ? $_GET['id'] : die();

        $result = $account->delete();

        if ($result)
            echo json_encode(
                array('message' => 'success')
            );
        else {
            echo json_encode(
                array('message' => 'fail')
            );
        }
    }
?>