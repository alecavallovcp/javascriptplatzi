var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d"); 
var ancho = d.width;



var boton=document.getElementById("botoncito");
var texto=document.getElementById("texto_lineas");

var boton2=document.getElementById("boton_tamano");
var texto2=document.getElementById("texto_tamano");

boton.addEventListener("click",dibujoPorClick);
boton2.addEventListener("click",aplicarTamano);

//console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function aplicarTamano()
{
    var y = parseInt(texto2.value);
    d.width=y;
    d.height=y;
    console.log("Tamaño aplicado al canvas: "+parseInt(texto2.value))
}

function dibujoPorClick()
{
    var ancho = d.width;
    var lineas=parseInt(texto.value);
    var l = 0;
    var colorcito="blue";
    var espacio = ancho/lineas;
    
    //borro el canvas
    d.width=d.width;

    //Dibujo on while desde la esquina izquierda inferior
        while(l<lineas)
        {
            yi=espacio*l;
            xf=espacio*(l+1);
            dibujarLinea(colorcito,0,yi,xf,ancho);
            //console.log("Linea "+l);
            l=l+1;
        }

        //Dibujo con for la esquina inferior derecha
        for(l=0;l<lineas;l=l+1)
        {
            yi=ancho-espacio*l;
            xf=espacio*(l+1);
            dibujarLinea("brown",ancho,yi,xf,ancho);
            //console.log("Linea "+l);

        }

        //esquina superior derecha
        for(l=0;l<lineas;l=l+1)
        {
            xi=espacio*l;
            yf=espacio*(l+1);
            dibujarLinea("black",xi,0,ancho,yf);
        }
        //esquina superior izquierda
        for(l=0;l<lineas;l=l+1)
        {
            yi=ancho-espacio*l;
            xf=espacio*(l+1);
            dibujarLinea("yellow",0,yi,xf,0);
        }


        dibujarLinea("black",1,1,1,ancho-1);
        dibujarLinea("black",1,ancho-1,ancho-1,ancho-1);
        dibujarLinea("black",ancho-1,1,ancho-1,ancho-1);
        dibujarLinea("black",1,1,ancho-1,1);
        
        //alert("Valor del texto: "+x);
}



