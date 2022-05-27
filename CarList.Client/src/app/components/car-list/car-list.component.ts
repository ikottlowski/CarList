import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';

export interface ReadCar {
  carId: number;
  make: string;
  model: string;
  year: number;
}

export interface WriteCar {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carList: ReadCar[] = [];
  displayedColumns: string[] = ['Id', 'Make', 'Model', 'Year'];

  newCar: WriteCar = {
    make: '',
    model: '',
    year: 0,
  };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.carList = cars;
    });
  }

  addNewCar(): void {
    this.carService.addCar(this.newCar).subscribe((car) => {
      this.carList.push(car);
      this.newCar = { make: '', model: '', year: 0 };
    });
  }
}
