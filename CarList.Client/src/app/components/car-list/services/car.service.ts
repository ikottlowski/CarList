import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ReadCar, WriteCar } from '../car-list.component';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carApi: string = environment.CAR_API;

  constructor(private http: HttpClient) {}

  getCars(): Observable<ReadCar[]> {
    const url = this.carApi + 'car';
    return this.http.get<ReadCar[]>(url);
  }

  addCar(newCar: WriteCar): Observable<ReadCar> {
    const url = this.carApi + 'car';
    return this.http.post<ReadCar>(url, newCar);
  }
}
