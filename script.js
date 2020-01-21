let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //....
let box = 32;

let snake = []; 
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//inicia o canvas
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // desenha o retangulo onde ocorrera o jogo
}
//criar cobrinha
function criarCobrinha(){
    for(let i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// usando o evento do teclado para chamar a function update
document.addEventListener("keydown", update);

function update(event){

    if(event.keyCode == 37 && direction != "right"){
        direction = "left";
    }
    else if(event.keyCode == 38 && direction != "down"){
        direction = "up";
    }
    else if(event.keyCode == 39 && direction != "left"){
        direction = "right";
    }
    else if(event.keyCode == 40 && direction != "up"){
        direction = "down";
    }
}

function iniciarJogo(){

    // a posição snake 0 é a cabeça da cobrinha
    if(snake[0].x > 15 * box && direction == "right"){
        snake[0].x = 0;
    }
    else if(snake[0].x < 0 && direction == "left"){
        snake[0].x = 16 * box;
    }
    if(snake[0].y > 15 * box && direction == "down"){
        snake[0].y = 0;
    }
    else if(snake[0].y < 0 && direction == "up"){
        snake[0].y = 16 * box;
    }
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    if(direction == "right"){
        snakeX += box;
    }
    else if(direction == "left"){
        snakeX -= box;
    }
    else if(direction == "up"){
        snakeY -= box;
    }
    else if(direction == "down"){
        snakeY += box;
    }

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

// a cada 100 milisegundos a função iniciar jogo é chamada novamente
let jogo = setInterval(iniciarJogo, 100);
