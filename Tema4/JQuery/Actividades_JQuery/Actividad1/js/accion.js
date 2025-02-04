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

  var inputNombre5 = $("#inputNombre5");
  var inputMail5 = $("#inputCorreo5");
  var inputContr5 = $("#inputContrasena5");
  var inputConfContr5 = $("#inputConfContrasena5");
  var botonCrear5 = $("#crear5");
  var formulario5 = $("#formulario5");

  //Al pulsar el botón Crear, si todo ha ido bien mostrará un mensaje de éxito                                    -----                                                                           ---
  botonCrear5.on("click", function (e) {
    e.preventDefault();
    if (inputContr5.val() !== inputConfContr5.val()) {
      $("#coincidirContrasena5").prop("hidden", false);
    } else {
      formulario5.slideUp(500, function () {
        contenedor6.slideDown(500);
      });
    }
  });

  var ojoAbierto5 = $("#imagenOjoAbierto5");
  var ojoCerrado5 = $("#imagenOjoCerrado5");

  //Al pulsar el ojo, se muestra la contraseña y se cambia la imagen
  ojoCerrado5.on("click", function () {
    if (inputContr5.attr("type") === "password") {
      inputContr5.attr("type", "text");
      ojoAbierto5.prop("hidden", false);
      ojoCerrado5.prop("hidden", true);
    }
  });

  ojoAbierto5.on("click", function () {
    if (inputContr5.attr("type") === "text") {
      inputContr5.attr("type", "password");
      ojoAbierto5.prop("hidden", true);
      ojoCerrado5.prop("hidden", false);
    }
  });

  var ojoAbiertoConf5 = $("#imagenOjoAbierto5-1");
  var ojoCerradoConf5 = $("#imagenOjoCerrado5-1");

  //Lo mismo para confirmar contraseña
  ojoCerradoConf5.on("click", function () {
    if (inputConfContr5.attr("type") === "password") {
      inputConfContr5.attr("type", "text");
      ojoAbiertoConf5.prop("hidden", false);
      ojoCerradoConf5.prop("hidden", true);
    }
  });

  ojoAbiertoConf5.on("click", function () {
    if (inputConfContr5.attr("type") === "text") {
      inputConfContr5.attr("type", "password");
      ojoAbiertoConf5.prop("hidden", true);
      ojoCerradoConf5.prop("hidden", false);
    }
  });

  //funcionalidad del ojo para el contenedor 4
  var ojoAbierto4 = $("#imagenOjoAbierto4");
  var ojoCerrado4 = $("#imagenOjoCerrado4");

  ojoCerrado4.on("click", function () {
    if (inputContr4.attr("type") === "password") {
      inputContr4.attr("type", "text");
      ojoAbierto4.prop("hidden", false);
      ojoCerrado4.prop("hidden", true);
    }
  });

  ojoAbierto4.on("click", function () {
    if (inputContr4.attr("type") === "text") {
      inputContr4.attr("type", "password");
      ojoAbierto4.prop("hidden", true);
      ojoCerrado4.prop("hidden", false);
    }
  });

  var ojoAbiertoConf4 = $("#imagenOjoAbierto4-1");
  var ojoCerradoConf4 = $("#imagenOjoCerrado4-1");
  //Lo mismo para confirmar contraseña
  ojoCerradoConf4.on("click", function () {
    if (inputConfContr4.attr("type") === "password") {
      inputConfContr4.attr("type", "text");
      ojoAbiertoConf4.prop("hidden", false);
      ojoCerradoConf4.prop("hidden", true);
    }
  });

  ojoAbiertoConf4.on("click", function () {
    if (inputConfContr4.attr("type") === "text") {
      inputConfContr4.attr("type", "password");
      ojoAbiertoConf4.prop("hidden", true);
      ojoCerradoConf4.prop("hidden", false);
    }
  });

  //Hasta que no estén todos los campos rellenos, el botón estará deshabilitado
  $(
    "#inputNombre5, #inputCorreo5, #inputContrasena5, #inputConfContrasena5, #check5"
  ).on("input", function () {
    var nombreValor = inputNombre5.val();
    var emailValor = inputMail5.val();
    var contValor = inputContr5.val();
    var confContValor = inputConfContr5.val();
    var check5 = $("#check5").prop("checked");
    if (
      nombreValor !== "" &&
      emailValor !== "" &&
      contValor !== "" &&
      confContValor !== "" &&
      check5 === true
    ) {
      botonCrear5.prop("disabled", false);
    } else {
      botonCrear5.prop("disabled", true);
    }
  });
  //Error blur nombre
  inputNombre5.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      inputNombre5.addClass("inputError");
      inputNombre5.attr("placeholder", "Máximo de 10 caracteres");
      $("#nombreError5").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputNombre5.removeClass("inputError");
      $("#nombreError5").prop("hidden", true);
    }
  });

  //Error blur email
  inputMail5.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      inputMail5.addClass("inputError");
      $("#mailError5").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputMail5.removeClass("inputError");
      $("#mailError5").prop("hidden", true);
    }
  });
  var divContrasena = $("#ojo5");

  //Error blur contraseña
  inputContr5.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      divContrasena.addClass("inputError");
      inputContr5.addClass("inputError");
      $("#contError5").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputContr5.removeClass("inputError");
      $("#contError5").prop("hidden", true);
      divContrasena.removeClass("inputError");
    }
  });
  var divConfContrasena = $("#ojoConf5");
  //Error blur confirmar contraseña
  inputConfContr5.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      divConfContrasena.addClass("inputError");
      inputConfContr5.addClass("inputError");
      $("#confContError5").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputConfContr5.removeClass("inputError");
      $("#confContError5").prop("hidden", true);
      divConfContrasena.removeClass("inputError");
    }
  });

  var inputNombre4 = $("#inputNombre4");
  var inputMail4 = $("#inputCorreo4");
  var inputContr4 = $("#inputContrasena4");
  var inputConfContr4 = $("#inputConfContrasena4");
  var inputFecha4 = $("#InputNacimiento4");
  var botonCrear4 = $("#crear4");

  var formulario4 = $("#formulario4");

  //Al pulsar el botón Crear, si todo ha ido bien mostrará un mensaje de éxito                                                  ---
  botonCrear4.on("click", function (e) {
    e.preventDefault();
    //Si la contraseña no coincide con la confirmación, se mostrará un mensaje de error
    if (inputContr4.val() !== inputConfContr4.val()) {
      $("#coincidirContrasena").prop("hidden", false);
    } else {
      formulario4.slideUp(500, function () {
        contenedor7.slideDown(500);
      });
    }
  });

  //Error blur nombre
  inputNombre4.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      inputNombre4.addClass("inputError");
      inputNombre4.attr("placeholder", "Máximo de 10 caracteres");
      $("#nombreError").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputNombre4.removeClass("inputError");
      $("#nombreError").prop("hidden", true);
    }
  });

  //Error blur email
  inputMail4.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      inputMail4.addClass("inputError");
      $("#mailError").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputMail4.removeClass("inputError");
      $("#mailError").prop("hidden", true);
    }
  });
  var divContrasena4 = $("#ojo4");
  //Error blur contraseña
  inputContr4.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      divContrasena4.addClass("inputError");
      inputContr4.addClass("inputError");
      $("#contError").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputContr4.removeClass("inputError");
      $("#contError").prop("hidden", true);
      divContrasena4.removeClass("inputError");
    }
  });
  var divConfContrasena4 = $("#ojoConf4");
  //Error blur confirmar contraseña
  inputConfContr4.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      divConfContrasena4.addClass("inputError");
      inputConfContr4.addClass("inputError");
      $("#confContError").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputConfContr4.removeClass("inputError");
      $("#confContError").prop("hidden", true);
      divConfContrasena4.removeClass("inputError");
    }
  });
  //Error blur fecha
  inputFecha4.blur(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("error");
      inputFecha4.addClass("inputError");
      $("#fechaError").prop("hidden", false);
    } else {
      $(this).removeClass("error");
      inputFecha4.removeClass("inputError");
      $("#fechaError").prop("hidden", true);
    }
  });

  //Hasta que no estén todos los campos rellenos, el botón estará deshabilitado
  $(
    "#inputNombre4, #inputCorreo4, #inputContrasena4, #inputConfContrasena4, #InputNacimiento4, #check4"
  ).on("input", function () {
    var nombreValor = inputNombre4.val();
    var emailValor = inputMail4.val();
    var contValor = inputContr4.val();
    var confContValor = inputConfContr4.val();
    var fechaValor = inputFecha4.val();
    var check4 = $("#check4").prop("checked");
    if (
      nombreValor !== "" &&
      emailValor !== "" &&
      contValor !== "" &&
      confContValor !== "" &&
      fechaValor !== "" &&
      check4 === true
    ) {
      botonCrear4.prop("disabled", false);
    } else {
      botonCrear4.prop("disabled", true);
    }
  });
});
