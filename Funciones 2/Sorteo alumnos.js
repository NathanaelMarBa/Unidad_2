var x = parseInt(prompt("Cuantos alumnos van a asistir?"))
var alumnos = ["alexa", "andrik", "Daniel","Marcelo","Dilan","Dafne","Danae","Brayan","Edder","Fernando","Tamara","Isaac","Eduardo","Jose","Arely","Nathanael"]
var asis = []
alum();

function alum(){
    random(alumnos, asis, x);
    alert (asis);
}
function random(a, asi, num){
    for(i = 1; i <= num; i++){
        b = Math.floor(Math.random()*(a.length));
        c = a[b];
        alert("El/La alumn@ " + c + " asistira el dia viernes")
        asi.push(c);
        a.splice(b, 1)
    }
}