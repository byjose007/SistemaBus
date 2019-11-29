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
  dataSearch: any;
  horarios: any;
  horariosDisponibles = [];

  constructor(private horariosService: HorariosService, private router: Router) {}

  ngOnInit() {
    // let arrayEmpresas = [];

    this.dataSearch = JSON.parse(sessionStorage.getItem("dataSearch"));
    // console.log(this.dataSearch);

    // this.horarios = this.horariosService.getRutas(this.dataSearch.origen, this.dataSearch.destino);

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

    this.horariosService.getRutas(this.dataSearch.origen, this.dataSearch.destino).subscribe((data:any) => {
      this.horarios = data;
      // let empresa = data.idEmpresa.get().then(res => res.data());
      console.log('horarios',this.horarios);
      // console.log('empres', empresa);
      
      
    });
  }


  selectRuta(ruta){
    this.horariosService.setSelecRuta(ruta);
    console.log(ruta);
    
    this.router.navigate(['/info-personal']);

  }
}
