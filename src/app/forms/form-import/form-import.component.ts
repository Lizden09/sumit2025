import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component'; // 👈 Import directo



@Component({
  selector: 'app-form-import',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, DatePickerComponent],
  providers: [],
  templateUrl: './form-import.component.html',
  styleUrl: './form-import.component.css'
})
export class FormImportComponent {

importForm!: FormGroup;
private fb = inject(FormBuilder);

employees = [
  { id: 1, nombre: 'Carlos Gómez' },
  { id: 2, nombre: 'Ana Rodríguez' },
  { id: 3, nombre: 'Luis Hernández' },
  { id: 4, nombre: 'María Fernández' },
  { id: 5, nombre: 'Javier Morales' }
];

constructor(private dialogRef: MatDialogRef<FormImportComponent>) {
    this.importForm = this.fb.group({
      employeId: ['', Validators.required],
      Codigo: ['', Validators.required],
      FechaIngreso: ['', Validators.required],
      Comentario: ['', Validators.required],
      FechaCreacion: ['', Validators.required]
    });
  }

  onFechaCambiada(FechaIngreso: string) {
    this.importForm.patchValue({ FechaIngreso });
  }

  close() {
    this.dialogRef.close();
  }
}


