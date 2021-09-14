window.onload = function()
{
    //Se carga una funcion angular desde el inicio
    angular.element( document.getElementById( 'texto-cargar' ) ).scope().cargar_datos();

    //llamado a la otra aplicacion
    angular.element( document.getElementById( 'texto-cargar' ) ).scope().otra_funcion();
}

var app = angular.module( "appdeimi", [] );

app.controller( "controlador", 

    [ "$scope", "$http", //inyeccion de dependecias.

        function( $scope, $http ){ //----------máxima---------------

            $scope.cargar_datos = function()
            {
                console.log(lin);
                var lin = 'misdatos.php?texto=' + $scope.texto;
               // console.log(lin);  
                $http.get( lin ).then( //-----------datos--------

                    
                function( response )
                    {
                        $scope.informacion = response.data;
                        //console.log( $scope.informacion);
                        //console.log( $scope.texto );

                    }

                );//--------fin datos---
            }

           
        } //--------fin máxima
    ]
);