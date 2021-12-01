<?php
    

class Account {

    // db config
    private $conn;
    private $headers =  'MIME-Version: 1.0' . "\r\n" . 'From:buihuutiendat2017@gmail.com ' . "\r\n" . 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

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
    }

    public function resetPassword() {
        if ($this->username && $this->email) {
            $stmt = $this->conn->prepare("SELECT * FROM account where username=? and email=?");
            $stmt->bind_param('ss', $this->username, $this->email);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($result->num_rows > 0) {
                $user = $result->fetch_assoc();
                $newPassword = bin2hex(openssl_random_pseudo_bytes(6));
                $stmtUpdate = $this->conn->prepare("UPDATE account set password=? where username=? and email=?");
                $hashPassword = password_hash($newPassword, PASSWORD_BCRYPT);
                $stmtUpdate->bind_param('sss', $hashPassword, $user->username, $user->email);
                if ($res = $stmtUpdate->execute())
                    return mail($user->email, "Reset password", "Your new password: {$newPassword}");
                return $res;
            }
        } else {
            return false;
        }
    }

    public function update() {
        $result = false;
        if ($this->password) {
            $stmt = $this->conn->prepare("UPDATE account set password =?, email=?, name=?, phoneNumber=? where username=?");
            $pass = password_hash($this->password, PASSWORD_BCRYPT);
            $stmt->bind_param('sssss', $pass, $this->email, $this->name, $this->phonenumber, $this->username);
            $result = $stmt->execute();
            $stmt->close();
        } else {
            $stmt = $this->conn->prepare("UPDATE account set email=?, name=?, phoneNumber=? where username=?");
            $stmt->bind_param('ssss', $this->email, $this->name, $this->phonenumber, $this->username);
            $result = $stmt->execute();
            $stmt->close();
        }
        return $result;
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
        if ($this->username) {
            $stmt = $this->conn->prepare("SELECT username, name, email, phoneNumber FROM account where username=?");
            $stmt->bind_param('s', $this->username);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
            return $user;
        }
    }


    public function read_customer() {
        $sql = "SELECT * from account where role = 'User'";
        $result = $this->conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
    public function delete() {
        $sql = "DELETE FROM account where id=" . $this->id;
        $result = $this->conn->query($sql);
        return $result;
    }
}

?>