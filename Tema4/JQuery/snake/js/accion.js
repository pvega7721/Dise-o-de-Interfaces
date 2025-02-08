$(document).ready(function () {
  var tablero = $("#tablero");
  var puntuacionAMostrar = $(".puntuacion");
  var gameOver = $("#gameOver");

  var botonIniciar = $("#iniciar");
  var botonReiniciar = $("#reiniciar");
  
  var tamanoTablero = 800;
  var tamanoSerpiente = 10;
  var serpiente = [{x: tamanoTablero / 2, y: tamanoTablero / 2}]; //La serpiente comienza en el centro del tablero
  var manzana = {x:0,y:0}; //Objeto que guarda la posición de la manzana
  var direccion = 'Derecha';
  var siguienteDireccion = direccion;
  var puntuacion = 0;
  var velocidad = 150;
  var intervalo;
  var pausa= false;

  //Función que crea la serpiente en el tablero
  function crearSerpiente(){
    tablero.find(".serpiente").remove(); //Se borran los divs del cuerpo de la serpiente anterior
    serpiente.forEach(tramo=> {
      tablero.append(
        `<div class="serpiente" style="left: ${tramo.x}px; top: ${tramo.y}px;"></div>`
      );
    })
  }

  //Crea la manzana en una posición aleatoria de la manzana
  function crearManzana(){
    var manzanaComida;
    do{
      manzanaComida = false;
      manzana.x = Math.floor(Math.random()* (tamanoTablero/tamanoSerpiente))*tamanoSerpiente;
      manzana.y = Math.floor(Math.random()* (tamanoTablero/tamanoSerpiente))*tamanoSerpiente;
      //Si la manzana está en la posición de la serpiente, se vuelve a generar
      serpiente.forEach(tramo=>{
        if(tramo.x === manzana.x && tramo.y === manzana.y){
          manzanaComida = true;
        }})
    }while(manzanaComida);
    tablero.append(
      `<div class="manzana" style="left: ${manzana.x}px; top: ${manzana.y}px;"></div>`
    );
  }

  function moverSerpiente(){
    let cabeza = {...serpiente[0]}; //Guarda la cabeza actual en la varable cabeza

    switch(siguienteDireccion){
      case 'Arriba':
        cabeza.y -= tamanoSerpiente;
        break;
      case 'Abajo':
        cabeza.y += tamanoSerpiente;
        break;
      case 'Izquierda':
        cabeza.x -= tamanoSerpiente;
        break;
      case 'Derecha':
        cabeza.x += tamanoSerpiente;
        break;
    }
    //si se come a sí misma o se choca contra la pared, termina el juego y aparece el botón de reiniciar
    if(cabeza.x >= tamanoTablero || cabeza.x < 0 || cabeza.y >= tamanoTablero || cabeza.y < 0 || 
      colision(cabeza)){
        clearInterval(intervalo);
        gameOver.show();
        botonReiniciar.show();
        botonIniciar.hide();
        return;
    }
    //Si la serpiente come la manzana, se añade un tramo a la serpiente y se crea una nueva manzana
    if(cabeza.x === manzana.x && cabeza.y === manzana.y){
      puntuacion += 1;
      puntuacionAMostrar.text(`Puntuación: ${puntuacion}`);
      tablero.find('.manzana').remove();
      crearManzana();

      //Cada vez que se coma una manzana, aumenta la velocidad un 10%
      velocidad *= 0.9;
      //Añado velocidad límite para que no llegue a ir demasiado rápido
      if(velocidad < 20){
        velocidad = 20;
      }

      clearInterval(intervalo);
      intervalo = setInterval(moverSerpiente, velocidad);
      
      serpiente.unshift(cabeza);
      crearSerpiente();
    }else{
      //Si no come la manzana, se mueve la serpiente
      serpiente.pop(); //pop elimina el último elemento del array(la cola)
      serpiente.unshift(cabeza);
      crearSerpiente();
    }
    direccion = siguienteDireccion;
  }

  function colision(cabeza){
      for (let i = 0; i < serpiente.length; i++) {
        //si la cabeza está en la misma posicion que un tramo de la serpiente, es que se ha comido a sí misma
          if(cabeza.x === serpiente[i].x && cabeza.y === serpiente[i].y){
            return true;
          }
      }
      return false;
  }

  //control de las teclas para mover la serpiente
  $(document).keydown(function(e){
      switch(e.which){ //which representa el código de las teclas del teclado
          case 37: //flecha izquierda
            if(siguienteDireccion !== 'Derecha'){
              siguienteDireccion = 'Izquierda';
            }
            break;
          case 38: //flecha arriba
            if(siguienteDireccion !== 'Abajo'){
              siguienteDireccion = 'Arriba';
            }
            break;
          case 39: //flecha derecha
            if(siguienteDireccion !== 'Izquierda'){
              siguienteDireccion = 'Derecha';
            }
            break;
          case 40: //flecha abajo
            if(siguienteDireccion !== 'Arriba'){
              siguienteDireccion = 'Abajo';
            }
            break;
      }
  });
  
  function iniciarJuego(){
    //reset de los valores
    gameOver.hide();
    botonReiniciar.hide();
    botonIniciar.show();
    puntuacion = 0;
    puntuacionAMostrar.text(`Puntuación: ${puntuacion}`);
    serpiente = [{x: tamanoTablero / 2, y: tamanoTablero / 2}];
    tablero.find('.manzana').remove();//Elimina las manzanas que haya en el tablero al morir
    direccion = 'Derecha';
    velocidad = 150;
    clearInterval(intervalo); //limpia el intervalo anterior
    crearSerpiente();
    crearManzana();
    intervalo = setInterval(moverSerpiente, velocidad);
  }

  botonIniciar.click(iniciarJuego);
  botonReiniciar.click(iniciarJuego);
});
