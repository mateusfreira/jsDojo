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
}]);
JogoApp.filter('peca', function () {
    return function (item) {
    	if(item  instanceof Torre){
    		return "Torre";	
    	}else if(item  instanceof Cavalo){
    		return "Cavalo";	
    	}else  if(item  instanceof Bispo){
    		return "Bispo";	
    	}else if(item  instanceof Rei){
    		return "Rei";	
    	}else if(item  instanceof Rainha){
    		return "Rainha";	
    	}else if(item  instanceof Peao){
    		return "Peao";	
    	}else if(item.cor){
    		return "A";
    	}else{
    		return " - ";
    	}
    	
    }
});