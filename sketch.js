let imgCenario;
let imgPersonagem;
let mscTheme;

let cenario;
let personagem;

function preload() {
    imgCenario = loadImage('assets/imagens/cenario/floresta.png');
    imgPersonagem = loadImage('assets/imagens/personagem/correndo.png');
    mscTheme = loadSound('assets/sons/trilha_jogo.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    cenario = new Cenario(imgCenario, 3);
    personagem = new Personagem(imgPersonagem);

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



    // circle(mouseX, mouseY, 200);
    // console.log("draw"); // similar ao update das engines do C#
}