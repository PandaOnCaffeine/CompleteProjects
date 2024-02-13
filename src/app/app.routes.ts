import { Routes } from '@angular/router';

// Geometri
import { GeometriHomeComponent } from './components/geometri/home/home.component';
import { SquareComponent } from './components/geometri/square/square.component';
import { RectangleComponent } from './components/geometri/rectangle/rectangle.component';
import { ElectricHomeComponent } from './components/electricCars/home/home.component';

// Electric Cars

export const routes: Routes = [
    { path: 'geometri', component: GeometriHomeComponent, pathMatch: 'full' },
    { path: 'square', component: SquareComponent, pathMatch: 'full' },
    { path: 'rectangle', component: RectangleComponent, pathMatch: 'full' },
    { path: 'cars', component: ElectricHomeComponent, pathMatch: 'full' },
];
