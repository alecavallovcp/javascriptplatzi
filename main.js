function sumar (a,b){
    return a+b;
}

function secuenciar (n){
    if (n<0 || n>5){
        alert("El número ingresado debe ser mayor a 0 y menor a 5 (ingresaste "+n+").");
        return;
    }
    for(i=1;i<=n;i++){
        alert("Esta es la repetición "+ i + " de "+n);
    } 
}