document.addEventListener('DOMContentLoaded',function () {

    /**
     * @param {Number} fecha1 Almacena el nombre de la primera fecha.
     * @param {Number} fecha2 Almacena el nombre de la segunda fecha.
     * @param mensaje Almacena el node del elemento con id mensaje
     */
    let fecha1 = prompt("Escribe un año entre 2001 y 2500:")
    let fecha2 = prompt("Escribe un año entre 2001 y 2500:")
    let mensaje = document.getElementById('mensaje');
    comprobacion();

    /**
     * @param {Number} num1 Almacena la fecha 1.
     * @param {Number} num2 Almacena la fecha 2.
     */
    function isLeapYear(num1 , num2) {
        let arrayFechas = [];
        for (let i = num1; i <= num2; i++) {
            if (i%4 == 0 || (i%100 == 0 && i%400 == 0)){ //Comprobamos que el año entre ambos sea divisible por 4 o por 100 y a su vez por 400.
                arrayFechas.push(i);
            }
        }
        //Imprime por pantalla los años bisiestos entre ambas fechas
        mensaje.innerHTML = arrayFechas;

    }

    /**
     * Comprueba si las fechas que ha introducido el usuario son números y mayores o iguales de 2001 y menores o iguales de 2500.
     */
    function comprobacion(){

        if (fecha1 >= 2001 && fecha1 <= 2500 && fecha2 >= 2001 && fecha2 <= 2500 && fecha1 < fecha2 ){
            fecha1 = Math.round(fecha1)
            fecha2 = Math.round(fecha2)
            isLeapYear(fecha1,fecha2)
        }
        else{
            mensaje.innerHTML = "No has introducido un número válido."
            return '';
        }

    }

});
