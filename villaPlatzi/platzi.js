var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var areacerdo = document.getElementById("canvascerdo")
var papelcerdo = areacerdo.getContext("2d");
console.log(areacerdo);

// Números aleatorios utilizados
var cant = 10; //CUÁNTOS ANIMALES?
var cantidadVacas = aleatorio(0,cant);
var cantidadPollos = aleatorio(0,cant);
var cantidadCerdos = aleatorio(0,cant);
var tamano_animal = 80; // TAMAÑO DE LA IMAGEN DE LOS ANIMALES
var tamano_canvas = vp.width; // ANCHO DEL CANVAS
var espacios = Math.floor((tamano_canvas-tamano_animal)/tamano_animal);

console.log("Tamaño del CANVAS: "+tamano_canvas);
console.log("Cantidad de espacios: "+espacios);

// CREAMOS LOS OBJETOS ANIMALES
var fondo = {
    url: "tile.png",
    cargaOK: false
}
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

var vaca = {
    url:"vaca.png",    
    cargaOK: false
}
vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

var pollo = {
    url:"pollo.png",    
    cargaOK: false
}
pollo.imagen = new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

var cerdo = {
    url:"cerdo.png",    
    cargaOK: false
}
cerdo.imagen = new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

// FUNCIONES QUE CARGAN LAS IMAGENES
function cargarFondo()
{
    console.log("Cargo Fondo");
    fondo.cargaOK= true; 
    dibujar();
}

function cargarVacas()
{
    console.log("Cargo Vaca");
    vaca.cargaOK= true; 
    dibujar();
}
function cargarPollos()
{
    console.log("Cargo Pollo");
    pollo.cargaOK= true; 
    dibujar();
}
function cargarCerdos()
{
    console.log("Cargo Cerdo");
    cerdo.cargaOK= true; 
    dibujar();
}

// FUNCIÓN QUE DIBUJA EN EL ORDEN QUE QUEREMOS
function dibujar()
{
    console.log("DIBUJAR")
    if (fondo.cargaOK){
        console.log("Dibujando Fondo");
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK){
        console.log("Cantidad de VACAS: "+cantidadVacas);
        for (var i=0;i<cantidadVacas;i++)
        {
            var x = aleatorio(0,espacios);
            x = x*tamano_animal;
            var y = aleatorio(0,espacios);
            y = y*tamano_animal;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
    if (pollo.cargaOK){
        console.log("Cantidad de POLLOS: "+cantidadPollos);
        for (var i=0;i<cantidadPollos;i++)
        {
            var x = aleatorio(0,espacios);
            x = x*tamano_animal;
            var y = aleatorio(0,espacios);
            y = y*tamano_animal;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
    if (cerdo.cargaOK){
        console.log("Cantidad de CERDOS: "+cantidadCerdos);
        for (var i=0;i<cantidadCerdos;i++)
        {
            var x = aleatorio(0,espacios);
            x = x*tamano_animal;
            var y = aleatorio(0,espacios);
            y = y*tamano_animal;
            papel.drawImage(cerdo.imagen,x,y);
        }
    }
    if (cerdoJefe.cargaOK){

        console.log("Cargo Cerdo JEFE en "+jefex+","+jefey);
        papel.drawImage(cerdoJefe.imagen,jefex,jefey);
    }
}

// PARA CARGAR UN CERDO QUE MANEJEMOS CON EL TECLADO
var teclas = {UP:38,DOWN:40,LEFT:37,RIGHT:39};
var jefex = tamano_canvas/2-tamano_animal/2; //UBICACIÓN INICIAL CENTRO
var jefey = tamano_canvas/2-tamano_animal/2;

var cerdoJefe = {
    url: "cerdo.png",
    cargaOK: false
}
cerdoJefe.imagen = new Image();
cerdoJefe.imagen.src=cerdoJefe.url;
cerdoJefe.imagen.addEventListener("load",cargarJefe);

function cargarJefe()
{
    console.log("Cargo el Jefe");
    cerdoJefe.cargaOK= true; 
    dibujarJefe();
}
function dibujarJefe(){
    papelcerdo.drawImage(cerdoJefe.imagen,jefex,jefey);
}

document.addEventListener("keydown",moverCerdo);
function moverCerdo(evento)
{
    var mov = 10;
    // borro canvas
    areacerdo.width=areacerdo.width;

    switch (evento.keyCode)
    {
        case teclas.UP:
            console.log("Moviendo hacia arriba");
            jefey= jefey-mov;
            dibujarJefe();
            break;
        case teclas.DOWN:
            console.log("Moviendo hacia abajo");
            jefey=jefey+mov;
            dibujarJefe();
            break;
        case teclas.LEFT:
            console.log("Moviendo hacia la izquierda");
            jefex=jefex-mov;
            dibujarJefe();
            break;
        case teclas.RIGHT:
            console.log("Moviendo hacia la derecha");
            jefex=jefex+mov;
            dibujarJefe();
            break;
    }
}


function aleatorio(min, maxi){
    var resultado;
    resultado = Math.floor(Math.random()*(maxi - min + 1))+min;
    return resultado;
}
