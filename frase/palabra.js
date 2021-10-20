var x = prompt("Ingresa una palabra")
var nueva = palabra (x);
alert(nueva)

function palabra (cadena){
    //let elementos = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
    let elementos = ["1","2","3","4","5","6","7","8","9","0","*","/","-","+","=","(",")","&","%","$","#","!","¡","|"," "]
    let nuevap = "";

    for (let i = 0; i < cadena.length; i++ ){
        let ver = true;
        for(let j = 0; j < elementos.length; j++){
            if (cadena[i] == elementos[j]){
                ver = false;
            }
        }
        if(ver == true){
            nuevap += cadena[i];
        }else{
            nuevap += "";
        }
    }
    return nuevap;
}