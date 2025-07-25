import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';

@Component({
  selector: 'app-add-variations',
  imports: [ReactiveFormsModule, CommonModule, CustomTableComponent],
  templateUrl: './add-variations.component.html',
  styleUrl: './add-variations.component.css'
})
export class AddVariationsComponent implements OnInit {

  @Input() variaciones: any[] = [];
  @Output() variacionAgregada = new EventEmitter<any>();

  variationForm!: FormGroup;

  States = [
    { id: 1, state: 'Nuevo' },
    { id: 2, state: 'SemiNuevo' }
  ];

  Procesadores = ['Intel i3', 'Intel i5', 'Intel i7', 'AMD Ryzen 5', 'AMD Ryzen 7'];
  Pantallas = ['LED', 'LCD', 'OLED', 'Táctil'];
  RAMs = ['4 GB', '8 GB', '16 GB', '32 GB'];
  TiposAlmacenamiento = ['HDD', 'SSD', 'NVMe'];
  CapacidadesAlmacenamiento = ['128 GB', '256 GB', '512 GB', '1 TB'];
  Puertos = ['2', '3', '4', 'Más de 4'];
  Baterias = ['Buena', 'Regular', 'Deficiente'];


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.variationForm = this.fb.group({
      state: ['', Validators.required],
      itemQuantity: ['', Validators.required],
      procesador: ['', Validators.required],
      pantalla: ['', Validators.required],
      ram: ['', Validators.required],
      tipoAlmacenamiento: ['', Validators.required],
      cantidadAlmacenamiento: ['', Validators.required],
      puertos: ['', Validators.required],
      bateria: ['', Validators.required]
    });
  }

  // Método que se llama al enviar el formulario
  addVariacion() {
  if (this.variationForm.valid) {
    const nuevaVariacion = this.variationForm.value;
    this.variacionAgregada.emit(nuevaVariacion);
    this.variationForm.reset();
  }
}


}
