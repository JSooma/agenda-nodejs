import Contact from "./contact.mjs";
import ps from "prompt-sync";
import fs from "fs";

const prompt = ps();

//Clase Diary.
class Diary {
    constructor()  {
        this.contact = new Contact();//Instancia de la clase Contact.
        this.diary = [];//Propiedad la cual es un arreglo que contendrá los datos de la agenda.

    }

    //Método el cual tiene como función mostrar todos los datos que contiene la agenda.
    contacts() {
        for(let i = 0; i < this.diary.length; i++) {
            console.log(`
            ********* Contacto ${i} *********
            ${this.diary[i][0]}
            `);
        }
        
    }

    //Método que borrará un contacto en base al número de contacto asignado.
    deleteContact() {
        let aux = [];
        let file = "";

        const id = parseFloat(prompt("Ingresa el número del contacto que deseas borrar: "));
        for(let i = 0; i < this.diary.length; i++) {
            if(!(id === i)) {
                aux.push(this.diary[i]);
            }
        }

        this.diary = aux;

        //Se pasan todos los registros de contactos a la variable file.
        for(let i = 0; i < this.diary.length; i++) {
            file += `********* Contacto ${i} *********
            ${this.diary[i][0]}
            \n`;//Se le asigna a la variable file los datos de la agenda.
        }

        //El método writeFileSync crea una archivo de texto con los datos que se vayan registrando en la agenda.
        fs.writeFileSync("db/db.txt", file, (err) => {
            if(err) {
                console.log("Hubo un error.");
            }
        });
    }

    //Método de consulta de un contacto por medio del número de registro.
    searchContact() {
        let number = prompt("Ingresa el número del contacto: ");
        while(number >= this.diary.length) {
            console.log("Este contacto no está registrado, favor de ingresar un número de un contacto registrado.");
            number = prompt("Ingresa el número de contacto: ");
        }

        console.log(`
        ********* Contacto ${number} *********
        ${this.diary[number][0]}
        `);
    }

    //Método para crear un nuevo contacto.
    newContact() {
        let log = "";//Variable que almacena un nuevo registro.
        let file = "";//Variable que almacena el registro para el documento de texto.

        //Datos para un nuevo registro.
        console.log("Ingresa los datos que se te piden.");
        const name = prompt("Nombre: ");
        const paternalSurname = prompt("Apellido paterno: ");
        const maternalSurname = prompt("Apellido materno: ");
        const birthdate = prompt("Fecha de nacimiento: ");
        const email = prompt("Email: ");
        const street = prompt("Calle: ");
        const cologne = prompt("Colonia: ");
        const city = prompt("Ciudad: ");
        const state = prompt("Estado: ");
        const number = prompt("Número: ");
        const postalCode = prompt("Código postal: ");
        const telephone = prompt("Teléfono: ");
        const cellphone = prompt("Celular: ");

        this.contact.setName = name;
        this.contact.setPaternalSurname = paternalSurname;
        this.contact.setMaternalSurname = maternalSurname;
        this.contact.setBirthdate = birthdate;
        this.contact.setEmail = email;
        this.contact.setStreet = street;
        this.contact.setCologne = cologne;
        this.contact.setCity = city;
        this.contact.setState = state;
        this.contact.setNumber = number;
        this.contact.setPostalCode = postalCode;
        this.contact.setPhone = telephone;
        this.contact.setCellphone = cellphone;

        log = `
        Nombre: ${this.contact.getName}
        Apellido paterno: ${this.contact.getPaternalSurname}
        Apellido materno: ${this.contact.getMaternalSurname}
        Fecha de nacimiento: ${this.contact.getBirthdate}
        Email: ${this.contact.getEmail}
        Calle: ${this.contact.getStreet}
        Colonia: ${this.contact.getCologne}
        Ciudad: ${this.contact.getCity}
        Estado: ${this.contact.getState}
        Número: ${this.contact.getNumber}
        Código postal: ${this.contact.getPostalCode}
        Teléfono: ${this.contact.getPhone}
        Teléfono celular: ${this.contact.getCellphone}
        `;

        this.diary.push([log]);//Se registra el nuevo contacto.

        //Se pasan todos los registros de contactos a la variable file.
        for(let i = 0; i < this.diary.length; i++) {
            file += `********* Contacto ${i} ********* 
            ${this.diary[i][0]}
            \n`;//Se le asigna a la variable file los datos de la agenda.
        }

        //El método writeFileSync crea una archivo de texto con los datos que se vayan registrando en la agenda.
        fs.writeFileSync("db/db.txt", file, (err) => {
            if(err) {
                console.log("Hubo un error.");
            }
        });

    }



}

export default Diary;//Se exporta por default la clase Diary.