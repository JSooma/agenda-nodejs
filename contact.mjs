import Person from "./person.mjs";
import Adress from "./adress.mjs";
import Telephone from "./telephone.mjs";

//Clase Contact.
class Contact {
    constructor() {
        this.person = new Person();//Instancia de la clase Person.
        this.adress = new Adress();//Instancia de la clase Adress.
        this.telephone = new Telephone();//Instancia de la clase Telephone.
        this.email = null;//Propiedad Email.
    }

    //Métodos Email.
    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        this.email = email;
    }

    //Métodos Person.
    get getName() {
        return this.person.getName;
    }

    set setName(name) {
        this.person.setName = name;
    }

    get getPaternalSurname() {
        return this.person.getPaternalSurname;
    }

    set setPaternalSurname(paternalSurname) {
        this.person.setPaternalSurname = paternalSurname;
    }

    get getMaternalSurname() {
        return this.person.getMaternalSurname;
    }

    set setMaternalSurname(maternalSurname) {
        this.person.setMaternalSurname = maternalSurname;
    }

    get getBirthdate() {  
        return this.person.getBirthdate;
    }

    set setBirthdate(birthdate) {
        this.person.setBirthdate = birthdate;
    }

    //Métodos Adress.
    get getStreet() {
        return this.adress.getStreet;
    }

    set setStreet(street) {
        this.adress.setStreet = street;
    }

    get getCologne(){
        return this.adress.getCologne;
    }

    set setCologne(cologne) {
        this.adress.setCologne = cologne;
    }

    get getCity() {
        return this.adress.getCity;
    }

    set setCity(city) {
        this.adress.setCity = city;
    }

    get getState() {
        return this.adress.getState;
    }

    set setState(state) {
        this.adress.setState = state;
    }

    get getNumber() {
        return this.adress.getNumber;
    }

    set setNumber(number) {
        this.adress.setNumber = number;
    }

    get getPostalCode() {
        return this.adress.getPostalCode;
    }

    set setPostalCode(postalCode) {
        this.adress.setPostalCode = postalCode;
    }

    //Métodos Telephone.
    get getPhone() {
        return this.telephone.getPhone;
    }

    set setPhone(phone) {
        this.telephone.setPhone = phone;
    }

    get getCellphone() {
        return this.telephone.getCellphone;
    }

    set setCellphone(cellphone) {
        this.telephone.setCellphone = cellphone;
    }

}

//Exportar por default la clase contacto.
export default Contact;

