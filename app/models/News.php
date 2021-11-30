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

        $sql = $this->conn->prepare("INSERT INTO ". $this->table . "(title,content,subject,image,postTime) VALUES 
        (?, ?, ?, ?, ?)
        ");

        $sql->bind_param("sssss", $this->title, $this->content, $this->subject, 
        $this->image, $this->postTime);
        $result = $sql->execute();
        $sql->close();
        return $result;
    }

    public function delete() {
        $sql = "DELETE FROM " . $this->table . " where id=" . $this->id;
        $result = $this->conn->query($sql);
        return $result;
    }

    public function update() {

        $sql = $this->conn->prepare("UPDATE ". $this->table . " set title=?, content=?, subject=?, image=?, postTime=? where id=?
        ");

        $sql->bind_param("sssssi", $this->title, $this->content, $this->subject, 
        $this->image, $this->postTime, $this->id);
        $result = $sql->execute();
        
        $sql->close();
        return $result;
    }
}

?>