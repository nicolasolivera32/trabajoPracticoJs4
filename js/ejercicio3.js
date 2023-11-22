/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
  constructor(altoParam, anchoParam) {
    this.alto = altoParam;
    this.ancho = anchoParam;
  }
  get obtenerAlto() {
    return this.alto;
  }
  get obtenerAncho() {
    return this.ancho;
  }
  set nuevoAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }
  set nuevoAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }
  perimetro() {
    const resultadoPerimetro = 2 * (this.obtenerAlto + this.obtenerAncho);
    return resultadoPerimetro;
  }
  area() {
    const resultadoArea = this.obtenerAlto * this.obtenerAncho;
    return resultadoArea;
  }
}

const rectanguloUno = new Rectangulo(10, 20);

document.write(`El perímetro es: ${rectanguloUno.perimetro()} <br>`)
document.write(`El área es: ${rectanguloUno.area()}`)
