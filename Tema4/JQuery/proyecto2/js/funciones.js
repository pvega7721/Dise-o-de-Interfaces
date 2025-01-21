/*
$(document).ready(function () {
  consoleIni();
  let cad = "test2";
  muestraCadena(cad);
  
});

function consoleIni() {
  console.log("Todo ok");
}
function muestraCadena(cadena) {
  console.log(cadena);
}
*/
/*Ejercicio 1 
$(document).ready(function () {
  var boton = $("#boton");
  boton.click(function () {
    inicio($(this));
  });
});

function inicio(boton) {
  boton.fadeOut();
}
*/

/*Ejercicio 2 

$(document).ready(function () {
  $(document).on("keydown", function (e) {
    if (e.key == "ArrowUp") {
      console.log("Arriba");
    } else if (e.key == "ArrowDown") {
      console.log("Abajo");
    } else if (e.key == "ArrowLeft") {
      console.log("Izquierda");
    } else if (e.key == "ArrowRight") {
      console.log("Derecha");
    } else {
      console.log("Otra tecla");
    }
  });
});
*/

/*Ejercicio 3*/

$(document).ready(function () {
  $(document).on("keydown", function (e) {
    if (e.key == "ArrowRight") {
      let contador = 0;
      let posicion = 0;
      var intervalo = setInterval(function () {
        posicion = parseInt($(".bloque").css("left")) + 10;
        $(".bloque").css("left", posicion);
        contador++;
        if (contador > 5) {
          clearInterval(intervalo);
        }
      }, 250);
    } else {
      console.log("Otra tecla");
    }
  });
});
