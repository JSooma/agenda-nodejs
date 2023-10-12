//Clase Telephone.
class Telephone {
    constructor() {
        this.phone = null;//Propiedad phone.
        this.cellphone = null;//Propiedad cellphone.
    }

    //Métodos Telephone.
    get getPhone() {
        return this.phone;
    }

    set setPhone(phone) {
        this.phone = phone;
    }

    get getCellphone() {
        return this.cellphone;
    }

    set setCellphone(cellphone) {
        this.cellphone = cellphone;
    }

}

export default Telephone;//Se exporta por default la clase Telephone.