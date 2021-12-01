<?php
    // header('Access-Control-Allow-Origin: http://localhost:3000');
    // header('Access-Control-Allow-Credentials: true');
    // header('Content-Type: application/json');
    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: POST');
    // header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/Review.php');


    // database and connect
    $review = new Review((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $review->userID = $data->userID;
    $review->productID = $data->productID;
    $review->rate = $data->rate;
    $review->comment = $data->comment;
    
    $result = $review->create();

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