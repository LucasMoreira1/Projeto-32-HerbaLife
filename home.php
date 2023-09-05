<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    
    <?php
    // Check if the user is logged in (authenticated)
    if (isset($_SESSION["user_id"]) && isset($_SESSION["username"]) && isset($_SESSION["tenant_codtenant"])) {
        // Display user information
        echo "<p>User ID: " . $_SESSION["user_id"] . "</p>";
        echo "<p>Username: " . $_SESSION["username"] . "</p>";
        echo "<p>Tenant Code: " . $_SESSION["tenant_codtenant"] . "</p>";

        // You can also include other content for the logged-in user here
    } else {
        // If the user is not logged in, you can redirect them to the login page or display a message
        echo "You are not logged in. Please <a href='index.html'>log in</a> first.";
    }
    ?>

</body>
</html>