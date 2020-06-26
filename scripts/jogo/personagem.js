class Personagem {
    constructor(imagem) {
        this.imagem = imagem;
        this.matrizSprite = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
        ]
        this.nextSprite = 0
    }
    exibe() {
        image(imgPersonagem, 0, height - 135, 110, 135, this.matrizSprite[this.nextSprite][0], this.matrizSprite[this.nextSprite][1], 220, 270);
        this.running();
    }

    running() {
        this.nextSprite += 1;
        if (this.nextSprite >= this.matrizSprite.length - 1) {
            this.nextSprite = 0;
        }
    }
}