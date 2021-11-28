<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/Product.php');


    // database and connect
    $product = new Product((new Database())->connect());

    $result = $product->read();
    $products = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            $product = array(
                'id' => $id,
                'pName' => $pName,
                'src' => $src,
                "srcDetail" => $srcDetail,
                "alt" => $alt,
                "price" => $price,
                "quantity" => $quantity,
                "description" => $description,
                "type" => $type
            );
            array_push($products, $product);
        }
    } 

    echo json_encode($products);
?>