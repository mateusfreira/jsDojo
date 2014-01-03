//Main class. Contains all the information about the board state.
var X = 0, Y = 1;
var Jogo = function(){ 
	//A game of chess must have a chess board.
	//It is declared as a private attribute of the class, and is treated as an 8x8 grid of pieces and nulls.
    var _tabuleiro;

	var proximaCor = Cor.BRANCA;
	//The constructor for Jogo simply creates an empty chess board.
    this.init = function() {
		//This command makes _tabuleiro an array.
        _tabuleiro = [];
		//This cycle makes the positions 0-7 of _tabuleiro arrays in themselves (thus making a grid) 
        for (var i = 0; i < 8; i++) {
            _tabuleiro[i] = [];
			
			//This cycle makes all positions in the 8x8 grid null.
            for (var j = 0; j < 8; j++) {
                _tabuleiro[i][j] = null;
            }
        }
		
		//Method used to set the chess board to its initial configuration.
		//The variable linha determines which end of the board the pieces will be placed at,
		//while the variable cor determines the color of the pieces that will be placed on the board.
		//It is necessary to call this method twice, once with linha = 0 and cor = BRANCA, 
		//and once with linha = 6 and cor = PRETA.
        var inicializa = function(linha, cor){

			//Two rooks of the chosen color are placed on the board
            _tabuleiro[linha][0] = new Torre(cor);
            _tabuleiro[linha][7] = new Torre(cor);

			//Two knights of the chosen color are placed on the board			
            _tabuleiro[linha][1] = new Cavalo(cor);
            _tabuleiro[linha][6] = new Cavalo(cor);

			//Two bishops are of the chosen color placed on the board
            _tabuleiro[linha][2] = new Bispo(cor);
            _tabuleiro[linha][5] = new Bispo(cor);

			//The king and queen of the chosen color are placed on the board.
            _tabuleiro[linha][3] = new Rainha(cor);
            _tabuleiro[linha][4] = new Rei(cor);

			//If I am setting the pieces on white's end of the board (linha == 0),
			//then I must set the pawns on that end of the board (linhaPeao == 1).
			//Else, I must set the pawns on black's end of the board (linhaPeao == 6)
            var linhaPeao = linha === 0 ? 1 : 6;

			//This cycle sets the pawns of the chosen color on the correct side of the board.
            for (i = 0; i < 8; i++) {
                _tabuleiro[linhaPeao][i] = new Peao(cor);
            }

        };

		//The method inicializa(linha,cor) is called twice after the main constructor is done executing
		//to ensure that the game starts with all the pieces in the right position.
        inicializa(0, Cor.BRANCA);
        inicializa(7, Cor.PRETA);
    };
        
    this.posicao = function(i, j, peca){
        if(i< 0 || i > 7 || j < 0 || j > 7) {
            throw new Error("Posição não existe");
        }
        if(peca !== undefined) {
            _tabuleiro[i][j] = peca;
        }
        var result = _tabuleiro[i][j];
        if(result !== null && result.cor){
            return result;
        }else{
            return null;
        }
    };

    this.tabuleiro = function(){
        return _tabuleiro;
    };

    this.move = function(posicaoInicial, posicalFinal) {
        var peca = this.posicao(posicaoInicial[X],posicaoInicial[Y]);
        var pecaDestino = this.posicao(posicalFinal[X],posicalFinal[Y]);
        var proximaCorTemp = proximaCor === Cor.BRANCA ? Cor.PRETA : Cor.BRANCA;
        if(peca === null) {
            throw new Error("Não existe peça na posicao origem.");
        }
        if(peca.cor() !== proximaCor){
            throw new Error("Esta é a jogada da cor " + proximaCor + ".");
        }
        if(pecaDestino !== null && peca.cor() === pecaDestino.cor()) {
            throw new Error("Existe uma peça da mesma cor na posição de destino.");
        }

        peca.move(posicaoInicial, posicalFinal, this);
        peca.movimentada(true);
        this.posicao(posicalFinal[X],posicalFinal[Y], peca);
        this.posicao(posicaoInicial[X],posicaoInicial[Y], null);
        proximaCor = proximaCorTemp;
    };

};
// This class isn't doing anything at the moment. It used to be the main way to identify the type of piece in a given position.
var Pecas = {
    PEAO   : "PEAO",
    TORRE  : "TORRE",
    CAVALO : "CAVALO",
    BISPO  : "BISPO",
    REI    : "REI",
    RAINHA : "RAINHA"
};

//Class which is used to store the two correct color assignments a chess piece can recieve.
var Cor  = {
    BRANCA : "BRANCA",
    PRETA : "PRETA"
};

//Class from which all other pieces inherit attributes.
function Peca(cor){
//All chess pieces have a color.
//In this case, "cor" represents that color and is a private attribute 
    var _cor = cor;
    var _movimentada = false;
	
	//a "get_" type function, .cor() returns the value of the piece's color.
    this.cor = function() {
        return _cor;
    };

    this.movimentada = function (movimentada) { 
        return _movimentada = movimentada === true ? true : _movimentada;
    };

    //funciona da esqueda p direita e cima para baixo :(
    this.verificaCaminho = function(posicaoInicial, posicaoFinal, jogo){
        var destino     = posicaoFinal.slice();
        do {            
            if(jogo.posicao(destino[X], destino[Y])){
                throw new Error("Movimento invalido");
            }
            destino[Y]      = destino[Y] > posicaoInicial[Y] ? destino[Y]-1 : posicaoInicial[Y];
            destino[X]      = destino[X] > posicaoInicial[X] ? destino[X]-1 : posicaoInicial[X];
        } while(destino[X] > posicaoInicial[X] || destino[Y] > posicaoInicial[Y])
    };
};

//Class which defines a typical chess pawn.
//TODO: 
//-Add a flag to determine if a given pawn has already moved or not. Useful for the initial movement of two spaces.

function Peao(cor){
	
	//This command makes the class "peao" inherit the attributes and methods of "peca."
	//It is used multiple times, once for each type of chess piece,
	//so that they all inherit the attributes found in "peca."
    Peca.call(this, cor);
	
	//This command calls Peca's constructor, using the value of (cor) given when creating a new Peao.
	//It is used multiple times, so that each piece has the same basic constructor.
    

    var validaMovimentoCor = function(posicaoInicial, posicaoFinal, destino){
        var mesmoY = posicaoFinal[Y] === posicaoInicial[Y];
        var validoX;
        var distanciaMaxima = this.movimentada() ? 1 : 2;
        var distancia = posicaoFinal[X] - posicaoInicial[X];
        if(this.cor() === Cor.BRANCA){
            validoX = (distancia <= distanciaMaxima);
        } else {
            validoX = (distancia >= -distanciaMaxima && distancia < 0);
            distancia = Math.abs(distancia);
        }
        return validoX && mesmoY && distancia > 0 && !destino;
    };

    validaMovimentoCor = validaMovimentoCor.bind(this);

    this.move = function(posicaoInicial, posicaoFinal, jogo){
        var validoParaFrente = validaMovimentoCor(posicaoInicial, posicaoFinal, jogo.posicao(posicaoFinal[X], posicaoFinal[Y]));
        
        var validoDiagonal = (((posicaoFinal[X] - posicaoInicial[X]) === 1) && ((posicaoFinal[Y]-posicaoInicial[Y]) === 1) && (jogo.posicao(posicaoFinal[X], posicaoFinal[Y]) !== null) );
        if(!validoDiagonal && !validoParaFrente){
            throw new Error("Movimento invalido");
        }
    };
};

//This command makes "peao" a son of "peca," but it DOES NOT make it inherit any attributes or methods.
//Peao.prototype = Peca;

//Class which defines a typical chess rook.
//TODO:
//Besides the regular movement rules, some sort of flag is necesarry to determine if a rook has moved
//in order to determine if a Castling move can be made. It might be better to have the flag be an attribute of the chess board itself
//(see observations below)
function Torre(cor){
    Peca.call(this, cor);
    

    this.move = function(posicaoInicial, posicaoFinal, jogo){
        if(posicaoInicial[X] !== posicaoFinal[X] && posicaoInicial[Y] !== posicaoFinal[Y]){
            throw new Error('Movimento invalido');
        }
        
    };
};

//Torre.prototype = Peca;

//Class which defines a typical chess knight
function Cavalo(cor){
    Peca.call(this, cor);
    
};

//Cavalo.prototype = Peca;

//Class which defines a typical chess bishop.
function Bispo(cor){
    Peca.call(this, cor);
    
    this.move = function(posicaoInicial, posicaoFinal, jogo){
        if(Math.abs(posicaoInicial[X] - posicaoFinal[X]) !== Math.abs(posicaoInicial[Y] - posicaoFinal[Y])){
            throw new Error('Movimento invalido');
        }
        
    };
};

//Bispo.prototype = Peca;

//Class which defines a typical chess queen.
function Rainha(cor){
    Peca.call(this, cor);
    

    this.move = function(posicaoInicial, posicaoFinal, jogo){
        var movimentoHorizontalValido = (posicaoInicial[X] === posicaoFinal[X] || posicaoInicial[Y] === posicaoFinal[Y]), 
            movimentoDiagonalValido = (Math.abs(posicaoInicial[X] - posicaoFinal[X]) === Math.abs(posicaoInicial[Y] - posicaoFinal[Y]));
        if(!(movimentoDiagonalValido || movimentoHorizontalValido)){
            throw new Error('Movimento invalido!');
        }
                
    };
};

//Rainha.prototype = Peca;

//Class which defines a typical chess king.
function Rei(cor){
    Peca.call(this, cor);
    
    this.move = function(posicaoInicial, posicaoFinal, jogo){
        var movimentoXmenorQueDois = (Math.abs(posicaoFinal[X] - posicaoInicial[X]) <= 1 && Math.abs(posicaoFinal[Y] - posicaoInicial[Y]) <= 1);
        if(!movimentoXmenorQueDois) {
            throw new Error('Movimento invalido!');
        }
        
    };
};

//Rei.prototype = Peca;

//Observations:
//Handling of two special moves (Castling and En Passant capturing) might be made easier by the use of multiple flags related to
//the current board state. This might suggest changing the board from being a relatively simple 8x8 grid of pieces and nulls to
//being its own class with its own methods and attributes.

