<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/Product.php');


    // database and connect
    $product = new Product((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $product->id = $data->id;
    $product->pName = $data->pName;
    $product->src = $data->src;
    $product->srcDetail = $data->srcDetail;
    $product->type = $data->type;
    $product->alt = $data->alt;
    $product->price = $data->price;
    $product->quantity = $data->quantity;
    $product->description = $data->description;

    

    $result = $product->update();

    if ($result)
        echo json_encode(
            array('message' => 'success')
        );
    else {
        echo json_encode(
            array('message' => 'fail')
        );
    }
?>