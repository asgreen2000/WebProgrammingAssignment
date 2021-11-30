<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/News.php');


    // database and connect
    $news = new News((new Database())->connect());
    $news->id = isset($_GET['id']) ? $_GET['id'] : die();
    $result = $news->readSingle();
    $newss = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            $news = array(
                'id' => $id,
                'title' => $title,
                'content' => $content,
                "subject" => $subject,
                "image" => $image,
                "postTime" => $postTime,
            );
            array_push($newss, $news);
        }
    } 

    echo json_encode($newss);
?>