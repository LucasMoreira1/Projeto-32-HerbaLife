<?php
$servername = "108.167.132.199"; // Replace with your server name
$username = "soluc963_AGILITY_ADM"; // Replace with your MySQL username
$password = "!Parrudo292703"; // Replace with your MySQL password
$database = "soluc963_HERBALIFE"; // Replace with your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>