//Clase Adress.
class Adress {
    constructor() {
        this.street = null;//Propiedad street.
        this.cologne = null;//Propiedad cologne.
        this.city = null;//Propiedad city.
        this.state = null;//Propiedad state.
        this.number = null;//Propiedad number.
        this.postalCode = null;//Propiedad postalCode.
    }

    //Métodos Adress.
    get getStreet() {
        return this.street;
    }

    set setStreet(street) {
        this.street = street;
    }

    get getCologne() {
        return this.cologne;
    }

    set setCologne(cologne) {
        this.cologne = cologne;
    }

    get getCity() {
        return this.city;
    }

    set setCity(city) {
        this.city = city;
    }

    get getState() {
        return this.state;
    }

    set setState(state) {
        this.state = state;
    }

    get getNumber() {
        return this.number;
    }

    set setNumber(number) {
        this.number = number;
    }

    get getPostalCode() {
        return this.postalCode;
    }

    set setPostalCode(postalCode) {
        this.postalCode = postalCode;
    }

}

export default Adress;