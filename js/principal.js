/**RESULTADOS MATERIA
Sea la información de varios estudiantes: cédula y nota final. 
Se sabe que los estudiantes aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: 
porcentaje de aprobados y cédula de alguno de los mejores estudiantes.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 
888 (60Ptos), 777 (50Ptos), 999 (40Ptos), 333 (90Ptos), 111 (30Ptos), 
666 (90Ptos), 444 (48Ptos) y 222 (60Ptos), 

la salida que se espera es como la siguiente:
Porcentaje de aprobados: 75%
Cédula de uno de los mejores estudiantes: 333
 * 
 */

import Cl_estudiante from "./Cl_estudiante.js";
import Cl_materia from "./Cl_materia.js";

let est1=new Cl_estudiante ("888",60);
let est2=new Cl_estudiante ("777",50);
let est3=new Cl_estudiante ("999",40);
let est4=new Cl_estudiante ("333",90);
let est5=new Cl_estudiante ("111",30);
let est6=new Cl_estudiante("666",90);
let est7=new Cl_estudiante ("444",48);
let est8=new Cl_estudiante ("222",60);


let materia=new Cl_materia();

materia.procesarEstudiante(est1);
materia.procesarEstudiante(est2);
materia.procesarEstudiante(est3);
materia.procesarEstudiante(est4);
materia.procesarEstudiante(est5);
materia.procesarEstudiante(est6);
materia.procesarEstudiante(est7);
materia.procesarEstudiante(est8);


let salida=document.getElementById("salida");

salida.innerHTML+= "Resultados Materia";
salida.innerHTML+="<br><br>Porcentaje de aprobados:  " +materia.porcEA();
salida.innerHTML+="%"
salida.innerHTML+="<br> Cédula de uno de los mejores estudiantes:"  +materia.devAuxC();