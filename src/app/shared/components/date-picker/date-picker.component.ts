import { AfterViewInit, Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatNativeDateModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],

  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements AfterViewInit {
  @Input() placeholder: string = 'Selecciona una fecha';
  @Output() dateChange = new EventEmitter<Date | null>();

  fechaControl = new FormControl<Date | null>(null);

  // Recibe el valor inicial del padre y lo pone en el control sin disparar evento
  @Input() set value(date: Date | null) {
    this.fechaControl.setValue(date, { emitEvent: false });
  }

  ngAfterViewInit(): void {
    this.fechaControl.valueChanges.subscribe(value => {
      this.dateChange.emit(value);
    });
  }
}
