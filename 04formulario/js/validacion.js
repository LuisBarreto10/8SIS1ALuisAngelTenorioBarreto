//JS es miltiparadígmico y vamos a iniciar a la programación por funciones.

function validar(formulario){
    //Hay varias formas para poder obtener los parámetros del formulario.
    if(formulario.nombre.value.length <= 3){
        alert("Escriba más de tres caracteres en el campo nombre")
        formulario.nombre.focus();
    }

    var checkOk = "abcdefghijklmnopqrstuvwxyz " + "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

    var checkString = formulario.nombre.value;

    var todoesValido = true;
    /*JavaScript ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++){
            if (ch == checkOk.charAt(j)){
                break;
            }

        }
        if (j == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOk = "0123456789" + "0123456789";

    var checkString = formulario.edad.value;

    var todoesValido = true;
    alert("hi");

    /*Java Script ees un lenguaje de programación no tipado, solo maneja tres tipos de variable de dato: var - variable cambiante con
    acceso público, let es una variable de acceso restringido, const es una constante de acceso único*/ 
    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++){
            if (ch == checkOk.charAt(j)){
                break;
            }

        }
        if (j == checkOk.length){
            todoesValido = false;
            break;
        }
    }
    if (!todoesValido){
        alert("Escriba únicamente números en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;

    var b = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

    alert ("Email " + (b.test/(txt) ? " " : "no") + " valido");

    return b.test;

}