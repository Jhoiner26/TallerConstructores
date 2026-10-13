function Libro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.prestado = false;

  this.prestar = function () {
    if (!this.prestado) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  };

  this.devolver = function () {
    if (this.prestado) {
      this.prestado = false;
      console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    } else {
      console.log(`El libro "${this.titulo}" no estaba prestado.`);
    }
  };
}

const miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 417);

miLibro.prestar();
miLibro.prestar();
miLibro.devolver();
miLibro.devolver(); 