var acc = prompt("Selecciona el movimiento que desas realizar " + "1. Deposito " + "2. Saldo " + "3. Retiro " + "4. Salir " );
var deposito = 0;
var saldo = 0;
var retiro = 0;

switch(acc){
    case "1":
        var dp = parseInt(prompt("Ingresa el monto a depositar: "))
        deposito = deposito + dp;
        parseInt(alert("Su saldo anterior era de: " + saldo + " Pesos"))
        parseInt(alert("Su saldo actual es de de: " + deposito + " Pesos"))
        saldo = saldo + deposito;
        break;

        case "2":
        parseInt(alert("Su saldo actual es de de: " + saldo + " Pesos"))
        break;

        case "3":
        var dp = parseInt(prompt("Ingresa el monto a retirar: "))
        alert("Su saldo anterior era de: " + saldo + " Pesos")
        saldo = saldo - retiro;
        alert("Su saldo actual es de de: " + retiro + " Pesos")
        break;

        case "4":
        alert("Sus movimientos fueron realizados con exito, gracias por confiar en nostros")
        break;

        default:
            alert("Ese movimiento no se encuentra disponible")
}

//return acc