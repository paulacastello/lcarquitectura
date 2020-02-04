<?php  
$nombre=$_POST['name'];
$email=$_POST['email']; 
$asunto=$_POST['subject'];
$mensaje=$_POST['message']; 


$subject="Contacto desde ArquitecturaLC";
$to="pau.pali22@gmail.com" . ",";
// $to .= "";
$mailheaders="ArquitecturaLC";
$msg="Nombre: ".$nombre."\nEmail: ".$email."\nAsunto: ".$asunto."\nMensaje: ".$mensaje;

mail($to,$subject,$msg,$mailheaders);

header("Location:../gracias.html");

?>