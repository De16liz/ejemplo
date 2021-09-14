var app = angular.module( "appdeimi", [] );

app.controller( "controlador", 

    [ "$scope", "$http", //inyeccion de dependecias.

        function( $scope, $http ){ //----------máxima---------------

            $scope.cargar_datos = function()
            {
                var lin = 'datos.php?mivalor=' + $scope.mitexto + '&in=' + $scope.inicio + '&fn=' + $scope.final;
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