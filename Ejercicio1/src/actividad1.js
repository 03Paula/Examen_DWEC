/**
 * @param {string} nombre Almacena el nombre del jugador.
 * @param {string} apellidos Almacena los apellidos del jugador.
 * @param {Number} nivel Almacena el nivel de cada jugador, comenzando en 1.
 * @param {Number} puntuacion Almacena el puntuacion del jugador, empezando en 1.
 */

class Jugador {
    constructor(nombre,apellidos,nivel ,puntuacion){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nivel= 1;
        this.puntuacion= 1;
    }


    /**
     * @method matarZombie Cunao mate a un zombie se le añadirá un punto más a la puntuación del jugador.
     * @param {Number} puntuacion Almacena la puntuación del jugador
     * @param {Number} nivel Almacena el nivel del jugador.
     */
    matarZombie() {
        this.puntuacion = (this.puntuacion + 1);
        if ( this.puntuacion%10 == 0){
            this.nivel = (this.nivel + 1);
            mensaje.innerHTML = "El jugador " + this.nombre + " ha subido al nivel " + this.nivel;
        }
    }

    /**
     * @method alcanzado Resta puntuación cuando el jugador ha sido tocado por un zombie.
     * @param {Number} puntuacion Puntuacion del jugador.
     * @param {Number} nivel Almacena el nivel del jugador.
     */
    alcanzado() {
        this.puntuacion = (this.puntuacion - 1);
        puntosPerdidos++;
        if (puntosPerdidos == 10) {
            this.nivel = (this.nivel - 1);
            puntosPerdidos = 0;
        }

        if (this.puntuacion == 0) {
            mensaje.innerHTML = "El jugador " + this.nombre +  " se ha reseteado"
        }
    }

}

let mensaje = document.getElementById('mensaje');
/**
 * @param {Number} puntosPerdidos Almacena los puntos que se van perdiendo por los zombies.
 */
let puntosPerdidos = 0; 

/**
 * @param {Array} jugadores Almacena los jugadores en un Array de jugadores. 
 */

let jugadores = [];

/**
 * @param {Jugador} jugador1 Almacena los datos del primer jugador.
 */
jugador1 = new Jugador("Juan","Mendez Rosa",1,1);

/**
 * @param {Jugador} jugador2 Almacena los datos del segundo jugador.
 */
jugador2 = new Jugador("Juana","Rodriguez Rodriguez",1,1);

//Insertamos jugador1 y jugador2 en el array de jugadores.
jugadores.push(jugador1);
jugadores.push(jugador2);


//Pruebas del programa
console.log(jugadores);
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
jugadores[0].matarZombie();
console.log(jugadores[0])
jugadores[0].alcanzado();
console.log(jugadores[0])

jugadores[1].alcanzado();
console.log(jugadores[1])






