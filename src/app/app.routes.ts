import { Routes } from '@angular/router';

// Geometri
import { GeometriHomeComponent } from './Geometri/geometri-home/geometri-home.component';

// Electric Cars
import { CarsHomeComponent } from './ElectricCars/cars-home/cars-home.component';

// Fossil Cars
import { FossilHomeComponent } from './FossilCars/fossil-home/fossil-home.component';


export const routes: Routes = [
    { path: 'geometri', component: GeometriHomeComponent, pathMatch: 'full' },
    { path: 'cars', component: CarsHomeComponent, pathMatch: 'full' },
    { path: 'fossil', component: FossilHomeComponent, pathMatch: 'full' },
];
