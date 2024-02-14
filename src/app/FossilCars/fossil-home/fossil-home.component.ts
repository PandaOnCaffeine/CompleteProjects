import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FossilWithMaterialComponent } from '../fossil-with-material/fossil-with-material.component';

@Component({
  selector: 'app-fossil-home',
  standalone: true,
  imports: [MatTabsModule, FossilWithMaterialComponent],
  templateUrl: './fossil-home.component.html',
  styleUrl: './fossil-home.component.scss'
})
export class FossilHomeComponent {

}
