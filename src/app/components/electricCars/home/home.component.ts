import { Component, ViewChild } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { WithMaterialComponent } from '../with-material/with-material.component';
import { NotMaterialComponent } from '../not-material/not-material.component';


export interface ECarsData {
  rank: number| string | null,
  model: string | null,
  quantity: number | string | null,
  changeQuantityPercent: number | string | null, 
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, WithMaterialComponent,NotMaterialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class ElectricHomeComponent {

}
