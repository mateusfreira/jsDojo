var Jogo = function(){
    var _tabuleiro;
    this.init = function() {
        _tabuleiro = [];
        for (var i = 0; i < 8; i++) {
            _tabuleiro[i] = [];
            for (var j = 0; j < 8; j++) {
                _tabuleiro[i][j] = null;
            }
        }
        var inicializa = function(linha, cor){

            _tabuleiro[linha][0] = new Torre(cor);
            _tabuleiro[linha][7] = new Torre(cor);

            _tabuleiro[linha][1] = new Cavalo(cor);
            _tabuleiro[linha][6] = new Cavalo(cor); 

            _tabuleiro[linha][2] = new Bispo(cor);
            _tabuleiro[linha][5] = new Bispo(cor);

            _tabuleiro[linha][3] = new Rainha(cor);
            _tabuleiro[linha][4] = new Rei(cor);

            var linhaPeao = linha === 0 ? 1 : 6;

            for (i = 0; i < 8; i++) {
                _tabuleiro[linhaPeao][i] = new Peao(cor);
            }   
                
        };
        
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

var Pecas = {
    PEAO   : "PEAO",
    TORRE  : "TORRE",
    CAVALO : "CAVALO",
    BISPO  : "BISPO",
    REI    : "REI",
    RAINHA : "RAINHA"
};

var Cor  = {
    BRANCA : "BRANCA",
    PRETA : "PRETA"
};

var Peca = function(){
    var _cor;
    this.init = function(cor){
        _cor = cor;
    };
    this.cor = function() {
        return _cor;
    };
};

var Peao = function(cor){
    Peca.call(this);
    this.init(cor);
};

Peao.prototype = Peca;

var Torre = function(cor){
    Peca.call(this);
    this.init(cor);
};

Torre.prototype = Peca;

var Cavalo = function(cor){
    Peca.call(this);
    this.init(cor);
};

Cavalo.prototype = Peca;

var Torre = function(cor){
    Peca.call(this);
    this.init(cor);
};

Torre.prototype = Peca;

var Bispo = function(cor){
    Peca.call(this);
    this.init(cor);
};

Bispo.prototype = Peca;

var Rainha = function(cor){
    Peca.call(this);
    this.init(cor);
};

Rainha.prototype = Peca;

var Rei = function(cor){
    Peca.call(this);
    this.init(cor);
};

Rei.prototype = Peca;
