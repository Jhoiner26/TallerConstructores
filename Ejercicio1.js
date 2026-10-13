function Computador(marca, procesador, ramGB, precio) {
  this.marca = marca;
  this.procesador = procesador;
  this.ramGB = ramGB;
  this.precio = precio;
}

const pcOficina = new Computador("Lenovo", "Intel i5", 16, 2500000);
const pcGamer = new Computador("ASUS", "AMD Ryzen 7", 32, 5200000);
const macbook = new Computador("Apple", "M2", 16, 4800000);

console.log(pcOficina);
console.log(pcGamer);
console.log(macbook);