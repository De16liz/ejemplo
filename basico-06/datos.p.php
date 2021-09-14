<?php

    header("Content-Type: application/json; charset=UTF-8");

    $texto = $_GET['texto'];
    $filas = "";
    $conexion = mysqli_connect( "localhost", "root", "", "datos");
    $sql = "SELECT nombre FROM datos where nombre  like '%$texto%'";
    $resultado = $conexion->query( $sql);

    $filas = $resultado->fetch_all(MYSQLI_ASSOC);
    //var_dump($filas);
    $filas = json_encode($filas);
    echo $filas;

    