$(document).ready(function(){
  const cellSize = 10;
  const cols = 40; // 400px / 10px
  const rows = 60; // 600px / 10px
  let snake = [];
  let direction = {x: 1, y: 0}; 
  let apple = {};
  let gameInterval;
  let gameSpeed = 150;
  let running = false;

  function initGame(){
    snake = [{x: Math.floor(cols/2), y: Math.floor(rows/2)}]; // Posición inicial en el centro
    direction = {x: 1, y: 0};
    generateApple();
    $("#gameOver").hide();
    $("#restartBtn").hide();
    clearInterval(gameInterval);
    running = true;
    gameInterval = setInterval(gameLoop, gameSpeed);
    render();
  }

  function gameLoop(){
    let newHead = {
      x: snake[snake.length - 1].x + direction.x,
      y: snake[snake.length - 1].y + direction.y
    };

    // Verificar colisión con los bordes
    if(newHead.x < 0 || newHead.x >= cols || newHead.y < 0 || newHead.y >= rows){
      return gameOver();
    }

    // Verificar si se muerde a sí misma
    if(snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)){
      return gameOver();
    }

    snake.push(newHead);

    // Si la serpiente come la manzana, generar una nueva
    if(newHead.x === apple.x && newHead.y === apple.y){
      generateApple();
    } else {
      snake.shift(); // Mueve la serpiente eliminando la cola
    }

    render();
  }

  function generateApple(){
    let valid = false;
    while(!valid){
      let newApple = {
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows)
      };
      if(!snake.some(segment => segment.x === newApple.x && segment.y === newApple.y)){
        apple = newApple;
        valid = true;
      }
    }
  }

  function render(){
    $("#gameBoard").empty();

    snake.forEach(segment => {
      const $segment = $("<div class='snake'></div>");
      $segment.css({ left: segment.x * cellSize, top: segment.y * cellSize });
      $("#gameBoard").append($segment);
    });

    const $apple = $("<div class='apple'></div>");
    $apple.css({ left: apple.x * cellSize, top: apple.y * cellSize });
    $("#gameBoard").append($apple);
  }

  function gameOver(){
    running = false;
    clearInterval(gameInterval);
    $("#gameOver").show();
    $("#restartBtn").show();
  }

  $(document).keydown(function(e){
    if(!running) return;
    switch(e.which) {
      case 37: if(direction.x !== 1) { direction = {x: -1, y: 0}; } break; // Izquierda
      case 38: if(direction.y !== 1) { direction = {x: 0, y: -1}; } break; // Arriba
      case 39: if(direction.x !== -1) { direction = {x: 1, y: 0}; } break; // Derecha
      case 40: if(direction.y !== -1) { direction = {x: 0, y: 1}; } break; // Abajo
    }
    e.preventDefault();
  });

  $("#startBtn").click(initGame);
  $("#restartBtn").click(initGame);
});
