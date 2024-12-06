(function () {
    'use strict';

    angular.module('LunchCheck1',[])

    .controller('LunchCheckCont',LunchController);
    LunchController.$inject=['$scope'];
    function LunchController($scope){
        const comma=","
       var arrofstr=$scope.name=split(comma);
       return arrofstr.length
    }
    $scope.check=function(){
       if(arrofstr<=3){
        $scope.massege="enjoy"
       }
       else{
        $scope.massege="too much"
       }
    }
})();