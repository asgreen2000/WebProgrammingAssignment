<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once('../../config/Database.php');
    include_once('../../models/News.php');


    // database and connect
    $news = new News((new Database())->connect());
    
    // input data
    $data = json_decode(file_get_contents("php://input"));

    $news->title = $data->title;
    $news->content = $data->content;
    $news->subject = $data->subject;
    $news->image = $data->image;
    $news->postTime = $data->postTime;


    $result = $news->create();

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