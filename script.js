let canvas = document.getElementById('snake') // Selecina o elemente com id = snake
let context =  canvas.getContext('2d') // trata o desenho como um plano 2d
let box = 32 // tamanho de cada box
let snake = [] 
snake[0] = {
    y: 8 * box,
    x: 8 * box
}
let direction = 'right'

// Função que cria o plano de fundo do jogo 
function criarBG() {
    context.fillStyle = 'lightgreen' //O fillStyle trabalha com o estilo do context
    context.fillRect(0, 0, 16 * box, 16 * box) // O fillRect criara o retangulo onde acontece o jogo
}

// Função que cria a snake 
function criarSnake() {
    for (let i =0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function iniciarJogo() {
    criarBG()
    criarSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box
    if(direction =='left') snakeX -= box
    if(direction =='up') snakeY -= box
    if(direction =='down') snakeY += box

    snake.pop()

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
 }

let jogo = setInterval(iniciarJogo, 300)