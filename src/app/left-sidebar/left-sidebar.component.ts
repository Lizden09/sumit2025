import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  @Input() isLeftSidebarCollapsed: boolean = false;
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  items = [
     {
      routeLink:'dashboard',
      icon: 'fal fa-home',
      label:'Panel',
    },
    {
      routeLink:'imports',
      icon: 'fal fa-box-open',
      label:'Importaciones',
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

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }
}
