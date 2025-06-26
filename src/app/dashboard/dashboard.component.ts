import { Component } from '@angular/core';
import { GraphicsComponent } from '../graphics/graphics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GraphicsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
