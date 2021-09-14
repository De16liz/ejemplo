<?php

    header("Content-Type: application/json; charset=UTF-8");

    $texto = $_GET['texto'];
    $filas = "";
    $conexion = mysqli_connect( "localhost", "root", "", "prueba1");
    $sql = "SELECT texto FROM tb_informe ";
    $resultado = $conexion->query( $sql);

    $filas = $resultado->fetch_all(MYSQLI_ASSOC);
    var_dump($filas);
    $filas = json_encode($filas);
    echo $filas;