import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormImportComponent } from '../../forms/form-import/form-import.component';

@Component({
  selector: 'app-imports',
  imports: [CommonModule, MatDialogModule, FormImportComponent],
  templateUrl: './imports.component.html',
  styleUrl: './imports.component.css'
})
export class ImportsComponent {

constructor(private dialog: MatDialog) {}

  openModal() {
  this.dialog.open(FormImportComponent, {
    width: '600px',
    data: {} // puedes pasar datos si es necesario
  });
}
}
