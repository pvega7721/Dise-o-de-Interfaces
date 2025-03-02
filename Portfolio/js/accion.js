$(document).ready(function () {
    var aceptarCookies = $("#aceptar");
    var contenedorCookies = $("#cookies");
  
    aceptarCookies.on("click", function () {
      contenedorCookies.fadeOut();
    });
  });
  