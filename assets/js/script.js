$(document).ready(function(){
    //Tooltip en botones//     
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl){
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    //Alerta con clic//
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
      });

    //Cambio a rojo con doble clic//
    $("#ingredientes").on({
        dblclick: function () {
            $(this).css("color", "red");
        }
    });
    $("#preparacion").on({
        dblclick: function () {
            $(this).css("color", "red");
        }
    });
    //Desaparecer contenido tarjetas//
    $(".card-title").click(function() {
        $(".card-text").toggle( "slow" );
      });
});