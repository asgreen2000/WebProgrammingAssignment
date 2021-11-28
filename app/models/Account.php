<?php

class Account {

    // db config
    private $conn;


    // attribute
    public $id;
    public $username;
    public $password;
    public $name;
    public $email;
    public $phonenumber;
    public $role;


    private function isValid() {

        return $this->username != '' && $this->password != '' && $this->email != ''
        && $this->phonenumber != '' && $this->role != '';
        
    }

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function validate() {

        $sql = "SELECT * FROM account where username='". $this->username. "' and password='". $this->password."'";
        
        $result = $this->conn->query($sql);
        return $result;
    }

    public function create() {

        if (!$this->isValid())
        {
            return false;
        }

        $sql = $this->conn->prepare("INSERT into account(username, password, email, 
            name, phoneNumber, role) VALUES (?,?,?,?,?, 'User')
        ");

        $sql->bind_param('ssssss', $this->username, $this->password, $this->email, $this->name, $this->phonenumber);
        $result = $sql->execute();
        
        $sql->close();
        return $result;
    }

    public function read() {

        $sql = "SELECT * from account where role != 'Admin'";

        $result = $this->conn->query($sql);
        return $result;
    }

}

?>