class Persona{
    constructor(nombre,edad,telefono){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.estado = "disponible";      
    }

    mostrarDatos(){
        return "nombre: "+this.nombre+" ,Telefono: "+this.telefono;
    }

    cargarTelefono(tel){
        if(tel != ""){
            this.telefono = tel;
        }else{
            this.telefono="vacio";
        }
    }       
}  

class Alumno extends Persona {
    constructor(nombre, edad, telefono, matricula, fecha){
        super(nombre, edad, telefono)
        this.numeroMatricula = matricula;
        this.fechaMatricula = fecha;
    }

    mostrarDatos(){
        return super.mostrarDatos() + "Matricula: " + this.numeroMatricula;
    }
}   

pagina = document.getElementById("contenedor");   
   
const p1 = new Persona("Carlos",26,"13165");
p1.cargarTelefono("");
p1.telefono="154651";
pagina.innerHTML = p1.mostrarDatos();   

const alu1 = new Alumno("Camila", 28, "04894651",12345,"12/02/2025");
pagina.innerHTML += alu1.mostrarDatos();    