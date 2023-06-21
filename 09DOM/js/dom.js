//vamos a crear una funcion que se encargue de aperturar la pagina y tome las dimensiones y se adecue al tamaño de la resolucion

window.onload = () => {
    //queremos que cargue unc arrucel de imagenes
    const imagenes = [
        //aqui debo de incorporar las url
        "https://images.alphacoders.com/127/1277109.jpg",
        "https://images4.alphacoders.com/801/80134.jpg",
        "https://images8.alphacoders.com/356/356391.jpg",
        "https://images8.alphacoders.com/371/371786.jpg"
    ];

    /*
    vamos a crear una api que podemos controlar desde el DOM, para poder acceder a todos los elementos del html para esto vamos a obtener primeramente los identificadores de cada uno de los componentes que abarca el documento
    */ 

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    //vamos a necesitar crear un funcion que se encargue de ir al siguiente

    const imagenActual = 0;

    const imagenSiguiente = () => {
        //primero tenemos que acceder al arreglo de las imagenes
        if(imagenActual < imagenes.length -1){
            imagenActual++;
        }else{
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    };

    const imagenAnterior = () => {
        //primero tenemos que acceder al arreglo de las imagenes
        if(imagenActual > 0){
            imagenActual--;
        }else{
            imagenActual = imagenes.length-1;
        }
        display.src = imagenes[imagenActual];
    };

    const pantallaCompleta = () => {
        //esta funcion es especial porque debe ser programada como una promesa, las promesas en js son solicitudes con el objeto request con la esperanza de que nos devuelva una respues en el caso x de tiempo asincrono
        display.requestFullscreen;
    };

    const mostrarMensaje = () => {
        //para mostrar los mensajes es necesario modificar el comportamiento de los mensajes de html porque vamos a agregar nuevos comportamientos o componentes desde el js
        mensajes.innerHTML += `${campoMensaje.value}<br/>`;
        campoMensaje.value = "";
        /*
        Si queremos manipular otros elementos de los componentes del htm o queremos crear nuevos utiliza
        createElement por ejemplo
        const lista = document.createElement("ul");
        const elentoLista = document.createElement("li");

        elementoLista.onclick = pantallaCompleta;
        elementoLista.innerHTML = `${campoMensaje.value}`;
        lista.append(elementoLista);
        mensaje.append(lista);
        */
    };

    const cambiarColor = () => {
        colorValor.click();
    };

    const inicializar = () => {
        //primero tenenmos que asignar a la API los eventos
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;
        colorValor.onchange = () => {
            mensajes.style.color = colorValor.value;
        };

        //debo de enviar el indice de la primera imagen
        display.src = imagenes[0];
    };

    inicializar();
}