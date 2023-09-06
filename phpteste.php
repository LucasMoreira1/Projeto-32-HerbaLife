<?php
// Check if the user is logged in (authenticated)
if (isset($_SESSION["user_id"]) && isset($_SESSION["username"]) && isset($_SESSION["tenant_codtenant"])) {
    // Display user information
    echo "<p>User ID: " . $_SESSION["user_id"] . "</p>";
    echo "<p>Username: " . $_SESSION["username"] . "</p>";
    echo "<p>Tenant Code: " . $_SESSION["tenant_codtenant"] . "</p>";
    echo "<p>Tenant Name: " . $_SESSION["tenant_name"] . "</p>";
    // You can also include other content for the logged-in user here
} else {
    // If the user is not logged in, you can redirect them to the login page or display a message
    echo "You are not logged in. Please <a href='index.html'>log in</a> first.";
}
?>