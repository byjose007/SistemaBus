import { Router } from '@angular/router';
import { HorariosService } from "./../../services/horarios.service";
import { Component, OnInit } from "@angular/core";
import { log } from "util";

@Component({
  selector: "app-horarios",
  templateUrl: "./horarios.page.html",
  styleUrls: ["./horarios.page.scss"]
})
export class HorariosPage implements OnInit {
  data: any;
  horarios: any;
  horariosDisponibles = [];

  constructor(private horariosService: HorariosService, private router: Router) {}

  ngOnInit() {
    // let arrayEmpresas = [];

    this.data = JSON.parse(sessionStorage.getItem("dataSearch"));
    console.log(this.data);

    // this.horarios = this.horariosService.getHorarios();

    // const rutas:any = Object.values(this.horarios).map((empresas: any) => empresas.rutas);

    // Object.values(rutas).map((ciudades:any) => {
    //   Object.values(ciudades).map((ciudad: any) => {
    //     Object.values(ciudad).filter((val: any) => {
    //       if (val.origen === this.data.origen && val.destino === this.data.destino) {
    //           arrayEmpresas.push(ciudades);
    //           this.horariosDisponibles.push(val);
    //       }
    //     });
    //   })

    // });
    // console.log('disponibles', this.horariosDisponibles);
    // const idEmpresas = arrayEmpresas.filter((x, i, a) => a.indexOf(x) === i);
    // console.log(idEmpresas);

    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data.map((a, i) => {
        const data: any = a.payload.doc.data();
        const id = a.payload.doc.id;
        console.log(data.empresa.id);
        data.empresa.get().then((resp: any) => {
          this.horarios[i].empresa = resp.data();
        });
        return { id, ...data };
      });
      console.log("horarios", this.horarios);
    });
  }


  selectRuta(ruta){
    this.horariosService.setSelecRuta(ruta);
    this.router.navigate(['/infoPersonal']);

  }
}
