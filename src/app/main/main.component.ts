// main.component.ts
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DashboardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Input() isSidebarCollapsed: boolean = false;
}
