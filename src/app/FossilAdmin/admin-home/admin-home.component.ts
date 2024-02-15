import { Component } from '@angular/core';

// Components
import { EditCarComponent } from '../edit-car/edit-car.component';
import { AddCarComponent } from '../add-car/add-car.component';
import { RemoveCarComponent } from '../remove-car/remove-car.component';

// Material
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    MatTabsModule,
    EditCarComponent,
    AddCarComponent,
    RemoveCarComponent
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

}
