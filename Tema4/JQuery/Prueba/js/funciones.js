$(document).ready(function () {
  console.log("test");
  $(".bloque").hide();
  $("button").click(function () {
    $(this).hide();
  });
  $("button").on("mouseenter", function () {
    $(this).hide();
  });
  let contenido = $("#contenido");
  //Método .css()
  let fondoBackground = $(".contenido2").css("background-color");
  let colorFondo = "#343434";
  /*
  <style>
      .contenido{ background-color: green; }
  </style>
  */
  $(".contenido").css("background-color", colorFondo);
  //Quiero más de un atributo
  $(".contenido,button").css({
    "background-color": "yellow",
    "font-size": "3em",
    color: "red",
  });
  /* Actividad 2 */
  //$('h2').hide();
  /*
 $('h2').on("mouseenter",function(){
  $(this).hide();//solo se oculta el selector h2 que llama al evento
  $('h2').hide();//oculta todos los h2
 });
 */
  $("h2").on("click", function () {
    $("h2").hide();
  });
});
//No definido
/*jQuery(document).ready(function($){
  console.log("test");
});*/
