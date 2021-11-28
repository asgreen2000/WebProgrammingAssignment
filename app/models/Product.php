<?php

class Product {

    // db config
    private $conn;
    private $table = 'product';


    // attribute
    public $id;
    public $pName;
    public $src;
    public $srcDetail;
    public $price;
    public $quantity;
    public $description;
    public $type;
    public $alt;

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

        $sql = $this->conn->prepare("INSERT INTO ". $this->table . "(pName,src,srcDetail,price,quantity,description,type,alt) VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?)
        ");

        $sql->bind_param("sssiisss", $this->pName, $this->src, $this->srcDetail, 
        $this->price, $this->quantity, $this->description, $this->type, $this->alt);
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

        $sql = $this->conn->prepare("UPDATE ". $this->table . " set pName=?, src=?, srcDetail=?, price=?, quantity=?, description=?, 
        type=?, alt=? where id=?
        ");

        $sql->bind_param("sssiisssi", $this->pName, $this->src, $this->srcDetail, 
        $this->price, $this->quantity, $this->description, $this->type, $this->alt, $this->id);
        $result = $sql->execute();
        
        $sql->close();
        return $result;
    }
}

?>