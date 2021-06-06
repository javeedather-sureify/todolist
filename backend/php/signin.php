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

$email=$_POST['email'];
$password=$_POST['password'];

// $query="INSERT INTO  register (Name,Email,Password) VALUES ('$name','$email','$password')";

$query="SELECT * FROM register WHERE email='$email' and password='$password'";
$result=mysqli_query($con,$query);
if(mysqli_num_rows($result)==1){

    echo "User Present";
}
else{

    echo "User Absent"; 
}
if(mysqli_query($con,$query)){
    echo "Data Inserted";
}
else
{
    echo "Error";
}


}








?>
