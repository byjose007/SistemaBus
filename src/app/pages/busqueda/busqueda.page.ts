import { Component, OnInit } from "@angular/core";
import { PopoverController, ModalController } from "@ionic/angular";
import { PopoverSearchPage } from "../popover-search/popover-search.page";
import { Router } from '@angular/router';
import * as faker from 'faker';

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.page.html",
  styleUrls: ["./busqueda.page.scss"]
})
export class BusquedaPage implements OnInit {

  data: any;
  total_passenger: number;
  origen = "";
  destino = "";
  dateDeparture: any;
  dateReturn: any;
  testFaker: any;
  months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    " Noviembre",
    "Diciembre"
  ];

  items: string[];
  showItemsOrigin = false;
  showItemsDestino = false;
  totalPassengers: number;
  dataPassenger: any;

  constructor(
    public modalCtrl: ModalController,
    private router: Router,

  ) { }

  ionViewDidLoad() {
    // init map
    // this.initializeMap();
  }

  initializeItems() {

    this.items = [
      'Loja',
      'Zamora',
      'Quito',
      'Guayaquil',
      'Ambato',
      'Machala'
    ]



  }

  originSelected(item: string) {
    console.log("origin", item);
    this.origen = item;
    this.showItemsOrigin = false;
  }

  destinoSelected(item: string) {
    console.log("destino", item);
    this.destino = item;
    this.showItemsDestino = false;
  }

  getItems(ev: any, type: string) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== "") {
      type === "origin"
        ? (this.showItemsOrigin = true)
        : (this.showItemsDestino = true);
      this.items = this.items.filter(item => {
        return item.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      type === "origin"
        ? (this.showItemsOrigin = false)
        : (this.showItemsDestino = false);
    }
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: PopoverSearchPage,
      componentProps: { data: this.dataPassenger }
    });

    modal.onDidDismiss().then(data => {
      this.dataPassenger = data["data"]; // Here's your selected user!
      console.log(this.dataPassenger);
      this.totalPassengers = this.dataPassenger.totalPassengers;
    });
    return await modal.present();
  }

  clearDateDeparture() {
    this.dateDeparture = null;
  }

  clearDateReturn() {
    this.dateReturn = null;
  }

  addCodigo() {
this.testFaker = {
 name: faker.name.findName(),
 imagen: faker.hacker.adjective()
}

console.log(this.testFaker);

   }

  onSearch() {
    const data = {
      //TODO guardar lita de pasajeros con sus tipos
      'total_passenger': this.totalPassengers,
      'origen': this.origen,
      'destino': this.destino,
      'dateDeparture': this.dateDeparture,
      'dateReturn': this.dateReturn
    }
    sessionStorage.setItem('dataSearch', JSON.stringify(data));
    this.router.navigate(['horarios']);
  }

  ngOnInit() {
    this.data = JSON.parse(sessionStorage.getItem('dataSearch'));
    console.log(this.data);
    if (this.data) {
      this.totalPassengers = this.data.total_passenger;
      this.dateDeparture = this.data.dateDeparture;
      this.destino = this.data.destino;
      this.origen = this.data.origen;
    }

  }
}
