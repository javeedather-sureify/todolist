<?php

header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    header('Access-Control-Allow-Methods: *');



$username="root";
$password="password";
$server='"172.17.0.2"';
$db='crudyutube';

$con=mysqli_connect($server,$username,$password,$db);

//$recText=$_POST['signInEmail'];
//$recText1=$_POST['signInPassword'];
 
if($_SERVER["REQUEST_METHOD"]=="POST"){

// $name=$_POST['name'];
// $todoo=$_POST['items'];
$email=$_POST['email'];
// $password=$_POST['password'];

// echo "hi";
// echo "$todoo";
// echo $name;
// echo $email;
// $query="INSERT INTO todo (Email,Todo) VALUES ('$email','$todoo')";

// $query="INSERT INTO  register (Name,Email,Password) VALUES ('$name','$email','$password')";


$query="SELECT Todo from todo where Email='$email'";

$result = mysqli_query($con,$query);

// $data = mysqli_fetch_array($result);
// $json = json_encode($data);
$a=array();


while($row = mysqli_fetch_array($result)) {
    // echo $row['Todo'];// Print a single column data
    array_push($a,$row['Todo']);
    

    // echo print_r($row);       // Print the entire row data
}
// echo "$a";
// print_r($a);
$json = json_encode($a);







// $query = "SELECT `data` FROM `list` WHERE `id` = '1'";
// $result = mysqli_query($link, $query);
// $data = mysqli_fetch_array($result);


if(mysqli_query($con,$query)){
    // echo "Data Inserted";
    // echo "$name";
    echo $json;
}
else
{
    echo "Error";
}


}








?>
