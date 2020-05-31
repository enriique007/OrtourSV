class Shop{
    constructor(){
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    };
    }
}

class Inteli3Builder{ // Procesador Intel core i3
    constructor(){
    this.i3 = null;

    this.step1 = function () {
        this.i3 = new I3();
    };

    this.step2 = function () {
        this.i3.addParts();
    };

    this.get = function () {
        return this.i3;
    };
};
}
class Inteli5Builder { // Procesador Intel Core i5
    constructor(){
    this.i5 = null;

    this.step1 = function () {
        this.i5 = new I5();
    };

    this.step2 = function () {
        this.i5.addParts();
    };

    this.get = function () {
        return this.i5;
    };
};
}
class Inteli7Builder { // Procesador Intel Core i7
    constructor(){
    this.i7 = null;

    this.step1 = function () {
        this.i7 = new I7();
    };

    this.step2 = function () {
        this.i7.addParts();
    };

    this.get = function () {
        return this.i7;
    };
};
}

class I3 {
    constructor(){
    this.Cnucleo = 0;

    this.addParts = function () {
        this.Cnucleo = 2;
    };

    this.say = function () {
        log.add("Procesador Intel® Core™ i3-2310M - " + this.Cnucleo+ " núcleos. ");
    };
};
}

class I5 {
    constructor(){
    this.Cnucleo = 0;

    this.addParts = function () {
        this.Cnucleo = 4;
    };

    this.say = function () {
        log.add("Procesador Intel® Core™ i5-8265U - " + this.Cnucleo + " núcleos.");
    };
};
}

class I7 {
    constructor(){
    this.Cnucleo = 0;

    this.addParts = function () {
        this.Cnucleo = 4;
    };

    this.say = function () {
        log.add("Procesador Intel® Core™ i7-8565U - " + this.Cnucleo + " núcleos.");
    };
};
}

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { 
            alertify
            .alert(log, function(){
                alertify.success('INFORMACIÓN DEL PRODUCTO');
            });

            log = ""; 
        }
    }
})();


function Procesadori3() {
    // Utilizando elementos del DOM para mostrar en los <p> del <alert>.
    var producto = "Procesador", marca = "Intel®", modelo = "Core™ i3-2310M", nucleo = " 2 ", frecuencia = "2.10 GHz", cache = " 3 MB SmartCache", bus = " 5 GT/s DMI ", memoria = "16 GB", tipo = " DDR3 1066/1333 ", grafico =" Gráficos HD Intel® 3000 ", instruccion = " 64-bit ", generacion = "Sandy Bridge - Segunda Generación";
    pproducto = document.getElementById("producto");
    pmarca = document.getElementById("marca");
    pmodelo = document.getElementById("modelo");
    pnucleo = document.getElementById("nucleo");
    pfrecuencia = document.getElementById("frecuencia");
    pcache = document.getElementById("cache");
    pbus = document.getElementById("bus");
    pmemoria = document.getElementById("memoria");
    ptipo = document.getElementById("tipo");
    pgrafico = document.getElementById("grafico");
    pinstruccion = document.getElementById("instruccion");
    pgeneracion = document.getElementById("generacion");
    pproducto.innerHTML = "Producto: " + producto;
    pmarca.innerHTML = "Marca: " + marca;
    pmodelo.innerHTML = "Modelo: " + modelo;
    pnucleo.innerHTML = "Cantidad de núcleos: " + nucleo;
    pfrecuencia.innerHTML = "Frecuencia básica del procesador : " + frecuencia;
    pcache.innerHTML = "Caché: " + cache;
    pbus.innerHTML = "Velocidad del bus: " + bus;
    pmemoria.innerHTML = "Tamaño de memoria máximo: " + memoria;
    ptipo.innerHTML = "Tipos de memoria: " + tipo;
    pgrafico.innerHTML = "Gráficos del procesador: " + grafico;
    pinstruccion.innerHTML = "Conjunto de instrucciones: " + instruccion;
    pgeneracion.innerHTML = "Generación del producto: " + generacion;
    // Mostramos imagen del carro, con el DOM.
    img = document.getElementById("imgProcesador");
    img.innerHTML = '<img src="img/Corei3.jpg" height="300px" width="350px" />';

    var shop = new Shop();
    var inteli3Builder = new Inteli3Builder();
    var Pi3 = shop.construct(inteli3Builder);

    Pi3.say();
    log.show();
}
function Procesadori5() {
    // Utilizando elementos del DOM para mostrar en los <p> del <alert>.
    var producto = "Procesador", marca = "Intel®", modelo = "i5-8265U", nucleo = " 4 ", frecuencia = " 1.60 GHz ", cache = " 6 MB SmartCache ", bus = " 4 GT/s OPI  ", memoria = " 32 GB", tipo = " DDR4-2400, LPDDR3-2133 ", grafico =" 300.0 MHz  ", instruccion = " 64-bit ", generacion = " Coffee Lake. - Octava Generación";
    pproducto = document.getElementById("producto");
    pmarca = document.getElementById("marca");
    pmodelo = document.getElementById("modelo");
    pnucleo = document.getElementById("nucleo");
    pfrecuencia = document.getElementById("frecuencia");
    pcache = document.getElementById("cache");
    pbus = document.getElementById("bus");
    pmemoria = document.getElementById("memoria");
    ptipo = document.getElementById("tipo");
    pgrafico = document.getElementById("grafico");
    pinstruccion = document.getElementById("instruccion");
    pgeneracion = document.getElementById("generacion");
    pproducto.innerHTML = "Producto: " + producto;
    pmarca.innerHTML = "Marca: " + marca;
    pmodelo.innerHTML = "Modelo: " + modelo;
    pnucleo.innerHTML = "Cantidad de núcleos: " + nucleo;
    pfrecuencia.innerHTML = "Frecuencia básica del procesador : " + frecuencia;
    pcache.innerHTML = "Caché: " + cache;
    pbus.innerHTML = "Velocidad del bus: " + bus;
    pmemoria.innerHTML = "Tamaño de memoria máximo: " + memoria;
    ptipo.innerHTML = "Tipos de memoria: " + tipo;
    pgrafico.innerHTML = "Frecuencia base de los gráficos: " + grafico;
    pinstruccion.innerHTML = "Conjunto de instrucciones: " + instruccion;
    pgeneracion.innerHTML = "Generación del producto: " + generacion;
    // Mostramos imagen del carro, con el DOM.
    img = document.getElementById("imgProcesador");
    img.innerHTML = '<img src="img/Corei5.png" height="300px" width="350px" />';

    var shop = new Shop();
    var inteli5Builder = new Inteli5Builder();
    var Pi5 = shop.construct(inteli5Builder);

    Pi5.say();
    log.show();
}
function Procesadori7() {
    // Utilizando elementos del DOM para mostrar en los <p> del <alert>.
    var producto = "Procesador", marca = "Intel®", modelo = "Core™ i7-8565U", nucleo = " 4 ", frecuencia = " 1.80 GHz ", cache = " 8 MB SmartCache", bus = " 4 GT/s OPI ", memoria = "32 GB", tipo = "  DDR4-2400, LPDDR3-2133 ", grafico =" 300.0 MHz ", instruccion = " 64-bit ", generacion = "Coffee Lake - Octava Generación";
    pproducto = document.getElementById("producto");
    pmarca = document.getElementById("marca");
    pmodelo = document.getElementById("modelo");
    pnucleo = document.getElementById("nucleo");
    pfrecuencia = document.getElementById("frecuencia");
    pcache = document.getElementById("cache");
    pbus = document.getElementById("bus");
    pmemoria = document.getElementById("memoria");
    ptipo = document.getElementById("tipo");
    pgrafico = document.getElementById("grafico");
    pinstruccion = document.getElementById("instruccion");
    pgeneracion = document.getElementById("generacion");
    pproducto.innerHTML = "Producto: " + producto;
    pmarca.innerHTML = "Marca: " + marca;
    pmodelo.innerHTML = "Modelo: " + modelo;
    pnucleo.innerHTML = "Cantidad de núcleos: " + nucleo;
    pfrecuencia.innerHTML = "Frecuencia base del procesador : " + frecuencia;
    pcache.innerHTML = "Caché: " + cache;
    pbus.innerHTML = "Velocidad del bus: " + bus;
    pmemoria.innerHTML = "Tamaño de memoria máximo: " + memoria;
    ptipo.innerHTML = "Tipos de memoria: " + tipo;
    pgrafico.innerHTML = "Frecuencia base de los gráficos: " + grafico;
    pinstruccion.innerHTML = "Conjunto de instrucciones: " + instruccion;
    pgeneracion.innerHTML = "Generación del producto: " + generacion;
    // Mostramos imagen del carro, con el DOM.
    img = document.getElementById("imgProcesador");
    img.innerHTML = '<img src="img/Corei7.jpg" height="300px" width="350px" />';

    var shop = new Shop();
    var inteli7Builder = new Inteli7Builder();
    var Pi7 = shop.construct(inteli7Builder);

    Pi7.say();
    log.show();
}