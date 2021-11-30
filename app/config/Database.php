<?php 

  class Database {
    // DB Params
    private $host = 'localhost';
    private $db_name = 'web';
    private $username = 'root';
    private $password = '';
    private $conn;

    // DB Connect
    public function connect() {
        $this->conn = null;

        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
      return $this->conn;
    }

}

?>