$(document).ready(function () {
  //Iniciar sesión
  var inicioSesion = $("#iniciar");
  var contenedor1 = $("#contenedor1");
  var contenedor2 = $("#contenedor2");
  var contenedor3 = $("#contenedor3");
  var contenedor4 = $("#contenedor4");
  var contenedor5 = $("#contenedor5");
  inicioSesion.on("click", function () {
    contenedor1.slideUp(500, function () {
      //plega el contenedor 1 en 500milisegundos
      contenedor2.slideDown(500); //despliega el contenedor 2 en 500milisegundos
    });
  });
  var cliente = $("#cliente");
  cliente.on("click", function () {
    contenedor3.fadeOut(500, function () {
      contenedor5.slideDown(500);
    });
  });
  var inputMail = $("#correo");
  var inputContr = $("#contrasena");
  var botonIniciar = $("#enviar");
  botonIniciar.prop("disabled", true);

  /*Cada vez que se escirba en un input, comprueba que estén vacíos y hace el condicional*/
  $("#correo, #contrasena").on("input", function () {
    var emailValor = inputMail.val(); //obtene el valor del mail al escribir en él
    var contValor = inputContr.val();
    if (emailValor !== "" && contValor !== "") {
      botonIniciar.prop("disabled", false);
    } else {
      botonIniciar.prop("disabled", true);
    }
  });

  //Crear cuenta
  var crearCuenta = $("#crear");

  crearCuenta.on("click", function () {
    contenedor1.slideUp(500, function () {
      contenedor3.slideDown(500);
    });
  });
  var proveedor = $("#proveedor");
  proveedor.on("click", function () {
    contenedor3.fadeOut(500, function () {
      contenedor4.fadeIn(500);
    });
  });

  var inputNombre5 = $("#nombre5");
  var inputMail5 = $("#correo5");
  var inputContr5 = $("#contrasena5");
  var inputConfContr5 = $("#confContrasena5");
  var botonCrear5 = $("#crear5");

  //Hasta que no estén todos los campos rellenos, el botón estará deshabilitado
  $("#nombre5, #correo5, #contrasena5, #confContrasena5").on(
    "input",
    function () {
      var nombreValor = inputNombre5.val();
      var emailValor = inputMail5.val();
      var contValor = inputContr5.val();
      var confContValor = inputConfContr5.val();
      if (
        nombreValor !== "" &&
        emailValor !== "" &&
        contValor !== "" &&
        confContValor !== ""
      ) {
        botonCrear5.prop("disabled", false);
      } else {
        botonCrear5.prop("disabled", true);
      }
    }
  );

  var inputNombre4 = $("#inputNombre4");
  var inputMail4 = $("#correo4");
  var inputContr4 = $("#contrasena4");
  var inputConfContr4 = $("#confContrasena4");
  var inputFecha4 = $("#nacimiento4");
  var botonCrear4 = $("#crear4");

  inputNombre4.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      inputNombre4.addClass("inputError");
      inputNombre4.attr("placeholder", "Máximo de 10 caracteres");
      $("#mensajeError").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputNombre4.removeClass("inputError");
      $("#mensajeError").prop("hidden", true);
    }
  });

  //Hasta que no estén todos los campos rellenos, el botón estará deshabilitado
  $("#inputNombre4, #correo4, #contrasena4, #confContrasena4, #nacimiento4").on(
    "input",
    function () {
      var nombreValor = inputNombre4.val();
      var emailValor = inputMail4.val();
      var contValor = inputContr4.val();
      var confContValor = inputConfContr4.val();
      var fechaValor = inputFecha4.val();
      if (
        nombreValor !== "" &&
        emailValor !== "" &&
        contValor !== "" &&
        confContValor !== "" &&
        fechaValor !== ""
      ) {
        botonCrear4.prop("disabled", false);
      } else {
        botonCrear4.prop("disabled", true);
      }
    }
  );
});
