<?php

class Account {

    // db config
    private $conn;
    private $table = 'product';


    // attribute
    public $id;
    public $username;
    public $password;
    public $srcDetail;
    public $email;
    public $phonenumber;
    public $role;


    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function validate() {

        $sql = "SELECT * FROM account where username='". $this->username. "' and password='". $this->password."'";
        
        $result = $this->conn->query($sql);
        return $result;
    }
}

?>