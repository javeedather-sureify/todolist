<?php

header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Methods: *');



$username="root";
$password="password";
$server='172.17.0.2';
$db='crudyutube';

$con=mysqli_connect($server,$username,$password,$db);

//$recText=$_POST['signInEmail'];
//$recText1=$_POST['signInPassword'];
 
if($_SERVER["REQUEST_METHOD"]=="POST"){

$value=$_POST['value'];
// $password=$_POST['password'];

// $query="INSERT INTO  register (Name,Email,Password) VALUES ('$name','$email','$password')";


$query="DELETE FROM todo WHERE TODO = '$value'";



if(mysqli_query($con,$query)){
    echo "Data Inserted";
}
else
{
    echo "Error";
}


}








?>
