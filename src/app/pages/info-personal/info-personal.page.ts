import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
})
export class InfoPersonalPage implements OnInit {
  dataSearch:any;

  constructor() { }

  ngOnInit() {

    this.dataSearch = JSON.parse(sessionStorage.getItem("dataSearch"));
    console.log(this.dataSearch);
    
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  pagar(){
    
  }

}
