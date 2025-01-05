import { Component, inject } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { CarService } from '../app.car.service';

@Component({
  selector: 'app-user-page',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  favFramework = ''
  username = 'Soma'
  carService = inject(CarService);

  showFw() {
    alert(this.favFramework)
  }

  handleSubmit() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=> res.json() as Promise<[]>)
      .then(json => console.log(json))
    console.log(this.profileForm.value.name + ' | ' + this.profileForm.value.place)
    //this.username = "soma3"
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    place: new FormControl(''),
  })
}
