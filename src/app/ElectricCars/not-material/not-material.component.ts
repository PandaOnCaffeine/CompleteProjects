import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ECarsData, ElectricCarsService } from '../Services/electric-cars.service';
@Component({
  selector: 'app-not-material',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-material.component.html',
  styleUrl: './not-material.component.scss'
})
export class NotMaterialComponent {

  cars?: Observable<ECarsData[]>;

  constructor(private carService: ElectricCarsService){
    this.cars = this.carService.Cars;
  }

  oddOrEven(index: number): boolean{
    if (index % 2 == 1){
      return true;
    } else {
      return false;
    }
  }
}
