describe("Valida os movimentos da peao", function () {
    var jogo = null;
    var peao= null;
    beforeEach(function(){
        jogo = new Jogo();
        peao = new Peao(Cor.BRANCA);
        jogo.init();
        Helper.limpaTabuleiro(jogo);
        jogo.tabuleiro()[2][2] = peao;
    });

    it("Peao deve implementar metodo move", function() {
        expect(jogo.tabuleiro()[2][2].move).not.toEqual(undefined);
    });

    it('Peao pode mover para frente', function () {
        expect(function(){
            jogo.move([2,2], [3,2]);            
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(peao);
        expect(jogo.posicao(3,2)).toEqual(peao);
    });

    it('Peao pode mover na diagonal se houver uma peca de outra cor lá', function(){
        jogo.posicao(3,3, new Torre(Cor.PRETA));
        expect(function(){
            jogo.move([2,2], [3,3]);
        }).not.toThrow();
        expect(jogo.posicao(2,2)).not.toEqual(peao);
        expect(jogo.posicao(3,3)).toEqual(peao);
    });

    it('Peao pode não pode se mover na diagonal se houver não peca houver outra peca de cor digerente lá', function(){
        expect(function(){
            jogo.move([2,2], [3,3]);
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(peao);
    });

    it('Peao pode não mover para o lado', function(){
        expect(function(){
            jogo.move([2,2], [2,3]); 
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(peao);
        expect(jogo.posicao(2,3)).not.toEqual(peao);
    });

    it('Peao pode mover duas casas se nao tiver movido', function(){
        expect(function(){
            jogo.move([2,2], [4,2]);
        }).not.toThrow();
        expect(jogo.posicao(4,2)).toEqual(peao);
        expect(jogo.posicao(2,2)).not.toEqual(peao);
    });

    it('Peao nao pode mover duas ou mais casas', function(){
        expect(function(){
            jogo.move([2,2], [5,2]);            
        }).toThrow();
        expect(jogo.posicao(2,2)).toEqual(peao);
        expect(jogo.posicao(4,2)).not.toEqual(peao);
    });


});

