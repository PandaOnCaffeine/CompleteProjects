import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Rectangle } from '../../../classes/geometri/rectangle';

import { MatCardModule } from '@angular/material/card';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface RectangleData {
  position: number;
  sideA: number;
  sideB: number;
  area: number;
  circumference: number;
}

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule, FormsModule, MatButtonModule,MatInputModule,MatFormFieldModule],
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.scss'
})
export class RectangleComponent {
  displayedColumns: string[] = ['demo-position', 'demo-area', 'demo-circumference', 'demo-sideA', 'demo-sideB'];
  RectangleResults: RectangleData[] = [{ position: 1, sideA: 1, sideB: 1, area: 1, circumference: 4 }];
  inputA: number = 1;
  inputB: number = 1;

  @ViewChild(MatTable) table!: MatTable<RectangleData>;

  Calculate() {
    const newRectangle = new Rectangle(this.inputA, this.inputB);
    const newData: RectangleData = {
      position: this.RectangleResults.length + 1,
      sideA: this.inputA,
      sideB: this.inputB,
      area: newRectangle.area(),
      circumference: newRectangle.circumference()
    }
    this.RectangleResults.push(newData)
    this.table.renderRows();
  }
}
