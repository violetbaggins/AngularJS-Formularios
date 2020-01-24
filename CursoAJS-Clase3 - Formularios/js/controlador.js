angular.module('miApp',[])
.controller('miCtrl', function($scope) {
    /* ----------- */
    /* PROPIEDADES */
    /* ----------- */
    $scope.mensaje = "AngularJS - Controlador 1"

    $scope.formu = {}
    $scope.formuError = false
    $scope.formuSend = false

    /* METODOS */
    $scope.enviar = function(){

        $scope.formuSend = true
        $scope.formuError = false
            if($scope.formulario.$invalid){
                $scope.formuError = true
            }else{
                console.log($scope.formu)
                $scope.formu = {}
                $scope.formulario.$setPristine()
                $scope.formulario.$setUntouched()
            }    
    

    }
})