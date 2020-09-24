let canvas = document.getElementById('snake') // Selecina o elemente com id = snake
let context =  canvas.getContext('2d') // trata o desenho como um plano 2d
let box = 32 // tamanho de cada box

function criarBG() {
    context.fillStyle = 'lightgreen' //O fillStyle trabalha com o estilo do context
    context.fillRect(0, 0, 16 * box, 16 * box) // O fillRect criara o retangulo onde acontece o jogo
}

criarBG()