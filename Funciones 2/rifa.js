var x = parseInt(prompt("Cuantas personas van a participar en la rifa?"))
var nom = [];

    for(i = 1; i <= x; i++){
        var z = prompt("Nombre del participante")
        nom.push(z);
    }

//alea (nom);
function alea (a){
    b = Math.floor(Math.random()*(a.length));
    c = a[b];
    alert("El ganador es: " + c);
    console.log(a);
}

