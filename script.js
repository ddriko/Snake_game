let canvas = document.getElementById('snake') // Selecina o elemente com id = snake
let context =  canvas.getContext('2d') // trata o desenho como um plano 2d
let box = 32 // tamanho de cada box
let snake = [] 
snake[0] = {
    y: 8 * box,
    x: 8 * box
}
let direction = 'right'
let apple = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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

// Função que cria a "Maçã"
function drawapple() {
    context.fillStyle = 'red'
    context.fillRect(apple.x, apple.y, box, box)
}


document.addEventListener('keydown', update) // Adiciona evento de seleção de teclas  

function update (event) {
    if(event.keyCode == 37 && direction != 'right') direction = 'left'
    if(event.keyCode == 38 && direction != 'down') direction = 'up'
    if(event.keyCode == 39 && direction != 'left') direction = 'right'
    if(event.keyCode == 40 && direction != 'up') direction = 'down'
}

function iniciarJogo() {
    // Esse trecho define a nova posição da cobinha caso chegue aos limites do retangulo
    // evitando que a cobrinha suma 
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 0


    criarBG()
    criarSnake()
    drawapple()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == 'right') snakeX += box
    if(direction =='left') snakeX -= box
    if(direction =='up') snakeY -= box
    if(direction =='down') snakeY += box

    if(snakeX != apple.x || snakeY != apple.y) {
        snake.pop() // Elimina o ultimo elemento do array 
    } else {
        apple.x = Math.floor(Math.random() * 15 + 1) * box,
        apple.y = Math.floor(Math.random() * 15 + 1) * box
    }


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead) // 
 }

let jogo = setInterval(iniciarJogo, 200)
