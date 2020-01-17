var myListApp = angular.module('myListApp', ['ngRoute', 'ngAnimate']);


myListApp.config(['$routeProvider', function($routeProvider){

$routeProvider
    .when('/directory', {
        templateUrl: 'views/directory.html', 
        controller: 'ListController'
    }).otherwise({
        redirectTo: '/directory'
    });

}]);

myListApp.controller('ListController', ['$scope', function($scope){

    $scope.removeItem = function(list){
    var removedItem = $scope.list.indexOf(list);
    $scope.list.splice(removedItem, 1);
    };

    $scope.addItem = function(){
        $scope.list.push({
            name: $scope.newitem.name,
            rate: parseInt($scope.newitem.price)
        });

            $scope.newitem.name ="";
            $scope.newitem.price ="";

    };

    $scope.removeAll = function(){
        $scope.list = [];

    };
    
    $scope.list = [


    ]


}]);
