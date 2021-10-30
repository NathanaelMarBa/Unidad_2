var nombre = ["Natha", "Erika", "Dilan", "Brayan", "Daniel", "Yasmin", "Daniel", "Tomas", "Emmanuel", "jose"];
var sexo = ["masculino", "femenino","masculino", "femenino","masculino", "femenino","masculino", "femenino","masculino", "femenino",]
var apellidoP = ["Aguilar","Lopez","Martinez","Cano","Marque","Estevez","Hernandez","Tolentino","Barrientos","Atilano"];
var apellidoM = ["Vera","Cardoso","Gonzalez","Aveldaño","Espinoza","Fuentes","Fernandez","Becerra","Zavala","Navarrete"];
var edades = ["11","12","13","14","15","16","17","18","19","20"];


function per (){
    for (i = 0; i<=1000; i++){
        aleatorion = Math.floor(Math.random()*(nombre.length));
        seleccionn = nombre[aleatorion]
        
        aleatorioa = Math.floor(Math.random()*(apellidoP.length));
        selecciona = apellidoP[aleatorioa]
        
        aleatorioam = Math.floor(Math.random()*(apellidoM.length));
        seleccionam = apellidoM[aleatorioam]
        
        aleatorioe = Math.floor(Math.random()*(sexo.length));
        seleccione = sexo[aleatorioe]
        
        aleatorios = Math.floor(Math.random()*(edades.length));
        seleccions = edades[aleatorios]
        console.log(seleccionn + " " + selecciona + " " + seleccionam + " " + seleccione + " " + seleccions);
    }
}