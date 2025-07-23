import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  addItemForm!: FormGroup;
  private fb = inject(FormBuilder);

  codigo = '';
  mensaje = '';
  valido = false;

  codigoLinea = '';
  mensajeLinea = '';
  validoLinea = false;

  Items = [
    { id: 1, item: 'Escritorio' },
    { id: 2, item: 'Laptop' },
    { id: 3, item: 'Cargador' }
  ];

  constructor() {
    this.addItemForm = this.fb.group({
      itemType: ['', Validators.required],
      importCode: ['', Validators.required],
      lineCode: ['', Validators.required],
      itemQuantity: [{ value: '', disabled: true }, Validators.required], // deshabilitado desde el inicio
      marca: ['', Validators.required],
      modelo: ['', Validators.required]
    });
  }

  verificarCodigo() {
    const codigo = this.addItemForm.get('importCode')?.value;
    const codigosValidos = ['ABC123', 'IMP001', 'XYZ789'];

    if (!codigo || codigo.trim() === '') {
      this.mensaje = '';
      return;
    }

    if (codigosValidos.includes(codigo.trim())) {
      this.mensaje = 'Código verificado';
      this.valido = true;
    } else {
      this.mensaje = 'Ingrese un código correcto';
      this.valido = false;
    }
  }

  verificarCodigoLinea() {
    const codigoLinea = this.addItemForm.get('lineCode')?.value;
    const codigosValidosLinea = ['LN456', 'LINEA22', 'LN999'];

    if (!codigoLinea || codigoLinea.trim() === '') {
      this.mensajeLinea = '';
      return;
    }

    if (codigosValidosLinea.includes(codigoLinea.trim())) {
      this.mensajeLinea = 'Línea verificada';
      this.validoLinea = true;
    } else {
      this.mensajeLinea = 'Ingrese un número de línea correcto';
      this.validoLinea = false;
    }
  }



  habilitarCantidad() {
    this.addItemForm.get('itemQuantity')?.enable();
  }

}
