import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
  carData: ReadCar[] = [];
  displayedColumns: string[] = ['Id', 'Make', 'Model', 'Year'];

  newCar: WriteCar = {
    make: '',
    model: '',
    year: 0,
  };

  postErrorMsg: string = '';

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe((cars) => {
      this.carData = cars;
    });
  }

  addNewCar(): void {
    this.carService.addCar(this.newCar).subscribe({
      next: (car) => {
        this.carData.push(car);
        this.newCar = { make: '', model: '', year: 0 };
        this.postErrorMsg = '';
      },
      error: (res: any) => {
        this.postErrorMsg = res.error;
      },
    });
  }
}
