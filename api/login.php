
<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once 'db.php';

    // Initialize session
    session_start();
    
    // Check if the user is already logged in
    if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
        header("location: welcome.php");
        exit;
    }
    
    // Include config file
    require_once "config.php";
    
    // Define variables and initialize with empty values
    $email = $password = "";
    
    // Processing form data when form is submitted
    if($_SERVER["REQUEST_METHOD"] == "POST"){
    
        // Validate email/username
        if(empty(trim($_POST["email"]))){
            echo "Please enter your email/username.";
        } else{
            $email = trim($_POST["email"]);
        }
        
        // Validate password
        if(empty(trim($_POST["password"]))){
            echo "Please enter your password.";
        } else{
            $password = trim($_POST["password"]);
        }
        
        // Check input errors before querying the database
        if(empty($email_err) && empty($password_err)){
            // Prepare a select statement
            $sql = "SELECT id, email, password FROM users WHERE email = ?";
            
            if($stmt = mysqli_prepare($link, $sql)){
                // Bind variables to the prepared statement as parameters
                mysqli_stmt_bind_param($stmt, "s", $param_email);
                
                // Set parameters
                $param_email = $email;
                
                // Attempt to execute the prepared statement
                if(mysqli_stmt_execute($stmt)){
                    // Store result
                    mysqli_stmt_store_result($stmt);
                    
                    // Check if email/username exists, if yes then verify password
                    if(mysqli_stmt_num_rows($stmt) == 1){
                        // Bind result variables
                        mysqli_stmt_bind_result($stmt, $id, $email, $hashed_password);
                        if(mysqli_stmt_fetch($stmt)){
                            if(password_verify($password, $hashed_password)){
                                // Password is correct, so start a new session
                                session_start();
                                
                                // Store data in session variables
                                $_SESSION["loggedin"] = true;
                                $_SESSION["id"] = $id;
                                $_SESSION["email"] = $email;                            
                                
                                // Redirect user to welcome page
                                header("location: welcome.php");
                            } else{
                                // Display an error message if password is not valid
                                echo "Invalid password.";
                            }
                        }
                    } else{
                        // Display an error message if email/username doesn't exist
                        echo "No account found with that email/username.";
                    }
                } else{
                    echo "Oops! Something went wrong. Please try again later.";
                }
    
                // Close statement
                mysqli_stmt_close($stmt);
            }
        }
        
        // Close connection
        mysqli_close($link);
    }
    ?>