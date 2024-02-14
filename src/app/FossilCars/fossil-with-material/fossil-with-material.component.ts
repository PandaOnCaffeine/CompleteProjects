import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-fossil-with-material',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatInputModule],
  templateUrl: './fossil-with-material.component.html',
  styleUrl: './fossil-with-material.component.scss'
})
export class FossilWithMaterialComponent implements OnInit {

  NewCarData!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.NewCarData = new FormGroup({
      rank: new FormControl('1'),
      model: new FormControl('2'),
      quantity: new FormControl('3'),
      changeProcent: new FormControl('4')
    });
  }

  onSumit() {

  }
}
