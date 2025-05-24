$(document).ready(function () {
  // Código existente para el consentimiento de cookies
  var aceptarCookies = $("#aceptar");
  var contenedorCookies = $("#cookies");

  if (aceptarCookies.length && contenedorCookies.length) {
    aceptarCookies.on("click", function () {
      contenedorCookies.fadeOut();
    });
  }

  // Funcionalidad de cambio de idioma
  let idiomaActual = 'es'; // Idioma por defecto

  function establecerIdioma(idioma) {
    // Asegurarse de que el objeto traducciones está disponible
    if (typeof traducciones === 'undefined' || traducciones === null) {
      console.error("Objeto traducciones no encontrado. Asegúrate de que traducciones.js se carga antes de accion.js y está formateado correctamente.");
      return;
    }

    // Iterar sobre el objeto traducciones
    for (const clave in traducciones) {
      if (traducciones.hasOwnProperty(clave)) {
        const elemento = document.getElementById(clave);
        if (elemento) {
          // Comprobar si la traducción específica existe para el idioma dado
          if (traducciones[clave] && typeof traducciones[clave][idioma] !== 'undefined') {
            elemento.innerHTML = traducciones[clave][idioma];
          } else {
            // Opcional: Advertir si falta una traducción específica para una clave
            // console.warn(`Traducción no encontrada para Clave: ${clave}, Idioma: ${idioma}`);
          }
        } else {
          // Opcional: Advertir si una clave de traducciones no se encuentra en el DOM
          // console.warn(`Elemento con Clave: ${clave} no encontrado en el DOM.`);
        }
      }
    }

    // Actualizar el atributo lang de la etiqueta <html>
    document.documentElement.lang = idioma;

    // Actualizar idiomaActual
    idiomaActual = idioma;

    // Actualizar el texto de la etiqueta del conmutador de idioma basándose en el nuevo idiomaActual.
    const elementoEtiquetaIdioma = document.getElementById('nav-lang-label');
    if (elementoEtiquetaIdioma && 
        traducciones['nav-lang-label'] && 
        typeof traducciones['nav-lang-label'][idioma] !== 'undefined') {
        elementoEtiquetaIdioma.innerHTML = traducciones['nav-lang-label'][idioma];
    }
  }

  // Event listener para el conmutador de idioma
  const toggleIdiomaJQuery = $('#language-toggle'); // Usar selector jQuery
  if (toggleIdiomaJQuery.length) {
    toggleIdiomaJQuery.on('change', function () {
      if ($(this).is(':checked')) { // Marcado significa que el usuario seleccionó Inglés
        establecerIdioma('en');
      } else { // Desmarcado significa que el usuario seleccionó Español
        establecerIdioma('es');
      }
    });
  } else {
    console.error("Elemento conmutador de idioma #language-toggle no encontrado.");
  }

  // Configuración inicial del idioma al cargar la página
  establecerIdioma(idiomaActual);
});