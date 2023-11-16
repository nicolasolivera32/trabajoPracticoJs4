/*
-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
*/

class CuentaBancaria {
    constructor(titular, saldo) {
      this.titular = titular;
      this.saldo = saldo;
    }
    ingresar(valorIngresado) {
      this.saldo = this.saldo + valorIngresado;
      document.write(
        `Usted ingreso $${valorIngresado} <br>`
      );
    }
    extraer(valorRetirado) {
      this.saldo = this.saldo - valorRetirado;
      document.write(
        `Usted retiro $${valorRetirado}, su saldo es $${this.saldo}<br>`
      );
    }
    informar() {
      document.write(`Titular: ${this.titular} <br>
      Saldo: $${this.saldo}<br>`);
    }
  }
  const cuenta = new CuentaBancaria("Alex", 0);
  document.write("<h1>Cuenta Bancaria</h1>")
  cuenta.informar();
  cuenta.ingresar(2200);
  cuenta.extraer(700);
  cuenta.informar();