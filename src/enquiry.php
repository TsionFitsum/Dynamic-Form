<?php
header("Access-Control-Allow-Origin: *");
$conn = new mysqli("localhost","dbo","","Al_Impex_Interview_DB");

if(mysqli_connect_error()){
    echo('error');
    exit();
}else{
    $fullname = $_POST["Firstname"];
    $phoneNo = $_POST["phoneNo"];
    $questions = $_POST["questions"];

    $sql = "INSERT INTO interview[Fullname,phoneNo,question,answer] VALUES('$fullname', '($phoneNo)', '( $questions)', '( $questions)'" ; 
    $res = mysqli_query($conn,$sql);

    if($res){
        echo("succes");

}else {
    echo("Error");
}
$conn->close();
}
?>