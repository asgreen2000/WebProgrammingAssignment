<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/News.php');


    // database and connect
    $new = new News((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $new->id = $data->id;
    $new->title = $data->title;
    $new->content = $data->content;
    $new->subject = $data->subject;
    $new->image = $data->image;
    $new->postTime = $data->postTime;

    

    $result = $new->update();

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