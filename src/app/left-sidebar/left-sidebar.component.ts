import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  items=[
    {
      routeLink:'dashboard',
      icon: 'fal fa-home',
      label:'Panel',
    },
    {
      routeLink:'products',
      icon: 'fal fa-box-open',
      label:'Productos',
    },
    {
      routeLink:'pages',
      icon: 'fal fa-file',
      label:'Páginas',
    },
    {
      routeLink:'settings',
      icon: 'fal fa-cog',
      label:'Configuraciones',
    }
  ];

}
