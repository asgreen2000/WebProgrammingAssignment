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
        return $this->username != '' && $this->password != '' && $this->email != '' && $this->phonenumber != '';
    }

    public function __construct($db) {
        $this->conn = $db;
    }

    public function validate() {
        $stmt = $this->conn->prepare("SELECT * FROM account where username=?");
        $stmt->bind_param('s', $this->username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        
        if ($result->num_rows > 0) {
            
            $user = $result->fetch_assoc();
            $result = password_verify($this->password, $user['password']);
            if ($result)
                $this->role = $user['role'];
            return $result;
        } else {
            return false;
        }
        $stmt->close();
    }

    public function create() {

        if (!$this->isValid())
            return false;

        $sql = $this->conn->prepare("INSERT into account(username, password, email, 
            name, phoneNumber, role) VALUES (?,?,?,?,?, 'User')
        ");
        $pass = password_hash($this->password, PASSWORD_BCRYPT);
        $sql->bind_param('sssss', $this->username, $pass, $this->email, $this->name, $this->phonenumber);
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