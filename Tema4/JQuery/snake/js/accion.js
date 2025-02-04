$(document).ready(function () {
  var canvas = $("#gameCanvas")[0];
  var ctx = canvas.getContext("2d");
  var cellSize = 20;
  var rows = canvas.height / cellSize;
  var cols = canvas.width / cellSize;

  var snake; // Array que contendrá las celdas de la serpiente
  var direction; // Dirección actual: 'right', 'left', 'up', 'down'
  var gameLoop; // Referencia al setInterval para el bucle del juego

  // Función para inicializar o reiniciar el juego
  function initGame() {
    // Se inicializa la serpiente (tres celdas)
    snake = [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
    ];
    direction = "right";
    // Se asocia el evento para cambiar la dirección con las teclas de flecha
    $(document).off("keydown").on("keydown", changeDirection);
    // Se inicia el bucle del juego (actualiza cada 100 ms)
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(update, 100);
    // Se muestra el canvas y se oculta el botón de inicio
    $("#gameCanvas").show();
    $("#startBtn").hide();
    draw();
  }

  // Función que actualiza la posición de la serpiente y redibuja el juego
  function update() {
    // Se clona la cabeza de la serpiente para calcular la siguiente posición
    var head = { x: snake[0].x, y: snake[0].y };

    // Se actualiza la posición de la cabeza según la dirección
    if (direction === "right") {
      head.x += 1;
    } else if (direction === "left") {
      head.x -= 1;
    } else if (direction === "up") {
      head.y -= 1;
    } else if (direction === "down") {
      head.y += 1;
    }

    // Se comprueba la colisión con las paredes
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) {
      gameOver();
      return;
    }

    // Se añade la nueva cabeza al inicio del array
    snake.unshift(head);
    // Se elimina la última celda para mantener la longitud constante
    snake.pop();

    draw();
  }

  // Función para redibujar el canvas
  function draw() {
    // Se limpia el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Se recorre el array de la serpiente y se dibuja cada celda
    for (var i = 0; i < snake.length; i++) {
      ctx.fillStyle = i === 0 ? "green" : "lightgreen";
      ctx.fillRect(
        snake[i].x * cellSize,
        snake[i].y * cellSize,
        cellSize,
        cellSize
      );
    }
  }

  // Función para cambiar la dirección de la serpiente con las teclas de flecha
  function changeDirection(e) {
    var key = e.which;
    // Se evita que la serpiente se mueva en la dirección opuesta directamente
    if (key === 37 && direction !== "right")
      direction = "left"; // Flecha izquierda
    else if (key === 38 && direction !== "down")
      direction = "up"; // Flecha arriba
    else if (key === 39 && direction !== "left")
      direction = "right"; // Flecha derecha
    else if (key === 40 && direction !== "up") direction = "down"; // Flecha abajo
  }

  // Función que se ejecuta al detectar colisión (Game Over)
  function gameOver() {
    clearInterval(gameLoop);
    // Se crea un cuadro de alerta personalizado con jQuery
    var alertDiv = $(
      '<div id="alertDialog" class="alert-dialog"><p>Game Over</p><button id="restartBtn">Reiniciar Juego</button></div>'
    );
    $("body").append(alertDiv);
    // Se asigna el evento para reiniciar el juego al pulsar el botón
    $("#restartBtn").on("click", function () {
      $("#alertDialog").remove();
      restartGame();
    });
  }

  // Función para reiniciar el juego
  function restartGame() {
    initGame();
  }

  // Se asigna el evento para iniciar el juego al pulsar el botón
  $("#startBtn").on("click", function () {
    initGame();
  });
});
