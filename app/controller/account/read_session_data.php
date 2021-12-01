<?php

    session_start();
    include_once('../../config/Header.php');

    if (isset($_SESSION) && isset($_SESSION['isLogin']) && $_SESSION['isLogin'] == true) {
        $result = array('username' => "", 'isLogin' => false, 'role' => '');
        if (isset($_SESSION['username']))
            $result['username'] = $_SESSION['username'];
        if (isset($_SESSION['isLogin']))
            $result['isLogin'] = $_SESSION['isLogin'];
        if (isset($_SESSION['role']))
            $result['role'] = $_SESSION['role'];
        echo json_encode($result);
    }
?>