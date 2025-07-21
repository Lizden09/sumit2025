import { Routes } from '@angular/router';
import { ImportsComponent } from './modules/imports/imports.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LinesComponent } from './modules/lines/lines.component';
import { AddItemComponent } from './forms/add-item/add-item.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: DashboardComponent},
    {path: 'imports', component: ImportsComponent},
    {path: 'lines', component: LinesComponent},
    {path: 'items', component: AddItemComponent},
];
