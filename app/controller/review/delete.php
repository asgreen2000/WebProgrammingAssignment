<?php
    // header('Access-Control-Allow-Origin: *');
    // header('Content-Type: application/json');
    require_once("../../config/Header.php");
    header('Access-Control-Allow-Methods: DELETE');
    // header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/Review.php');


    // database and connect
    $review = new Review((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $review->userID = $data->userID;
    $review->productID = $data->productID;
    
    $result = $review->delete();

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