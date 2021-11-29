<?php

    session_start();
    include_once('../../config/Header.php');

    $result = session_unset();

    echo json_encode(array('result' => $result));
?>