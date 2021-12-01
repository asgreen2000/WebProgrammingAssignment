<?php

    session_start();
    include_once('../../config/Header.php');

    $result = session_destroy();
    echo json_encode(array('result' => $result));
?>