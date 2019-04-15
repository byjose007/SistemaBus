import { log } from "util";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HorariosService {

  //npm i --save firebase @angular/fire
  selectRuta: any;

  horarios = {
    coop_loja: {
      nombre: "Cooperativa Loja",
      logo: "assets/img/logos/loja.jpg",
      id: "1",
      rutas: {
        idEmpresa: "1",
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
          }
        ],
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
          }
        ]
      }
    },
    carimanga: {
      nombre: "Cooperativa Loja",
      logo: "assets/img/logos/cariamanga.jpg",
      id: "2",
      rutas: {
        idEmpresa: "2",
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
          }
        ],
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
          }
        ]
      }
    }
  };

  constructor(private firestore: AngularFirestore) { }

  getHorarios() {
    let horarios = [];
    let refRutas = this.firestore.collection("rutas");

    return refRutas.get().pipe(
      map(actions => {
        actions.forEach((a: any) => {
          let emp: any = a.data();
  
          // if (emp.idEmpresa) {
          //   emp.idEmpresa.get().then((empresa: any) => {
          //     const dataEmpresa = empresa.data();
          //     console.log("empresa", dataEmpresa);
          //     horarios.push({empresa:dataEmpresa.nombre});

          //   });
          // }
          refRutas.doc(a.id).collection("quito-loja").get().subscribe(collections => {
            collections.forEach((doc: any) => {
              let data = doc.data();
              // console.log('id empresa',doc.idEmpresa);

              // let empresa = this.firestore.collection(empresa)

              horarios.push(data);
            });
          });
        });
        console.log(horarios);
        // debugger;
        console.log('ddddd');
        
        
        return horarios;
      })
    );
    // return horarios;

    // return this.firestore.collection("rutas").snapshotChanges().pipe(
    //   map( actions =>{

    //    return actions.map((a, i) => {
    //     //  debugger;

    //       const data: any = a.payload.doc.data();
    //       console.log('llll',a.payload.doc.id);
    //       // data.map(b =>{
    //       //   console.log(b);

    //       // })

    //       // const id = a.payload.doc.id;
    //       // console.log(data.empresa.id);
    // obtener datos de una documeto de referencia
    //       // data.empresa.get().then((resp: any) => {
    //       //   this.horarios[i].empresa = resp.data();
    //       // });
    //       // return { id, ...data };
    //     });
    //     console.log("horarios", this.horarios);

    //    } )
    // );
  }

  setSelecRuta(ruta) {
    this.selectRuta = {};
    this.selectRuta = ruta;

    // let data: any = Object.assign(ruta);
    // let toDay = this.getToday();
    // data.hora = toDay.time;
    // data.fecha = toDay.date;

    // this.firestore.collection("reservas").add(data);
  }

  getSelectRuta() {
    return this.selectRuta;
  }

  getToday() {
    let today: any = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    let date = mm + "/" + dd + "/" + yyyy;

    return { date, time };
  }
}
