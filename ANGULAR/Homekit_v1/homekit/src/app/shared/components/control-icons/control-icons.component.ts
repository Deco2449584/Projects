// src/app/shared/components/control-icons/control-icons.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-icons',
  templateUrl: './control-icons.component.html',
  styleUrls: ['./control-icons.component.scss'],
})
export class ControlIconsComponent {
  @Input() currentState!: string; // Por ejemplo: 'on' o 'off'
  @Output() action = new EventEmitter<string>();

  onAction(actionType: string): void {
    this.action.emit(actionType);
  }
}
