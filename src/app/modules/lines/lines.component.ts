import { Component } from '@angular/core';
import { AddLineComponent } from '../../forms/add-line/add-line.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-lines',
  imports: [CommonModule, AddLineComponent, MatDialogModule],
  templateUrl: './lines.component.html',
  styleUrl: './lines.component.css'
})
export class LinesComponent {
  lines = [
    {
      idLine: 1,
      codigo: '160725',
      idImport: 1,
      creadoPor: 'Cristina Ordoñez',
      fechaCreacion: '14/07/2025',
      editadoPor: 'María Gómez',
      ultimaEdicion: '16/07/2025',
      comentarios: 'Importación de computadoras de escritorio y cargadores',
    },
    {
      idLine: 2,
      codigo: '11012024',
      idImport: 2,
      creadoPor: 'Manuel Ramirez',
      fechaCreacion: '16/01/2024',
      editadoPor: 'Manuel Ramirez',
      ultimaEdicion: '25/05/2024',
      comentarios: 'Importación de chromebooks',
    }
  ];

  constructor(private dialog: MatDialog) { }

  //Editar importación
  editLine(item: any) {
    // const dialogRef = this.dialog.open(, {
    //   width: '600px',
    //   data: item
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     const index = this.imports.findIndex(i => i.idImport === item.idImport);
    //     if (index !== -1) {
    //       this.imports[index] = {
    //         ...this.imports[index],
    //         idImport: result.IDImport,
    //         codigo: result.Codigo,
    //         creadoPor: this.getEmpleadoNombrePorId(result.employeId),
    //         fechaCreacion: this.formatDate(result.FechaCreacion),
    //         ultimaEdicion: this.formatDate(result.FechaIngreso),
    //         comentarios: result.Comentario
    //       };
    //     }
    //   }
    // });
  }
  openModal() {
    this.dialog.open(AddLineComponent, {
      width: '600px',
      data: {} // puedes pasar datos si es necesario
    });
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
