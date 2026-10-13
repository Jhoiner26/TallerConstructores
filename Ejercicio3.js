
function Estudiante(nombre, curso, nota) {
  this.nombre = nombre;
  this.curso = curso;
  this.nota = nota;
  this.aprobado = this.nota >= 3.0;

  this.mostrarResultado = function () {
    const estado = this.aprobado ? "APROBÓ" : "REPROBÓ";
    console.log(`El estudiante ${this.nombre} del curso ${this.curso} ${estado} con una nota de ${this.nota}.`);
  };
}

const estudiante1 = new Estudiante("Camilo", "JavaScript", 4.5);
const estudiante2 = new Estudiante("Andrea", "Java", 2.8);
const estudiante3 = new Estudiante("Mateo", "Python", 3.0);
const estudiante4 = new Estudiante("Sofía", "SQL", 1.5);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();