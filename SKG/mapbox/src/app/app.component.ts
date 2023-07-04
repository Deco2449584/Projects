import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mostrarDivs1: boolean = false;
  capturarValor(valor: boolean) {
    this.mostrarDivs1 = valor;
    console.log('desde el padre: ', this.mostrarDivs1);
  }
}
