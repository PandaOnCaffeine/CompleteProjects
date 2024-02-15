import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// Services
import { ApiService } from '../../FossilCars/Services/api.service';
import { CustomAlertService } from '../../Shared/Services/custom-alert.service';

// Interfaces
import { AddNewCar } from '../../interfaces/add-new-car';

@Component({
  selector: 'app-remove-car',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './remove-car.component.html',
  styleUrl: './remove-car.component.scss'
})
export class RemoveCarComponent implements OnInit {
  DeleteCarData!: FormGroup;


  constructor(public api: ApiService, private alert: CustomAlertService){}

  ngOnInit(): void {
    this.DeleteCarData = new FormGroup({
      id: new FormControl('', [
        Validators.required
      ])
    })
  }

  async DeleteData(id: number): Promise<void> {
    this.api.DeleteData(id).subscribe(
      (data) => {
        // this.FetchData();
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  onSubmitDeleteData() {
    this.DeleteData(this.DeleteCarData.get('id')?.value);
    this.alert.openSnackBar(`Deleted Car At Rank ${this.DeleteCarData.get('id')?.value}`)
  }

}
