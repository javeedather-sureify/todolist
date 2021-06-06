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
$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
echo "hi";
echo $name;
echo $email;
$query="INSERT INTO  register (Name,Email,Password) VALUES ('$name','$email','$password')";
if(mysqli_query($con,$query)){
    echo "Data Inserted";
}
else
{
    echo "Error";
}
}
?>
