//5 pizzas
//5 acompañamientos
//4 gaseosas


//funciones para las pizzas
function italiana(){
    let pizza1 = document.getElementById("italiana").value;
    return pizza1;
}

function pollo(){
    let pizza2 = document.getElementById("pollo").value;
    return pizza2;
}

function peperoni(){
    let pizza3 = document.getElementById("peperoni").value;
    return pizza3;
}

function hawaiana(){
    let pizza4 = document.getElementById("hawaiana").value;
    return pizza4;
}

function ranchera(){
    let pizza5 = document.getElementById("ranchera").value;
    return pizza5;
}


//funciones para los acompañamientos

function papas(){
    let papasFritas = document.getElementById("papasFritas").value;
    return papasFritas;
}

function ensaladaClasica(){
    let ensaladaClasica = document.getElementById("ensaladaClasica").value;
    return ensaladaClasica;
}

function ensaladaDulce(){
    let ensaladaDulce = document.getElementById("ensaladaDulce").value;
    return ensaladaDulce;
}

function alitas(){
    let alitas = document.getElementById("alitas").value;
    return alitas;
}

function tartaManzana(){
    let tartaManzana = document.getElementById("tartaManzana").value;
    return tartaManzana;
}


//funciones para las bebidas

function cocaCola(){
    let cocaCola = document.getElementById("cocaCola").value;
    return cocaCola;
}

function pepsi(){
    let pepsi = document.getElementById("pepsi").value;
    return pepsi;
}

function jugoMora(){
    let jugoMora = document.getElementById("jugoMora").value;
    return jugoMora;
}

function limonada(){
    let limonada = document.getElementById("limonada").value;
    return limonada;
}

//funcion para el precio total
function precioFinal(){
    let precioItaliana = italiana()*32000;
    let precioPollo = pollo()*20000;
    let precioPeperoni = peperoni()*25000;
    let precioHawaiana = hawaiana()*28000;
    let precioRanchera = ranchera()*30000;
    let precioPapas = papas()*3000;
    let precioEnsaladaDulce = ensaladaDulce*6000;
    let precioEnsaladaClasica = ensaladaClasica*4500;
    let precioAlitas = alitas*3500;
    let precioTartaManzana = tartaManzana*8000;
    let precioCocaCola = cocaCola*4000;
    let precioPepsi = pepsi*3500;
    let precioJugoMora = jugoMora*3000;
    let precioLimonada = limonada*2500;
    let precioTotal = precioItaliana+precioPollo+precioPeperoni+precioHawaiana+precioRanchera+precioPapas+precioEnsaladaDulce+precioEnsaladaClasica+precioAlitas+precioTartaManzana+precioCocaCola+precioPepsi+precioJugoMora+precioLimonada+1500;
    let mostarValor = document.getElementById("mostrar");
    mostarValor.innerHTML="el valor de las pizzas es: "+precioTotal
}


//funcion para mostrar la cantidad de pizzas compradas y su sabor

function cantidadPizzas(){
    let cantidadItaliana = document.getElementById("italiana").value;
    let cantidadPollo = document.getElementById("pollo").value;
    let cantidadPeperoni = document.getElementById("peperoni").value;
    let cantidadHawaiana = document.getElementById("hawaiana").value;
    let cantidadRanchera = document.getElementById("ranchera").value;
    let mostarCantidad = document.getElementById("cantidadPizzas");
    mostarCantidad.innerHTML="la cantidad de pizzas italianas es:  "+cantidadItaliana;
    +`<br>`+"la cantidad de pizzas de pollo es:  "+cantidadPollo;
    +`<br>`+"la cantidad de pizzas de peperoni es:  "+cantidadPeperoni;
    +`<br>`+"la cantidad de pizzas hawaianas es:  "+cantidadHawaiana;
    +`<br>`+"la cantidad de pizzas rancheras es:  "+cantidadRanchera;
}

//funcion para mostrar la cantidad de acompañamientos comprados 

function cantidadAcompañamientos(){
    let cantidadPapasFritas = document.getElementById("papasFritas").value;
    let cantidadEnsaladaClasica = document.getElementById("ensaladaClasica").value;
    let cantidadEnsaladaDulce = document.getElementById("ensaladaDulce").value;
    let cantidadAlitas = document.getElementById("alitas").value;
    let cantidadTartaManzana = document.getElementById("tartaManzana").value;
    let mostarCantidadAcompañamientos = document.getElementById("cantidadAcompañamientos");
    mostarCantidadAcompañamientos.innerHTML="la cantidad de papas fritas es:  "+cantidadPapasFritas;
    +`<br>`+"la cantidad de ensaladas clasicas es:  "+cantidadEnsaladaClasica;
    +`<br>`+"la cantidad de ensaladas dulces es:  "+cantidadEnsaladaDulce;
    +`<br>`+"la cantidad de alitas es:  "+cantidadAlitas;
    +`<br>`+"la cantidad de tartas de manzana es:  "+cantidadTartaManzana;
}


//funcion para mostrar la cantidad de bebidas compradas y su sabor 

function cantidadBebidas(){
    let cantidadCocaCola = document.getElementById("cocaCola").value;
    let cantidadPepsi = document.getElementById("pepsi").value;
    let cantidadJugoMora = document.getElementById("jugoMora").value;
    let cantidadLimonada = document.getElementById("limonada").value;
    let mostarCantidadBebidas = document.getElementById("cantidadBebidas");
    mostarCantidadBebidas.innerHTML="la cantidad de coca colas es:  "+cantidadCocaCola;
    +`<br>`+"la cantidad de jugos de mora es:  "+cantidadJugoMora;
    +`<br>`+"la cantidad de pepsi es:  "+cantidadPepsi;
    +`<br>`+"la cantidad de limonadas es:  "+cantidadLimonada;
}