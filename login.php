<?php
session_start(); 

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input
    $enteredEmail = $_POST["email"];
    $enteredPassword = $_POST["password"];

    // Include the database connection
    include("connection.php"); // Update this with the correct path to your connection.php file

    // Perform user authentication
    $query = "SELECT * FROM LOGIN WHERE EMAIL = ?"; // Adjust the query and table name as per your database schema
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $enteredEmail);
    $stmt->execute();
    $result = $stmt->get_result();

    // Check if a user with the provided email exists
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $storedPassword = $row["SENHA"]; // Replace "SENHA" with the actual column name for the password

        // Verify the password
        if ($enteredPassword === $storedPassword) {
            // Password is correct, store user information in session
            $_SESSION["user_id"] = $row["CODLOGIN"]; // Replace with your user identifier column
            $_SESSION["username"] = $row["NOME"]; // Replace with your username column
            $_SESSION["tenant_codtenant"] = $row["TENANT_CODTENANT"]; // Add tenant_codtenant to the session

            // Redirect to the home page or any other desired page
            header("Location: home.php");
            exit();
        } else {
            // Incorrect password
            echo "Incorrect password. Please try again.";
        }
    } else {
        // User with the provided email doesn't exist
        echo "User not found. Please check your email and try again.";
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
}
?>
