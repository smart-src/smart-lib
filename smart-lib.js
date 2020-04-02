/**
       * Funcion que devuelve un numero separando los separadores de miles
       * Puede recibir valores negativos y con decimales
       */
function formatear(id) {
    //recuperamos el input mediante su id
    var txtNumero = document.getElementById(id);
    if (txtNumero != null) {
        //recuperamos el numero ingresado
        var numero = txtNumero.value;
        numero = numero.replace(/[^0-9\.\,]/gi, '');

        var tecla = numero[numero.length - 1];
        //verificamos si pe pulso la tecla . (punto) que es el separador decimal
        if (tecla === ".") {
            if (numero.includes(",")) {
                //si se pulso la tecla . (punto) y existe el separador decimal entonces invalidamos el valor ingresado
                numero = numero.substring(0, numero.length - 1);
            } else {
                //si se pulso la tecla . (punto) y no existe el separador decimal reemplazamos el .(punto) por ,(coma)
                numero = numero.substring(0, numero.length - 1) + ",";
            }
        }

        // Variable que contendra el resultado final
        var resultado = "";
        // Si el numero empieza por el valor "-" (numero negativo)
        if (numero[0] == "-") {
            // capturamos el numero eliminando los posibles puntos que tenga, y sin
            // el signo negativo
            nuevoNumero = numero.replace(/\./g, '').substring(1);
        } else {
            // capturamos el numero eliminando los posibles puntos que tenga
            nuevoNumero = numero.replace(/\./g, '');
        }
        // Si tiene decimales, se los quitamos al numero
        if (numero.indexOf(",") >= 0)
            nuevoNumero = nuevoNumero.substring(0, nuevoNumero.indexOf(","));
        // Ponemos un punto cada 3 caracteres
        for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i--, j++)
            resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0) ? "." : "") + resultado;
        // Si tiene decimales, se lo añadimos al numero una vez forateado con 
        // los separadores de miles
        if (numero.indexOf(",") >= 0)
            resultado += numero.substring(numero.indexOf(","));
        if (numero[0] == "-") {
            // Devolvemos el valor añadiendo al inicio el signo negativo
            resultado = "-" + resultado;
        }
        txtNumero.value = resultado;
    }
}