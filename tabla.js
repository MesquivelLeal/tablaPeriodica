function areaCuadrado(pbase1,pbase2, paltura1,paltura2) {

    var rectangulo1;
    var rectangulo2;
    var base1
    var base2
    var altura1
    var altura2;
    var promedio;

        base1= pbase1;
        base2 = pbase2;
        altura1 = paltura1;
        altura2 = paltura2;

    rectangulo1 = base1 *altura1;
    rectangulo2 = base2 * altura2;

    promedio = rectangulo1 + rectangulo2 /2;


    if (promedio %2==0) {
        
        mod= "Par"

    } else {
         mod= "ImPar"
    }

    console.log("Promedio de los rectangulos = " + promedio+" El numero presente es " +mod);

}