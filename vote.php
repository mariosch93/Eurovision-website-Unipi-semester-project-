<?php
// Read the connection details from the file credent.php
require_once 'credent.php';

// Create the connection
$dbconn = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_BASE);

// Check connection
if (!$dbconn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Set charset for the connection to correctly display Greek characters
mysqli_set_charset($dbconn, "utf8");

// Check the request method
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Create the insert query
    $sql = "INSERT INTO votes (country, user_email) 
            VALUES ('" . mysqli_real_escape_string($dbconn, $_POST['country']) . "',
                    '" . mysqli_real_escape_string($dbconn, $_POST['email']) . "')";
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Create the select query
    $sql = "SELECT * FROM user_info WHERE email='" . mysqli_real_escape_string($dbconn, $_GET['user']) . "';";
}

// Execute the query
$result = mysqli_query($dbconn, $sql);

// Check the results
if ($result) {
    echo "<br>αποθηκευση οκ <br>";
} else {
    echo "<br>αποθηκευση NOT οκ <br>";
    die('Query failed: ' . mysqli_error($dbconn));
}

// If the request is GET, display the results in a table
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $result) {
    echo "<table style='border:1px solid black'>";
    echo "<tr><th>Όνομα</th><th>Διεύθυνση</th><th>Ταχ. Κωδικός</th><th>Αριθμός Τηλεφώνου</th><th>email</th>
    <th>Χώρα</th></tr>";
    // Display the results in table rows
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr><td>" . $row['firstname'] . "</td>" .
            "<td>" . $row['address'] . "</td>" .
            "<td>" . $row['zip'] . "</td>" .
            "<td>" . $row['phonenumber'] . "</td>" .
            "<td>" . $row['email'] . "</td>" .
            "<td>" . $row['country'] . "</td></tr>";
    }
    echo "</table>";
}

// Close connection
mysqli_close($dbconn);
?>