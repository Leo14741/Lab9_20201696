
    $(document).ready(function () {
    $("#seleccion").click(function (event) {
        event.preventDefault();
        var personaje = $("#i");
console.log(personaje)
        if(personaje=="Bulbasur") {
            alert("123");
                $("body").append('<p>a</p>');
                var div = document.getElementById("color");
                div.style.backgroundColor = {
                    rgba: {
                        props: {
                            green: {
                                idx: 1,
                                type: "byte"
                            }
                        }
                    },
                }
            return;
        }
        if (personaje=="Chansey") {

                $("body").append('<p>b</p>');
            var div = document.getElementById("color");
            div.style.backgroundColor = {
                rgba: {
                    props: {
                        rose: {
                            idx: 1,
                            type: "byte"
                        }
                    }
                },
            }
            return;
        }
        if (personaje=="Charmander") {
            alert("123");
                $("body").append('<p>c</p>');
            var div = document.getElementById("color");
            div.style.backgroundColor = {
                rgba: {
                    props: {
                        oranje: {
                            idx: 1,
                            type: "byte"
                        }
                    }
                },
            }
            return;
        }
        if (personaje=="Cubone") {
                $("body").append('<p>d</p>');
            var div = document.getElementById("color");
            div.style.backgroundColor = {
                rgba: {
                    props: {
                        white: {
                            idx: 1,
                            type: "byte"
                        }
                    }
                },
            }
            return;
        }
        if (personaje=="Squirtle") {
                $("body").append('<p>e</p>');
            var div = document.getElementById("color");
            div.style.backgroundColor = {
                rgba: {
                    props: {
                        blue: {
                            idx: 1,
                            type: "byte"
                        }
                    }
                },
            }
            return;
        }
        else {
            alert("Ingreso(s) inválidos");
            $(".invalid-feedback").show(500).delay(1000).hide(500);
        }
    });

});