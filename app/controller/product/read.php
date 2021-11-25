<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/Product.php');


    // database and connect
    $product = new Product((new Database())->connect());

    print_r($product->read());
?>