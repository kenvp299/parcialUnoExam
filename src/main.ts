// main.ts
import { eliminarElemento, flights } from "./arreglo";
import { IFlight } from "./interfaces";

function mostrarAtributos(element: IFlight): void {
  console.log("Datos del id insertado:");
  console.log("Id:", element.id);
  console.log("Numero:", element.number);
  console.log("Origen:", element.from);
  console.log("Destino:", element.to);
  console.log("Capacidad:", element.capacity);
}


eliminarElemento(3, mostrarAtributos);


console.log("Datos actuales:");
console.log(flights);
