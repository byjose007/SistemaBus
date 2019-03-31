import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HorariosService {
  horarios = {
    coop_loja: {    
        nombre: 'Cooperativa Loja',
        logo: 'assets/img/logos/loja.jpg',
        id : '1',
        rutas : {
          idEmpresa: '1',
          loja: [
            {            
              origen: "Loja",
              destino: "Machala",
              tiempo: "4h 45",
              precio: "8.00",
              horaSalida: "0:00",
              horaLlegada: "05:40"
            },
            {            
              origen: "Loja",
              destino: "Machala",
              tiempo: "4h 45",
              precio: "8.00",
              horaSalida: "21:00",
              horaLlegada: "02:40"
            },
            {
              origen: "Loja",
              destino: "Quito",
              tiempo: "4h 45",
              precio: "12.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            }],
          machala: [
            {
              origen: "Machala",
              destino: "Guayaquil",
              tiempo: "4h 45",
              precio: "10.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            },
            {
              origen: "Machala",
              destino: "Quito",
              tiempo: "4h 45",
              precio: "13.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            }]
        },
      },
      carimanga: {
        nombre: 'Cooperativa Loja',
        logo: 'assets/img/logos/cariamanga.jpg',
        id : '2',
        rutas : {
          idEmpresa: '2',
          loja: [
            {
              origen: "Loja",
              destino: "Riobamba",
              tiempo: "4h 45",
              precio: "8.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            },
            {
              origen: "Loja",
              destino: "Machala",
              tiempo: "4h 45",
              precio: "12.00",
              horaSalida: "13:00",
              horaLlegada: "18:40"
            },
            {
              origen: "Loja",
              destino: "Machala",
              tiempo: "4h 45",
              precio: "12.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            }],
          machala: [
            {
              origen: "Machala",
              destino: "Cuenca",
              tiempo: "4h 45",
              precio: "10.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            },
            {
              origen: "Machala",
              destino: "Loja",
              tiempo: "4h 45",
              precio: "13.00",
              horaSalida: "9:00",
              horaLlegada: "14:40"
            }]
        },
      },
  }

  constructor() { }

  getHorarios() {
    return this.horarios;
  }
}
