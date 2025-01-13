jQuery(document).ready(function ($) {
  console.log("test");
  $(".bloque").hide();

  $(".capa").hide();

  $("button").click(function () {
    $(this).hide();
  });
});
