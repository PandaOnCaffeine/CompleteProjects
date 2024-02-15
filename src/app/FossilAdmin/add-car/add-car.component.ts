import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// Services
import { ApiService } from '../../FossilCars/Services/api.service';
import { CustomAlertService } from '../../Shared/Services/custom-alert.service';

// Interfaces
import { AddNewCar } from '../../interfaces/add-new-car';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})
export class AddCarComponent implements OnInit {

  NewCarData!: FormGroup;

  //For CanDeavtivateFn guard
  //this.NewCarData.dirty


  constructor(public api: ApiService, private alert: CustomAlertService) { }

  ngOnInit(): void {
    this.NewCarData = new FormGroup({
      rank: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      quantity: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
        // Validators.pattern("^\d+$")
      ]),
      changeProcent: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }

  onSubmitNewData() {
    const newCar: AddNewCar = {
      rank: this.NewCarData.get('rank')?.value,
      model: this.NewCarData.get('model')?.value,
      quantity: this.NewCarData.get('quantity')?.value,
      changeQuantityProcent: this.NewCarData.get('changeProcent')?.value,
    };
    this.AddData(newCar);
  }

  async AddData(data: AddNewCar): Promise<void> {
    this.api.AddData(data).subscribe(
      (data) => {
        this.alert.openSnackBar("New Car Added")
        // this.FetchData();
        // console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
