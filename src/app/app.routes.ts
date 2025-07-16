import { Routes } from '@angular/router';
import { ImportsComponent } from './modules/imports/imports.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LinesComponent } from './modules/lines/lines.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'imports', component: ImportsComponent},
    {path: 'lines', component: LinesComponent},
];
