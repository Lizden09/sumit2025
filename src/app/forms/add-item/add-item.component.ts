import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '../../shared/components/custom-table/custom-table.component';
import { AddVariationsComponent } from '../add-variations/add-variations.component';


@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CustomTableComponent, AddVariationsComponent],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  addItemForm!: FormGroup;
  private fb = inject(FormBuilder);
  activeTab = 'general';

  mensaje = '';
  valido = false;

  mensajeLinea = '';
  validoLinea = false;

  itemsAgregados: any[] = [];
  variacionesAgregadas: any[] = [];

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
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      serie: ['', Validators.required]
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

  agregarItem() {
    if (this.addItemForm.valid) {
      this.itemsAgregados.push(this.addItemForm.value);
      // No reseteamos para que mantenga los datos en inputs
    }
  }

  guardarVariacion(variacion: any) {
    this.variacionesAgregadas.push(variacion);
  }

  guardarTodo() {
    const datosGenerales = this.addItemForm.getRawValue();
    const payload = {
      itemBase: datosGenerales,
      variaciones: this.variacionesAgregadas
    };
    console.log('Datos para enviar al backend:', payload);
    // Aquí iría la llamada al backend
  }

  guardarItem() {
  if (this.addItemForm.valid && this.variacionesAgregadas.length > 0) {
    const item = {
      ...this.addItemForm.value,
      variaciones: [...this.variacionesAgregadas]
    };

    this.itemsAgregados.push(item);

    // Limpiamos formulario y variaciones
    this.addItemForm.reset();
    this.variacionesAgregadas = [];

    // Mensaje opcional
    console.log('Ítem guardado:', item);
  } else {
    alert('Debe completar los datos generales y agregar al menos una variación.');
  }
}


}
