import { Component } from '@angular/core';
import { ChartsComponent } from '../../widgets/charts/charts.component';
import { CardsComponent } from '../../widgets/cards/cards.component';
import { ChartType } from 'ng-apexcharts';

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

  // Aquí defines los datos que enviarás al componente de gráficos
  public chartOptions = {
    series: [
      {
        name: 'Ventas',
        data: [10, 41, 35, 51, 49, 62, 69]
      }
    ],
    chart: {
      type: 'bar' as ChartType,
      height: 350
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul']
    }
  };
}
