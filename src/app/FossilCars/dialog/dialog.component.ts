import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { ApiService } from '../Services/api.service';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Interfaces
import { AddNewCar } from '../../interfaces/add-new-car';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit {

  CarData!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService,
  ) {
    console.log(data);
  }

  CloseDialog(): void {
    this.dialogRef.close("Data Changed");
  }

  ngOnInit(): void {
    this.CarData = new FormGroup({
      model: new FormControl(this.data.model, [
        Validators.required,
        Validators.minLength(1)
      ]),
      quantity: new FormControl(this.data.quantity, [
        Validators.required,
        Validators.minLength(1)
      ]),
      changeProcent: new FormControl(this.data.changeQuantityProcent, [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }

  onSubmit() {
    const newCar: AddNewCar = {
      rank: this.data.rank,
      model: this.CarData.get('model')?.value,
      quantity: this.CarData.get('quantity')?.value,
      changeQuantityProcent: this.CarData.get('changeProcent')?.value,
    };
    this.EditData(newCar);
    this.CloseDialog();
  }

  async EditData(data: AddNewCar): Promise<void> {
    this.api.EditData(data).subscribe(
      (data) => {
        console.log(data); // Log data from api
      },
      (error) => {
        console.error("EditData Error: " + error.error);
      }
    )
  }
}

