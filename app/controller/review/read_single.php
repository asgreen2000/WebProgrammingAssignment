<?php
    // header('Access-Control-Allow-Origin: *');
    // header('Content-Type: application/json');

    include_once("../../config/Header.php");
    include_once('../../config/Database.php');
    include_once('../../models/Review.php');


    // database and connect
    $review = new Review((new Database())->connect());

    $product->id = isset($_GET['id']) ? $_GET['id'] : die();
    $result = $product->readSingle();
    $reviews = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            $data = array(
                'userID' => $userID,
                'productID' => $productID,
                'rate' => $rate,
                "comment" => $comment
            );
            array_push($reviews, $data);
        }
    } 

    echo json_encode($reviews);
?>