import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { NotMaterialComponent } from '../not-material/not-material.component';
import { WithMaterialComponent } from '../with-material/with-material.component';



@Component({
  selector: 'app-cars-home',
  standalone: true,
  imports: [MatTabsModule, NotMaterialComponent, WithMaterialComponent],
  templateUrl: './cars-home.component.html',
  styleUrl: './cars-home.component.scss'
})
export class CarsHomeComponent {

}
