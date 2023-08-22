<?php
include("Conexion.php");
$id=$_POST["ID"];
$mascota=$_POST["Mascota"];
$registrar="insert into mascota values ('$id', '$mascota')";
$consulta=mysqli_query($conexion,$registrar);

?>