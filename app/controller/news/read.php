<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once('../../config/Database.php');
    include_once('../../models/News.php');


    // database and connect
    $new = new News((new Database())->connect());

    $result = $new->read();
    $news = array();
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            extract($row);
            $new = array(
                'id' => $id,
                'title' => $title,
                'content' => $content,
                "subject" => $subject,
                "image" => $image,
                "postTime" => $postTime,
            );
            array_push($news, $new);
        }
    } 

    echo json_encode($news);
?>