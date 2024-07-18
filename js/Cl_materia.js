export default class Cl_materia{
    constructor(){
        this.cantE=0;
        this.cantA=0;
        this.mayor=0;
        this.auxC="";

    }

    procesarEstudiante(es){
        this.cantE++;

        if(es.notaF>48){
            this.cantA++;
        }

        if(es.notaF>this.mayor){
            this.mayor=es.notaF;
            this.auxC=es.getCedula();
        }

    }

    devAuxC(){
        return this.auxC;
    }

    porcEA(){
        return (this.cantA/this.cantE)*100;
    }


}