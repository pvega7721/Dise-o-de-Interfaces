$(document).ready(function () {
    //Iniciar sesión
    var inicioSesion = $("#iniciar");
    var contenedor1 = $("#contenedor1");
    var contenedor2 = $("#contenedor2");
    var contenedor3 = $("#contenedor3");
    var contenedor4 = $("#contenedor4");
    inicioSesion.on("click", function () {
        contenedor1.slideUp(500,function(){ //plega el contenedor 1 en 500milisegundos
            contenedor2.slideDown(500); //despliega el contenedor 2 en 500milisegundos
        });
    });
    var inputMail = $("#correo");
    var inputContr = $("#contrasena");
    var botonIniciar = $("#enviar");
    botonIniciar.prop("disabled",true);

    /*Cada vez que se escirba en un input, comprueba que estén vacíos y hace el condicional*/
    $("#correo, #contrasena").on("input", function(){
        var emailValor = inputMail.val(); //obtene el valor del mail al escribir en él
        var contValor = inputContr.val();
        if(emailValor !== "" && contValor !== ""){
            botonIniciar.prop("disabled",false);
        }else{
            botonIniciar.prop("disabled",true);
        }
    });

    //Crear cuenta
    var crearCuenta = $("#crear");

    crearCuenta.on("click", function(){
        contenedor1.slideUp(500,function(){
            contenedor3.slideDown(500);
        })
    })
    var proveedor = $("#proveedor");
    proveedor.on("click", function(){
        contenedor3.fadeOut(500,function(){
            contenedor4.fadeIn(500);
        })
    })



});