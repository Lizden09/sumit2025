import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-line',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-line.component.html',
  styleUrl: './add-line.component.css'
})
export class AddLineComponent {

addLineForm!: FormGroup;
private fb = inject(FormBuilder);

employees = [
    { id: 1, nombre: 'Carlos Gómez' },
    { id: 2, nombre: 'Ana Rodríguez' },
    { id: 3, nombre: 'Luis Hernández' },
    { id: 4, nombre: 'María Fernández' },
    { id: 5, nombre: 'Javier Morales' }
  ];

}
