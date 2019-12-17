import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  dataQR = '';
  data:any;

  constructor(private router:Router) {

    this.data = this.router.getCurrentNavigation().extras.state;
    console.log('data',this.data);
    
   }

  ngOnInit() {

    let passengers = [];

   
    this.data.passengers.forEach(element => {

      this.dataQR += `Pasajero: ${element.nombres} ${element.apellidos} \n
                      ` ;
      
    });

    console.log('dataQR',this.dataQR);
    


  }

}
