describe("Valida os movimentos da rei", function () {
    var jogo = null;
    var rei= null;
    beforeEach(function(){
        jogo = new Jogo();
        rei = new Rei(Cor.BRANCA);
        jogo.init();
        Helper.limpaTabuleiro(jogo);
        jogo.tabuleiro()[2][2] = rei;
    });

    it("Rei deve implementar metodo move", function() {
        expect(jogo.tabuleiro()[2][2].move).not.toEqual(undefined);
    });

    it('Rei pode mover para frente', function () {
        expect(function(){
            jogo.move([2,2], [3,2]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(rei);
        expect(jogo.posicao(3,2)).toEqual(rei);
    });

    it('Rei pode mover na diagonal', function(){
        expect(function(){
            jogo.move([2,2], [3,3]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(rei);
        expect(jogo.posicao(3,3)).toEqual(rei);
    });

    it('Rei pode mover para o lado', function(){
        expect(function(){
            jogo.move([2,2], [2,3]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(rei);
        expect(jogo.posicao(2,3)).toEqual(rei);
    });

    it('Rei nao pode mover em L', function(){
        expect(function(){
            jogo.move([2,2], [4,3]);            
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(rei);
        expect(jogo.posicao(4,3)).not.toEqual(rei);
    });

    it('Rei nao pode mover duas ou mais casas', function(){
        expect(function(){
            jogo.move([2,2], [4,2]);            
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(rei);
        expect(jogo.posicao(4,2)).not.toEqual(rei);
    });


});

