
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
            break;
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




//Listado de peliculas precargadas//

class Pelicula {
    constructor(id, titulo){
        this.id=id;
        this.titulo=titulo;
    }
}

const peli1 = new Pelicula(1, "Dracula");
const peli2 = new Pelicula(2, "Frankenstein");
const peli3 = new Pelicula(3, "La Momia");
const peli4 = new Pelicula(4, "El hombre invisible");
const peli5 = new Pelicula(5, "La novia de Frankenstein");
const peli6 = new Pelicula(6, "El hombre lobo");
const peli7 = new Pelicula(7, "El fantasma de la Opera");
const peli8 = new Pelicula(8, "La criatura de la laguna negra");

const peliculas = [peli1,peli2, peli3, peli4,peli5,peli6,peli7,peli8];



function mostrarPeliculas () {
    console.log("LISTA DE PELICULAS", peliculas)
   
}
  


mostrarMenu();
registro();
mostrarPeliculas ();

