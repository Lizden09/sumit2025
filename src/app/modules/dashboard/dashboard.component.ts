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

}
