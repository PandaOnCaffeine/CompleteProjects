import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTabsModule, SquareComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class GeometriHomeComponent {

}
