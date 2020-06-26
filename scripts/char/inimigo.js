class Inimigo extends animacao {
    constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite)
        this.velocidade = 3;
    }

    moving(){
        this.x -= this.velocidade;
        if (this.x < -this.largura){
            this.x = width;
        }
    }
}