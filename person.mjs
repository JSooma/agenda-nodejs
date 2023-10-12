//Clase Person.
class Person {
    constructor() {
        this.name = null;//Propiedad name.
        this.paternalSurname = null;//Propiedad paternalSurname.
        this.maternalSurname = null;//Propiedad maternalSurname.
        this.birthdate = null;//Propiedad birthdate.
    }

    //Métodos Person.
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getPaternalSurname() {
        return this.paternalSurname;
    }

    set setPaternalSurname(paternalSurname) {
        this.paternalSurname = paternalSurname;
    }

    get getMaternalSurname() {
        return this.maternalSurname;
    }

    set setMaternalSurname(maternalSurname) {
        this.maternalSurname = maternalSurname;
    }

    get getBirthdate() {
        return this.birthdate;
    }

    set setBirthdate(birthdate) {
        this.birthdate = birthdate;
    }

}


export default Person;//Se exporta por default la clase Person.