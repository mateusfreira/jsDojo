describe("Ao iniciar o jogo", function() {
  var app = new Jogo();
  it("todos os jogadores estão empatados", function() {
  	 expect(app.time1.pontos).toEqual(app.time2.pontos);
  });
  it("todos os jogadores devem ter 0 pontos", function() {
  	 expect(app.time1.pontos).toEqual(0);
  	 expect(app.time2.pontos).toEqual(0);
  });
});
describe("Durante o jogo", function() {
  var app = new Jogo();
  it("Quanto um time faz um gol ele almente seus pontos", function() {
  	 app.gol(app.time1);
  	 expect(app.time1.pontos).toEqual(1);
  });  
});