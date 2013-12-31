describe("Valida os movimentos da rainha", function () {
    var jogo = null;
    var rainha= null;
    beforeEach(function(){
        jogo = new Jogo();
        rainha = new Rainha(Cor.BRANCA);
        jogo.init();
        Helper.limpaTabuleiro(jogo);
        jogo.tabuleiro()[2][2] = rainha;
    });

    it("Rainha deve implementar metodo move", function() {
        expect(jogo.tabuleiro()[2][2].move).not.toEqual(undefined);
    });

    it('Rainha pode mover para frente', function () {
        expect(function(){
            jogo.move([2,2], [3,2]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(rainha);
        expect(jogo.posicao(3,2)).toEqual(rainha);
    });

    it('Rainha pode mover na diagonal', function(){
        expect(function(){
            jogo.move([2,2], [3,3]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(rainha);
        expect(jogo.posicao(3,3)).toEqual(rainha);
    });

    it('Rainha pode mover para o lado', function(){
        expect(function(){
            jogo.move([2,2], [2,3]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(rainha);
        expect(jogo.posicao(2,3)).toEqual(rainha);
    });

    it('Rainha nao pode mover em L', function(){
        expect(function(){
            jogo.move([2,2], [4,3]);            
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(rainha);
        expect(jogo.posicao(4,3)).not.toEqual(rainha);
    });
});

