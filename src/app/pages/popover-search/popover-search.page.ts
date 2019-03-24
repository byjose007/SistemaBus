import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-popover-search',
  templateUrl: './popover-search.page.html',
  styleUrls: ['./popover-search.page.scss'],
})
export class PopoverSearchPage implements OnInit {
  adulto = 0;
  mayor = 0;
  ninio = 0;
  total_passenger:number;

  @Input() data: any;
  // @Output() emmitTotal = new EventEmitter<number>();


  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.data);
    if(this.data){
      this.adulto = this.data.adulto;
      this.mayor = this.data.mayor;
      this.ninio = this.data.ninio;
    }
    
  }

  addPassenger(tipo: string) {
    // a=adulto, m=mayor, n=niño
    switch (tipo) {
      case 'a':
        this.adulto++;
        break;
      case 'm':
        this.mayor++;
        break;
      case 'n':
        this.ninio++;
        break;
      default:
        break;
    }

  }

  removePassenger(tipo: string) {
    // a=adulto, m=mayor, n=niño
    switch (tipo) {
      case 'a':
        this.adulto--;
        break;
      case 'm':
        this.mayor--;
        break;
      case 'n':
        this.ninio--;
        break;
      default:
        break;
    }
  }

  totalPassenger() {
    this.total_passenger = this.adulto + this.mayor + this.ninio;
    // this.emmitTotal.emit(this.total_passenger);
  }

  closeModal(){
    this.total_passenger = this.adulto + this.mayor + this.ninio;
    this.modalController.dismiss({
      'totalPassengers': this.total_passenger,
      'adulto': this.adulto,
      'mayor': this.mayor,
      'ninio': this.ninio,
    })
  }
}
