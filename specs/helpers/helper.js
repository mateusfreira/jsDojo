Helper = {
	limpaTabuleiro : function (jogo) {
		var tabuleiro = jogo.tabuleiro();
		for(var i =0 ; i < 8; i++){
			for(var j = 0 ; j <8; j++){
				tabuleiro[i][j] = null;
			}
		}
	}
}