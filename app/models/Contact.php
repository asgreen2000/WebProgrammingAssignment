<?php

class Contact {

    // db config
    private $conn;
    private $table = 'contact';


    // attribute
    public $id;
    public $cName;
    public $email;
    public $phoneNumber;

    public function validate() {
        
        if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }

        return true;
    }

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

    public function exist() {

        $sql = "SELECT * FROM " . $this->table . " where email='" . $this->email."'";
        $result = $this->conn->query($sql);
        return $result;

    }

    public function create() {

        $sql = $this->conn->prepare("INSERT INTO ". $this->table . "(cName,email,phoneNumber) VALUES 
        (?, ?, ?)
        ");

        $sql->bind_param("sss", $this->cName, $this->email, $this->phoneNumber);
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

        $sql = $this->conn->prepare("UPDATE ". $this->table . " set cName=?, email=?, phoneNumber=? where id=?");

        $sql->bind_param("sssi", $this->cName, $this->email, $this->phoneNumber, $this->id);
        $result = $sql->execute();
        
        $sql->close();
        return $result;
    }

    

}

?>