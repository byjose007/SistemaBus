import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverSearchPage } from '../popover-search/popover-search.page';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {
  total_passenger: number;
  origen = '';
  destino = '';
  dateDeparture: any;
  dateReturn: any;
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', ' Noviembre', 'Diciembre'];

  items: string[];
  showItemsOrigin = false;
  showItemsDestino = false;
  totalPassengers = 'Pasajeros';
  dataPassenger: any;



  constructor(public modalCtrl: ModalController, public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    // init map
    // this.initializeMap();
  }

  initializeItems() {
    this.items = [
      'Loja - Loja',
      'Macará - Loja',
      'Zapotillo - Loja',
      'Alamor - Loja',
      'Quito - Pichincha',
      'Guayaquil - Guayas',
      'Cuenca - Azuay',
      'Zamora - Zamora Ch'
    ];
  }

  originSelected(item: string) {
    console.log('origin', item);
    this.origen = item;
    this.showItemsOrigin = false;
  }

  destinoSelected(item: string) {
    console.log('destino', item);
    this.destino = item;
    this.showItemsDestino = false;
  }

  // childrenArr(chil) {
  //   const child = Number(chil);
  //   this.childs = Array(child).fill(0).map((v, i) => i);
  // }

  getItems(ev: any, type: string) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      type === 'origin' ? this.showItemsOrigin = true : this.showItemsDestino = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      type === 'origin' ? this.showItemsOrigin = false : this.showItemsDestino = false;

    }
  }




  async presentModal() {
      const modal = await this.modalCtrl.create({
      component: PopoverSearchPage,
      componentProps: { 'data': this.dataPassenger }
    });

    // const { data } = await modal.onDidDismiss();
    // console.log(data);

    modal.onDidDismiss()
      .then((data) => {
        this.dataPassenger = data['data']; // Here's your selected user!
        console.log(this.dataPassenger);
        if (this.dataPassenger.totalPassengers > 1) {
          this.totalPassengers = this.dataPassenger.totalPassengers + ' Pasajeros';
        } else {
          this.totalPassengers = this.dataPassenger.totalPassengers + ' Pasajero';
        }

      });
    return await modal.present();
  }

  // totalPassenger(total) {
  //   this.totalPassenger = total;
  //   console.log(this.popoverSearch.total_passenger);

  // }

  clearDateDeparture() {
    this.dateDeparture = null;
  }

  clearDateReturn() {
    this.dateReturn = null;

  }

  addCodigo() {

  }

  ngOnInit() {
  }

}
