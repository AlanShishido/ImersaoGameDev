let imgCenario;
let imgPersonagem;
let imgInimigo;
let mscTheme;

let cenario;
let personagem;
let inimigo;

const matrizPersonagem = [
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
const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 416],
    [104, 416],
    [208, 416],
    [312, 416],
    [0, 520],
    [104, 520],
    [208, 520],
    [312, 520],
    [0, 624],
    [104, 624],
    [208, 624],
    [312, 624],
]

function preload() {
    imgCenario = loadImage('assets/imagens/cenario/floresta.png');
    imgPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    imgInimigo = loadImage('assets/imagens/inimigos/gotinha.png');

    mscTheme = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    cenario = new Cenario(imgCenario, 3);
    personagem = new Personagem(matrizPersonagem, imgPersonagem, 0, 110, 135, 220, 270);
    inimigo = new Inimigo(matrizInimigo, imgInimigo, width - 52, 52, 52, 104, 104, 3);
    frameRate(30);
    // mscTheme.play();
    // mscTheme.loop();

    // console.log("setup"); // similar ao start das engines do C#
}

function draw() {
    // background(220);
    // background(imgCenario)
    cenario.exibe();
    cenario.move();


    personagem.exibe();

    inimigo.exibe();
    inimigo.moving();



    // circle(mouseX, mouseY, 200);
    // console.log("draw"); // similar ao update das engines do C#
}