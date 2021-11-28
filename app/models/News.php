<?php

class News {

    // db config
    private $conn;
    private $table = 'news';


    // attribute
    public $id;
    public $title;
    public $content;
    public $subject;
    public $image;
    public $postTime;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function read() {

        
        $sql = "SELECT * FROM ". $this->table;
        $result = $this->conn->query($sql);
        return $result;
    }

    public function readSingle() {
        $sql = "SELECT * FROM " . $this->table . " where id=" . $this->id;
        $result = $this->conn->query($sql);
        return $result;
    }

    public function create() {

       
    }

    public function delete() {
       
    }

    public function update() {

        
    }
}

?>