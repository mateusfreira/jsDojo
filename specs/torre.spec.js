describe("Valida os movimentos do Torre", function () {
    var jogo  = null;
    var torre = null;
    beforeEach(function(){
        jogo = new Jogo();
        torre = new Torre(Cor.BRANCA);
        jogo.init();
        Helper.limpaTabuleiro(jogo);
        jogo.tabuleiro()[2][2] = torre;
    });

    it("Torre deve implementar metodo move", function() {
        expect(jogo.tabuleiro()[2][2].move).not.toEqual(undefined);
    })

    it('Torre pode mover para frente', function () {

        expect(function(){
            jogo.move([2,2], [3,2]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(torre);
        expect(jogo.posicao(3,2)).toEqual(torre);
    });
    it('Torre nao pode mover na diagonal', function(){
        expect(function(){
            jogo.move([2,2], [3,3]);            
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(torre);
        expect(jogo.posicao(3,2)).not.toEqual(torre);
    })
});