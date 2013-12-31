describe("Valida o tabuleiro e a existencia das peças", function() {
  var jogo = new Jogo();
  jogo.init();
  
	//This ensures that the board has the proper dimensions.
    it("O tabuleiro deve ter 64 casas 8X8", function() {
        expect(jogo.tabuleiro().length).toEqual(8);
        for(var i=0; i<8; i++){
            expect(jogo.tabuleiro()[i].length).toEqual(8);
        }
    });
	
	//These make sure each chess piece has a color and is either "BRANCA" or "PRETA"
    it("class peao deve manter a cor", function() {
        var preto = new Peao(Cor.PRETA);
        expect(preto.cor()).toEqual(Cor.PRETA);
        var branco = new Peao(Cor.BRANCA);
        expect(branco.cor()).toEqual(Cor.BRANCA);
    });
    it("class torre deve manter a cor", function() {
        var preto = new Torre(Cor.PRETA);
        expect(preto.cor()).toEqual(Cor.PRETA);
        var branco = new Torre(Cor.BRANCA);
        expect(branco.cor()).toEqual(Cor.BRANCA);
    });

     it("class cavalo deve manter a cor", function() {
        var preto = new Cavalo(Cor.PRETA);
        expect(preto.cor()).toEqual(Cor.PRETA);
        var branco = new Cavalo(Cor.BRANCA);
        expect(branco.cor()).toEqual(Cor.BRANCA);
    });
    it("class bispo deve manter a cor", function() {
        var preto = new Bispo(Cor.PRETA);
        expect(preto.cor()).toEqual(Cor.PRETA);
        var branco = new Bispo(Cor.BRANCA);
        expect(branco.cor()).toEqual(Cor.BRANCA);
    });
    it("class rainha deve manter a cor", function() {
        var preto = new Rainha(Cor.PRETA);
        expect(preto.cor()).toEqual(Cor.PRETA);
        var branco = new Rainha(Cor.BRANCA);
        expect(branco.cor()).toEqual(Cor.BRANCA);
    });
    it("class rei deve manter a cor", function() {
        var preto = new Rei(Cor.PRETA);
        expect(preto.cor()).toEqual(Cor.PRETA);
        var branco = new Rei(Cor.BRANCA);
        expect(branco.cor()).toEqual(Cor.BRANCA);
    });
});

describe("No inicio do jogo valida as posições inicias das peças.", function() {
    var jogo;
    beforeEach(function() {
        jogo = new Jogo();
        jogo.init();
    });
	
	//These ensure that the white rooks are in their proper starting positions
    it("valida posicao A1 (0, 0), que deve conter uma torre branca", function() {
        peca = jogo.posicao(0,0);
        expect(peca instanceof Torre).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });

    it("valida posicao H1 (0, 7), que deve conter uma torre branca", function() {
        peca = jogo.posicao(0,7);
        expect(peca instanceof Torre).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });

	//These ensure that the white knights are in their proper starting positions	
    it("valida posicao B1 (0, 1), que deve conter uma CAVALO branca", function() {
        peca = jogo.posicao(0,1);
        expect(peca instanceof Cavalo).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });
    it("valida posicao G1 (0, 6), que deve conter uma cavalo branca", function() {
        peca = jogo.posicao(0,6);
        expect(peca instanceof Cavalo).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });

	//These ensure that the white bishops are in their proper starting positions
    it("valida posicao C1 (0, 2), que deve conter uma bispo branca", function() {
        peca = jogo.posicao(0,2);
        expect(peca instanceof Bispo).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });    
    it("valida posicao F1 (0, 5), que deve conter uma bispo branca", function() {
        peca = jogo.posicao(0,5);
        expect(peca instanceof Bispo).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });
	
	//These ensure that the white King and Queen are in their proper starting positions
    it("valida posicao D1 (0, 3), que deve conter uma rainha branca", function() {
        peca = jogo.posicao(0,3);
        expect(peca instanceof Rainha).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });
    it("valida posicao E1 (0, 4), que deve conter uma rei branca", function() {
        peca = jogo.posicao(0,4);
        expect(peca instanceof Rei).toBe(true);
        expect(peca.cor()).toBe(Cor.BRANCA);
    });
	
	//This ensures that the white pawns are in their proper starting positions.
    it("valida as posições dos peões brancos", function() {
        for (var i = 0; i < 8; i++) {
            peca = jogo.posicao(1,i);
            expect(peca instanceof Peao).toBe(true);
            expect(peca.cor()).toBe(Cor.BRANCA);
        }
    });

	//These ensure that the black rooks are in their proper starting positions
    it("valida posicao A8 (7, 0), que deve conter uma torre preta", function() {
        peca = jogo.posicao(7,0);
        expect(peca instanceof Torre).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });

    it("valida posicao H8 (7, 7), que deve conter uma torre preta", function() {
        peca = jogo.posicao(7,7);
        expect(peca instanceof Torre).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });

	//These ensure that the black knights are in their proper starting positions
    it("valida posicao B8 (7, 1), que deve conter uma CAVALO preta", function() {
        peca = jogo.posicao(7,1);
        expect(peca instanceof Cavalo).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });
    it("valida posicao G8 (7, 6), que deve conter uma cavalo preta", function() {
        peca = jogo.posicao(7,6);
        expect(peca instanceof Cavalo).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });
	
	//These ensure that the black bishops are in their proper starting positions
    it("valida posicao C8 (7, 2), que deve conter uma bispo preta", function() {
        peca = jogo.posicao(7,2);
        expect(peca instanceof Bispo).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });    
    it("valida posicao F8 (7, 5), que deve conter uma bispo preta", function() {
        peca = jogo.posicao(7,5);
        expect(peca instanceof Bispo).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });
	
	//These ensure that the black King and Queen are in their proper starting positions
    it("valida posicao D8 (7, 3), que deve conter uma rainha preta", function() {
        peca = jogo.posicao(7,3);
        expect(peca instanceof Rainha).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });
    it("valida posicao E8 (7, 4), que deve conter uma rei preta", function() {
        peca = jogo.posicao(7,4);
        expect(peca instanceof Rei).toBe(true);
        expect(peca.cor()).toBe(Cor.PRETA);
    });
	
	//These ensure that the black pawns are in their proper starting positions
    it("valida as posições dos peões pretos", function() {
        for (var i = 0; i < 8; i++) {
            peca = jogo.posicao(6,i);

            expect(peca.cor()).toBe(Cor.PRETA);
        }
    });
	
    it('O metodo posicao pode setar o novo objeto de peça', function () {
        Helper.limpaTabuleiro(jogo);
        var peca = new Peao(Cor.PRETA);
        jogo.posicao(2,2, peca);
        expect(jogo.posicao(2,2)).toBe(peca); 
    });

	//This ensures that all other positions in the board are empty.
    it("Valida as posicoes Vazia", function(){
       for (var i = 2; i < 6; i++) {
            for (var j = 0; j < 8; j++) {
                peca = jogo.posicao(i,j);
                expect(peca).toBe(null);
            }
        } 
    });

});

describe('Durante o jogo ', function () {
    var jogo = null;
    beforeEach(function(){
        jogo = new Jogo();
        jogo.init();
    });

    it('Não posso mover uma posição sem peças', function() {
        Helper.limpaTabuleiro(jogo);
        expect(function(){jogo.move([3,3], [4,4]);}).toThrow();
    });

    it('Jogo precisa implementar metodo move ', function() {
        expect(jogo.move).not.toEqual(undefined);
    });

    it('Não posso mover para uma posição fora do tabuleiro', function() {
        Helper.limpaTabuleiro(jogo);
        jogo.posicao(2,2, new Peao(Cor.BRANCA));
        jogo.posicao(3,2, new Rainha(Cor.BRANCA));
        expect(function(){jogo.move([3,2], [8,2]);}).toThrow();
    });    
    it('nao pode pegar uma peça em uma posição que nao existe', function () {
        expect(function(){jogo.posicao(7,8)}).toThrow();
        expect(function(){jogo.posicao(8,7)}).toThrow();
        expect(function(){jogo.posicao(8,8)}).toThrow();
        expect(function(){jogo.posicao(-7,-8)}).toThrow();

    });
     it('Nao posse mover para uma posicao onde tenha uma peca da mesmo cor que a peca de origem', function() {
        Helper.limpaTabuleiro(jogo);
        jogo.posicao(2,2, new Peao(Cor.BRANCA));
        jogo.posicao(3,2, new Rainha(Cor.BRANCA));
        expect(function(){jogo.move([2,2], [3,2]);}).toThrow();
    });

    it('Nao pode mover para a origem', function () {
        Helper.limpaTabuleiro(jogo);
        jogo.tabuleiro()[2][2] = new Torre(Cor.BRANCA);                
        expect(function(){
            jogo.move([2,2],[2,2]);            
        }).toThrow();       
    });

    it('Uma peça antes de mover deve ter sua flag movimentada falta', function () {
        Helper.limpaTabuleiro(jogo);
        var rei = new Rei(Cor.BRANCA);
        jogo.posicao(2,2, rei);
        expect(rei.movimentada()).toEqual(false);
    })

    it('Uma peça apos mover deve ter sua flag movimentada atualizada', function () {
        Helper.limpaTabuleiro(jogo);
        var rei = new Rei(Cor.BRANCA);
        jogo.posicao(2,2, rei);
        jogo.move([2,2], [3,3]),
        expect(rei.movimentada()).toEqual(true);
    })
});

