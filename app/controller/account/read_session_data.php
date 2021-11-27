<?php

    session_start();
    include_once('../../config/Header.php');

    if ($_SESSION['log'])    
    {
        echo (json_encode(array('user' => $_SESSION['user'], 'isLogin' => true)));
    }
    else {
        echo (json_encode(array('user' => null, 'isLogin' => false)));
    }
?>