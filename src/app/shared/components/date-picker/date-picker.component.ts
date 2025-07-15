import { AfterViewInit, Component, ElementRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TempusDominus } from '@eonasdan/tempus-dominus'

@Component({
  selector: 'app-date-picker',
  imports: [CommonModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent implements AfterViewInit {

  @ViewChild('input', { static: false }) inputRef!: ElementRef<HTMLInputElement>;

  @Input() placeholder: string = 'Selecciona una fecha';
  @Output() dateChange = new EventEmitter<string>();

  pickerId = 'datepicker-' + Math.floor(Math.random() * 100000); // ID único

  ngAfterViewInit(): void {
    const element = document.getElementById(this.pickerId);
    if (element) {
      const picker = new TempusDominus(element, {
        display: {
          components: {
            clock: false
          }
        },
        localization: {
          locale: 'es'
        }
      });

      picker.subscribe('change.td', (e: any) => {
        const fecha = e.date?.format('YYYY-MM-DD') || '';
        this.dateChange.emit(fecha);
      });
    } else {
      console.error(`Elemento con ID ${this.pickerId} no encontrado`);
    }
  }
}
