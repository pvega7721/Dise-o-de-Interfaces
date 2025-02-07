$(document).ready(function () {
  const tamañoCelda = 10;
  const columnas = 40; // 400px / 10px
  const filas = 60; // 600px / 10px
  let serpiente = [];
  let direccion = { x: 1, y: 0 };
  let manzana = {};
  let intervaloJuego;
  let velocidadJuego = 150;
  let corriendo = false;

  function iniciarJuego() {
    serpiente = [{ x: Math.floor(columnas / 2), y: Math.floor(filas / 2) }]; // Posición inicial en el centro
    direccion = { x: 1, y: 0 };
    generarManzana();
    $("#gameOver").hide();
    $("#reiniciar").hide();
    clearInterval(intervaloJuego);
    corriendo = true;
    intervaloJuego = setInterval(cicloJuego, velocidadJuego);
    renderizar();
  }

  function cicloJuego() {
    let nuevaCabeza = {
      x: serpiente[serpiente.length - 1].x + direccion.x,
      y: serpiente[serpiente.length - 1].y + direccion.y,
    };

    // Verificar colisión con los bordes
    if (
      nuevaCabeza.x < 0 ||
      nuevaCabeza.x >= columnas ||
      nuevaCabeza.y < 0 ||
      nuevaCabeza.y >= filas
    ) {
      return finJuego();
    }

    // Verificar si se muerde a sí misma
    if (
      serpiente.some(
        (segmento) =>
          segmento.x === nuevaCabeza.x && segmento.y === nuevaCabeza.y
      )
    ) {
      return finJuego();
    }

    serpiente.push(nuevaCabeza);

    // Si la serpiente come la manzana, generar una nueva
    if (nuevaCabeza.x === manzana.x && nuevaCabeza.y === manzana.y) {
      generarManzana();
    } else {
      serpiente.shift(); // Mueve la serpiente eliminando la cola
    }

    renderizar();
  }

  function generarManzana() {
    let valido = false;
    while (!valido) {
      let nuevaManzana = {
        x: Math.floor(Math.random() * columnas),
        y: Math.floor(Math.random() * filas),
      };
      if (
        !serpiente.some(
          (segmento) =>
            segmento.x === nuevaManzana.x && segmento.y === nuevaManzana.y
        )
      ) {
        manzana = nuevaManzana;
        valido = true;
      }
    }
  }

  function renderizar() {
    $("#gameBoard").empty();

    serpiente.forEach((segmento) => {
      const $segmento = $("<div class='serpiente'></div>");
      $segmento.css({
        left: segmento.x * tamañoCelda,
        top: segmento.y * tamañoCelda,
      });
      $("#gameBoard").append($segmento);
    });

    const $manzana = $("<div class='manzana'></div>");
    $manzana.css({
      left: manzana.x * tamañoCelda,
      top: manzana.y * tamañoCelda,
    });
    $("#gameBoard").append($manzana);
  }

  function finJuego() {
    corriendo = false;
    clearInterval(intervaloJuego);
    $("#gameOver").show();
    $("#reiniciar").show();
  }

  $(document).keydown(function (e) {
    if (!corriendo) return;
    switch (e.which) {
      case 37:
        if (direccion.x !== 1) {
          direccion = { x: -1, y: 0 };
        }
        break; // Izquierda
      case 38:
        if (direccion.y !== 1) {
          direccion = { x: 0, y: -1 };
        }
        break; // Arriba
      case 39:
        if (direccion.x !== -1) {
          direccion = { x: 1, y: 0 };
        }
        break; // Derecha
      case 40:
        if (direccion.y !== -1) {
          direccion = { x: 0, y: 1 };
        }
        break; // Abajo
    }
    e.preventDefault();
  });

  $("#iniciar").click(iniciarJuego);
  $("#reiniciar").click(iniciarJuego);
});
