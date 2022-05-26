
const usuariosRegistrados = [];

class Usuario {
    constructor (userName, mail, password) {
        this.userName = userName;
        this.mail = mail;
        this.password = password;
    }
}


//Menu principal

function mostrarMenu() {
    
    let opciones = Number(prompt(`Ingrese una opcion: 
                                                   1- Registrase 
                                                   2- Iniciar sesion
                                                   3- Salir`)
  )

    switch (opciones) {
        case 1: {
            registro();
            return (mostrarMenu());
        }
       case 2: {
            logIn();
            return (menuPeliculas());
        }
        case 3: {
            alert ("Adios");
            break ;
        }
        default: {
            alert("Por favor ingrese una opcion valida");
            mostrarMenu() ;
        }
    }
}
    

//Registro de usuarios

function registro() {

    let userName = prompt("ingrese un User Name");
    let mail = prompt("ingrese su e-mail");
    let password = prompt("Ingrese un password");

    let usuario = new Usuario(userName, mail, password);

    usuariosRegistrados.push(usuario);

    alert ("Se ha registrado con exito!");
    
}
console.log("Usuarios: ", usuariosRegistrados);


//Funcion para loguearte una vez registrado

function logIn() {
    let userName = prompt("Ingrese su User Name:");
    let password = prompt("Ingrese su Password:");

    if ( userName === userName && password === password) {
        alert ("Bienvenido");
    } else {
        alert ("Usuario y/o contraseña incorrecta")
        return;
    }
}


//Listado de peliculas precargadas

class Pelicula {
    constructor(id, titulo, año, actor){
        this.id=id;
        this.titulo=titulo;
        this.año=año;
        this.actor=actor;
    }
}

const peliculas = [];

peliculas.push(new Pelicula("1", "Dracula", "1931", "Bela Lugosi"));
peliculas.push(new Pelicula("2", "Frankenstein", "1931", "Boris Karloff"));
peliculas.push(new Pelicula("3", "The Mummy", "1932", "Boris Karloff"));
peliculas.push(new Pelicula("4", "The invisible man", "1933", "Claude Rains"));
peliculas.push(new Pelicula("5", "The bride of Frankenstein", "1935", "Elsa Lanchester"));
peliculas.push(new Pelicula("6", "The Wolf man", "1941", "Lon Chaney Jr"));
peliculas.push(new Pelicula("7", "Phantom of the Opera", "1943", "Nelson Eddy"));
peliculas.push(new Pelicula("8", "Creature from the black lagoon", "1954", "Ben Chapman"));


//Menu para ver o buscar peliculas
function menuPeliculas() {
    let opcion = Number(prompt(`Ingrese una opcion: 
                                        1- Ver listado de peliculas
                                        2- Buscar Pelicula
                                        3- Salir`))

            switch (opcion) {
                case 1: {
                    mostrarPeliculas();
                    return menuPeliculas();
                }
                case 2: {
                    buscarPeliculas();
                    return menuPeliculas();
                }
                case 3: {
                    break;
                }

            }   
}

function mostrarPeliculas () {
    console.log("LISTADO DE PELICULAS");
    peliculas.forEach((Pelicula)=>{
    console.log(Pelicula);
    })
}

function buscarPeliculas() {
    let titulo = prompt("Ingresa la pelicula que quieras buscar");
    let encontrado = peliculas.find((Pelicula)=>Pelicula.titulo.toLowerCase().indexOf(titulo.toLocaleLowerCase())!==-1);
    console.log("RESULTADO DE BUSQUEDA: ", encontrado);  
}    



alert (`Bienvenido a Horrorflix!  
Sitio de peliculas clasicas de terror de Universal`);
mostrarMenu();



