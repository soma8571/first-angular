import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root',
})



export class CarService {
    cars = ["BMW", "Audi", "Honda", "Mercedes"]

    getCars(): string[] {
        return this.cars
    }

    getCar(id: number) {
        return this.cars[id]
    }
}
