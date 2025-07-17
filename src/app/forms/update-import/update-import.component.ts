import { Component, Inject, inject } from '@angular/core';
import { DatePickerComponent } from '../../shared/components/date-picker/date-picker.component'; // 👈 Import directo
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-import',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePickerComponent],
  templateUrl: './update-import.component.html',
  styleUrl: './update-import.component.css'
})
export class UpdateImportComponent {
editImportForm: FormGroup;
  private fb = inject(FormBuilder);

  employees = [
    { id: 1, nombre: 'Carlos Gómez' },
    { id: 2, nombre: 'Ana Rodríguez' },
    { id: 3, nombre: 'Luis Hernández' },
    { id: 4, nombre: 'María Fernández' },
    { id: 5, nombre: 'Javier Morales' }
  ];

  constructor(
    private dialogRef: MatDialogRef<UpdateImportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editImportForm = this.fb.group({
      idImportacion: ['', Validators.required],
      employeId: ['', Validators.required],
      Codigo: ['', Validators.required],
      FechaCreacion: ['', Validators.required],
      FechaIngreso: ['', Validators.required],
      Comentario: ['', Validators.required]
    });

    if (data) {
      this.editImportForm.patchValue({
        idImportacion: data.codigo,
        Codigo: data.codigo,
        employeId: '', // Aquí podrías asignar un valor si lo tienes
        FechaCreacion: this.parseDate(data.fechaCreacion),
        FechaIngreso: this.parseDate(data.ultimaEdicion),
        Comentario: data.comentarios
      });
    }
  }

  // Convertir string 'dd/MM/yyyy' a objeto Date
  parseDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split('/');
  return new Date(+year, +month - 1, +day);
}


  onFechaCreacion(fecha: Date | null) {
    this.editImportForm.get('FechaCreacion')?.setValue(fecha);
  }

  onUltimaEdicion(fecha: Date | null) {
    this.editImportForm.get('FechaIngreso')?.setValue(fecha);
  }

  getErrorMessage(field: string): string {
    const control = this.editImportForm.get(field);
    if (control?.hasError('required')) {
      return 'El campo es obligatorio';
    }
    return '';
  }

  close() {
    this.dialogRef.close();
  }

  guardar() {
    if (this.editImportForm.valid) {
      this.dialogRef.close(this.editImportForm.value);
    }
  }
}
