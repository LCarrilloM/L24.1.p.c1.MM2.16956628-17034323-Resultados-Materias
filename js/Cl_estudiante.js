export default class Cl_estudiante{
    constructor(cedula,notaF){
        this.cedula=cedula;
        this.notaF=notaF;
    }

    setCedula(c){
        this.cedula=c;
    }

    setNotaF(nf){
        this._notaF=+nf;
    }

    getCedula(){
        return this._cedula;
    }

    getNotaF(){
        return this._notaF;
    }
}