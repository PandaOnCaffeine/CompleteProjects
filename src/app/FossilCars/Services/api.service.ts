import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AddNewCar } from '../../interfaces/add-new-car';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://localhost:7094/api';

  constructor(private http: HttpClient) { }

  GetData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetData`);
  }

  AddData(data: AddNewCar): Observable<any> {
    return this.http.post(`${this.apiUrl}/NewCar`,data);
  }

  EditData(data: AddNewCar): Observable<any>{
    return this.http.put(`${this.apiUrl}/EditCar`,data);
  }

  DeleteData(id: number): Observable<any>{
    const options = {
      body: {
        index: id
      }
    };
    return this.http.delete(`${this.apiUrl}/DeleteCar`, options);
  }
}
