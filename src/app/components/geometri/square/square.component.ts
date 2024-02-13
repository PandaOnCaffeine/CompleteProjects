import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Square } from '../../../classes/geometri/square';

import { MatCardModule } from '@angular/material/card';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface SquareData {
  position: number;
  sideLength: number;
  area: number;
  circumference: number;
}

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [MatCardModule, MatTableModule, CommonModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  displayedColumns: string[] = ['demo-position', 'demo-area', 'demo-circumference', 'demo-sideLength'];
  SquareResults: SquareData[] = [{ position: 1, sideLength: 1, area: 1, circumference: 4 }];
  input: number = 1;

  @ViewChild(MatTable) table!: MatTable<SquareData>;

  Calculate() {
    if (this.input == undefined) {
      console.error("no input");
    } else {
      console.log("method run");
      const newSquare = new Square(this.input);
      const newData: SquareData = {
        position: this.SquareResults.length + 1,
        sideLength: this.input,
        area: newSquare.area(),
        circumference: newSquare.circumference()
      }
      this.SquareResults.push(newData)
      this.table.renderRows();
    }
  }
}
