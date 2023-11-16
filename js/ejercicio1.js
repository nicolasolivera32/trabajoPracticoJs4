/*
 Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
  color: "rojo",
  marca: "chevrolet",
  modelo: 2023,

  encendido() {
    document.write("Auto encendido <br>");
  },
  apagado() {
    document.write(" El auto se apagó");
  },
};

auto.encendido();
auto.apagado();
