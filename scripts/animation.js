class animacao {
    constructor(matriz, imagem, x, y,  largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.imagem = imagem;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frame = 0 
    }

    exibe() {
      image(this.imagem, this.x, this.y , this.largura, this.altura, 
        this.matriz[this.frame][0], this.matriz[this.frame][1], this.larguraSprite, this.alturaSprite);
      this.running();
  }

  running() {
      this.frame += 1;
      if (this.frame >= this.matriz.length - 1) {
          this.frame = 0;
      }
  }
}