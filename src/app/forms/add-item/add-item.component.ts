import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  addItemForm!: FormGroup;
  private fb = inject(FormBuilder);

  Items = [
    { id: 1, item: 'Escritorio' },
    { id: 2, item: 'Laptop' },
    { id: 3, item: 'Cargador' }
  ];

  constructor() {
    this.addItemForm = this.fb.group({
      tipoItem: ['', Validators.required],
    });
  }

}
