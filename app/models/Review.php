<?php

class Review {

    // db config
    private $conn;
    private $table = 'review';


    // attribute
    public $userID ;
    public $productID;
    public $rate;
    public $comment;
    

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
        $sql = "SELECT * FROM " . $this->table . " where userID=" . $this->userID. " and productID=".$this->productID;
        $result = $this->conn->query($sql);
        return $result;
    }

    public function create() {

        $sql = $this->conn->prepare("INSERT INTO ". $this->table . "(userID,productID,rate,comment) VALUES 
        (?, ?, ?, ?)
        ");

        $sql->bind_param("iiss", $this->userID, $this->productID, $this->rate, 
        $this->comment);
        $result = $sql->execute();
        $sql->close();
        return $result;
    }

    public function delete() {
        $sql = "DELETE FROM " . $this->table . " where userID=" . $this->userID. " and productID=".$this->productID;
        $result = $this->conn->query($sql);
        return $result;
    }

    public function update() {

        $sql = $this->conn->prepare("UPDATE ". $this->table . " set rate=?, comment=? where userID=? and productID=?");

        $sql->bind_param("sssiisssi", $this->rate, $this->comment, $this->userID, $this->productID);
        $result = $sql->execute();
        
        $sql->close();
        return $result;
    }
}

?>