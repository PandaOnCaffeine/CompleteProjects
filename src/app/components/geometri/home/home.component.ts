import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { SquareComponent } from '../square/square.component';
import { RectangleComponent } from '../rectangle/rectangle.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTabsModule,
    SquareComponent,
    RectangleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class GeometriHomeComponent {}
