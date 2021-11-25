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

}

?>