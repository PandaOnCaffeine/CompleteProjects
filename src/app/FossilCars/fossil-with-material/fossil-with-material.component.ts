import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { ApiService } from '../Services/api.service';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

// Interfaces
import { AddNewCar } from '../../interfaces/add-new-car';
import { DialogComponent } from '../dialog/dialog.component';
import { ECarsData } from '../../interfaces/ecars-data';

@Component({
  selector: 'app-fossil-with-material',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './fossil-with-material.component.html',
  styleUrl: './fossil-with-material.component.scss'
})

export class FossilWithMaterialComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'QuantityPercent'];
  public carsArray = new MatTableDataSource<any>([]);

  NewCarData!: FormGroup;

  constructor(private api: ApiService, public dialog: MatDialog) {

  }

  @ViewChild(MatPaginator) private paginator!: MatPaginator;

  ngOnInit(): void {
    this.FetchData();
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
        Validators.minLength(1),
        Validators.pattern("^\d+$")
      ]),
      changeProcent: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });


  }

  ngAfterViewInit(): void {
    this.carsArray.paginator = this.paginator;
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



  test: any = [];


  async FetchData(): Promise<void> {
    this.api.GetData().subscribe(
      (data) => {
        this.carsArray.data = data;
        console.log(data); // log data from api
      },
      (error) => {
        console.error("FetchData Error: " + error.error);
      }
    )
  }

  async AddData(data: AddNewCar): Promise<void> {
    this.api.AddData(data).subscribe(
      (data) => {
        this.FetchData();
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    )
  }



  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        rank: data.rank,
        model: data.model,
        quantity: data.quantity,
        changeQuantityProcent: data.changeQuantityProcent
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.FetchData();
      console.log('The dialog was closed', result);
    });
  }
}
