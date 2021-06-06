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

// $name=$_POST['name'];
$todoo=$_POST['items'];
$email=$_POST['email'];
// $password=$_POST['password'];

echo "hi";
echo "$todoo";
// echo $name;
echo $email;
$query="INSERT INTO todo (Email,Todo) VALUES ('$email','$todoo')";

// $query="INSERT INTO  register (Name,Email,Password) VALUES ('$name','$email','$password')";


$query2="SELECT  from register where Email='$email';";

$statement=$con->query($query2);
echo "$statement";
// echo "$query2";
// $result = mysql_query($query2);

// echo(
// while($row = mysql_fetch_array($result)) {
//     echo $row['todo']; // Print a single column data
//     echo print_r($row);       // Print the entire row data
// }
// );

if(mysqli_query($con,$query)){
    echo "Data Inserted";
    // echo "$name";
}
else
{
    echo "Error";
}


}








?>
