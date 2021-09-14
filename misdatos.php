<?php

    header("Content-Type: application/json; charset=UTF-8");
 
    $texto = "" ;
    $renglon = "";

    if(isset( $_GET[ 'mivalor' ] )) $n = $_GET[ 'mivalor' ];

    $conexion = mysqli_connect( "localhost", "root", "", "datos");
    $sql = "SELECT nombre FROM datos";
    if(  $texto != "" &&  $texto != "undefined" ) $sql .= "where nombre  like '%$texto%'";

    $resultado = $conexion->query( $sql);

    $filas = $resultado->fetch_all(MYSQLI_ASSOC);
    //var_dump($filas);
    $filas = json_encode($filas);
    echo $filas;