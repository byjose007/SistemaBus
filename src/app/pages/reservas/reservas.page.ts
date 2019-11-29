import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  isProximo = true;
  existePasaje: false;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event) {
    this.isProximo = event.detail.value === 'proximos' ? true : false;
  }

}
