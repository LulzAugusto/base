var meuapp = angular.module('app', []);

meuapp.controller('AppCtrl', function($scope, UserList) {
    $scope.lista = UserList;
    $scope.userName = '';
    $scope.cadastrar = function() {
        UserList.push($scope.userName);
    };
});

meuapp.controller('ListaCtrl', function($scope, UserList){
    $scope.lista = UserList;
});

meuapp.factory('UserList', function() {
    return [];
});
