import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { ECarsData } from '../../interfaces/ecars-data';

@Injectable({
  providedIn: 'root'
})
export class ElectricCarsService {

  private eCarsTop25_2022: Array<ECarsData> = [];
  private eCarsTop25_2022$: Subject<ECarsData[]> = new BehaviorSubject<ECarsData[]>(this.eCarsTop25_2022);
  Cars: Observable<ECarsData[]> = this.eCarsTop25_2022$.asObservable();
  constructor() {
    this.eCarsTop25_2022 = [
      {rank: 1, model: 'Skoda Enyaq', quantity: 1044, changeQuantityProcent: 284},
      {rank: 2, model: 'Tesla Model Y', quantity: 989, changeQuantityProcent: 100},
      {rank: 3, model: 'Polestar 2', quantity: 836, changeQuantityProcent: 1990},
      {rank: 4, model: 'Audi Q4', quantity: 816, changeQuantityProcent: 586},
      {rank: 5, model: 'Ford Mustang Mach-E', quantity: 659, changeQuantityProcent: 1333},
      {rank: 6, model: 'Kia EV6', quantity: 520, changeQuantityProcent: 100},
      {rank: 7, model: 'VW ID.4', quantity: 458, changeQuantityProcent: -61},
      {rank: 8, model: 'Volvo XC40', quantity: 416, changeQuantityProcent: 100},
      {rank: 9, model: 'Hyundai Ioniq 5', quantity: 365, changeQuantityProcent: 100},
      {rank: 10, model: 'Hyundai Kona', quantity: 359, changeQuantityProcent: -24},
      {rank: 11, model: 'Tesla Model 3', quantity: 350, changeQuantityProcent: -68},
      {rank: 12, model: 'Kia Niro', quantity: 346, changeQuantityProcent: -16},
      {rank: 13, model: 'Peugeot 208', quantity: 330, changeQuantityProcent: 131},
      {rank: 14, model: 'VW ID.3', quantity: 329, changeQuantityProcent: -54},
      {rank: 15, model: '	Cupra Born', quantity: 298, changeQuantityProcent: 100},
      {rank: 16, model: 'Mercedes-Benz EQA', quantity: 289, changeQuantityProcent: 51},
      {rank: 17, model: 'VW Up', quantity: 229, changeQuantityProcent: 332},
      {rank: 18, model: 'VW ID.5', quantity: 226, changeQuantityProcent: 100},
      {rank: 19, model: 'Mercedes-Benz EQB', quantity: 224, changeQuantityProcent: 100},
      {rank: 20, model: 'Fiat 500', quantity: 202, changeQuantityProcent: -40},
      {rank: 21, model: 'Renault Zoe', quantity: 185, changeQuantityProcent: -18},
      {rank: 22, model: 'Peugeot 2008', quantity: 169, changeQuantityProcent: 42},
      {rank: 23, model: 'Audi E-tron', quantity: 168, changeQuantityProcent: 25},
      {rank: 24, model: 'Dacia Spring', quantity: 160, changeQuantityProcent: 5233},
      {rank: 25, model: 'BMW i4', quantity: 142, changeQuantityProcent: 100},
    ];
    this.eCarsTop25_2022$.next(this.eCarsTop25_2022);
  }
}
