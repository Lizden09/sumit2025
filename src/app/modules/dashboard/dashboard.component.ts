import { Component } from '@angular/core';
import { ChartsComponent } from '../../widgets/charts/charts.component';
import { CardsComponent } from '../../widgets/cards/cards.component';

@Component({
  selector: 'app-dashboard',
  imports: [ChartsComponent, CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 importCards = [
    { title: 'Nueva Importación', iconClass: 'fal fa-bars', route: '/imports' },
    { title: 'Total ubicaciones', iconClass: 'fa fa-map-marker-alt', route: '/imports' },
    { title: 'Items Registrados', iconClass: 'fa fa-box', route: '/imports' },
  ];
}
