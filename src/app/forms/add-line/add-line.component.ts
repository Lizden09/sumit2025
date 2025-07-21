import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component';

@Component({
  selector: 'app-add-line',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePickerComponent],
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

  constructor(private dialogRef: MatDialogRef<AddLineComponent>) {
    this.addLineForm = this.fb.group({
      idLine: ['', Validators.required],
      number: ['', Validators.required],
      idImport: ['', Validators.required],
      quantityItems: ['', Validators.required],
      employeId: ['', Validators.required],
      creationDate: ['', Validators.required],
      editedBy: ['', Validators.required],
      editionDate: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  onFechaSeleccionada(fecha: Date | null) {
    console.log('Fecha seleccionada:', fecha);
  }


  getErrorMessage(field: string): string {
    if (field === 'number') {
      return this.addLineForm.get('number')?.hasError('required') ? 'El campo es obligatorio' : '';
    }
    if (field === 'number') {
      return this.addLineForm.get('number')?.hasError('required') ? 'El campo es obligatorio' : '';
    }
    return '';
  }

  getErrorMessageImport(field: string): string {
    if (field === 'idImport') {
      return this.addLineForm.get('idImport')?.hasError('required') ? 'El campo es obligatorio' : '';
    }
    if (field === 'idImport') {
      return this.addLineForm.get('idImport')?.hasError('required') ? 'El campo es obligatorio' : '';
    }
    return '';
  }

  close() {
    this.dialogRef.close();
  }

}
