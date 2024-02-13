import { Routes } from '@angular/router';

//Geometri
import { HomeComponent } from './components/geometri/home/home.component';
import { SquareComponent } from './components/geometri/square/square.component';
import { RectangleComponent } from './components/geometri/rectangle/rectangle.component';

export const routes: Routes = [
    { path: 'geometri', component: HomeComponent, pathMatch: 'full' },
    { path: 'square', component: SquareComponent, pathMatch: 'full' },
    { path: 'rectangle', component: RectangleComponent, pathMatch: 'full' },

];
