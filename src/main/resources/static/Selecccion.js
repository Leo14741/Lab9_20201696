
    $(document).ready(function () {
    $("#seleccion").click(function (event) {
        event.preventDefault();
        var personaje = $("#i").val();
console.log(personaje)
        if(personaje=="Bulbasur") {
            alert("123");
                $("body").append('<p>a</p>');
        }
        if (personaje=="Chansey") {

                $("body").append('<p>b</p>');
            return;
        }
        if (personaje=="Charmander") {
            alert("123");
                $("body").append('<p>c</p>');

            return;
        }
        if (personaje=="Cubone") {
                $("body").append('<p>d</p>');

            return;
        }
        if (personaje=="Squirtle") {
                $("body").append('<p>e</p>');

            return;
        }
        else {
            alert("Ingreso(s) inválidos");
            $(".invalid-feedback").show(500).delay(1000).hide(500);
        }
    });

});
    function cambiarColor() {
        var colorPicker = document.getElementById("colorPicker");
        var div = document.getElementById("change");
        var color = colorPicker.value;
        div.style.backgroundColor = color;
    }