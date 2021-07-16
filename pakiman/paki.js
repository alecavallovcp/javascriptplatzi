// Creamos un "DICCIONARIO" usando un array asociativo cuyas posiciones son strings
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";
//console.log(imagenes)

var coleccion = [];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

console.log(coleccion);

//for(var i=0;i<coleccion.length;i++)
for(var i in coleccion)
{
    coleccion[i].mostrar();
}
/* for(var i of coleccion)
{
    i.mostrar();
} */

for (x in coleccion[0])
{console.log(x);}