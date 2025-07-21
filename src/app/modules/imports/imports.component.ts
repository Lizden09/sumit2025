import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormImportComponent } from '../../forms/form-import/form-import.component';
import { UpdateImportComponent } from '../../forms/update-import/update-import.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-imports',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormImportComponent],
  templateUrl: './imports.component.html',
  styleUrl: './imports.component.css'
})
export class ImportsComponent {

  constructor(private dialog: MatDialog) { }

  imports = [
    {
      idImport: 1,
      codigo: '160725',
      creadoPor: 'Cristina Ordoñez',
      fechaCreacion: '14/07/2025',
      ultimaEdicion: '16/07/2025',
      comentarios: 'Importación de computadoras de escritorio y cargadores',
    },
    {
      idImport: 2,
      codigo: '11012024',
      creadoPor: 'Manuel Ramirez',
      fechaCreacion: '16/01/2024',
      ultimaEdicion: '25/05/2024',
      comentarios: 'Importación de chromebooks',
    }
  ];

  //Añadir importación
  openModal() {
    this.dialog.open(FormImportComponent, {
      width: '600px',
      data: {}
    });
  }

  //Editar importación
  editarImportacion(item: any) {
  const dialogRef = this.dialog.open(UpdateImportComponent, {
    width: '600px',
    data: item
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const index = this.imports.findIndex(i => i.idImport === item.idImport);
      if (index !== -1) {
        this.imports[index] = {
          ...this.imports[index],
          idImport: result.IDImport,
          codigo: result.Codigo,
          creadoPor: this.getEmpleadoNombrePorId(result.employeId),
          fechaCreacion: this.formatDate(result.FechaCreacion),
          ultimaEdicion: this.formatDate(result.FechaIngreso),
          comentarios: result.Comentario
        };
      }
    }
  });
}

//dropdown empleados
getEmpleadoNombrePorId(id: number): string {
  const empleado = [
    { id: 1, nombre: 'Carlos Gómez' },
    { id: 2, nombre: 'Ana Rodríguez' },
    { id: 3, nombre: 'Luis Hernández' },
    { id: 4, nombre: 'María Fernández' },
    { id: 5, nombre: 'Javier Morales' }
  ].find(e => e.id === id);

  return empleado ? empleado.nombre : 'Desconocido';
}

formatDate(date: Date | string): string {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

openConfirmDialog() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    width: '350px',
    data: { message: '¿Está seguro que desea confirmar?' }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      console.log('Acción confirmada');
    } else {
      console.log('Acción cancelada');
    }
  });
  }
}
