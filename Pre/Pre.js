function datos (){
    let cant = parseInt(prompt("Cuantos alumnos quieres registrar"));
    let nombres = [];
    let matriculas = [];
    let grupos = [];
    let sexos = [];
    let calificaciones = [];
    var contalumnos = 0;
    let hombres = 0;
    let mujeres = 0;
    let suma = 0;
    for (let i = 1; i <= cant; i++){
        let nombre = prompt("Ingresa el nombre del alumno/a");
        let matricula = prompt("Ingresa la matricula");
        let grupo = prompt("Ingresa el grupo");
        var sexo = prompt("Ingresa el sexo del alumno/a (M/F)");
        if (sexo == "M"){
            hombres++;
        }else{
            mujeres++;
        }
        let calificacion = parseFloat(prompt("Ingresa su calificacion"));
        suma = suma + calificacion;

        nombres.push(nombre);
        matriculas.push(matricula);
        grupos.push(grupo);
        sexos.push(sexo);
        calificaciones.push(calificacion);
        alert("Alumno Registrado")
    }
    contalumnos = hombres + mujeres;
    let promedio = suma / contalumnos;
    console.log(nombres);
    console.log(matriculas);
    console.log(grupos);
    console.log(sexos);
    console.log(calificaciones); 
    menu(contalumnos, hombres, mujeres, promedio, matriculas, nombres, grupos, sexos, calificaciones);

}

function cantidad(contalumnos){
    alert("Se han registrado " + contalumnos + " alumnos");
}

function cantidads (hombres, mujeres){
    alert("Hay " + hombres + " Hombres")
    alert("Hay " + mujeres + " Mujeres")
    
}

function media(promedio){
    alert("La Media de calificaciones es: " + promedio);
}

function alumnoe(matriculas, nombres, grupos, sexos, calificaciones){
    let matricula = prompt("Ingresa la matricula del alumno/a");
     for (let i = 0; i < matriculas.length; i++){
        if (matricula == matriculas[i]){
            alert("El alumno/a " + nombres[i] + " del grupo " + grupos[i] + " del sexo " + sexos[i] + " tiene una calificacion de " + calificaciones[i]);
        }
    }
}
function conjunto(sexos, calificaciones){
    x = parseInt(prompt("Ingresa el numero de alumnos que deseas ver"));
    let hombres = 0;
    let mujeres = 0;
    let total = 0;
    let suma = 0;
    for (let i = 2; i < x; i++){
        for(z = 0; z < sexos.length; z++){
            if (sexos[z] == "M"){
                hombres++;
            }else{
                mujeres++;
            }
        }
    }
    for (let m = 0; m < calificaciones.length; m++) {
        suma += calificaciones[m];
    }
    let promedio = suma / calificaciones.length;
    total = hombres + mujeres;
    alert("Hay " + total + " Alumnos")
    alert("Hay " + hombres + " Hombres")
    alert("Hay " + mujeres + " Mujeres")
    alert("La media de calificaciones es: " + promedio);
}
function grupo(matriculas, nombres, grupos, sexos, calificaciones){
    let grupo = prompt("Ingresa El grupo que desas ver");
    var suma = 0;
    let hombres = 0;
    let mujeres = 0;
    let sum = 0;

    for (var i = 0; i < grupos.length; i++){
        if (grupo == grupos[i]){
            suma = suma + 1;
        }
    }
    for (let z = 1; z < sexos.length; z++){
        if (sexos[z] == "M"){
            hombres++;
        }else{
            mujeres++;
        }
    }
    for (let m = 0; m < calificaciones.length; m++) {
        sum += calificaciones[m];
    }
    let promedio = sum / calificaciones.length;

    alert("El grupo " + grupo + " tiene " + suma + " alumnos")
    alert("Hay " + hombres + " Hombres " + " en el grupo: " + grupo)
    alert("Hay " + mujeres + " Mujeres" + " en el grupo: " + grupo)
    alert("La media de calificaciones es: " + promedio + " en el grupo: " + grupo)

    let matricula = prompt("Ingresa la matricula del alumno/a");
     for (let n = 0; n < matriculas.length; n++){
        if (matricula == matriculas[n]){
            alert("El alumno/a " + nombres[n] + " del grupo " + grupos[n] + " del sexo " + sexos[n] + " tiene una calificacion de " + calificaciones[n]);
        }
    }
}

datos();

function menu(contalumnos, hombres, mujeres, promedio, matriculas, nombres, grupos, sexos, calificaciones){
    let cont = 1;
    while (cont == 1){
        let Opc = prompt("Ingresa la opcion que desas" + "\n" + "1. Cantidad de alumnos" + "\n" + "2. Cantidad alumnos por genero" + "\n" + "3. Media de calificaciones" + "\n" + "4. Alumno Especifico" + "\n" + "5. Conjunto de alumnos" + "\n" + "6. Informacion por grupo" + "\n" + "7. Salir");
        switch(Opc){
            case "1":
                cantidad(contalumnos);
                break;
            case "2":
                cantidads(hombres, mujeres);
                break;
            case "3":
                media(promedio);
                break;
            case "4":
                alumnoe(matriculas, nombres, grupos, sexos, calificaciones);
                break;
            case "5":
                conjunto(sexos, calificaciones);
                break;
            case "6":
                grupo(matriculas, nombres, grupos, sexos, calificaciones);
                break;
            case "7":
                cont = 0;
                break;
            }
    }
}