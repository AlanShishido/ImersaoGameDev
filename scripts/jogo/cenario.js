class Cenario {
    constructor(imagem, velocity) {
        this.imagem = imagem;
        this.velocity = velocity;
        this.x1 = 0;
        this.x2 = width;
    }
    exibe() {
        image(this.imagem, this.x1, 0, width, height)
        image(this.imagem, this.x2, 0, width, height)
    }

    move() {
        this.x1 = this.x1 - this.velocity;
        this.x2 = this.x2 - this.velocity;

        if (this.x1 < -width) {
            this.x1 = width;
        }
        if (this.x2 < -width) {
            this.x2 = width;
        }
    }
}