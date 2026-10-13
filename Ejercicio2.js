function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.peso = peso;

  this.presentarse = function () {
    return `Mascota: ${this.nombre} | Especie: ${this.especie} | Edad: ${this.edad} años | Peso: ${this.peso} kg`;
  };
}

const paciente1 = new Mascota("Bruno", "Perro", 4, 18);
const paciente2 = new Mascota("Michi", "Gato", 2, 4);
const paciente3 = new Mascota("Kiko", "Loro", 5, 0.8);

console.log(paciente1.presentarse());
console.log(paciente2.presentarse());
console.log(paciente3.presentarse());