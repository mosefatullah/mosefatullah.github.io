<?php
// Database credentials
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'id18832075_sefatullah');
define('DB_PASSWORD', 'sefat.2023.DB');
define('DB_NAME', 'id18832075_database1');

// Attempt to connect to the database
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check the connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>
