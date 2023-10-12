import Diary from "./diary.mjs";
import ps from "prompt-sync";

//Declaración de variables.
const prompt = ps();
const diary = new Diary();
let flag = true;
let option;
//Instrucciones del programa.
const INSTRUCTIONS = `
Las funcionalidades que tiene son las siguientes:
1 - Dar de alta un contacto.
2 - Dar de baja un contacto.
3 - Consultar todos los contactos.
4 - Consultar solamente un contacto.
5 - Terminar programa.
`;

console.log("Bienvenido a la agenda de Node.JS, a continuación elige una de las opciones.");

const options = () => {
        console.log(INSTRUCTIONS);//Imprime en consola las instrucciones.
        option = parseFloat(prompt("Ingresa la funcionalidad que quieras usar: "));
        switch (option) {//Switch que evalúa si el número coincide con alguno de los casos.
            case 1:
                diary.newContact();
                console.log("Contacto registrado.");
                break;
            case 2:
                diary.deleteContact();
                console.log("Contacto eliminado con éxito.");
                break;
            case 3:
                diary.contacts();
                break;
            case 4:
                diary.searchContact();
                break;    
            case 5://En caso de ser 5 cambia la bandera a falso y termina el programa.
                flag = false;
                console.log("Se terminó el programa c:");
                break;
            default://Si el valor no coincide con ninguno pasa a este apartado.
                console.log("Opción no valida, digite una de las opciones validas.");
                break;
        }
}

options();//Llamada al método options.
while(flag) {
    //Si la respuesta es sí entonces se sobrescribe la bandera por la cadena de texto si/no en lowercase.
    flag = prompt("Deseas hacer alguna otra opción? si/no: ").toLocaleLowerCase();

    if(flag === "si") {//Si la respuesta es sí entonces se ejecuta el método nuevamente.
        options();
    } else if(flag === "no") {//Si la respuesta es no entonces la bandera se sobrescribe por false y se termina el programa.
        flag = false;
        console.log("Se terminó el programa c:");
    } else {//Si el input no es ni sí, ni no, entonces se manda este mensaje de alerta.
        console.log("Solo puedes ingresar si o no.");
    }

}



