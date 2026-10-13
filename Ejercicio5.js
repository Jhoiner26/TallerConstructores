const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Vehiculo(marca, modelo, kilometraje, precio, encendido = false) {
  this.marca = marca;
  this.modelo = modelo;
  this.kilometraje = kilometraje;
  this.precio = precio;
  this.encendido = encendido;

  this.encender = function () {
    this.encendido = true;
    console.log(`El vehículo ${this.marca} ${this.modelo} ha sido encendido.`);
  };

  this.realizarMantenimiento = function () {
    console.log(`Mantenimiento realizado al ${this.marca} ${this.modelo}.`);
  };

  this.actualizarKilometraje = function (nuevosKm) {
    if (nuevosKm > this.kilometraje) {
      this.kilometraje = nuevosKm;
      console.log(`Kilometraje del ${this.marca} actualizado a ${this.kilometraje} km.`);
    } else {
      console.log(`El nuevo kilometraje debe ser mayor al actual (${this.kilometraje} km).`);
    }
  };
}

const vehiculos = [];

function pedirVehiculo(numero) {
  if (numero > 3) {
    vehiculos.forEach((auto) => {
      console.log(`\n--- ${auto.marca} ${auto.modelo} ---`);
      auto.encender();
      auto.actualizarKilometraje(auto.kilometraje + 5000);
      auto.realizarMantenimiento();
    });
    rl.close();
    return;
  }

  rl.question(`Marca del vehículo ${numero}: `, (marca) => {
    rl.question("Modelo: ", (modelo) => {
      rl.question("Kilometraje: ", (km) => {
        rl.question("Precio: ", (precio) => {
          const auto = new Vehiculo(marca, modelo, Number(km), Number(precio));
          vehiculos.push(auto);
          pedirVehiculo(numero + 1);
        });
      });
    });
  });
}

pedirVehiculo(1);