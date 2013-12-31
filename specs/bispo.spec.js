describe("Valida os movimentos do Bispo", function () {
    var jogo = null;
    var bispo = null;
    beforeEach(function(){
        jogo = new Jogo();
        jogo.init();
        Helper.limpaTabuleiro(jogo);
        bispo = new Bispo(Cor.BRANCA);
        jogo.tabuleiro()[2][2] = bispo;
    });

    it("Bispo deve implementar metodo move", function() {
        expect(jogo.tabuleiro()[2][2].move).not.toEqual(undefined);
    })

    it("Bispo não pode andar em linhas retas", function() {
        expect(function(){
            jogo.move([2,2], [3,2]);
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(bispo);
        expect(jogo.posicao(3,2)).not.toEqual(bispo);
    });

    it("Pode andar na diagonal para frente", function() {
        expect(function(){
            jogo.move([2,2], [3,3]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(bispo);
        expect(jogo.posicao(3,3)).toEqual(bispo);
    });

    it("Pode andar na diagonal para tras", function() {
        expect(function(){
            jogo.move([2,2], [3,1]);            
        }).not.toThrow(); 
        expect(jogo.posicao(3,1)).toEqual(bispo);
        expect(jogo.posicao(2,2)).not.toEqual(bispo);
    })    
});
