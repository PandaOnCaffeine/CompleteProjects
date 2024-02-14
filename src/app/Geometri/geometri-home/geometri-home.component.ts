import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { SquareComponent } from '../square/square.component';
import { RectangleComponent } from '../rectangle/rectangle.component';



@Component({
  selector: 'app-geometri-home',
  standalone: true,
  imports: [MatTabsModule,SquareComponent,RectangleComponent],
  templateUrl: './geometri-home.component.html',
  styleUrl: './geometri-home.component.scss'
})
export class GeometriHomeComponent {

}
