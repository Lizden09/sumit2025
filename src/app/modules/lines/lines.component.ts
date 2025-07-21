import { Component } from '@angular/core';
import { AddLineComponent } from '../../forms/add-line/add-line.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-lines',
  imports: [CommonModule, AddLineComponent, MatDialogModule],
  templateUrl: './lines.component.html',
  styleUrl: './lines.component.css'
})
export class LinesComponent {

  constructor(private dialog: MatDialog){}

  openModal() {
      this.dialog.open(AddLineComponent, {
        width: '600px',
        data: {} // puedes pasar datos si es necesario
      });
    }

}
