import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.page.html',
  styleUrls: ['./info-personal.page.scss'],
})
export class InfoPersonalPage implements OnInit {
  dataSearch: any;
  form: FormGroup;
  items: FormArray;
  rutaSelect:any;

  constructor(private router: Router, private fb: FormBuilder) {

    this.rutaSelect = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit() {

    this.dataSearch = JSON.parse(sessionStorage.getItem("dataSearch"));
    console.log(this.dataSearch);

    this.form = this.fb.group({
      passengers: this.fb.array([this.initPassengerFiels()])
    });

    console.log(this.dataSearch.total_passenger);
    for (let index = 1; index < this.dataSearch.total_passenger; index++) {

      this.addNewInputField();

    }

    console.log(this.form.value);


  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  pagar() {
    console.log('form', this.form.value);
    const data = {
      rute : this.rutaSelect,
      passengers: this.form.value
    }
    this.router.navigate(['detalle'], {state: data});

  }

  initPassengerFiels(): FormGroup {
    return this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', Validators.required],
      email: ['']
    });
  }

  manage(val: any): void {
    console.dir(val);
  }

  addNewInputField(): void {
    const control = <FormArray>this.form.controls.passengers;
    control.push(this.initPassengerFiels());
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.passengers;
    control.removeAt(i);
  }

}
