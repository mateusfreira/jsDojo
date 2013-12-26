//Main class. Contains all the information about the board state.
var Jogo = function(){
	//A game of chess must have a chess board.
	//It is declared as a private attribute of the class, and is treated as an 8x8 grid of pieces and nulls.
    var _tabuleiro;
	
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
    this.posicao = function(i, j){
        return _tabuleiro[i][j];
    };

    this.tabuleiro = function(){
        return _tabuleiro;
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
var Peca = function(){
//All chess pieces have a color.
//In this case, "cor" represents that color and is a private attribute 
    var _cor;
	
	//The constructor (init) needs to recieve a color (cor) as a parameter.
	//It then assigns the value of cor to _cor.
    this.init = function(cor){
        _cor = cor;
    };
	
	//a "get_" type function, .cor() returns the value of the piece's color.
    this.cor = function() {
        return _cor;
    };
};

//Class which defines a typical chess pawn.
//TODO: 
//-Add a flag to determine if a given pawn has already moved or not. Useful for the initial movement of two spaces.

var Peao = function(cor){
	
	//This command makes the class "peao" inherit the attributes and methods of "peca."
	//It is used multiple times, once for each type of chess piece,
	//so that they all inherit the attributes found in "peca."
    Peca.call(this);
	
	//This command calls Peca's constructor, using the value of (cor) given when creating a new Peao.
	//It is used multiple times, so that each piece has the same basic constructor.
    this.init(cor);
};

//This command makes "peao" a son of "peca," but it DOES NOT make it inherit any attributes or methods.
Peao.prototype = Peca;

//Class which defines a typical chess rook.
//TODO:
//Besides the regular movement rules, some sort of flag is necesarry to determine if a rook has moved
//in order to determine if a Castling move can be made. It might be better to have the flag be an attribute of the chess board itself
//(see observations below)
var Torre = function(cor){
    Peca.call(this);
    this.init(cor);
};

Torre.prototype = Peca;

//Class which defines a typical chess knight
var Cavalo = function(cor){
    Peca.call(this);
    this.init(cor);
};

Cavalo.prototype = Peca;

//Class which defines a typical chess bishop.
var Bispo = function(cor){
    Peca.call(this);
    this.init(cor);
};

Bispo.prototype = Peca;

//Class which defines a typical chess queen.
var Rainha = function(cor){
    Peca.call(this);
    this.init(cor);
};

Rainha.prototype = Peca;

//Class which defines a typical chess king.
var Rei = function(cor){
    Peca.call(this);
    this.init(cor);
};

Rei.prototype = Peca;

//Observations:
//Handling of two special moves (Castling and En Passant capturing) might be made easier by the use of multiple flags related to
//the current board state. This might suggest changing the board from being a relatively simple 8x8 grid of pieces and nulls to
//being its own class with its own methods and attributes.