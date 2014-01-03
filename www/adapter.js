
var JogoApp = angular.module('JogoApp', []);

JogoApp.controller('JogoCtrl', ['$scope', function ($scope) {
    var jogo = new Jogo();
    var movimento = [];
    jogo.init();
    $scope.tabuleiro = jogo.tabuleiro();
    $scope.move = function(lugar){
        movimento.push(lugar);
        if(movimento.length == 2){
            try{
                jogo.move(movimento[0], movimento[1]);
            }catch(e){
                alert(e);
            }           
            movimento = [];
        }
        console.log(lugar);
    };

    $scope.getEvenClass = function(i){
        return i % 2 === 0 ? 'preto' : 'branco';
    };

    $scope.getOddClass = function(i){
        return i % 2 !== 0 ? 'preto' : 'branco';
    };
}]);

JogoApp.filter('peca', function () {
    return function (item) {
        return item ? item.constructor.name : "";
    }
});