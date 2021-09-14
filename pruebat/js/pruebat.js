var app = angular.module( "appdeimi", [] );

app.controller( "controlador", 

    [ "$scope", "$http", //inyeccion de dependecias.

        function( $scope, $http ){ //----------máxima---------------

            $scope.cargar_datos = function()
            {
                var lin = 'datos.p.php?texto=' + $scope.texto;
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