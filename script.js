let canvas = document.getElementById('snake') // Selecina o elemente com id = snake
let context =  canvas.getContext('2d') // trata o desenho como um plano 2d
let box = 32 // tamanho de cada box
let snake = [] 
snake[0] = {
    y: 8 * box,
    x: 8 * box
}

function criarBG() {
    context.fillStyle = 'lightgreen' //O fillStyle trabalha com o estilo do context
    context.fillRect(0, 0, 16 * box, 16 * box) // O fillRect criara o retangulo onde acontece o jogo
}

function criarSnake() {
    for (let i =0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBG()
criarSnake()