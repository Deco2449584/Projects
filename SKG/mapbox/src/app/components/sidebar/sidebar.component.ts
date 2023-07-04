import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() hoverButton = new EventEmitter<boolean>();
  mostrarDivs1: boolean = false;

  showLayer(layerName: string) {
    console.log(layerName);
  }
  hoverButtonEvent() {
    this.mostrarDivs1 = !this.mostrarDivs1;
    this.hoverButton.emit(this.mostrarDivs1);
    console.log('desde el hijo', this.mostrarDivs1);
  }
}
