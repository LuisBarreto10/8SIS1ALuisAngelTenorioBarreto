// Una api rest nos permite obtener informacion sobre diferentes elementos de un modelo que se encuentra en  algun sitio web. Para poder realizar la Pokedex vamso a tener que conectarnos con el servicio de https://pokeapi.co/

const pokeApiUrl = "https://pokeapi.co/api/v2/";

//vamos a crear una funcion flecha que nos permita poder obtener los elementos de la pai

const pokedex = () => {
    //necesitamos un objeto axuliar que nos permita acceder a los campos deseados de la API, para asi mostrar las estadisticas, buscar, ver, etc que viene por parte del DOM
    const pokemonStatsElements = {
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };

    //necesitamos un auxliar que nos permita poder cambiar la css de acuerdo al tipo de pokemon
    let currentClassType = null;

    //necesitamos una cadena que nos muestre la imagen del tipo de pokemon
    const imagenTemple = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay' />";

    //Necesitamos una objeto que guarde las rutas de las imagenes de apayo, como lo que son para la busqueda, cuando no se encuentra el pokemon, la carga
    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    };

    //Necesitamos un objeto que contenga las referencias de los elementos que se vana  desplegar de acuerdo a la informacion del pokemon
    const containers = {
        imageContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
        pokemonMovesElement : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //Necesitamos un objeto que se contenga las referencias de todos los botones
    const buttons = {
        all : Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previous : document.getElementById("btnDown")
    };

    //necesitamos la referencia al campo de texto que usa el usuario para escribir el nombre del pukamon
    const pokemonInput = document.getElementById("pokemonName");

    //Necesitmaos una funcion que se encargue de obtener el tipo de pokemon y nos devuelva el resultado de la busqueda dentro de la api

    const processPokemonTypes = (pokemonData) => {
        let pokemonType = "";
        //vamos a utilizar la primera clase para dar color a los contenedores 
        const firstClass = pokemonData.types[0].type.name;

        //Donde sale tyoes, sale directamente del la pagina de pokeapi 
        pokemonData.types.forEach((pokemonTypeData) =>{
            //vamos a crear una eitiqueta de clase por cada tipo de pokemon dentro del arreglo
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name} " >${pokemonTypeData.type.name}</span>`
        });

        //vamos a quitar la clase previa del contenedor de habilidades y movimientos y actualizar por la nueva
        if(currentClassType){
            containers.pokemonMovesElement.classList.remove(currentClassType);
            containers.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //ahora se agrega la clase al contenedor de habilidades y movimientos
        containers.pokemonMovesElement.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);

        currentClassType = firstClass;

        //se agregan las etiquetas credas
        containers.pokemonTypesContainer.innerHTML = pokemonType;

    };

    //vamos  ahacer una funcion para obtener todas las estadisticas 
    const processPokemonStats = (pokemonData) => {
        //vamos a utilizar el operador ternario ? para realizar un encadenamiento del recorrido del arreglo
        pokemonData.stats?.forEach((pokemonStatData)=>{
            //vamos a evaluar el nombre de la estadistica y colocar su valor respectivo dentro del contenedor
            switch(pokemonStatData.stat.name){
                case "hp":
                    pokemonStatsElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "attack":
                    pokemonStatsElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;   
                case "defense":
                    pokemonStatsElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "special-attack":
                    pokemonStatsElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "special-defense":
                    pokemonStatsElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
                case "speed":
                    pokemonStatsElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatsElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%);`;
                    break;
            }
        });
    };

    //Necesitamos una funcion que haga lo mismo que la de stats pero con los movimientos

    const processPokemonMoves = (pokemonData) => {
        let pokemonMovesContent = "";
        pokemonData.moves?.forEach((pokemonMove) => {
            pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
        });
        containers.pokemonMovesElement.innerHTML = pokemonMovesContent;
    }

    const processPokemonAbilities = (pokemonData) => {
        let pokemonAbilitiesContent = "";
        pokemonData.abilities?.forEach((pokemonAbility) => {
            pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
        });
        containers.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
    };

    //necesitamos una funcion para habilitar y deshabilitar los botones
    const setLoading = () => {
        containers.imageContainer.innerHTML = imagenTemple.replace("{imgSrc}", images.imgLoading);
        buttons.all.forEach(button => button.disabled = true);
    };

    const setLoadingComplete = () =>{
        buttons.all.forEach(button => checkDisabled(button));
    };

    /* 
    Vamos a crear una funcion para consultar los datos de la pokeapi, medianto el cual tenemos que obtener la informacion por medio del fetch
    fecth recibo la url para hacer la solicitud del sitio, pero tambien puede cargar archivos de forma local (storage)
    la peticion, de fetch devuelve una promeda, por eso se debe de atender mediante un try catch (then catch) y por otro lado nos devuelve un objeto JSON con la informacion solicitada en caso de error debemos atender la peticion fallida
    */

    const getPokemonData = async (pokemonName) => fetch(`${pokeApiUrl}pokemon/${pokemonName}`, {
        /*
        Existen varios metodos de peticion HTTP que sirven, entre otras cosas para poder especificar el tipo de peticion, como son:
        GET, POST, PUT, DELETE, PACH, etc
        */
       method : 'GET',
       /*
       En las cabeceras de la peticion, se puede especificar el tipo de informacion que queremos utilizar, tambien aqui se suele colocar la identidad del usuario (sesiones)
       */
      headers : {
        'Content-Type' : 'application/json'
      },
      //body : JSON.stringify(MiObjetoJson se usa cuando es una peticion que debe devolver un registro post put)
    })
        .then((res) => res.json())
        .catch((error) => ({requestFailed:true}));

    //validar si debe estar deshabilitado o no los botones, 
    const checkDisabled = (button) => {
        button.disabled = button.id === "btnDown" && containers.pokemonIdElement.value <= 1;
    };

    /*
    Vamnos a dar la respuesta para colocar en sus respectivos contenedores la informacion de la consulta del pokemon
    */ 
   const setPokemonData = async (pokemonName) => {
    //hay que poner la imagen de busqueda del pokemon y deshabilitar los botones
    if(pokemonName){
        setLoading();
    //tenemos que hacer la consulta de los datos, con el uso del await para tener la respuesta
    const pokemonData = await getPokemonData(typeof pokemonName === typeof ""?pokemonName.toLowerCase() : pokemonName );
    //si lo enocntro
    if(pokemonData.requestFailed){
        containers.imageContainer.innerHTML = imagenTemple.replace("{imgSrc}", images.imgPokemonNotFound);
    }else{
        containers.imageContainer.innerHTML = `${imagenTemple.replace("{imgSrc}", pokemonData.sprites.front_default)} ${imagenTemple.replace("{imgSrc}", pokemonData.sprites.front_shiny)}`;
        containers.pokemonNameElement.innerHTML = pokemonData.name;
        containers.pokemonIdElement.value = pokemonData.id;
        //repartir los datos de las estadisticas, habilidades, movimientos etc del pokemon
        processPokemonTypes(pokemonData);
        processPokemonStats(pokemonData);
        processPokemonAbilities(pokemonData);
        processPokemonMoves(pokemonData);
    }
    setLoadingComplete();
    }else{
        //aqui es cuando no encuentra el nombre
        Swal.fire({
            //libreria es https://sweetalert2.github.io/
            title : "Error!",
            text : "Ingresa el nombre del pokemon primero",
            icon : "error",
            confirmButtonText : "Aceptar"
        });
    }
   };

   //funcion de busqueda
   const triggers = () => {
    buttons.search.onclick = () => setPokemonData(pokemonInput.value);
    //ya que tenemos vinculado el nombre del pokemon hay que dar las acciones
    pokemonInput.onkeyup = (event) => {
        event.preventDefault();
        if(event.key === "Enter"){
            setPokemonData(pokemonInput.value);
        }
    }
    //se le vincula la funcion de busqueda arriba y abajo 
    buttons.next.onclick = () => setPokemonData(+containers.pokemonIdElement.value + 1);
    buttons.previous.onclick = () => setPokemonData(+containers.pokemonIdElement.value - 1);
   };
   setLoadingComplete();
   triggers();
};

//carga
window.onload = pokedex;